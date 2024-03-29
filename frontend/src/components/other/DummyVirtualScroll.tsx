import React, { useEffect, useState, FC, lazy } from 'react'
import callApi from '../../utils/apis/callApi';

const UiVirtualScrollComponent = lazy(() => import('./UiVirtualScroll'));

const DummyVirtualScroll: FC = () => {
    const limit = 10
    // the number of items that we want to keep in memory - 300
    const buffer = limit * 3
    // the number of items that we want to cache when new chunk of data is loaded
    const cache = buffer - limit

    const datalist = 'item';
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        callApi(0, buffer, datalist).then((res: any) => {
            setItems(res)
            setIsLoading(false)
        })
    }, [buffer]);

    const prevCallback = (newOffset: number) => {
        setIsLoading(true)

        return callApi(newOffset, limit, datalist).then((res: any) => {
            const newItems = [...res, ...items.slice(0, cache)] as any
            setItems(newItems)
            setIsLoading(false)
            return true
        })
    }

    const nextCallback = (newOffset: number) => {
        setIsLoading(true)

        return callApi(newOffset, limit, datalist).then((res: any) => {
            const newItems = [...items.slice(-cache), ...res] as any
            setItems(newItems)
            setIsLoading(false)
            return true
        })
    }
    return (
        <UiVirtualScrollComponent
            buffer={buffer}
            rowHeight={39}
            height="50vh"
            limit={limit}
            datalist={datalist}
            onPrevCallback={prevCallback}
            onNextCallback={nextCallback}
        >
            <>
                {items.map((item: any, index: number) => (
                    <div key={index} style={{ padding: '10px' }}>
                        {isLoading ? <>Loading...</> : item}
                    </div>
                ))}
            </>
        </UiVirtualScrollComponent>
    )
}
export default DummyVirtualScroll;