export interface Navdata {
  routeLink: string;
  icon?: string;
  label: string
  expanded?: boolean;
  items?: Navdata[];
}
