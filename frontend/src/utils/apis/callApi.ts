export const callApi = (offset: number, limit: number) => {
    return new Promise((resolve) => {
      const items = [] as any
      for (let index = offset; index < offset + limit; index++) {
        items.push('label ' + index)
      }
  
      setTimeout(() => {
        resolve(items)
      }, 2000)
    })
  }