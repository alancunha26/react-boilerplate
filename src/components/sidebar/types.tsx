export type SideBarRoute = {
  pathname: string;
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export type SideBarProps = {
  routes: Array<SideBarRoute>;
};
