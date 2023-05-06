"use client";
// import {
//   useTable,
//   usePagination,
//   useGlobalFilter,
//   useAsyncDebounce,
//   useFilters,
//   useSortBy,
// } from "react-table";

import React from "react";

const Table = () => {
  const [formData, setFormData] = React.useState<any[]>([]);
  //   const columns = React.useMemo(
  //     () => [
  //       {
  //         Header: "ID",
  //         accessor: "id",
  //       },
  //       {
  //         Header: "Stock Name",
  //         accessor: "stockName",
  //       },
  //       {
  //         Header: "Price",
  //         accessor: "price",
  //       },
  //       {
  //         Header: "Modified At",
  //         accessor: "modified",
  //       },
  //       {
  //         Header: "Created At",
  //         accessor: "date",
  //       },
  //       {
  //         Header: "Messages",
  //         accessor: "message",
  //       },
  //       {
  //         Header: "LTP",
  //         accessor: "lastTradedPrice",
  //       },
  //       {
  //         Header: "52 week low",
  //         accessor: "fiftyTwoWeekLow",
  //       },
  //       {
  //         Header: "52 week high",
  //         accessor: "fiftyTwoWeekHigh",
  //       },
  //       {
  //         Header: "Total",
  //         accessor: "total",
  //       },
  //       {
  //         Header: "Type",
  //         accessor: "type",
  //       },
  //       {
  //         Header: "Quantity",
  //         accessor: "quantity",
  //       },

  //     ],

  //     []
  //   );
  //   const defaultColumn = React.useMemo(
  //     () => ({
  //       Filter: DefaultColumnFilter,
  //     }),
  //     []
  //   );

  //   const {
  //     getTableProps,
  //     getTableBodyProps,
  //     headerGroups,
  //     prepareRow,
  //     page,
  //     canPreviousPage,
  //     canNextPage,
  //     pageOptions,
  //     pageCount,
  //     gotoPage,
  //     nextPage,
  //     previousPage,
  //     visibleColumns,
  //     setGlobalFilter,
  //     setHiddenColumns,
  //     setPageSize,

  //     state: { pageIndex, pageSize },
  //   } = useTable(
  //     {
  //       columns,
  //       data,
  //       defaultColumn,
  //       initialState: {
  //         hiddenColumns: ["id", "message"],
  //       },
  //     },
  //     useFilters,
  //     useGlobalFilter,
  //     useSortBy,
  //     usePagination
  //   );
  return (
    <>
      {/* <GlobalFilter setGlobalFilter={setGlobalFilter} /> */}

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {formData.map((data) => (
                    <tr key={data?.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
//   return (
//     <div className="mt-2">
//       <label htmlFor="email" className="sr-only">
//         Search
//       </label>
//       <input
//         type="search"
//         value={filterValue || ""}
//         onChange={(e) => {
//           setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
//         }}
//         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//         placeholder="Search"
//       />
//     </div>
//   );
// }
// function GlobalFilter({ setGlobalFilter }) {
//   const [value, setValue] = React.useState("");
//   const onChange = useAsyncDebounce((value) => {
//     setGlobalFilter(value || undefined);
//   }, 200);

//   return (
//     <div>
//       <label htmlFor="email" className="sr-only">
//         Search
//       </label>
//       <input
//         type="search"
//         value={value || ""}
//         onChange={(e) => {
//           setValue(e.target.value);
//           onChange(e.target.value);
//         }}
//         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//         placeholder="Search"
//       />
//     </div>
//   );
// }
export default Table;
