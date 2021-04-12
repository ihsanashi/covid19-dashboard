const SummaryCard = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col justify-start py-5 px-4 bg-white rounded-lg shadow-lg'>
      <h4 className='font-medium text-2xl text-gray-900'>
        {title.toLocaleString()}
      </h4>
      <p className='font-normal text-lg text-gray-500'>{subtitle}</p>
    </div>
  );
};

export default SummaryCard;
