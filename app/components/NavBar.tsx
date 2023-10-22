"use client"
import { useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Volkhov } from 'next/font/google'
import useDarkModeStore from '../stores/darkModeStore';

const volkhov  = Volkhov ({ weight: '700', subsets: ['latin'], style: 'italic' })

function NavBar() {

    const { isDarkMode, enableDarkMode, disableDarkMode } = useDarkModeStore();

    const handleChangeTheme = () => {
        if (!isDarkMode) {
            enableDarkMode()
            document.querySelector('html')?.classList.add('dark')
        } else {
            disableDarkMode()
            document.querySelector('html')?.classList.remove('dark')
        }
    }

    useEffect(() => {
        if (
          window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            enableDarkMode()
            document.querySelector('html')?.classList.add('dark')
        } else {
            disableDarkMode()
            document.querySelector('html')?.classList.remove('dark')
        }
      }, []);

    

    return (
        <nav className='w-screen relative flex justify-between items-center px-6 py-3 bg-emerald-200 dark:bg-blue-950'>
            <h2 className={`${volkhov.className} bg-emerald-200 dark:bg-blue-950 dark:text-white text-xl`}>Manuel Escalera</h2>
            <DarkModeSwitch
                checked={isDarkMode}
                onChange={handleChangeTheme}
                size={40}
                style={{marginRight: '1em', marginLeft : '1em'}}
            />
        </nav>
    )
}

export default NavBar