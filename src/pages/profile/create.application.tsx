import Layout from "@/pages/profile/layout";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { Steps } from "antd";
import { useContext, useState } from "react";
import Sidebar from "@/components/sidebar";
import { AuthContext } from "@/providers/auth.provider";
import { formatDate } from "@/utils/date";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Textarea } from "@heroui/input";
import { API_BACKEND_PHP } from "@/config/api";
import { useNavigate } from "react-router-dom";

export default function ProfileCreateApplicationPage() {
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [isWorkExperience, setIsWorkExperience] = useState<boolean>(false);
  const [isDeferment, setIsDeferment] = useState<boolean>(false);
  const [diplomaFiles, setDiplomaFiles] = useState<FileList | null>(null);
  const [defermentFiles, setDefermentFiles] = useState<FileList | null>(null);
  const [educationType, setEducationType] = useState<string>("");
  const [workDescribe, setWorkDescribe] = useState<string>("");
  const [catalog, setCatalog] = useState<string>("");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const submitMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await axios.post(
        `${API_BACKEND_PHP}/application_create.php`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return res.data;
    },
    onSuccess: () => {
      alert("Заявка отправлена");
      navigate("/profile/applications");
    },
    onError: () => {
      alert("Ошибка при отправке");
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();

    // Добавление файлов
    if (diplomaFiles) {
      Array.from(diplomaFiles).forEach((file) => {
        formData.append("files[]", file);
      });
    }

    if (defermentFiles) {
      Array.from(defermentFiles).forEach((file) => {
        formData.append("defement[]", file);
      });
    }

    if (user) {
      formData.append("user", String(user.id));
      formData.append("catalog", catalog);
      formData.append("education_type", educationType);
      formData.append("is_work_exp", isWorkExperience ? "true" : "false");
      formData.append("work_describe", workDescribe);
      formData.append("is_deferment", isDeferment ? "true" : "false");

      submitMutation.mutate(formData);
    }
  };

  return (
    <Layout>
      <section className="max-w-[1080px] flex w-full px-3 min-h-full pb-8 justify-center">
        <Sidebar />
        <div className="flex flex-col gap-3 w-full h-fit px-3 pt-3 overflow-y-auto">
          <Steps
            progressDot
            current={currentProgress}
            className="custom-steps mb-4"
            items={[
              {
                title:
                  currentProgress === 0
                    ? "В процессе"
                    : currentProgress > 0
                      ? "Выполнено"
                      : "Ожидается",
                description: "Служба",
              },
              {
                title:
                  currentProgress === 1
                    ? "В процессе"
                    : currentProgress > 1
                      ? "Выполнено"
                      : "Ожидается",
                description: "Дополнительные сведения",
              },
              {
                title:
                  currentProgress === 2
                    ? "В процессе"
                    : currentProgress > 2
                      ? "Выполнено"
                      : "Ожидается",
                description: "Завершение",
              },
            ]}
          />

          <h2>Подача заявки на службу через Sarbaz+</h2>
          <p className="text-default-500 text-sm">
            Выберите вид службы и заполните необходимые данные. Все заявки
            обрабатываются в безопасном режиме.
          </p>
          <Select
            label="Служба"
            placeholder="Выбор службы"
            scrollShadowProps={{
              isEnabled: false,
            }}
            onSelectionChange={(key) => {
              setCatalog(key.currentKey as string);
              setCurrentProgress(1);
            }}
          >
            <SelectItem key="Срочная служба">Срочная служба</SelectItem>
            <SelectItem key="Контрактная служба">Контрактная служба</SelectItem>
            <SelectItem key="Пограничная служба КНБ">
              Пограничная служба КНБ
            </SelectItem>
            <SelectItem key="Национальная гвардия РК">
              Национальная гвардия РК
            </SelectItem>
            <SelectItem key="Специальные подразделения">
              Специальные подразделения
            </SelectItem>
          </Select>

          <p className="text-default-500 text-sm">Общие сведения:</p>
          <div className="max-w-[760px] w-full grid sm:grid-cols-2 gap-2">
            <div>
              <p className="text-default-500 text-sm">ФИО</p>
              <h3>
                {user?.last_name} {user?.first_name} {user?.middle_name}
              </h3>
            </div>
            <div>
              <p className="text-default-500 text-sm">ИИН</p>
              <h3>{user?.iin}</h3>
            </div>
            <div>
              <p className="text-default-500 text-sm">Дата рождения</p>
              <h3>
                {user?.date_of_birthday
                  ? formatDate(user.date_of_birthday)
                  : "NULL"}
              </h3>
            </div>
            <div>
              <p className="text-default-500 text-sm">Адрес проживания</p>
              <h3>{user?.address}</h3>
            </div>
            <div>
              <p className="text-default-500 text-sm">Электронная почта</p>
              <h3>{user?.email}</h3>
            </div>
            <div>
              <p className="text-default-500 text-sm">Номер телефона</p>
              <h3>{user?.phone_number}</h3>
            </div>
          </div>

          <p className="text-default-500 text-sm">Дополнительные сведения:</p>
          <div className="grid md:grid-cols-1 gap-3 grid-rows-1">
            <Select
              label="Образование"
              placeholder="Выберите образование"
              scrollShadowProps={{
                isEnabled: false,
              }}
              onSelectionChange={(key) => {
                setEducationType(key.currentKey as string);
              }}
            >
              <SelectItem key="Среднее">Среднее</SelectItem>
              <SelectItem key="Среднее специальное">
                Среднее специальное
              </SelectItem>
              <SelectItem key="Высшее">Высшее</SelectItem>
            </Select>

            <label className="text-sm text-default-500">
              Прикрепления диплома или атестата (можно выбрать несколько)
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setDiplomaFiles(e.target.files)}
                className="mt-1 block"
              />
            </label>

            <Select
              label="Опыт работы"
              placeholder="Выберите опыт работы"
              scrollShadowProps={{
                isEnabled: false,
              }}
              onSelectionChange={(key) => {
                setIsWorkExperience(key.currentKey === "1");
              }}
            >
              <SelectItem key="0">Не имеется</SelectItem>
              <SelectItem key="1">Имеется</SelectItem>
            </Select>

            {isWorkExperience && (
              <Textarea
                required
                placeholder="Кратко укажите профессию/должность"
                onChange={(e) => setWorkDescribe(e.target.value)}
              />
            )}

            <Select
              label="Наличие отсрочки от службы"
              placeholder="Выберите"
              scrollShadowProps={{
                isEnabled: false,
              }}
              onSelectionChange={(key) => {
                setIsDeferment(key.currentKey === "1");
                setCurrentProgress(2);
              }}
            >
              <SelectItem key="0">Нет</SelectItem>
              <SelectItem key="1">Да</SelectItem>
            </Select>

            {isDeferment && (
              <label className="text-sm text-default-500">
                Прикрепления документа на отсрочку
                <input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => setDefermentFiles(e.target.files)}
                  className="mt-1 block"
                />
              </label>
            )}
          </div>

          <Button color="primary" className="mt-2" onClick={handleSubmit}>
            Подать заявку
          </Button>
        </div>
      </section>
    </Layout>
  );
}
