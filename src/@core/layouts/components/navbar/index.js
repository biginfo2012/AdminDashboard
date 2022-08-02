// ** React Imports
import {Fragment} from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'
import NavbarBookmarks from './NavbarBookmarks'
import NavbarMiddle from './NavbarMiddle'
import NavbarEnd from './NavbarEnd'


const ThemeNavbar = props => {
    // ** Props
    const {setMenuVisibility} = props

    return (
        <Fragment>
            <div className='bookmark-wrapper d-flex align-items-center'>
                <NavbarBookmarks setMenuVisibility={setMenuVisibility}/>
            </div>
            <div className='navbar-middle-margin bookmark-wrapper d-flex align-items-center'>
                <NavbarMiddle setMenuVisibility={setMenuVisibility}/>
            </div>
            <div className='nav navbar-nav align-items-center ms-auto height-40'>
                <NavbarEnd setMenuVisibility={setMenuVisibility}/>
            </div>

            {/*<NavbarUser skin={skin} setSkin={setSkin}/>*/}
        </Fragment>
    )
}

export default ThemeNavbar
