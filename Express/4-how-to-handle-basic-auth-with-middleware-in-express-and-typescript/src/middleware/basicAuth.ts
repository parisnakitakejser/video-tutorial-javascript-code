const auth = require('basic-auth')

const mwBasicAuth = async (req: any, res: any, next: any) => {
    console.log('middleware: basic auth')

    const user = await auth(req)

    const username: string = 'test'
    const password: string = '123456'

    if (user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password) {
        console.log('Basic Auth: success')
        next()
    } else {
        console.log('Basic Auth: failure')
        res.statusCode = 401
        res.end('Access denied')
    }
}

export default mwBasicAuth