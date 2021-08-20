import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/DefaultLayout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )
}
export default MyApp
