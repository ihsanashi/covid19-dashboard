import { useFilters, useSortBy, useTable } from 'react-table';
import { useContext, useState } from 'react';
import { AppContext } from '../context/state';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy
  );

  const [state, setState] = useContext(AppContext);
  const { filterInput } = state;

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('country', value);
    setState((prevState) => ({
      ...prevState,
      filterInput: value,
    }));
  };

  return (
    <section className='py-8'>
      <div className='max-w-6xl mx-auto p-4'>
        <h4 className='mb-7 font-medium text-xl lg:text-2xl text-gray-800'>
          Covid-19 cases breakdown
        </h4>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-full lg:w-80'>
            <label className='block'>
              <span className='text-gray-700'>Search by country</span>
              <input
                type='text'
                placeholder='Eg. Malaysia'
                value={filterInput}
                onChange={handleFilterChange}
                className='mt-1 block w-full text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
              />
            </label>
          </div>
          <div className='w-full lg:w-60 mt-4 lg:mt-0'>
            <label className='block'>
              <span className='text-gray-700'>Time frame</span>
              <select
                onChange={(e) => {
                  const value = e.target.value || undefined;
                  setState(() => ({
                    filterInput: '',
                    timeFrame: value.toLowerCase(),
                  }));
                }}
                className='block w-full mt-1 text-gray-800 rounded-md border-gray-300 shadow-sm focus:border-independence-300 focus:ring focus:ring-independence-200 focus:ring-opacity-50'
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option>2 days ago</option>
              </select>
            </label>
          </div>
        </div>
        <div className='py-5'>
          <table
            className='overflow-x-auto bg-white border border-gray-200'
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={`text-base border border-r border-l border-gray-200 p-2 text-black column.isSorted
                          ? column.isSortedDesc
                            ? 'sort-desc'
                            : 'sort-asc'
                          : ''
                      `}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className='p-2 border border-b border-t border-gray-200 text-gray-800'
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Table;
