import Layout from "@/pages/profile/layout";
import {
  ProfileDataEdit,
  ProfileEmailEdit,
  ProfileNumberEdit,
} from "./edit.components";
import Sidebar from "@/components/sidebar";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth.provider";
import { formatDate } from "@/utils/date";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <section className="max-w-[1080px] flex w-full pb-8 px-3 min-h-full justify-center">
        <Sidebar />
        <div className="flex flex-col gap-6 w-full h-fit px-3">
          <p className="text-default-500 text-sm">Моя информация</p>
          <div className="grid grid-cols-2 place-content-start gap-4">
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">Имя</p>
                <p className="text-md">{user?.first_name}</p>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">Фамилия</p>
                <p className="text-md">{user?.last_name}</p>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">Отчество</p>
                <p className="text-md">{user?.middle_name}</p>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">ИИН</p>
                <p className="text-md">{user?.iin}</p>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">Дата рождения</p>
                <p className="text-md">
                  {user?.date_of_birthday
                    ? formatDate(user.date_of_birthday)
                    : "NULL"}
                </p>
              </div>
            </div>
            <div className="w-full h-fit">
              <div className="flex flex-col items-start">
                <p className="text-small text-default-500">Адрес</p>
                <p className="text-md">{user?.address}</p>
              </div>
            </div>
          </div>
          <ProfileDataEdit />
          <p className="text-default-500 text-sm">Контактная информация</p>
          <div className="max-w-[760px] w-full grid grid-cols-1 gap-2">
            <ProfileEmailEdit />
            <ProfileNumberEdit />
          </div>
        </div>
      </section>
    </Layout>
  );
}
