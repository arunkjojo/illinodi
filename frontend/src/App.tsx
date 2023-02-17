// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/mediaQuery.css';

// API
import { callApi } from './utils/apis/callApi';

// Components
import React, { FC, useEffect, useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UiVirtualScroll } from './components/UiVirtualScroll';

// Pages
import { Home } from './pages/home';




const App:FC = () => {
  const limit = 100
  // the number of items that we want to keep in memory - 300
  const buffer = limit * 3
  // the number of items that we want to cache when new chunk of data is loaded
  const cache = buffer - limit
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    callApi(0, buffer).then((res: any) => {
      setItems(res)
      setIsLoading(false)
    })
  }, [buffer]);

  const prevCallback = (newOffset: number) => {
    setIsLoading(true)

    return callApi(newOffset, limit).then((res: any) => {
      const newItems = [...res, ...items.slice(0, cache)] as any
      setItems(newItems)
      setIsLoading(false)
      return true
    })
  }

  const nextCallback = (newOffset: number) => {
    setIsLoading(true)

    return callApi(newOffset, limit).then((res: any) => {
      const newItems = [...items.slice(-cache), ...res] as any
      setItems(newItems)
      setIsLoading(false)
      return true
    })
  }

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
        {/* HomeBody for home page */}
        <Home />
        {/* UiVirtualScroll for home page */}
        <UiVirtualScroll
        buffer={buffer}
        rowHeight={39}
        height="50vh"
        limit={limit}
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
      </UiVirtualScroll>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
