import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AppWrapper } from '../src/context/state';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
