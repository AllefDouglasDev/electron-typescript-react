const TIMEOUT = 30000

export function send<T = any>(to: string, data?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Timeout'))
    }, TIMEOUT)

    window.Main.send(to, data)

    window.Main.on(to, (response: any) => {
      resolve(response)
      clearTimeout(timeoutId)
    })
  })
}
