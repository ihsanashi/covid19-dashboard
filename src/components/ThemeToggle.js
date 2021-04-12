import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex items-center justify-center'>
      <label htmlFor='themeSwitch' className='flex items-center cursor-pointer'>
        <div className='mr-3'>
          <HiOutlineSun fontSize={24} />
        </div>

        <div className='relative'>
          <input type='checkbox' id='themeSwitch' className='sr-only' />

          <div className='block bg-gray-300 w-10 h-6 rounded-full'></div>

          <div className='dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition'></div>
        </div>

        <div className='ml-3'>
          <HiOutlineMoon fontSize={24} />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
