import { useLocalStorage } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';
import Menu from '../types/Menu';

type RestaurantRowProps = {
  restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const [selectedMenus, setMenus] = useLocalStorage<Menu[]>('cart', []);

  const handleClick = (value: Menu) => {
    setMenus([...selectedMenus, value]);
  };

  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {
            restaurant.menu.map((menu) => (
              <li
                key={menu.id}
                style={{
                  display: 'flex',
                  paddingBlock: '0.5rem',
                }}
              >
                <span
                  style={{
                    margin: '0 auto',
                  }}
                >
                  {menu.name}
                  (
                  {menu.price.toLocaleString()}
                  원)
                </span>
                <button
                  type="button"
                  onClick={() => handleClick(menu)}
                >
                  선택
                </button>
              </li>
            ))
          }
        </ul>
      </td>
    </tr>
  );
}
