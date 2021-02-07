const mwRequestTime = (req: any, res: any, next: any) => {
    req.requestTime = new Date()
    console.log(`middleware: requestTime = ${req.requestTime}`)

    next()
}

export default mwRequestTime