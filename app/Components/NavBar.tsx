"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '../Constants';
import { Button } from './Button';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className='z-50' onClick={() => setIsDropdownOpen(false)}>
        <Image src="/logo.webp" alt="hiba-logo" width={0} height={0} style={{ width: '75px', height: 'auto' }}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Button href="https://discord.gg/zcmfjBK7xf" className='z-50'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-discord"
          viewBox="0 0 16 16"
        >
           <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
        </svg>
        <span className="ml-3">Discord</span>
      </Button>

      {/* Burger Icon for Mobile */}
      <div className="lg:hidden cursor-pointer z-50">
        <Image
          src="/web.webp"
          alt="dropdown"
          width={32}
          height={32}
          onClick={toggleDropdown}
        />
      </div>

      {/* Full Page Dropdown Menu */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-white z-40">
          <div className="flex items-center justify-center h-full">
            <ul className="text-2xl text-gray-800">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="mb-4">
                  <Link href={link.href}
                    className="hover:font-bold"
                    onClick={() => setIsDropdownOpen(false)}>
                      {link.label}

                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
