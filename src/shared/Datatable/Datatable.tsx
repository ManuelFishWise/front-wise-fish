import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaEye, FaSearch } from "react-icons/fa";
import { Pagination, Input } from "../../shared";
import "./Datatable.css";

interface DataTableProps {
  data: { [key: string]: any }[];
  rowsPerPage: number;
  actions: string[];
  onActionClick: (action: string, rowData: { [key: string]: any }) => void;
  customHeaders: { [key: string]: string };
}

const DataTable: React.FC<DataTableProps> = ({
  data: initialData,
  rowsPerPage,
  actions,
  onActionClick,
  customHeaders = {},
}) => {
  const [data, _] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedColumn, setSortedColumn] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data.length / rowsPerPage)
  );
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const value = searchQuery.toLowerCase();
    const newData = initialData.filter((row) =>
      Object.values(row).some((cell) => {
        if (typeof cell === "string") {
          return cell.toLowerCase().includes(value);
        } else if (typeof cell === "number") {
          return cell.toString().toLowerCase().includes(value);
        }
        return false;
      })
    );
    setFilteredData(newData);
    setTotalPages(Math.ceil(newData.length / rowsPerPage));
    setCurrentPage(1);
  }, [searchQuery, initialData, rowsPerPage]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleSort = (column: string) => {
    const newSortOrder =
      sortedColumn === column ? (sortOrder === "asc" ? "desc" : "asc") : "asc";
    setSortedColumn(column);
    setSortOrder(newSortOrder);

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[column] < b[column]) return newSortOrder === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newSortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="datatable-container">
      <div className="search-container">
        <Input
          handleChange={handleSearch}
          value={searchQuery}
          placeholder="Search..."
          icon={FaSearch}
        />
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            {Object.keys(data[0]).map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                className="table-header"
              >
                {customHeaders[column] || column}
                {sortedColumn === column && (
                  <span>{sortOrder === "asc" ? " 🔼" : " 🔽"}</span>
                )}
              </th>
            ))}
            {actions.length > 0 && (
              <th className="table-header" style={{ width: "130px" }}>
                {customHeaders["actions"] || "Actions"}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(startIndex, endIndex).map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 !== 0 ? "table-row-even" : "table-row-odd"}>
              {Object.entries(row).map(([key, cell], cellIndex) => (
                <td key={cellIndex} className="table-cell">
                  {cell}
                </td>
              ))}
              {actions.length > 0 && (
                <td className="actions-buttons">
                  {actions.map((action, index) => (
                    <div
                      key={index}
                      className="action-button"
                      onClick={() => onActionClick(action, row)}
                    >
                      {action === "edit" && <FaEdit />}
                      {action === "delete" && <FaTrash />}
                      {action === "show" && <FaEye />}
                    </div>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
