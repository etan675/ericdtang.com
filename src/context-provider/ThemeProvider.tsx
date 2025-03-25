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
            applyLight();

        } else if (theme === THEME_DARK) {
            applyDark();

        } else if (theme === THEME_SYSTEM) {
            if (systemPrefersLight()) {
                applyLight();
            } else {
                applyDark();
            }
        } else {
            throw new Error('unknown theme');
        }

        localStorage.setItem(THEME_STORAGE_KEY, theme);        
    }, [theme]);

    const systemPrefersLight = () => {
        // Handles css media query for system preference.
        return window.matchMedia('(prefers-color-scheme: light)').matches;
    }

    const applyLight = () => {
        // Toggle custom tailwind variant classes on root to apply the theme.
        // @see globals.css 
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
    }

    const applyDark = () => {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }

    return mounted ? (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    ) : null
};

export default ThemeProvider;