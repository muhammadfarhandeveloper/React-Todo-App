

function SearchBar() {
  return (
   <div className="input-group">
      <span className="input-group-text bg-white">
        <i className="bi bi-search"></i>
      </span>

      <input
        type="text"
        className="form-control"
        placeholder="Search tasks..."
      />
    </div>
  )
}

export default SearchBar
