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
import img_1 from '../../../assets/images/icons/1.png'
import img_2 from '../../../assets/images/icons/2.png'
import img_3 from '../../../assets/images/icons/3.png'
import img_4 from '../../../assets/images/icons/4.png'
import img_5 from '../../../assets/images/icons/5.png'
import img_6 from '../../../assets/images/icons/6.png'

const FeatherIcons = () => {
    const IconsArr = [
        {
            id: 1,
            src: img_1,
            name: '1'
        },
        {
            id: 2,
            src: img_2,
            name: '2'
        },
        {
            id: 3,
            src: img_3,
            name: '3'
        },
        {
            id: 4,
            src: img_4,
            name: '4'
        },
        {
            id: 5,
            src: img_5,
            name: '5'
        },
        {
            id: 6,
            src: img_6,
            name: '6'
        },
        {
            id: 7,
            src: img_1,
            name: '1'
        },
        {
            id: 8,
            src: img_2,
            name: '2'
        },
        {
            id: 9,
            src: img_3,
            name: '3'
        },
        {
            id: 10,
            src: img_4,
            name: '4'
        },
        {
            id: 11,
            src: img_5,
            name: '5'
        },
        {
            id: 12,
            src: img_6,
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
                                <CardBody>
                                    <div className='icon-wrapper'>
                                        <img
                                            className=''
                                            src={icon.src}
                                            width='85'
                                            height='85'
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
            <Breadcrumbs breadCrumbTitle='Add Models' breadCrumbParent='' breadCrumbActive=''/>
            <Row>
                <Col sm='12'>
                    <div className='demo-inline-spacing mb-3'>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Couches
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Frames
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Beds
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Closets
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Clothes
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Entertainment
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Doors
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Electronics
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Instruments
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
