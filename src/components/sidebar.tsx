import { AuthContext } from "@/providers/auth.provider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { LogOut, Mailbox, MoveLeft, Settings, User } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigate();

  return (
    <div className="hidden md:flex sticky top-20 max-w-[200px] w-full h-fit flex-col items-start gap-1.5 p-2">
      <Button
        startContent={<MoveLeft size={20} />}
        className="bg-transparent text-md p-2 cursor-pointer text-primary-400"
      >
        <Link href="/">Назад</Link>
      </Button>
      <Button
        onClick={() => navigation("/profile")}
        startContent={<User size={20} />}
        className="bg-transparent p-2 text-md cursor-pointer text-default-600"
      >
        Мои данные
      </Button>
      <Button
        onClick={() => navigation("/profile/applications")}
        startContent={<Mailbox size={20} />}
        className="bg-transparent text-md p-2 cursor-pointer text-default-600"
      >
        Все заявки
      </Button>
      <Button
        onClick={() => navigation("/profile/settings")}
        startContent={<Settings size={20} />}
        className="bg-transparent p-2 text-md cursor-pointer text-default-600"
      >
        Настройки
      </Button>
      <Button
        onClick={() => logout()}
        startContent={<LogOut size={20} />}
        className="bg-transparent p-2 text-md cursor-pointer text-[#f31260]"
      >
        Выйти
      </Button>
    </div>
  );
};

export default Sidebar;
