import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

const themeToggle = Object.freeze({
    dark: 'light',
    light: 'dark',
});

const getUserPrefTheme = () => {
    const theme = localStorage.getItem('theme');
    if (!theme) return null;
    if (theme === 'dark' || theme === 'light') return theme;
    return null;
};

const setUserPrefTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
};

const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
};

const getInitTheme = () => {
    return getUserPrefTheme() ?? getSystemTheme();
};

const useSwitchTheme = () => {
    const [theme, setTheme] = useState<Theme>(getInitTheme());

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [theme]);

    const switchTheme = () => {
        setUserPrefTheme(themeToggle[theme]);
        setTheme((prev) => themeToggle[prev]);
    };

    return { switchTheme };
};

export default useSwitchTheme;
