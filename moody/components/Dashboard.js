import { Fredoka, Modak } from 'next/font/google';
import React from 'react'
import Calendar from './Calendar';

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400"]
});

const fredokaSemiBold = Fredoka({
    subsets: ["latin"],
    weight: ["600"]
});

const modak = Modak({
    subsets: ['latin'],
    weight: ['400']
});

export default function Dashboard() {

    const statuses = {
        number_of_days: 14,
        time_remaining: '13:14:46',
        date: (new Date()).toDateString()
    }

    const moods = {
        'Terrible': '😭',
        'Sad': '😔',
        'Idk': '😶',
        'Good': '🙂',
        'Awesome!': '🤩'
    }

    return (
        <div className='flex flex-col flex-1 gap-6 md:gap-8 lg:gap-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg shadow-sm'>
                {Object.keys(statuses).map((status, statusIndex) => {
                    return (
                        <div className='flex flex-col p-4' key={statusIndex}>
                            <p className={'uppercase text-slate-600 lg:text-md sm:text-sm ' + fredoka.className}>
                                {status.replaceAll('_', ' ')}
                            </p>
                            <p className={'lg:text-2xl sm:text-lg ' + fredokaSemiBold.className}>{statuses[status]}</p>
                        </div>
                    )
                })}
            </div>
            <h4 className={'text-4xl md:text-5xl lg:text-6xl text-center ' + modak.className}>
                How do you <span className='custom-text-gradient'>feel</span> today?
            </h4>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {Object.keys(moods).map((mood, moodIndex) => {
                    return (
                        <button key={moodIndex} className={fredokaSemiBold.className + 
                            ' flex flex-col items-center text-indigo-500 text-base md:text-lg xl:text-xl rounded-lg p-4 bg-indigo-50 custom-purple-shadow duration-200 gap-2 md:col-span-1 hover:bg-indigo-200 ' 
                        + (moodIndex === 4 ? 'col-span-2' : '')}>
                            <p className='text-2xl md:text-3xl lg:text-4xl'>{moods[mood]}</p>
                            <p className='text-base md:text-lg lg:text-xl'>{mood}</p>
                        </button>
                    )
                })}
            </div>
            <Calendar />
        </div>
    )
}
