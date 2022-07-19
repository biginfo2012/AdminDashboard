// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
//import { toast } from 'react-toastify'
import * as Icons from 'react-feather'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {Row, Col, Card, Input, CardBody, InputGroup, InputGroupText, UncontrolledTooltip, Button} from 'reactstrap'

// ** Styles
import '@styles/base/pages/ui-feather.scss'

const FeatherIcons = () => {
    const IconsArr = [
        {
            id: 1,
            bStyle: {
                background: '#FFFFF7'
            },
            name: 'Name1'
        },
        {
            id: 2,
            bStyle: {
                background: '#FFE7C7'
            },
            name: 'Name2'
        },
        {
            id: 3,
            bStyle: {
                background: '#F7D8BA'
            },
            name: 'Name3'
        },
        {
            id: 4,
            bStyle: {
                background: '#ACDDDE'
            },
            name: 'Name4'
        },
        {
            id: 5,
            bStyle: {
                background: '#CAF1DE'
            },
            name: 'Name5'
        },
        {
            id: 6,
            bStyle: {
                background: '#CEC3D2'
            },
            name: 'Name6'
        },
        {
            id: 7,
            bStyle: {
                background: '#CCCCC4'
            },
            name: 'Name7'
        },
        {
            id: 8,
            bStyle: {
                background: '#F9E6E6'
            },
            name: 'Name8'
        },
        {
            id: 9,
            bStyle: {
                background: '#C7CBD2'
            },
            name: 'Name9'
        },
        {
            id: 10,
            bStyle: {
                background: '#EAE8E1'
            },
            name: 'Name10'
        },
        {
            id: 11,
            bStyle: {
                background: '#DEB887'
            },
            name: 'Name11'
        },
        {
            id: 12,
            bStyle: {
                background: '#708090'
            },
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
                                <CardBody style={icon.bStyle} className='custom-roomCard'>
                                    <div className='icon-wrapper'>

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
            <Breadcrumbs breadCrumbTitle='Edit Room' breadCrumbParent='' breadCrumbActive='' />
            <Row>
                <Col sm='12'>
                    <div className='demo-inline-spacing mb-3'>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Wall
                        </Button.Ripple>
                        <Button.Ripple className='round background-w' color='dark' outline>
                            Floor
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
