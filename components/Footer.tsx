import Facebook from '@/icons/Facebook';
import Instagram from '@/icons/Instagram';
import LinkedIn from '@/icons/LinkedIn';
import Location from '@/icons/Location';
import Logo2 from '@/icons/Logo2';
import Mail from '@/icons/Mail';
import Telephone from '@/icons/Telephone';
import X from '@/icons/X';

const Footer = () => {
  const footerLinks = [
    {
      heading: 'Quick Links',
      links: [
        {
          name: 'Programs',
          link: '',
        },
        {
          name: 'Blog',
          link: '',
        },
        {
          name: 'Thursday Tribune',
          link: '',
        },
        {
          name: 'IMCE Sessions',
          link: '',
        },
      ],
    },
    {
      heading: 'Support',
      links: [
        {
          name: 'Donate',
          link: '',
        },
        {
          name: 'Volunteer',
          link: '',
        },
        {
          name: 'Book Campaign',
          link: '',
        },
        {
          name: 'Unashamed Pledge',
          link: '',
        },
      ],
    },
  ];
  const logos = [
    <X key='X' />,
    <Facebook key='Facebook' />,
    <LinkedIn key='LinkedIn' />,
    <Instagram key='Instagram' />,
  ];

  const contactUs = [
    {
      icon: <Location />,
      text: ['No 4, Awosika Street, Old Bodija, Ibadan.'],
    },
    {
      icon: <Mail />,
      text: ['asidofoundation@gmail.com'],
    },
    {
      icon: <Telephone />,
      text: ['+234 818 077 7458', '+234 902 808 04165'],
    },
  ];
  return (
    <div className='bg-[#0044B5] relative h-[501px] w-screen text-[#EBEDF1]'>
      <div className='absolute top-[81px] left-[80px] '>
        <Logo2 />
      </div>
      <p className='absolute top-[149px] left-20 text-base leading-[22px] font-medium'>
        Making mental health support accessible
        <br />
        through advocacy and action
      </p>
      <div className='flex gap-4 items-center absolute top-[283px] left-20'>
        {logos}
      </div>
      <div className='absolute flex gap-30 top-[87px] left-[511px]'>
        {footerLinks.map((footerLink) => (
          <div key={footerLink.heading} className='flex flex-col gap-5'>
            <h3 className='font-bold text-xl leading-[100%] text-nowrap'>
              {footerLink.heading}
            </h3>
            <div className='flex flex-col gap-3'>
              {footerLink.links.map((link) => (
                <p
                  key={link.name}
                  className='text-base font-medium leading-[22px]'
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className='flex flex-col gap-5'>
          <h3 className='font-bold text-xl leading-[100%]'>Contact Us</h3>
          <div className='flex flex-col gap-3'>
            {contactUs.map((contact, index) => (
              <div key={index} className='flex gap-4'>
                {contact.icon}
                <div className='flex gap-2 flex-col'>
                  {contact.text.map((text, index) => (
                    <p
                      key={index}
                      className='text-base font-medium leading-[22px]'
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className='absolute border border-[#ABABAB] top-[401px] left-20 right-20' />
      <p className='absolute font-medium text-base top-[421px] leading-[22px] left-20'>
        © 2025 Asido Foundation. All Rights Reserved.
      </p>
    </div>
  );
};
export default Footer;
