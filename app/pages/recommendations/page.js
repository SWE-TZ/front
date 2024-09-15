"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import Card from '@/app/components/card'
import { useState } from 'react';
import Modal from '@/app/components/modal';


export default function Recommendations()
{
    

    return (
        <div className='bg-light'>
            <div className="container max-w-screen-xl mx-auto flex grid grid-col-3 gap-4 pt-[100px] bg-[#FBE4CC]">
                
                <div className=' justify-center flex'>
                    <Menu >
                        <MenuButton className="inline-flex gap-2 w-[150px] rounded-full hover:bg-dark py-1.5 px-3 text-sm/6 font-semibold text-dark border-2 hover:border-light hover:text-light border-dark ">
                            <span className='justify-self-center w-[150px]'>FILTER BY</span>
                        </MenuButton>

                        <MenuItems 
                            transition
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border-2 border-dark bg-light p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
                        >
                            <MenuItem>
                                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light">
                                    price
                                </button>
                            </MenuItem>

                            <MenuItem>
                                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light ">
                                    rating
                                </button>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>

                <div className='grid grid-col-3 gap-10'>
                    <div className='col-start-2 border-2 border-dark rounded-lg mb-[50px]'>
                        <div className='container mx-auto px-[10px] mb-[40px]'>
                            <div className='mb-[20px]'><span className='text-dark'>DATE</span></div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark '>
                                    <Link className='text-dark hover:text-light w-full h-full flex justify-center' href=''>Today</Link>
                                </div>
                                <div className='border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark '>
                                    <Link className='text-dark hover:text-light w-full h-full flex justify-center' href=''>Today</Link>
                                </div>
                                <div className='border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark '>
                                    <Link className='text-dark hover:text-light w-full h-full flex justify-center' href=''>Today</Link>
                                </div>
                                <div className='border-2 border-dark text-dark items-center rounded-full w-[200px] flex justify-center hover:bg-dark '>
                                    <Link className='text-dark hover:text-light w-full h-full flex justify-center' href=''>Today</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className='my-4 h-[2px] w-[400px] bg-dark mx-auto'></div>

                        <div className='container mx-auto px-[10px] mb-[40px]'>
                            <span className='block mb-[10px] text-dark '>TIME</span>
                            <label className='text-dark block'>
                                <input type='checkbox' />
                                <span>MORNING (8-12)</span>
                            </label>
                            <label className='text-dark block'>
                                <input type='checkbox' />
                                <span>MORNING (8-12)</span>
                            </label>
                            <label className='text-dark block'>
                                <input type='checkbox' />
                                <span>MORNING (8-12)</span>
                            </label>

                        </div>

                        <div className='my-4 h-[2px] w-[400px] bg-dark mx-auto'></div>

                        <div className='container mx-auto px-[10px] mb-[60px]'>
                            <span className='block mb-[10px] text-dark '>TIME</span>
                            <Menu >
                                <MenuButton className="inline-flex gap-2 w-[400px] rounded-full hover:bg-dark py-1.5 px-3 text-sm/6 ml-[30px] font-semibold text-dark border-2 hover:border-light hover:text-light border-dark ">
                                    <span className='justify-self-center w-[450px]'>FLEXIBLE</span>
                                </MenuButton>

                                <MenuItems 
                                    transition
                                    anchor="bottom end"
                                    className="w-52 origin-top-right rounded-xl border-2 border-dark bg-light p-1 text-sm/6 text-dark transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] data-[closed]:scale-95 data-[closed]:opacity-0"
                                >
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light">
                                            TODAY AT 9:PM
                                        </button>
                                    </MenuItem>

                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-dark data-[focus]:text-light ">
                                            TODAY AT 10:PM
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>

                        <div className='my-4 h-[2px] w-[400px] bg-dark mx-auto'></div>

                        <div className='container mx-auto px-[10px] mb-[60px]'>
                            <span className='block mb-[10px] text-dark '>PRICE</span>
                            <input type="range" min="10" max="150" className='w-[270px] h-[11px] bg-light rounded-lg appearance-none cursor-pointer accent-sliderTrack border-2 border-dark focus:outline-none ml-[40px]'></input>
                        </div>

                        <div className='my-4 h-[2px] w-[400px] bg-dark mx-auto'></div>
                    </div>

                    <div className='col-start-3'>
                        <Card ></Card>
                    </div>
                    
                    
                </div>
                

            </div>
        </div>
    )
}