import { useState } from 'react';
import Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import SearchBar from './SearchBar';
import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';

type FilteredRestaurantTableProps = {
  restaurants: Restaurant[]
}

export default function FilteredRestaurantTable({
  restaurants,
}: FilteredRestaurantTableProps) {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        categories={categories}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}
