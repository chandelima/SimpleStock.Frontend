import { Navdata } from "../shared/interfaces/navdata.interface";

export const navbarData: Navdata[] = [
  {
    routeLink: 'dashboard',
    icon: 'ph ph-house',
    label: 'Dashboard',
  },
  {
    routeLink: 'orders',
    icon: 'ph ph-shopping-cart',
    label: 'Vendas',
    items: [
      {
        routeLink: 'orders/list',
        label: 'Listar Vendas'
      },
      {
        routeLink: 'orders/process',
        label: 'Processar Vendas'
      }
    ]
  },
  {
    routeLink: 'customers',
    icon: 'ph ph-identification-card',
    label: 'Clientes'
  },
  {
    routeLink: 'products',
    icon: 'ph ph-tag',
    label: 'Produtos'
  }
]
