import Image from 'next/image';

export default function Home() {
  const tabs = ['who we are', 'leadership', 'our volunteer team', 'milestones'];

  return (
    <div className='min-h-screen overflow-y'>
      <Image
        width={1440}
        height={540}
        src={'/hero-image.png'}
        alt={'People watching a presentation'}
      />
      div
    </div>
  );
}
