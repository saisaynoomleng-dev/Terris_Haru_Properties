'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Button } from './ui/button';

const PROPERTY_NAV_LINKS = [
  { name: 'Floor Plans', url: '/property' },
  { name: 'Amenities', url: '/amenities' },
  { name: 'Gallery', url: '/gallery' },
  { name: 'Neighborhood', url: '/neighborhood' },
  { name: 'Services', url: '/services' },
];

const ABOUT_US_NAV_LINKS = [
  { name: 'About the Property', url: '/about-us' },
  { name: 'Blog', url: '/blog' },
  { name: 'Terms & Conditions', url: '/terms-and-conditions' },
  { name: 'Contact Us', url: '/contact-us' },
  { name: 'FAQ', url: '/faq' },
];

const IMAGE_NAV_LINKS = [
  {
    name: 'Maintainance Request',
    url: '/maintainance-request',
    imgURL: '/nav-home-1.jpg',
  },
  { name: 'Apply Now', url: '/apply-now', imgURL: '/nav-home-2.jpg' },
];

const Header = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!navOpen) return;

    const closeNav = () => setNavOpen(false);
    document.body.addEventListener('click', closeNav);

    return () => {
      document.body.removeEventListener('click', closeNav);
    };
  }, [navOpen]);

  const navToggle = () => {
    setNavOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="flex justify-around px-3 py-5 shadow-sm items-end">
      <Link href="/" className="block">
        <Image src="/logo.png" width={100} height={100} alt="" />
      </Link>

      {/* desktop nav */}
      <nav role="navigation" aria-label="Main Navigation">
        <ul className="flex gap-x-4 items-center">
          <li className="hidden md:block">
            <Link className="block text-fs-300 font-medium" href={`/`}>
              Home
            </Link>
          </li>
          <li className="relative cursor-pointer">
            <button onClick={navToggle} className="text-fs-300 font-medium">
              Pages
            </button>
            <div
              className={clsx(
                'grid fixed top-[3rem] bottom-0 md:h-72 bg-brand-white-50 shadow-sm left-0 right-0 px-12 py-12 md:grid-cols-[1fr_1fr_2fr] transition-opacity duration-100 z-50 ease-in-out gap-y-3',
                navOpen
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none',
              )}
            >
              <div className="col-span-full place-self-end">
                <button onClick={() => setNavOpen(false)}>x</button>
              </div>
              {/* property links */}
              <div className="space-y-5">
                <h3
                  aria-label="Property Navigation Menu"
                  className="font-semibold"
                >
                  Property
                </h3>
                <ul
                  aria-labelledby="Property Navigation Menu"
                  className="text-fs-200 flex flex-col gap-y-2"
                >
                  {PROPERTY_NAV_LINKS.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="block hover:text-brand-black/80 hover:text-fs-300 transition-all duration-200"
                        onClick={navToggle}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About us links */}
              <div className="space-y-4">
                <h3
                  aria-label="Property Navigation Menu"
                  className="font-semibold"
                >
                  About Us
                </h3>
                <ul
                  aria-labelledby="Property Navigation Menu"
                  className="text-fs-200 flex flex-col gap-y-2"
                >
                  {ABOUT_US_NAV_LINKS.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="block hover:text-brand-black/80 hover:text-fs-300 transition-all duration-200"
                        onClick={navToggle}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image links */}
              <div className="px-5">
                <ul
                  aria-labelledby="Property Navigation Menu"
                  className="text-fs-200 grid grid-cols-2 gap-x-3"
                >
                  {IMAGE_NAV_LINKS.map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className=" overflow-hidden flex flex-col gap-y-2 items-center justify-center group"
                        onClick={navToggle}
                      >
                        <Image
                          src={link.imgURL}
                          width={130}
                          height={150}
                          alt=""
                          className="max-w-[130px] mx-auto rounded-sm group-hover:scale-[1.03] duration-200 transition-transform ease-in-out"
                        />
                        <span className="group-hover:text-fs-300 transition-all duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div>
        <ul className="flex gap-x-4 items-center">
          <li>
            <Link href="/sign-up">
              <FaUser />
            </Link>
          </li>
          <li>
            <Link href="/apply-now">
              <Button>Apply Now</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
