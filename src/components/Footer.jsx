import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from 'react-icons/fa';

const links = [
  { href: 'https://discord.com', icon: <FaDiscord /> },
  { href: 'https://twitter.com', icon: <FaTwitter /> },
  { href: 'https://youtube.com', icon: <FaYoutube /> },
  { href: 'https://medium.com', icon: <FaMedium /> },
];

export default function Footer() {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <div className='flex justify-center md:justify-start gap-4'>
          {links.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-white transition-colors duration-500 ease-in-out'
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href='#privacy-policy'
          className='text-center md:text-right text-sm hover:underline'
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
