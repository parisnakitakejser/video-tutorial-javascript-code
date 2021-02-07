const mwLogging = (req: any, res: any, next: any) => {
    console.log('middleware: logging')
    next()
}

export default mwLogging