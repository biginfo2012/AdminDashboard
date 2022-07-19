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
import frameImg from '../../../assets/images/icons/frame.png'

const FeatherIcons = () => {
    const IconsArr = [
        {
            id: 1,
            src: frameImg,
            name: 'Name1'
        },
        {
            id: 2,
            src: frameImg,
            name: 'Name2'
        },
        {
            id: 3,
            src: frameImg,
            name: 'Name3'
        },
        {
            id: 4,
            src: frameImg,
            name: 'Name4'
        },
        {
            id: 5,
            src: frameImg,
            name: 'Name5'
        },
        {
            id: 6,
            src: frameImg,
            name: 'Name6'
        },
        {
            id: 7,
            src: frameImg,
            name: 'Name7'
        },
        {
            id: 8,
            src: frameImg,
            name: 'Name8'
        },
        {
            id: 9,
            src: frameImg,
            name: 'Name9'
        },
        {
            id: 10,
            src: frameImg,
            name: 'Name10'
        },
        {
            id: 11,
            src: frameImg,
            name: 'Name11'
        },
        {
            id: 12,
            src: frameImg,
            name: 'Name12'
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
                                <CardBody className='p-0'>
                                    <div className='icon-wrapper custom-frame-img'>
                                        <img
                                            className=''
                                            src={icon.src}
                                            width='100'
                                            height='100'
                                            alt='iconImg'
                                        />
                                    </div>
                                    <p className='custom-my-1'>{icon.name}</p>
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
            <Breadcrumbs breadCrumbTitle='Display Frame' breadCrumbParent='' breadCrumbActive=''/>
            <Row className='custom-createBtn'>
                <Col sm='12'>
                    <div className='demo-inline-spacing mb-3'>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Create Group
                        </Button.Ripple>
                    </div>
                </Col>
            </Row>
            <div className='d-flex flex-wrap' id='icons-container'>
                {renderIcons()}
            </div>
        </Fragment>
    )
}
export default FeatherIcons
