export interface ItemType {
  isMobile?: boolean;
  label: string;
  href: string;
}

export const navbarConfig = {
  items: [
    {
      isMobile: false,
      label: "Главная",
      href: "/",
    },
    {
      isMobile: true,
      label: "Профиль",
      href: "/profile",
    },
    {
      isMobile: false,
      label: "Статьи",
      href: "/#",
    },
    {
      isMobile: false,
      label: "FAQ",
      href: "/faq",
    },
  ],
  authItem: {
    label: "Войти",
    href: "/login",
  },
  profileItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Мои данные",
      href: "/profile",
    },
    {
      label: "Все заявки",
      href: "/profile/applications",
    },
    {
      label: "Настройки",
      href: "/profile/settings",
    },
    {
      label: "Выйти",
      href: "/",
    },
  ],
};
