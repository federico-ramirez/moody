import { Modak } from 'next/font/google';
import React from 'react'
import Button from './Button';

const modak = Modak({
    subsets: ["latin"],
    weight: ["400"]
});

export default function Hero() {
    return (
        <div className='py-8 md:py-12 sm:py-16 flex flex-col gap-4 sm:gap-8'>
            <h1 className={`${modak.className} text-center text-5xl md:text-7xlsm:text-6xl`}>
                <span className='textGradient'>Moody</span> helps you track your <span className='textGradient'>daily</span> mood!
            </h1>
            <p className='text-center text-lg md:text-2xl sm:text-xl w-full mx-auto max-w-[600px]'>Create your mood record and keep track of your mood
                <span className='font-semibold textGradient'> every day of the year.</span>
            </p>
            <div className='grid grid-cols-2 gap-4 w-fit mx-auto'>
                <Button text='Sign up'/>
                <Button text='Login' dark/>
            </div>
        </div>
    )
}
