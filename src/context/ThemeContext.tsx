import { createContext, useContext, useState } from 'react';
import type{ReactNode} from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
   <div className={theme} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  </ThemeContext.Provider>
);
}
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
//   debugger;
  if (!ctx) throw new Error('ThemeContext missing');
  return ctx;
};