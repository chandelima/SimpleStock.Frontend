import { Navdata } from "src/app/shared/interfaces/navdata.interface";

export const navbarData: Navdata[] = [
  {
    routeLink: 'dashboard',
    icon: 'ph ph-house',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'ph ph-house',
    label: 'Products'
  },
  {
    routeLink: 'statistics',
    icon: 'ph ph-house',
    label: 'Statistics'
  },
  {
    routeLink: 'coupens',
    icon: 'ph ph-house',
    label: 'Coupens',
    items: [
      {
        routeLink: 'coupens/list',
        label: 'List Coupens'
      },
      {
        routeLink: 'coupens/create',
        label: 'Create Coupens'
      }
    ]
  },
  {
    routeLink: 'pages',
    icon: 'ph ph-house',
    label: 'Pages'
  },
  {
    routeLink: 'media',
    icon: 'ph ph-house',
    label: 'Media'
  },
  {
    routeLink: 'settings',
    icon: 'ph ph-house',
    label: 'Settings'
  },

]
