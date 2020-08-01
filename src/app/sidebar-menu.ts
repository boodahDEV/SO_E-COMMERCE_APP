import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title:'Inventario',
    selected:false,
    icon: 'file-text-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Proveedores',
    selected:false,
    icon: 'car-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Productos',
    selected:false,
    icon: 'shopping-cart-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Categorias',
    selected:false,
    icon: 'grid-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Mis compras',
    // link:'/chest',car-outline
    selected:false,
    icon: 'bookmark-outline',
    expanded: true,
    children:[
      
    ],
  }
];
