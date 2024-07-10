import React from "react";

type FilterDropdownProps = {
  view: "all" | "active" | "completed";
  setView: (view: "all" | "active" | "completed") => void;
};

const FilterDropdown: React.FC<FilterDropdownProps> = ({ view, setView }) => {
  return (
    <div className="mb-4">
      <select
        value={view}
        onChange={(e) =>
          setView(e.target.value as "all" | "active" | "completed")
        } //Updates the filter view when the user selects a different option.
        className="w-1/3 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
