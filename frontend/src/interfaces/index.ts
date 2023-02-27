export interface dummyData {
    id: number,
    path: string,
    topic: string,
    links: string[],
    description: string,
    images: string
};

export interface UiVirtualScrollProps {
    offset?: number
    rowHeight: number
    buffer: number
    height: string
    limit: number
    datalist?: any
    children: JSX.Element
    onPrevCallback: (newOffset: number) => Promise<boolean>
    onNextCallback: (newOffset: number) => Promise<boolean>
}

export interface SliderProps {
    imageSrc : string,
    imageAlt: string,
}
