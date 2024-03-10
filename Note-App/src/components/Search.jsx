import { MdSearch } from "react-icons/md";

export default function Search({ searchText, setSearchText }) {
  function handleSearchNotes(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="Search Notes"
        value={searchText}
        onChange={handleSearchNotes}
      />
    </div>
  );
}
