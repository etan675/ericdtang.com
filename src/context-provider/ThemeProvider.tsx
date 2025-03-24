'use client'

import { THEME_DARK, THEME_LIGHT, THEME_STORAGE_KEY, THEME_SYSTEM } from '@/constants';
import ThemeContext from '@/context/ThemeContext';
import React, { useEffect, useState } from 'react';

type Props = Readonly<{
    children: React.ReactNode,
}>;

const ThemeProvider = ({ children }: Props) => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<string>(THEME_DARK);

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        setTheme(savedTheme || THEME_SYSTEM);
    }, []);

    useEffect(() => {
        if (theme === THEME_LIGHT) {
            // give 'light' class to html to enable tailwind selector
            document.documentElement.classList.add('light');

        } else if (theme === THEME_DARK) {
            document.documentElement.classList.remove('light');

        } else if (theme === THEME_SYSTEM) {
            if (systemPrefersLight()) {
                document.documentElement.classList.add('light');
            } else {
                document.documentElement.classList.remove('light');
            }
        } else {
            throw new Error('unknown theme');
        }

        localStorage.setItem(THEME_STORAGE_KEY, theme);        
    }, [theme]);

    const systemPrefersLight = () => {
        return window.matchMedia('(prefers-color-scheme: light)').matches;
    }

    return mounted ? (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    ) : null
};

export default ThemeProvider;