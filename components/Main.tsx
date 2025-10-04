'use client';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
interface TimelineItem {
  heading: string;
  colour: string;
  content: string;
  image?: string;
  button?: string;
  height?: number;
  width?: number;
  position: 'start' | 'end';
}

interface TimelineBlock {
  year: { value: number; position: 'start' | 'end' };
  items: TimelineItem[];
}

const events: TimelineBlock[] = [
  {
    year: { value: 2019, position: 'end' },
    items: [
      {
        heading: 'Optimal Mental Health Debut',
        content:
          'Introducing a platform dedicated to promoting mental well-being and awareness in Ibadan, Lagos and Abuja.',
        colour: '#00B191',
        image: '1.png',
        width: 600,
        height: 448,
        position: 'end',
      },
      {
        heading: 'Asido Campus Network Launched',
        content:
          'Pioneering student-led mental health advocacy at the University of Ibadan.',
        colour: '#F9AE0B',
        image: '2.png',
        width: 600,
        height: 448,
        position: 'start',
      },
      {
        heading: 'Community Engagement Series Begins',
        content:
          'First interactive monthly series fostering dialogue and education on mental health.',
        colour: '#FD372C',
        position: 'end',
      },
    ],
  },
  {
    year: { value: 2020, position: 'start' },
    items: [
      {
        heading: 'Unashamed Campaign Launched',
        content:
          'Challenging stigma and empowering open conversations about mental health.',
        colour: '#4ABDCD',
        image: '3.png',
        width: 488,
        height: 392,
        button: '/',
        position: 'start',
      },
      {
        heading: 'LIMI Africa Storytelling Series Kicks Off',
        content:
          'Sharing real stories to amplify voices and lived experiences in mental health.',
        colour: '#00B191',
        image: '4.png',
        width: 600,
        height: 300,
        button: '/',
        position: 'end',
      },
      {
        heading: 'Emergency Helpline Inaugurated',
        content:
          'Launching a lifesaving support line for psychosocial emergencies.',
        colour: '#F9AE0B',
        button: '/',
        position: 'start',
      },
    ],
  },
  {
    year: { value: 2021, position: 'end' },
    items: [
      {
        heading: 'Project Hope Commences',
        content:
          'Providing targeted support and hope to those facing mental health challenges.',
        colour: '#FD372C',
        button: '/',
        position: 'end',
      },
      {
        heading: 'First Suicide Prevention Walk',
        content:
          'Uniting the community to raise awareness and advocate for prevention.',
        colour: '#4ABDCD',
        width: 600,
        height: 400,
        image: '5.png',
        position: 'start',
      },
      {
        heading: 'Inaugural JAME Competitions',
        content:
          'Empowering youth through mental health-themed creativity and advocacy.',
        colour: '#00B191',
        image: '6.png',
        width: 600,
        height: 400,
        position: 'end',
      },
      {
        heading: 'Donate-a-Book Drive Launched',
        content:
          'Promoting knowledge-sharing and mental health education through books.',
        colour: '#F9AE0B',
        image: '7.png',
        width: 600,
        height: 400,
        position: 'start',
      },
    ],
  },
  {
    year: { value: 2022, position: 'end' },
    items: [
      {
        heading: 'Mindset Radio Show Goes Live',
        content:
          'Weekly conversations on mental health reaching a broader audience.',
        colour: '#FD372C',
        image: '8.png',
        width: 600,
        height: 450,
        button: '/',
        position: 'end',
      },
    ],
  },
  {
    year: { value: 2023, position: 'start' },
    items: [
      {
        heading: 'Mental Health Bill Passeds',
        content: `Successfully advocating for the historic passing of Nigeria’s Mental Health Bill.`,
        colour: '#4ABDCD',
        position: 'start',
      },
      {
        heading: 'Lagos State Recognitionk',
        content:
          'Honored for outstanding contributions to community mental health and advocacy.',
        colour: '#00B191',
        image: '9.png',
        width: 600,
        height: 600,
        button: '/',
        position: 'end',
      },
    ],
  },
  {
    year: { value: 2024, position: 'start' },
    items: [
      {
        heading: 'ACAMH LMICs Innovation Awards',
        content:
          'Recognized internationally for innovation in mental health research and practice.',
        colour: '#F9AE0B',
        image: '10.png',
        width: 600,
        height: 340,
        button: '/',
        position: 'start',
      },
      {
        heading: 'Most Outstanding Student Association',
        content:
          'Asido Campus Network honored for exceptional impact on Nigerian campuses.',
        colour: '#FD372C',
        image: '11.png',
        width: 600,
        height: 750,
        button: '/',
        position: 'end',
      },
      {
        heading: 'National Suicide Prevention Conference',
        content:
          'Bringing stakeholders together in Abuja to advance prevention efforts nationwide.',
        colour: '#4ABDCD',
        image: '12.png',
        width: 600,
        height: 600,
        button: '/',
        position: 'start',
      },
      {
        heading: 'Advocacy Visit to Attorney General',
        content:
          'Campaigning for the decriminalization of attempted suicide in Nigeria.',
        colour: '#00B191',
        image: '13.png',
        width: 600,
        height: 300,
        position: 'end',
      },
      {
        heading: 'Public Hearing Mobilization',
        content:
          'Engaging the public and submitting a formal memorandum to influence policy.',
        colour: '#F9AE0B',
        button: '/',
        position: 'start',
      },
      {
        heading: 'Partnership With Lifeline International.',
        content:
          'Forging global collaboration to strengthen crisis intervention and support.',
        colour: '#FD372C',
        image: '14.png',
        width: 600,
        height: 400,
        button: '/',
        position: 'end',
      },
    ],
  },
];

