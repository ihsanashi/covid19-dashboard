import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <section className='py-8'>
      <div className='max-w-6xl mx-auto p-4'>
        <h4 className='mb-7 font-medium text-xl lg:text-2xl text-gray-800'>
          Covid-19 cases breakdown
        </h4>
        <div className='flex flex-col md:flex-row items-center justify-between sticky top-0'>
          <div className='w-full lg:w-80'>
            <label className='block'>
              <span className='text-gray-700'>Search by country</span>
              <input
                type='text'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
                placeholder='Eg. Malaysia'
              />
            </label>
          </div>
          <div className='w-full lg:w-96 mt-4 lg:mt-0'>
            <div className='flex'>
              <div className='w-full lg:w-52'>
                <label className='block'>
                  <span className='text-gray-700'>Time frame</span>
                  <select className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-independence-300 focus:ring focus:ring-independence-200 focus:ring-opacity-50'>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>2 days ago</option>
                  </select>
                </label>
              </div>
              <div className='w-full lg:w-52 ml-2'>
                <label className='block'>
                  <span className='text-gray-700'>Region</span>
                  <select className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-independence-300 focus:ring focus:ring-independence-200 focus:ring-opacity-50'>
                    <option>Global</option>
                    <option>Africa</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>Oceania</option>
                    <option>South America</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='my-5'>
          <table {...getTableProps()}>
            <thead className='sticky top-20'>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
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
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
