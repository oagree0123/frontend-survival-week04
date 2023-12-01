import Categories from './Categories';
import TextField from './TextField';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
  categories: string[]
}

export default function SearchBar({
  filterText,
  setFilterText,
  setFilterCategory,
  categories,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
