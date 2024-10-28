import { type LucideIcon } from "lucide-react";

export interface IHeaderRoutes {
  routeName: string;
  href: string;
}

export interface ITestomonials {
  icon: string;
  userName: string;
  companyAndPosition: string;
  testomonialText: string;
}

export interface IFooterSocial {
  socialIcon: LucideIcon;
  socialLink: string;
}
