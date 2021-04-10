const TableIntro = () => {
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
      </div>
    </section>
  );
};

export default TableIntro;
