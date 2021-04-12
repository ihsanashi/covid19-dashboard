import SummaryCard from './SummaryCard';

const SummaryGrid = ({ data }) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      <SummaryCard title={data.cases} subtitle='Total cases' />
      <SummaryCard title={data.active} subtitle='Active cases' />
      <SummaryCard title={data.recovered} subtitle='Recovered' />
      <SummaryCard title={data.deaths} subtitle='Deaths' />
    </div>
  );
};

export default SummaryGrid;
