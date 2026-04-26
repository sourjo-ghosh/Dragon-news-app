
import { Button } from '@heroui/react';
import person from '@/assets/user.png'
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex  justify-between items-center my-3'>
            <ul className='flex justify-center items-center gap-5 flex-2'>
                <li className='text-[16px] text-[#706F6F]'>
                    <NavLink href={"/"}>Home</NavLink>
                </li>
                <li className='text-[16px] text-[#706F6F]'>
                    <NavLink href={"/about-us"}>About</NavLink>
                </li>
                <li className='text-[18px] text-[#706F6F]'>
                    <NavLink href={"/career"}>career</NavLink>
                </li>
            </ul>
            <div className='flex justify-center items-center gap-3'>
                <Image src={person} alt="person" ></Image>
                <Link href="/login">
                <Button className="rounded-none bg-[#403F3F] text-white">
                    Login 
                </Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;