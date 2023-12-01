import Menu from '../types/Menu';

export default function calculateTotalPrice(menus: Menu[]) {
  return menus.reduce((acc: number, menu:Menu) => acc + menu.price, 0);
}
