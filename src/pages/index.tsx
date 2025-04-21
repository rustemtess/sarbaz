import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import background from "../assets/images/background.jpg";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section
        style={{
          backgroundImage: `url('${background}')`,
        }}
        className="bg-center bg-cover bg-no-repeat relative h-screen flex flex-col items-center justify-center gap-4 md:py-10"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.95) 100%)",
          }}
        ></div>
        <div className="z-10 inline-block max-w-xl text-center justify-center mt-[-6em]">
          <span className={title()}>Первый шаг в&nbsp;</span>
          <span className={title({ color: "blue" })}>цифровую</span>
          <br />
          <span className={title()}>эру военной службы</span>
          <div className={subtitle({ class: "mt-4" })}>
            Всё как в игре, но по-настоящему. Sarbaz+
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
            })}
            href={siteConfig.links.docs}
          >
            Подробная информация
          </Link>
        </div>
      </section>
      <section className="bg-red-300 relative h-screen flex flex-col items-center justify-center gap-4 md:py-10">
        <div className="z-10 inline-block max-w-xl text-center justify-center">
          <span className={title()}>Первый шаг в&nbsp;</span>
          <span className={title({ color: "blue" })}>цифровую</span>
          <br />
          <span className={title()}>эру военной службы</span>
          <div className={subtitle({ class: "mt-4" })}>
            Всё как в игре, но по-настоящему. Sarbaz+
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "default",
            })}
            href={siteConfig.links.docs}
          >
            Подробная информация
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
