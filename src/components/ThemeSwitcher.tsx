import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Active theme:', theme); // Adicionado para teste

    const body = document.querySelector('body');

    if (theme === 'dark') {
      body?.classList.add('dark-theme');
      body?.classList.remove('light-theme');
    } else {
      body?.classList.add('light-theme');
      body?.classList.remove('dark-theme');
    }
  }, [theme]);

  return null;
};

export default ThemeSwitcher;
