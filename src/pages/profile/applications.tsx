import Sidebar from "@/components/sidebar";
import { API_BACKEND_PHP } from "@/config/api";
import Layout from "@/pages/profile/layout";
import { AuthContext } from "@/providers/auth.provider";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Plus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
} from "@heroui/drawer";

interface IApplication {
  application_id: number;
  create_at: string;
  status: number;
  catalog: string;
  edu_type: string;
  is_work_exp: string;
  work_describe: string;
  is_deferment: string;
}

export default function ProfileApplicationsPage() {
  const navigation = useNavigate();
  const { user } = useContext(AuthContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [applications, setApplications] = useState<IApplication[]>([]);
  const [app, setApp] = useState<IApplication>();

  const getApplications = () => {
    if (user) {
      const userId = user.id;
      fetch(`${API_BACKEND_PHP}/get_applications.php?user_id=${userId}`)
        .then((e) => e.json())
        .then((e) => {
          setApplications(e);
        });
    }
  };

  useEffect(() => {
    getApplications();
  }, [user]);

  return (
    <Layout>
      <section className="max-w-[1080px] flex w-full px-3 min-h-[300px] max-h-full pb-8 justify-center">
        <Sidebar />
        <div className="flex flex-col gap-6 w-full h-fit px-3">
          <div className="max-w-[760px] w-full flex justify-between items-center">
            <p className="text-default-500 text-sm">Мои заявки</p>
            <Button
              onClick={() => navigation("/profile/create/application")}
              size="sm"
              color="primary"
              startContent={<Plus size={16} />}
            >
              Создать
            </Button>
          </div>
          <div className="overflow-x-auto max-w-[760px] w-full grid grid-cols-1 gap-2">
            <Table removeWrapper shadow="none" aria-label="Example empty table">
              <TableHeader>
                <TableColumn>ID</TableColumn>
                <TableColumn>ВРЕМЯ</TableColumn>
                <TableColumn>СТАТУС</TableColumn>
                <TableColumn>ДЕЙСТВИЯ</TableColumn>
              </TableHeader>
              <TableBody emptyContent={"Пусто"}>
                {applications.map((app) => {
                  return (
                    <TableRow key={app.application_id}>
                      <TableCell className="whitespace-nowrap">
                        {app.application_id}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {app.create_at}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        {app.status == 0 ? "На рассмотрении" : "Завершено"}
                      </TableCell>
                      <TableCell className="whitespace-nowrap">
                        <Button
                          onClick={() => {
                            onOpen();
                            setApp(app);
                          }}
                          color="primary"
                          size="sm"
                        >
                          Посмотреть
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <Drawer isOpen={isOpen} placement="right" onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1">
                  Заявка №{app?.application_id}
                </DrawerHeader>
                <DrawerBody>
                  <div>
                    <p className="text-default-500 text-xs">ФИО</p>
                    {user?.last_name} {user?.first_name} {user?.middle_name}
                  </div>
                  <div>
                    <p className="text-default-500 text-xs">Служба</p>
                    <p>{app?.catalog}</p>
                  </div>
                  <div>
                    <p className="text-default-500 text-xs">Образование</p>
                    <p>{app?.edu_type}</p>
                  </div>
                  <div>
                    <p className="text-default-500 text-xs">Опыт работы</p>
                    <p>
                      {app?.is_work_exp === "true" ? "Имеется" : "Не имеется"}
                    </p>
                  </div>
                  <div>
                    <p className="text-default-500 text-xs">О работе</p>
                    <p>{app?.work_describe}</p>
                  </div>
                  <div>
                    <p className="text-default-500 text-xs">
                      Наличие отсрочки от службы
                    </p>
                    <p> {app?.is_deferment === "true" ? "Да" : "Нет"}</p>
                  </div>
                </DrawerBody>
                <DrawerFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Закрыть
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </section>
    </Layout>
  );
}
