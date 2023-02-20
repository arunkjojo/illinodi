import React, { FC, useRef, useState } from 'react'
import { UiVirtualScrollProps } from '../utils/interfaces'


export const UiVirtualScroll: FC<UiVirtualScrollProps> = ({
    offset = 0,
    buffer,
    limit,
    rowHeight,
    height,
    onPrevCallback,
    onNextCallback,
    children,
}) => {
    // create overlay reference to trigger the change scroll position
    const overlayRef: any = useRef<any>(null)

    // create two cursors of lower and upper boundary of cached items indices
    // initial upper boundary index is 0
    const [upperBoundary, setUpperBoundary] = useState(offset)
    // initial lower boundary index is 300-1 = 299
    const [lowerBoundary, setLowerBoundary] = useState(buffer - 1)
    const [isLoading, setIsLoading] = useState(false)
    // current scroll position starting with 0
    const [currentScrollTopPosition, setCurrentScrollTopPosition] = useState(0)

    const handleScroll = (target: any) => {
        // ignore the scroll if data is loading
        if (isLoading) {
            return
        }

        // get the current position of the scroll
        const scrollTop = Math.round(target.scrollTop)
        // extracting the client height and scroll height to calculate the top scroll maximum position
        // where is highest scroll position is scrollHeight = clientHeight + scrollTop
        const clientHeight = Math.round(target.clientHeight)
        const scrollHeight = Math.round(target.scrollHeight)

        // defining if we currently scrolling up or down
        const isUp = scrollTop < currentScrollTopPosition

        if (isUp && scrollTop === 0) {
            setIsLoading(true)
            var newLim = upperBoundary - limit;

            onPrevCallback(newLim).then(() => {
                // update boundaries to move indices - limit
                setUpperBoundary(newLim)
                setLowerBoundary(newLim)

                // move scroll position to 1 limit height
                if (overlayRef !== null) {
                    const scrollPos = limit * rowHeight
                    overlayRef.current.scrollTo(0, scrollPos)
                }
                setIsLoading(false)
            })
        } else if (!isUp && (scrollTop + clientHeight) >= scrollHeight) {
            setIsLoading(true)

            onNextCallback(lowerBoundary).then(() => {
                // update boundaries to move indices + limit
                setUpperBoundary(upperBoundary + limit)
                setLowerBoundary(lowerBoundary + limit)

                if (overlayRef !== null) {
                    const scrollPos = limit * rowHeight
                    // move scroll position to 2 limits height
                    overlayRef.current.scrollTo(0, scrollPos * 2)
                }
                setIsLoading(false)
            })
        }
        // update the current cursor position
        setCurrentScrollTopPosition(scrollTop)
    }

    return (
        <div
            ref={overlayRef}
            style={{ height, overflow: 'scroll' }}
            onScroll={(e: any) => handleScroll(e.target)}
        >
            {children}
        </div>
    )
}