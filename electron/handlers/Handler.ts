import { ipcMain } from 'electron'

export default abstract class Handler {
  constructor(protected root: string) {}

  on(event: string, func: Function): void {
    const normalizedEventName = `${this.root}:${event}`

    ipcMain.on(normalizedEventName, async (event, args) => {
      event.reply(normalizedEventName, await func(args))
    })
  }
}
