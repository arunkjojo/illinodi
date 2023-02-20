import React, { FC, lazy } from 'react'

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/mediaQuery.css';
// const UiVirtualScrollComponent = lazy(() => import('./components/UiVirtualScroll'));

// Pages
// import { Home } from './pages/home';

// const HomeUi = lazy(() => import('./pages/home'));

// API
// import callApi from './utils/apis/callApi';

// Components
// import Header from './components/Header';
// import Footer from './components/Footer';
// import UiVirtualScroll from './components/UiVirtualScroll';

const HeaderComponent = lazy(() => import('./components/Header'));
const FooterComponent = lazy(() => import('./components/Footer'));


const Application = lazy(() => import('./utils/routes'));


const App:FC = () => {
  // const limit = 10
  // // the number of items that we want to keep in memory - 300
  // const buffer = limit * 3
  // // the number of items that we want to cache when new chunk of data is loaded
  // const cache = buffer - limit

  // const datalist = 'item';
  // const [items, setItems] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setIsLoading(true)
  //   callApi(0, buffer, datalist).then((res: any) => {
  //     setItems(res)
  //     setIsLoading(false)
  //   })
  // }, [buffer]);

  // const prevCallback = (newOffset: number) => {
  //   setIsLoading(true)

  //   return callApi(newOffset, limit, datalist).then((res: any) => {
  //     const newItems = [...res, ...items.slice(0, cache)] as any
  //     setItems(newItems)
  //     setIsLoading(false)
  //     return true
  //   })
  // }

  // const nextCallback = (newOffset: number) => {
  //   setIsLoading(true)

  //   return callApi(newOffset, limit, datalist).then((res: any) => {
  //     const newItems = [...items.slice(-cache), ...res] as any
  //     setItems(newItems)
  //     setIsLoading(false)
  //     return true
  //   })
  // }
  return (
      <div className="App">
        {/* Header */}
        <HeaderComponent />
        {/* Body */}
          
          {/* <HomeUi />

          <UiVirtualScrollComponent
            buffer={buffer}
            rowHeight={39}
            height="50vh"
            limit={limit}
            datalist = {datalist}
            onPrevCallback={prevCallback}
            onNextCallback={nextCallback}
          >
            <>
              {items.map((item: any, index: number) => (
                <div style={{ padding: '10px' }}>
                  {isLoading ? <>Loading...</> : item}
                </div>
              ))}
            </>
          </UiVirtualScrollComponent> */}

          <Application />

        {/* Footer */}
        <FooterComponent />
      </div>
  );
}
export default App;