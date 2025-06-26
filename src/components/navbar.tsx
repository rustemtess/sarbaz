import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { ItemType, navbarConfig } from "@/config/navbar.config";
import { ThemeSwitch } from "@/components/theme-switch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/providers/auth.provider";
import { User } from "@heroui/user";

interface NavbarProps {
  showLinks?: boolean;
}

export const Navbar = ({ showLinks = true }: NavbarProps) => {
  const { pathname } = useLocation();
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const items: ItemType[] = pathname.startsWith("/profile")
    ? navbarConfig.profileItems
    : navbarConfig.items;

  return (
    <HeroUINavbar
      isBlurred={true}
      isBordered={false}
      maxWidth="lg"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="font-bold text-inherit text-xl">sarbaz+</p>
          </Link>
        </NavbarBrand>
        {showLinks && (
          <div className="hidden md:flex w-full gap-6 justify-start ml-4">
            {navbarConfig.items.map((item) => {
              if (item.isMobile) return false;
              else
                return (
                  <NavbarItem key={item.href}>
                    <Link
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium text-md text-default-600",
                      )}
                      color="foreground"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </NavbarItem>
                );
            })}
          </div>
        )}
      </NavbarContent>

      <NavbarItem className="hidden md:flex items-center gap-3">
        <ThemeSwitch />
        {/* <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className="capitalize" variant="flat">
              RU
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem description="Русский язык" key="text">
              RU
            </DropdownItem>
            <DropdownItem description="Казахский язык" key="text">
              KZ
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        {!isAuthenticated ? (
          <Button
            as={Link}
            className="text-sm font-normal"
            href={navbarConfig.authItem.href}
            color="primary"
          >
            {navbarConfig.authItem.label}
          </Button>
        ) : !pathname.startsWith("/profile") ? (
          <Link color="foreground" href="/profile">
            <User description="Перейти в профиль" name={ user?.last_name + ' ' + user?.first_name[0] + '. ' + user?.middle_name[0] } />
          </Link>
        ) : null}
      </NavbarItem>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        {/* <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className="capitalize" variant="flat">
              RU
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem description="Русский язык" key="text">
              RU
            </DropdownItem>
            <DropdownItem description="Казахский язык" key="text">
              KZ
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col gap-2">
          {items.map((item, index) => {
            if (!isAuthenticated && item.href === "/profile") {
              return (
                <NavbarItem key={"/login"}>
                  <Link color="foreground" href={"/login"} size="lg">
                    Войти
                  </Link>
                </NavbarItem>
              );
            } else
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    onClick={() =>
                      index === navbarConfig.profileItems.length - 1
                        ? logout()
                        : null
                    }
                    color={
                      item.href === pathname
                        ? "primary"
                        : index === navbarConfig.profileItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href={item.href}
                    size="lg"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              );
          })}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
