import React from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import './Table.css'

const styles = {
    table: "m-2 border border-slate-700 border-spacing-0 w-4/5",
    tdTh: "m-0 p-2 border-r border-slate-700 border-b last:border-r-0",
    paginationButton: "border border-black p-1"
} 


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
  } = useTable({
    columns,
    data,
  },
  useSortBy,
  usePagination)

  // Render the UI for your table
  return (
    <>
    <table className={styles.table} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className={styles.tdTh} {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? ' ⬇️': ' ⬆️') : ''}
                    </span>
                </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className={styles.tdTh} {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div className="flex justify-between">
      <button className={`${styles.paginationButton} mx-2`} onClick={previousPage}>Previous</button>
      <button className={styles.paginationButton} onClick={nextPage}>Next</button>
    </div>
    </>
  )
}

export default Table