// ** React Imports
import {lazy} from 'react'
import {Redirect} from 'react-router-dom'

const AppRoutes = [
    {
        path: '/apps/model',
        component: lazy(() => import('../../views/apps/model'))
    },
    {
        path: '/apps/room',
        component: lazy(() => import('../../views/apps/room'))
    },
    {
        path: '/apps/space',
        component: lazy(() => import('../../views/apps/space'))
    },
    {
        path: '/apps/design',
        component: lazy(() => import('../../views/apps/design'))
    },
    {
        path: '/apps/frame',
        component: lazy(() => import('../../views/apps/frame'))
    },
    {
        path: '/apps/profile',
        component: lazy(() => import('../../views/apps/model'))
    }
]

export default AppRoutes
