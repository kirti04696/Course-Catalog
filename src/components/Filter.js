import { useState } from "react";
import "./Cards.css";
function Filter({ filterData, filterCategory }) {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className="filter">
      {filterData.map((data) => {
        return (
          <button
            onClick={() => {
              filterCategory(data.title);
              setActiveFilter(data.title);
            }}
            className={
              activeFilter === data.title
                ? "filter-btn filter-btn-active"
                : "filter-btn"
            }
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
