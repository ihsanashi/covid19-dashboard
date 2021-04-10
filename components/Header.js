import SummaryGrid from './SummaryGrid';
import ThemeToggle from './ThemeToggle';

const Header = ({ data }) => {
  return (
    <section className='pt-12 pb-4 bg-forestGreen-50'>
      <div className='max-w-6xl mx-auto p-4'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>
            Covid-19 Latest
          </h2>
          <ThemeToggle />
        </div>
        <div className='border border-forestGreen-200 my-5'></div>
        <div className='my-5'>
          <h5 className='font-medium text-lg text-gray-700'>Overview</h5>
        </div>
        <SummaryGrid data={data} />
      </div>
    </section>
  );
};

export default Header;
