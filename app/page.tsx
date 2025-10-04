'use client';
import Aside from '@/components/Aside';
import Timeline from '@/components/Main';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const tabs = ['who we are', 'leadership', 'our volunteer team', 'milestones'];
  const [currentTab, setTab] = useState(tabs[0]);

  return (
    <div className='min-h-screen overflow-y'>
      <Image
        width={1440}
        height={540}
        src={'/hero-image.png'}
        alt={'People watching a presentation'}
      />
      <div className='mx-5 flex w-full items-center justify-start gap-[36px] md:gap-[56px]'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              console.log(tab);
              setTab(tab);
            }}
            className={`px-[15px] py-6 rounded-[8px] text-[16px] font-bold leading-[130%] text-[#0044B5] ${
              currentTab === tab ? 'text-[#00B191]' : ''
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <Timeline />
      <Aside />
    </div>
  );
}
