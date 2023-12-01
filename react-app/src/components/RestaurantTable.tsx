import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function RestaurantTable({
  restaurants,
}: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {
          restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))
        }
      </tbody>
    </table>
  );
}
