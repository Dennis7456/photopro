import { useContext} from 'react';
import { cleanup, fireEvent, getAllByTestId, getByTestId, render, screen } from '@testing-library/react';
import App from './App';

import ThemeContext from './context/ThemeContext';
import NavigationBar from './components/NavigationBar/NavigationBar';

afterEach(cleanup);

const {theme, handleThemeSwitch} = useContext(ThemeContext);

it('Theme context is updated in any component on the application', () => {
  const { container, getByText } = render(

    <ThemeContext.Provider value={theme}>
      <NavigationBar />
    </ThemeContext.Provider>
    
    );

    const logoImage = document.querySelector(".logo") as HTMLImageElement;

    const themeToggle = document.querySelector("#theme-toggle") as HTMLButtonElement;

    expect(logoImage.src).toBe("LogoWhite");

    fireEvent.click(themeToggle);

    expect(logoImage.src).toBe("LogoBlack");
  })