import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useStore } from '../src/redux';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
