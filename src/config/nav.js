import {
  BookIcon,
  CreditCardIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  SchoolIcon,
  UsersRoundIcon,
} from 'lucide-react';
import { ROUTER_PATH } from '@/config/route-path';

export const NAV_LINKS = [
  {
    title: 'Dashboard',
    href: ROUTER_PATH.ROOT,
    icon: LayoutDashboardIcon,
  },
  {
    title: 'Students',
    href: ROUTER_PATH.STUDENTS.ROOT,
    icon: UsersRoundIcon,
  },
  {
    title: 'Teachers',
    href: ROUTER_PATH.TEACHER.ROOT,
    icon: GraduationCapIcon,
  },
  {
    title: 'Classes',
    href: ROUTER_PATH.CLASSES.ROOT,
    icon: SchoolIcon,
  },
  {
    title: 'Contents',
    href: ROUTER_PATH.CONTENTS.ROOT,
    icon: BookIcon,
  },
  {
    title: 'Transactions',
    href: ROUTER_PATH.TRANSACTIONS.ROOT,
    icon: CreditCardIcon,
  },
];
