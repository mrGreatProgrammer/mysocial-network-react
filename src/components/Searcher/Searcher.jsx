import { useState } from "react";
import "./Searcher.css";

function Searcher(props) {
  const [searchInp, setSearchInp] = useState("");

  const onChange = (e) => {
    setSearchInp(e.target.value);
    props.setSearcher(searchInp);
  };

  function onClearSearcher() {
    setSearchInp("");
  }

  function onSearch() {
    props.setSearcher(searchInp);
  }
  function shooseItem(e) {
    setSearchInp(e.target.textContent);
  }

  return (
    <div className="searcher">
      <input
        type="text"
        value={searchInp}
        onChange={onChange}
        className="searcher-input"
      />
      <div className="searcher-img">
        <i className="fas fa-search"></i>
      </div>

      {searchInp ? (
        <div className="searcher__cross-img">
          <i className="fas fa-times-circle" onClick={onClearSearcher}></i>
        </div>
      ) : (
        <></>
      )}

      <button className="searcher-btn" onClick={onSearch}>
        search
      </button>
      {searchInp ? (
        <div className="searcher__result">
          {props.searchResult.map((el) => (
            <p
              onClick={shooseItem}
              className="searcher__result_item"
              key={el.id}
            >
              {el.na}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Searcher;
