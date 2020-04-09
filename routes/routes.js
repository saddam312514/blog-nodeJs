const authRoute = require('./authRoute')
const dashboarRoute = require('./dashboardRoute')
const playgroundRoute = require('../playground/play')
const uploadRoute = require('./uploadRoutes')

const routes = [
    {
        path:'/auth',
        handler: authRoute
    },
    {
        path: '/dashboard',
        handler: dashboarRoute
    },
    {
        path: '/uploads',
        handler: uploadRoute
    },
    {
        path: '/playground',
        handler: playgroundRoute
    },
    {
        path: '/',
        handler: (req,res) => {
            res.json({
                message: 'hello world'
            })
        }
    }
]
module.exports = app => {
    routes.forEach(r => {
        if(r.path === '/'){
            app.get(r.path, r.handler)
        } else {
            app.use(r.path, r.handler)
        }
    })
}