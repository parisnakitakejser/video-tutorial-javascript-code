import { Router } from 'express'

const mainRoutes = Router()

mainRoutes.get('/', (req: any, res: any) => {
    console.log('request method: get')

    return res.json({
        method: 'GET',
        headers: req.headers
    })
})

mainRoutes.put('/', (req: any, res: any) => {
    console.log('request method: put')

    return res.json({
        method: 'PUT'
    })
})

mainRoutes.post('/', (req: any, res: any) => {
    console.log('request method: post')

    return res.json({
        method: 'POST',
        data: req.body
    })
})

mainRoutes.delete('/', (req: any, res: any) => {
    console.log('request method: delete')

    return res.json({
        method: 'DELETE'
    })
})

export default mainRoutes