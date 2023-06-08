import {
  ISideBarPosition,
  ISideBarElementProps,
} from "widgets/header/navigation/types";
import { WriteMessageIcon } from "shared/ui/icons/write-message-icon";
import { PersonIcon } from "shared/ui/icons/person-icon";
import { LockIcon } from "shared/ui/icons/lock-icon";
import { LocationIcon } from "shared/ui/icons/location-icon";
import { ExitIcon } from "shared/ui/icons/exit-icon";

export const positionConfigTop: ISideBarPosition = {
  ulflexDirection: "row",
  ulgap: 10,
  element: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 0,
    textAlign: "center",
  },
};

export const positionConfigMenu: ISideBarPosition = {
  ulflexDirection: "column",
  ulgap: 30,
  element: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    gap: 5,
    textAlign: "right",
  },
};
export const linksTop: ISideBarElementProps[] = [
  {
    title: "Личный кабинет",
    to: "/profile",
    icon: <PersonIcon color="blue" />,
  },
  {
    title: "Блог",
    to: "/blog",
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: "Политика конфеденциальности",
    to: "/policy",
    icon: <LockIcon color="blue" />,
  },
  {
    title: "Контакты",
    to: "/contacts",
    icon: <LocationIcon color="blue" />,
  },
];
export const linksMenuMobile: ISideBarElementProps[] = [
  {
    title: "Личный кабинет",
    to: "/profile",
    icon: <PersonIcon color="blue" />,
  },
  {
    title: "Блог",
    to: "/blog",
    icon: <WriteMessageIcon color="blue" />,
  },
  {
    title: "Политика конфеденциальности",
    to: "/policy",
    icon: <LockIcon color="blue" />,
  },
  {
    title: "Контакты",
    to: "/contacts",
    icon: <LocationIcon color="blue" />,
  },
  {
    title: "Выход",
    to: "/out",
    icon: <ExitIcon color="blue" />,
  },
];
export const linksMenu = [
  {
    title: "Выход",
    to: "/out",
    icon: <ExitIcon color="blue" />,
  },
];
