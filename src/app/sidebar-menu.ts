import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/',
    home: true,
  },
  {
    title:'Inventario',
    // link:'/chest',
    selected:false,
    icon: 'unlock-outline',
    expanded: true,
    children:[
      
    ]
  }
];
