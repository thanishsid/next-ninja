import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' width={128} height={77} alt='logo' />
      </div>
      <div className='links'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja Listing</Link>
      </div>
    </nav>
  );
};

export default NavBar;
