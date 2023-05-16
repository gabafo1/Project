import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/outline';
import { ArrowSmRightIcon } from '@heroicons/react/outline';
import { links } from './Mylinks';
const NavLinks = () => {
    const [heading, setHeading] = useState("")
    return (
    <>
    {links.map((link)=>(
            <div>
                <div className='font-semibold md:cursor-pointer group'>
                    <h1 className='px-3.5 py-7 flex justify-between items-center md:pr-0' onClick={()=>heading !== link.name ? setHeading(link.name) : setHeading("")}>
                        {link.name}
                        <span className="text-xl md:hidden inline">{heading === link.name ? (<ChevronUpIcon className="h-6 w-6" />) : (<ChevronDownIcon className="h-6 w-6" />)}</span>
                        <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180">
                            <ChevronDownIcon className="h-6 w-6" />
                        </span>
                    </h1>

                        {link.submenu && (
                        <div>
                            <div className='absolute top-0 mt-[80px] border hidden group-hover:md:block'>
                    
                            <div className='bg-white grid grid-cols-2 gap-1'>
                                {
                                    link.sublinks.map((mysublinks) => (
                                    <div className='p-6'>
                                        <h1 className='text-3xl font-medium font-sans text-blue-950 pb-2'>{mysublinks.Head}</h1>
                                        {mysublinks.sublink.map(slink => (
                                        <li className='text-xl my-2 text-gray-500 flex'>
                                            <Link to={slink.link} className='font-normal text-xl'>{slink.name}</Link>
                                        </li>
                                        ))}
                                        <div className='flex py-4 hover:text-blue-600'>
                                        <p>Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 w-5 h-5">
                                            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                        </svg>
                                        </div>
                                    </div>
                                    ))
                                }
                                <div className='grid grid-cols-1 place-items-center py-4 items-center col-span-2'>
                                    <p className='text-blue-600 flex px-7 py-5 rounded-full text-2xl'>See all<ArrowSmRightIcon className='w-9 transition duration-300 ease hover:transform hover:translate-x-3 transition-duration: 0.5s' /></p>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
                {/*mobile */}
                <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`} style={{ overflowX: 'auto' }}>
                    {link.sublinks.map((slinks) => (
                        <div className="grid grid-cols-1 pl-5" key={slinks.Head}>
                        <div>
                            <div>
                            <h1 className='text-2xl font-medium font-sans text-blue-950'>{slinks.Head}</h1>
                            <div className="flex">
                                <ul className="flex flex-wrap"> {/* Added flex-wrap class */}
                                {slinks.sublink.map((slink) => (
                                    <li className='text-lg text-gray-500 flex' key={slink.name}>
                                    <Link to={slink.link}>{slink.name}</Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex pb-16 py-4 hover:text-blue-600'>
                            <div>
                                <p>Learn more</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-2 w-5 h-5">
                                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 014 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                </svg>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    <div className='grid grid-cols-1 place-items-center py-4 items-center col-span-2'>
                        <p className='text-blue-600 flex px-7 py-5 rounded-full text-2xl'>See all<ArrowSmRightIcon className='w-9 transition duration-300 ease hover:transform hover:translate-x-3 transition-duration: 0.5s' /></p>
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}

export default NavLinks