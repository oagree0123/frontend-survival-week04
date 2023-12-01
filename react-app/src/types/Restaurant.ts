import Food from './Menu';

interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export default Restaurant;
