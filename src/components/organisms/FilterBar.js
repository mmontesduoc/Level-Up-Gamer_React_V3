import React from "react";
import FilterButton from "../molecules/FilterButton";

const FilterBar = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="container mb-5">
      <div className="text-center">
        {filters.map((filter) => (
          <FilterButton
            key={filter.value}
            label={filter.label}
            isActive={activeFilter === filter.value}
            onClick={() => onFilterChange(filter.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
