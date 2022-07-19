// ** React Imports
import {Fragment, useState} from 'react'

// ** Third Party Components
import classnames from 'classnames'
//import { toast } from 'react-toastify'
import * as Icons from 'react-feather'
import {CopyToClipboard} from 'react-copy-to-clipboard'

// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {Row, Col, Card, Input, CardBody, InputGroup, InputGroupText, UncontrolledTooltip, Button} from 'reactstrap'

// ** Styles
import '@styles/base/pages/ui-feather.scss'
import spaceImg from '../../../assets/images/icons/space.png'

const FeatherIcons = () => {
    const IconsArr = [
        {
            id: 1,
            src: spaceImg,
            name: '1'
        },
        {
            id: 2,
            src: spaceImg,
            name: '2'
        },
        {
            id: 3,
            src: spaceImg,
            name: '3'
        },
        {
            id: 4,
            src: spaceImg,
            name: '4'
        },
        {
            id: 5,
            src: spaceImg,
            name: '5'
        },
        {
            id: 6,
            src: spaceImg,
            name: '6'
        },
        {
            id: 7,
            src: spaceImg,
            name: '1'
        },
        {
            id: 8,
            src: spaceImg,
            name: '2'
        },
        {
            id: 9,
            src: spaceImg,
            name: '3'
        },
        {
            id: 10,
            src: spaceImg,
            name: '4'
        },
        {
            id: 11,
            src: spaceImg,
            name: '5'
        },
        {
            id: 12,
            src: spaceImg,
            name: '6'
        }
    ]

    // ** States
    const [active, setActive] = useState(null)

    // for (const key in Icons) {
    //   IconsArr.push(key)
    // }

    console.log(IconsArr)

    const handleIconCardClick = icon => {
        setActive(icon.id)
        //toast.success(<ToastContent icon={icon} />, { icon: false, hideProgressBar: true })
    }

    const renderIcons = () => {
        const dataToRender = IconsArr
        if (dataToRender.length) {
            return dataToRender.map(icon => {
                return (
                    <Fragment key={icon}>
                        <CopyToClipboard text={`<${icon} />`}>
                            <Card
                                id={icon.id}
                                className={classnames('icon-card cursor-pointer text-center mb-2 mx-50', {
                                    active: active === icon.id
                                })}
                                onClick={() => handleIconCardClick(icon)}
                            >
                                <CardBody className='p-0 custom-spaceCard'>
                                    <div className='icon-wrapper'>
                                        <img
                                            className=''
                                            src={icon.src}
                                            width='250'
                                            height='136'
                                            alt='iconImg'
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </CopyToClipboard>
                        {/*<UncontrolledTooltip placement='top' target={icon}>*/}
                        {/*  {icon.name.replace(/([A-Z])/g, ' $1').trim()}*/}
                        {/*</UncontrolledTooltip>*/}
                    </Fragment>
                )
            })
        } else {
            return (
                <div className='d-flex align-items-center justify-content-center w-100'>
                    <h4 className='mb-0'>No Icons Found!</h4>
                </div>
            )
        }
    }

    return (
        <Fragment>
            <Breadcrumbs breadCrumbTitle='Artist Designed Spaces' breadCrumbParent='' breadCrumbActive=''/>
            <div className='d-flex flex-wrap' id='icons-container-space'>
                {renderIcons()}
            </div>
        </Fragment>
    )
}
export default FeatherIcons
