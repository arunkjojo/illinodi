const callApi = (offset: number, limit: number, datalist: any) => {
  return new Promise((resolve) => {
    const items = [] as any
    for (let index = offset; index < offset + limit; index++) {
      items.push(datalist + index)
    }

    setTimeout(() => {
      resolve(items)
    }, 2000)
  })
}
export default callApi;