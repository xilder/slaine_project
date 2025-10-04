'use client';
import Aside from '@/components/Aside';
import Timeline from '@/components/Main';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const tabs = ['who we are', 'leadership', 'our volunteer team', 'milestones'];
  const [currentTab, setTab] = useState(tabs[tabs.length - 1]);

  return (
    <div className='min-h-screen overflow-y bg-white'>
      <Image
        width={1440}
        height={540}
        src={'/hero-image.png'}
        alt={'People watching a presentation'}
      />
      <div className='mx-5 flex w-full items-center justify-center gap-[36px] lg:gap-[64px] mt-7'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setTab(tab);
            }}
            className={`px-[15px] py-6 rounded-[8px] text-[16px] font-bold leading-[130%]  ${
              currentTab === tab ? 'text-[#00B191]' : 'text-[#0044B5]'
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
