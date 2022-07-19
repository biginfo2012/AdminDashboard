// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/authentication'
const LogoutIcon = props => {
    // ** Props
    const { iconImg } = props
    const dispatch = useDispatch()

    return (
        <img
            className=''
            src={iconImg}
            width='20'
            height='20'
            alt='iconImg'
            onClick={() => dispatch(handleLogout())}
        />
    )
}

export default LogoutIcon
