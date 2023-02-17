export interface dummyData {
    id: number,
    path: string,
    topic: string,
    links: string[],
    description: string,
};

export interface UiVirtualScrollProps {
    offset?: number
    rowHeight: number
    buffer: number
    height: string
    limit: number
    children: JSX.Element
    onPrevCallback: (newOffset: number) => Promise<boolean>
    onNextCallback: (newOffset: number) => Promise<boolean>
}

export interface APP_DATA {
    APP_NAME : string,
    APP_URL: string,
    APP_BASE: string,
}