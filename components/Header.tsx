import Logo from '../icons/Logo';
import Search from '../icons/Search';

const Header = () => {
  const links = [
    { name: 'about us', link: '' },
    { name: 'impact', link: '' },
    { name: 'get involved', link: '' },
    { name: 'stay informed', link: '' },
  ];
  return (
    <div className='text-[#0044B5]'>
      <div className='px-20 py-5'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='py-3 px-6'>
              <Logo />
            </div>
            <Search />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              {links.map((l) => (
                <div key={l.name} className='py-[15px] px-6 '>
                  <p className='font-bold text-base leading-[130%] '>
                    {l.name.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
            <div className='flex gap-4 items-center justify-center'>
              <div className='py-[15px] px-6 '>
                <p className='font-bold text-base leading-[130%] '>
                  {'take the pledge'.toUpperCase()}
                </p>
              </div>
              <button className='py-[15px] px-6 rounded-[8px] bg-[#00B191] text-white'>
                <p className='font-bold text-base leading-[130%] '>
                  {'donate'.toUpperCase()}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
