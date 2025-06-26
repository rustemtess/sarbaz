import { Button } from "@heroui/button";
import { Lock, Mail, Pencil, Phone, SquareUser } from "lucide-react";
import {
  ModalFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { Input } from "@heroui/input";

export function ProfileDataEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="max-w-[760px] w-full h-fit flex justify-between items-center bg-default-50 border border-default-100 p-2 px-4 rounded-lg">
        <div className="bg-primary text-white p-2 rounded-lg">
          <SquareUser size={24} />
        </div>
        <div className="flex flex-col items-start mr-auto pl-3">
          <p className="text-md">Мои данные</p>
          <p className="text-small text-default-500">
            Нажмите чтобы редактировать информацию
          </p>
        </div>
        <Button isIconOnly onClick={onOpen}>
          <Pencil size={16} />
        </Button>
      </div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Редактирование
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  labelPlacement="outside"
                  label="Номер телефона"
                  placeholder="Новый номер телефона"
                  size="md"
                  type="email"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Сохранить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function ProfileEmailEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full h-fit flex justify-between items-center bg-default-50 border border-default-100 p-2 px-4 rounded-lg">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Mail size={24} />
        </div>
        <div className="flex flex-col items-start mr-auto pl-3">
          <p className="text-md">Электронная почта</p>
          <p className="text-small text-default-500">
            ru<b>·······</b>@icloud.com
          </p>
        </div>
        <Button isIconOnly onClick={onOpen}>
          <Pencil size={16} />
        </Button>
      </div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Редактирование
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  labelPlacement="outside"
                  label="Электронная почта"
                  placeholder="Введите новую почту"
                  size="md"
                  type="email"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Сохранить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function ProfileNumberEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full h-fit flex justify-between items-center bg-default-50 border border-default-100 p-2 px-4 rounded-lg">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Phone size={24} />
        </div>
        <div className="flex flex-col items-start mr-auto pl-3">
          <p className="text-md">Номер телефона</p>
          <p className="text-small text-default-500">
            +7 7 <b>·· ·· ··</b> 78
          </p>
        </div>
        <Button isIconOnly onClick={onOpen}>
          <Pencil size={16} />
        </Button>
      </div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Редактирование
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  labelPlacement="outside"
                  label="Номер телефона"
                  placeholder="Новый номер телефона"
                  size="md"
                  type="email"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Сохранить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function ProfilePasswordEdit() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full h-fit flex justify-between items-center bg-default-50 border border-default-100 p-2 px-4 rounded-lg">
        <div className="bg-primary text-white p-2 rounded-lg">
          <Lock size={24} />
        </div>
        <div className="flex flex-col items-start mr-auto pl-3">
          <p className="text-md">Пароль</p>
          <p className="text-small text-default-500">
            Не передавайте пароль третьим лицам.
          </p>
        </div>
        <Button isIconOnly onClick={onOpen}>
          <Pencil size={16} />
        </Button>
      </div>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Редактирование
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Старый пароль"
                  placeholder=""
                  size="sm"
                  type="password"
                />
                <Input
                  label="Новый пароль"
                  placeholder=""
                  size="sm"
                  type="password"
                />
                <Input
                  label="Повторите новый пароль"
                  placeholder=""
                  size="sm"
                  type="password"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Сохранить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
