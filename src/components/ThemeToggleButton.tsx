'use client'

import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants';
import ThemeContext from '@/context/ThemeContext';
import React, { useContext } from 'react';
import DarkIcon from './svg-components/DarkIcon';
import LightIcon from './svg-components/LightIcon';
import classNames from 'classnames';
import ComputerIcon from './svg-components/ComputerIcon';

type Props = Readonly<{
    className?: string,
}>;

const ThemeToggleButton = ({ className = '', }: Props) => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('theme context provider not found.');
    }

    const { theme, setTheme } = themeContext;

    const toggleTheme = () => {
        setTheme(getNextTheme(theme));
    }

    return (
        <button
            className={classNames(
                { 'rounded-md bg-black p-1 scale-[1.2]': getNextTheme(theme) === THEME_DARK },
                className
            )}
            title={`switch to ${getNextTheme(theme)} theme`}
            onClick={toggleTheme}
        >
            {getNextTheme(theme) === THEME_DARK && (
                <DarkIcon className='w-full h-full fill-slate-50 hover:fill-[var(--secondary-light)]' />
            )}
            {getNextTheme(theme) === THEME_LIGHT && (
                <LightIcon className='w-full h-full fill-slate-50 scale-[1.3] translate-y-[1px] hover:fill-[var(--light-sun)]' />
            )}
            {getNextTheme(theme) === THEME_SYSTEM && (
                <ComputerIcon className='w-full h-full scale-[1.05] translate-y-[1px] fill-gray-500 hover:fill-[var(--secondary)]' />
            )}
        </button>
    )
};

// order: dark -> light -> system
const getNextTheme = (theme: string) => {
    switch (theme) {
        case (THEME_DARK):
            return THEME_LIGHT;  
        case (THEME_LIGHT):
            return THEME_SYSTEM;  
        case (THEME_SYSTEM):
            return THEME_DARK;
        default:
            return THEME_SYSTEM;  
    }
}

export default ThemeToggleButton;