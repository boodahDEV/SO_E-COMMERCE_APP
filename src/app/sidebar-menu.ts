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
    // link:'/chest',
    selected:false,
    icon: 'file-text-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Productos',
    // link:'/chest',
    selected:false,
    icon: 'shopping-cart-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Categorias producto',
    // link:'/chest',
    selected:false,
    icon: 'grid-outline',
    expanded: true,
    children:[
      
    ]
  },
  {
    title:'Mis compras',
    // link:'/chest',
    selected:false,
    icon: 'bookmark-outline',
    expanded: true,
    children:[
      
    ]
  }
];
