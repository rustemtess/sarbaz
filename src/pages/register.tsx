import { title } from "@/components/primitives";
import Layout from "./layout";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Alert } from "@heroui/alert";
import { useState } from "react";
import { Form } from "@heroui/form";
import { InputOtp } from "@heroui/input-otp";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_BACKEND_DJANGO } from "@/config/api";

export default function RegisterPage() {
  const [isOTPForm, setIsOTPForm] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    last_name: "",
    first_name: "",
    middle_name: "",
    iin: "",
    phone_number: "",
    email: "",
    password: "",
    re_password: "",
    address: "",
    date_of_birthday: "",
    verification_code: "null",
  });

  const registerMutation = useMutation({
    mutationFn: async (formData: any) => {
      const res = await fetch(`${API_BACKEND_DJANGO}/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.json();
        const firstError = Object.values(error)[0];
        setErrMessage(
          Array.isArray(firstError)
            ? firstError[0]
            : String(firstError) || "Ошибка регистрации",
        );

        if (
          error.non_field_errors[0] === "Код подтверждения не найден." &&
          (await fetch(`${API_BACKEND_DJANGO}/sned_code/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: form.email,
            }),
          }))
        ) {
          setIsOTPForm(true);
        }
      }
      if (res.status === 201) {
        navigate("/login");
      }
      return res.json();
    },
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  function OTPForm() {
    return (
      <Form
        className="w-full flex flex-col items-center md:max-w-[800px] gap-4 px-4 max-w-[520px]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <InputOtp
          size="lg"
          isRequired
          length={6}
          name="otp"
          placeholder="Enter code"
          onChange={(e) => {
            const value = (e.target as HTMLInputElement).value;
            handleChange("verification_code", value);
          }}
        />
        <Button
          onClick={() => registerMutation.mutate(form)}
          size="lg"
          type="submit"
          variant="bordered"
        >
          Проверить
        </Button>
        <div className="text-small text-default-500">
          Введите код отправленный вам на почту
        </div>
      </Form>
    );
  }

  return (
    <Layout>
      {errMessage.length > 0 && (
        <Alert
          className="w-fit fixed right-5 z-20"
          color="danger"
          description={errMessage}
          title="Ошибка при регистрации"
          variant="solid"
        />
      )}
      <section className="flex flex-col w-full items-center justify-center py-8 min-h-full">
        <h1
          className={`${title()} z-10 mb-8 text-default-800`}
          style={{
            fontSize: 28,
          }}
        >
          {isOTPForm ? "Код подтверждение" : "Регистрация"}
        </h1>
        {isOTPForm ? (
          OTPForm()
        ) : (
          <div className="w-full grid md:max-w-[800px] md:grid-cols-2 gap-4 px-4 max-w-[520px] grid-cols-1">
            <Input
              isRequired
              labelPlacement="outside"
              label="Фамилия"
              placeholder="Введите фамилию"
              size="lg"
              type="text"
              onChange={(e) => handleChange("last_name", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Имя"
              placeholder="Введите имя"
              size="lg"
              type="text"
              onChange={(e) => handleChange("first_name", e.target.value)}
            />
            <Input
              labelPlacement="outside"
              label="Отчество"
              placeholder="Введите отчество"
              size="lg"
              type="text"
              onChange={(e) => handleChange("middle_name", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="ИИН"
              placeholder="Введите ИИН"
              size="lg"
              type="text"
              onChange={(e) => handleChange("iin", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Номер телефона"
              placeholder="(---) -- -- -- "
              size="lg"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">+7</span>
                </div>
              }
              type="number"
              onChange={(e) => handleChange("phone_number", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Электронная почта"
              placeholder="Введите почту"
              size="lg"
              type="email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Адреc"
              placeholder="Введите адрес"
              size="lg"
              type="text"
              onChange={(e) => handleChange("address", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Дата рождения"
              placeholder="Выберите дату рождения"
              size="lg"
              type="date"
              onChange={(e) => handleChange("date_of_birthday", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Новый пароль"
              placeholder="Введите новый пароль"
              size="lg"
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <Input
              isRequired
              labelPlacement="outside"
              label="Повторить пароль"
              placeholder="Повторите пароль"
              size="lg"
              type="password"
              onChange={(e) => handleChange("re_password", e.target.value)}
            />
            <Button
              color="primary"
              size="lg"
              onClick={() => registerMutation.mutate(form)}
              isDisabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? "Загрузка..." : "Создать аккаунт"}
            </Button>
            <Link
              href="/login"
              color="foreground"
              className="flex justify-center font-normal text-lg mt-1"
            >
              У меня есть аккаунт
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}
