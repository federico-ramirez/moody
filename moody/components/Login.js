import { Fredoka, Modak } from 'next/font/google';
import React from 'react';
import Button from './Button';

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400"]
});

const modak = Modak({
    subsets: ['latin'],
    weight: ['400']
});

export default function Login() {
    return (
        <div className={`flex flex-col flex-1 justify-center items-center gap-4 ${fredoka.className}`}>
            <h3 className={`text-4xl md:text-6xl sm:text-5xl ${modak.className}`}>Log In / Register</h3>
            <p className='text-lg text-slate-600'>You're one step away to join <span className={`${modak.className} custom-text-gradient`}>Moody</span>!</p>
            <input type='email' placeholder='Email' className='w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border-2 border-solid
             border-indigo-400 rounded-full text-slate-600 outline-none duration-200 hover:border-indigo-600' required />
            <input type='password' placeholder='Password' className='w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border-2 border-solid 
            border-indigo-400 rounded-full text-slate-600 outline-none duration-200 hover:border-indigo-600' required />
            <div className='w-full max-w-[400px] mx-auto'>
                <Button text='Submit' full />
            </div>
            <p className='text-center'>Don't have an account? <span className='text-indigo-600'>Sign up</span></p>
        </div>
    )
}