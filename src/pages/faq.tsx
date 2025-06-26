import { title } from "@/components/primitives";
import Layout from "./layout";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function FaqPage() {
  return (
    <Layout>
      <section className="flex flex-col w-full items-center min-h-full py-8 px-4">
        <h1
          className={`${title()} mb-10 mt-8 text-center`}
          style={{
            fontSize: 28,
          }}
        >
          Часто задаваемые вопросы
        </h1>
        <div className="w-full max-w-[1270px] grid md:grid-cols-2 grid-cols-1 justify-between gap-8">
          <div className="w-full">
            <h4 className="text-default-500 text-md my-3">Общая информация</h4>
            <Accordion>
              <AccordionItem key="1" title="Что такое Sarbaz +?">
                Sarbaz+ — это информационный сайт с цифровой экосистемой и
                возможностью онлайн-регистрации, разработанный для ознакомления
                с военными частями.
              </AccordionItem>
              <AccordionItem key="2" title="В чем задача сайта?">
                Задача портала Sarbaz+ заключается в том, чтобы предоставить
                возможность подачи заявок на прохождение воинской службы онлайн,
                без необходимости покидать место жительства.
              </AccordionItem>
              <AccordionItem key="3" title="В чем преимущества Sarbaz+?">
                Преимущества портала — это онлайн-регистрация с возможностью
                подачи заявки для прохождения воинской службы, а также
                информирование о последних событиях и новостях в сфере военной
                деятельности Казахстана.
              </AccordionItem>
            </Accordion>
            <h4 className="text-default-500 text-md mt-6 my-3">Аккаунт</h4>
            <Accordion>
              <AccordionItem key="1" title="Как зарегистрироваться?">
                Для регистрации на портале Sarbaz+ необходимо перейти на
                страницу регистрации, нажав на иконку в правом верхнем углу, а
                затем заполнить необходимые данные.
              </AccordionItem>
              <AccordionItem
                key="2"
                title="Какие данные нужны для регистрации?"
              >
                Для регистрации необходимо указать следующие данные: ФИО, ИИН,
                почту, номер телефона и пароль для последующего входа в аккаунт.
              </AccordionItem>
              <AccordionItem key="3" title="Как узнать код подтверждения?">
                После указания данных для регистрации нажмите на кнопку
                (Получить код). Затем проверьте свою электронную почту, включая
                папку (Спам), если код не пришел.
              </AccordionItem>
              <AccordionItem
                key="4"
                title="Как восстановить доступ к аккаунту?"
              >
                Для восстановления аккаунта необходимо указать данные, которые
                вы использовали при регистрации. Если вы забыли пароль, укажите
                ИИН или почту, и на ваш адрес будет отправлена ссылка для
                восстановления пароля.
              </AccordionItem>
              <AccordionItem key="5" title="Как авторизоваться?">
                Для авторизации введите свой ИИН и пароль на странице входа в
                аккаунт.
              </AccordionItem>
            </Accordion>
            <h4 className="text-default-500 text-md mt-6 my-3">Заявки</h4>
            <Accordion>
              <AccordionItem key="1" title="Как подать заявку?">
                Чтобы подать заявку, сначала зарегистрируйтесь на портале, затем
                перейдите в раздел (Мои заявки) и создайте новую заявку.
              </AccordionItem>
              <AccordionItem key="2" title="Для чего подается заявка?">
                Заявки подаются для рассмотрения администратором и ускорения
                процесса заключения контрактов на воинскую службу.
              </AccordionItem>
              <AccordionItem key="3" title="Как посмотреть исходящие заявки?">
                Для просмотра и отслеживания заявок зайдите в личный кабинет, в
                раздел (Мои заявки), где будут отображены все поданные заявки и
                их статус.
              </AccordionItem>
              <AccordionItem
                key="4"
                title="Какой каталог служб есть при подаче заявки?"
              >
                При подаче заявки вам будет представлен каталог доступных служб
                для выбора в вашем личном кабинете.
              </AccordionItem>
              <AccordionItem
                key="5"
                title="Что делать, если были введены неверные данные при заявке?"
              >
                Если данные в заявке введены неверно, обратитесь в службу
                поддержки, так как заявки не могут быть изменены после подачи.
              </AccordionItem>
              <AccordionItem key="6" title="Как отменить поданную заявку?">
                Поданные заявки нельзя отменить или удалить. Однако, вы можете
                обратиться в службу поддержки с подтверждением того, что заявка
                была подана ошибочно.
              </AccordionItem>
            </Accordion>
          </div>
          <form className="w-full flex flex-col gap-2">
            <h2 className="text-lg">У вас остались вопросы?</h2>
            <p className="text-default-500">
              Если вы не нашли ответ в разделе FAQ, задайте свой вопрос, и мы
              ответим вам в ближайшее время.
            </p>
            <Textarea size="lg" placeholder="Ваш вопрос" />
            <Button color="primary">Отправить</Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
