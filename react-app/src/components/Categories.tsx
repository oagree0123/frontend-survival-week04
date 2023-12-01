type CategoriesProps = {
  categories: string[];
  setFilterCategory: (value: string) => void
}

export default function Categories({
  categories,
  setFilterCategory,
}: CategoriesProps) {
  return (
    <ul
      style={{
        display: 'flex',
        padding: '0px',
        listStyle: 'none',
      }}
    >
      {
        ['전체', ...categories].map((category) => (
          <li key={category} style={{ marginRight: '1rem' }}>
            <button
              type="button"
              onClick={() => {
                setFilterCategory(category);
              }}
            >
              {category}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