export default function Timeline() {
  // const lineRef = useRef<HTMLDivElement>(null);
  // const [lineFill, setLineFill] = useState<number>(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!lineRef.current) return;
  //     const rect = lineRef.current.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;
  //     const visible = Math.min(
  //       windowHeight,
  //       Math.max(0, windowHeight - rect.top)
  //     );
  //     setLineFill((visible / rect.height) * 100);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className='relative min-h-screen  flex flex-col justify-center pt-50 pb-30 px-20 text-center w-full gap-25'>
      {/* Center line */}
      <p className='font-bold text-[36px] leading-[130%]'>
        Since inception in 2019, Asido Foundation has led bold advocacy for
        mental health reforms. These range from public awareness campaigns to
        the passing of the 2021 Mental Health Act.
      </p>
      <div className='flex flex-col w-full gap-25 mt-5 relative'>
        <div className='absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E7E9F5] -translate-x-1/2' />
        {events.map((event) => (
          <TimeBlock key={event.year.value} timeBlock={event} />
        ))}
      </div>
    </div>
  );
}

const TimeBlock = ({ timeBlock }: { timeBlock: TimelineBlock }) => {
  return (
    <div className='w-full flex flex-col relative'>
      <motion.div
        className='absolute left-1/2 top-0 -translate-x-1/2 z-10 w-3 h-3 rounded-full my-4'
        initial={{ scale: 0, backgroundColor: '#E7E9F5' }}
        whileInView={{
          scale: 1,
          backgroundColor: '#0044B5',
          boxShadow: '0 0 0 20px white',
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.8 }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className={`w-1/2 ${
          timeBlock.year.position === 'start'
            ? 'self-start pr-8'
            : 'self-end pl-8'
        } font-extrabold leading-[150%] text-[39px] text-left text-[#0044B5]`}
      >
        {timeBlock.year.value}
      </motion.h2>
      <div className='flex flex-col w-full gap-25'>
        {timeBlock.items.map((item) => (
          <div
            key={item.heading}
            className={`flex flex-col gap-8 self-end ${
              item.position === 'start' ? 'self-start pr-8' : 'self-end pl-8'
            } lg:w-1/2 text-left`}
          >
            <motion.h4
              style={{ color: item.colour }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
              className={`font-semibold text-2xl leading-[140%] `}
            >
              {item.heading}
            </motion.h4>
            <motion.p
              className='font-bold text-[25px] leading-[130%] text-[#202124]'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {item.content}
            </motion.p>
            {item.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Image
                  width={item.width}
                  height={item.height}
                  src={`/${item.image}`}
                  alt=''
                  className='rounded-lg'
                />
              </motion.div>
            )}
            {item.button && (
              <motion.button
                className='flex gap-2 py-4 pr-6 rounded-[8px] font-bold text-base leading-[130%] items-center text-[#0044B5]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <p>{'learn more'.toUpperCase()}</p>
                <ChevronRight />
              </motion.button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
