// ** Icons Import
import {Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield} from 'react-feather'

import MenuIcon from '../../@core/layouts/components/menu-icon'
import modelImg from '../../assets/images/icons/Models.png'
import roomImg from '../../assets/images/icons/Room.png'
import spaceImg from '../../assets/images/icons/Spaces.png'
import designImg from '../../assets/images/icons/DesignedSpaces.png'
import frameImg from '../../assets/images/icons/Frames.png'
import accountImg from '../../assets/images/icons/Account.png'
import logoutImg from '../../assets/images/icons/Logout.png'
import LogoutIcon from "../../@core/layouts/components/logout-icon"
// ** Store & Actions
//import { useDispatch } from 'react-redux'
// import { handleLogout } from '../../redux/authentication'
// const dispatch = useDispatch()

export default [
    {
        id: 'model',
        title: 'Model',
        icon: <MenuIcon iconImg={modelImg}></MenuIcon>,
        navLink: '/apps/model'
    },
    {
        id: 'room',
        title: 'Room',
        icon: <MenuIcon iconImg={roomImg}></MenuIcon>,
        navLink: '/apps/room'
    },
    {
        id: 'space',
        title: 'Saved Spaces',
        icon: <MenuIcon iconImg={spaceImg}></MenuIcon>,
        navLink: '/apps/space'
    },
    {
        id: 'design',
        title: 'Designed Spaces',
        icon: <MenuIcon iconImg={designImg}></MenuIcon>,
        navLink: '/apps/design'
    },
    {
        id: 'frame',
        title: 'Frames',
        icon: <MenuIcon iconImg={frameImg}></MenuIcon>,
        navLink: '/apps/frame'
    },
    {
        id: 'profile',
        title: 'Account',
        icon: <MenuIcon iconImg={accountImg}></MenuIcon>,
        navLink: '/apps/profile'
    },
    {
        id: 'logout',
        title: 'Logout',
        icon: <LogoutIcon iconImg={logoutImg}></LogoutIcon>,
        navLink: '/login'
    }
]
