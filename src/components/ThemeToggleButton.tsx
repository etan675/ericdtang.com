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

    // toggle order: dark -> light -> system
    const nextTheme = getThemeType(theme).next;

    const toggleTheme = () => {
        setTheme(nextTheme);
    }

    return (
        <button
            className={classNames(
                { 'rounded-md bg-black p-1 scale-[1.2]': nextTheme === THEME_DARK },
                className
            )}
            title={`switch to ${getThemeType(nextTheme).label}`}
            onClick={toggleTheme}
        >
            {nextTheme === THEME_DARK && (
                <DarkIcon className='w-full h-full fill-slate-50 hover:fill-[var(--secondary)]' />
            )}
            {nextTheme === THEME_LIGHT && (
                <LightIcon className='w-full h-full fill-slate-50 scale-[1.3] translate-y-[1px] hover:fill-[var(--light-sun)]' />
            )}
            {nextTheme === THEME_SYSTEM && (
                <ComputerIcon className='w-full h-full scale-[1.05] translate-y-[1px] fill-gray-500 hover:fill-[var(--secondary)]' />
            )}
        </button>
    )
};

type ThemeType = {
    type: string,
    next: string,
    label: string,
}

const getThemeType = (theme: string): ThemeType => {
    let themeType: ThemeType = {
        type: THEME_SYSTEM,
        next: THEME_DARK,
        label: 'system theme'
    };

    switch (theme) {
        case (THEME_DARK):
            themeType = {
                type: THEME_DARK,
                next: THEME_LIGHT,
                label: 'dark theme'
            };

            return themeType;

        case (THEME_LIGHT):
            themeType = {
                type: THEME_LIGHT,
                next: THEME_SYSTEM,
                label: 'light theme'
            };

            return themeType;

        default:
            return themeType;
    }
}

export default ThemeToggleButton;