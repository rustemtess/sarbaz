import { title } from "@/components/primitives";
import Layout from "./layout";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { useMutation } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@heroui/alert";
import { AuthContext } from "@/providers/auth.provider";
import { API_BACKEND_DJANGO } from "@/config/api";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState<string>("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    iin: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const loginMutation = useMutation({
    mutationFn: async (formData: any) => {
      const res = await fetch(`${API_BACKEND_DJANGO}/login/`, {
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
        throw new Error(error?.detail || "Ошибка регистрации");
      }
      if (res.status === 200) {
        const result = await res.json();

        login(result.access, result.refresh, result.user);
        navigate("/profile");
      }
      return res.json();
    },
  });

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
      <section className="flex flex-col w-full justify-center items-center min-h-full py-8">
        <h1
          className={`${title()} z-10 mb-5`}
          style={{
            fontSize: 28,
          }}
        >
          Вход в аккаунт
        </h1>
        <div
          style={{
            maxWidth: 460,
          }}
          className="w-full flex flex-col gap-2 px-4"
        >
          <Input
            labelPlacement="outside"
            label="ИИН"
            placeholder="Введите ИИН"
            size="lg"
            type="text"
            onChange={(e) => handleChange("iin", e.target.value)}
          />
          <Input
            labelPlacement="outside"
            label="Пароль"
            placeholder="Введите пароль"
            size="lg"
            type="password"
            onChange={(e) => handleChange("password", e.target.value)}
          />
          {/* <Link
            href="#"
            color="foreground"
            className="text-md mt-1 text-default-500"
          >
            Забыли пароль?
          </Link> */}
          <Button
            color="primary"
            size="lg"
            onClick={() => loginMutation.mutate(form)}
            isDisabled={loginMutation.isPending}
          >
            {loginMutation.isPending ? "Загрузка..." : "Авторизоваться"}
          </Button>
          <Link
            href="/register"
            color="foreground"
            className="flex justify-center font-normal text-md mt-1"
          >
            У меня нет аккаунта
          </Link>
        </div>
      </section>
    </Layout>
  );
}
