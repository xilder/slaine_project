import Blue from '@/public/Blue.jpg';
import Green from '@/public/Green.jpg';
import Purple from '@/public/Purple.jpg';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Aside = () => {
  const images = [
    {
      text: 'Naija Spirit: Unique Powers of Resilience or Learned Helplessness?',
      src: Blue,
    },
    {
      text: 'Ignorance Around Mental Health Challenges is Expensive',
      src: Green,
    },
    {
      text: 'Stretched to Breaking Point: Emotional Burden of Caring for the Elderly with Dementia',
      src: Purple,
    },
  ];
  return (
    <div className='pt-15 pb-30 px-10 flex flex-col gap-15'>
      <h4 className='text-2xl font-semibold leading-[140%] text-[#00B191]'>
        Stay Informed
      </h4>
      <p className='text-[31px] font-bold leading-[130%] text-[#202124]'>
        Through advocacy, education, and support, we’re building a stigma-free
        future for mental health in Nigeria.
      </p>

      <div className='flex gap-5 justify-center mx-10'>
        {images.map((image) => (
          <div
            key={image.text}
            className='flex flex-col justify-between flex-1'
          >
            <Image src={image.src} alt={''} width={380} height={380} />
            <p className='font-bold leading-[120%] text-[25px] text-[#202124]'>
              {image.text}
            </p>
            <button className='flex gap-2 py-4 pr-6 rounded-[8px] font-bold text-base leading-[130%] items-center text-[#0044B5]'>
              <p>{'read more'.toUpperCase()}</p>
              <ChevronRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aside;
