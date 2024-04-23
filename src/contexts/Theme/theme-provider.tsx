'use client';
import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
  switchTheme: () => void;
  theme: string;
}

const ThemeContext = createContext<ThemeContextProps>({
  switchTheme: () => { },
  theme: 'dark',
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setLoading] = useState(true)

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'light') {
      switchTheme();
    }
    setLoading(false)
  }, []);

  if (isLoading) return (
    <body>
      <p>Loading...</p>
    </body>)

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <body className={`${theme} w-screen`}>
        <main className='bg-white dark:bg-black'>
          {children}
        </main>
      </body>
    </ThemeContext.Provider>
  );

}

export {ThemeProvider, ThemeContext}
