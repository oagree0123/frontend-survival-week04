type TextFieldProps = {
  filterText: string;
  setFilterText: (value: string) => void;
}

export default function TextField({
  filterText,
  setFilterText,
}: TextFieldProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor="search"
        style={{
          paddingRight: '1rem',
        }}
      >
        검색
      </label>
      <input
        id="search"
        type="text"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </div>
  );
}
