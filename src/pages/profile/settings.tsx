import Sidebar from "@/components/sidebar";
import Layout from "@/pages/profile/layout";
import { ProfilePasswordEdit } from "./edit.components";

export default function ProfileSettingsPage() {
  return (
    <Layout>
      <section className="max-w-[1080px] flex w-full px-3 pb-8 min-h-[300px] max-h-full justify-center">
        <Sidebar />
        <div className="flex flex-col gap-6 w-full h-fit px-3">
          <p className="text-default-500 text-sm">Безопасность</p>
          <div className="max-w-[760px] w-full grid grid-cols-1 gap-2">
            <ProfilePasswordEdit />
          </div>
        </div>
      </section>
    </Layout>
  );
}
