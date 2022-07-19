// ** React Imports
import { useContext, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Custom Hooks
//import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import { useDispatch } from 'react-redux'
import { Slide } from 'react-toastify'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const ToastContent = ({ name, role }) => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
          <h6 className='toast-title fw-bold'>Welcome, {name}</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
      </div>
    </Fragment>
)

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@demo.com'
}

const Login = () => {
  // ** Hooks
  //const { skin } = useSkin()
  const dispatch = useDispatch()
  const history = useHistory()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  //const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  // source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      useJwt
          .login({ email: data.loginEmail, password: data.password })
          .then(res => {
            const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
            dispatch(handleLogin(data))
            ability.update(res.data.userData.ability)
            history.push(getHomeRouteForLoggedInUser(data.role))
            // toast.success(
            //     <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            //     { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
            // )
          })
          .catch(err => console.log(err))
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
      <div className='auth-wrapper auth-cover'>
        <Row className='auth-inner m-0'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
            {/*<svg viewBox='0 0 139 95' version='1.1' height='28'>*/}
            {/*  <defs>*/}
            {/*    <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>*/}
            {/*      <stop stopColor='#000000' offset='0%'></stop>*/}
            {/*      <stop stopColor='#FFFFFF' offset='100%'></stop>*/}
            {/*    </linearGradient>*/}
            {/*    <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>*/}
            {/*      <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>*/}
            {/*      <stop stopColor='#FFFFFF' offset='100%'></stop>*/}
            {/*    </linearGradient>*/}
            {/*  </defs>*/}
            {/*  <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>*/}
            {/*    <g id='Artboard' transform='translate(-400.000000, -178.000000)'>*/}
            {/*      <g id='Group' transform='translate(400.000000, 178.000000)'>*/}
            {/*        <path*/}
            {/*          d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'*/}
            {/*          id='Path'*/}
            {/*          className='text-primary'*/}
            {/*          style={{ fill: 'currentColor' }}*/}
            {/*        ></path>*/}
            {/*        <path*/}
            {/*          d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'*/}
            {/*          id='Path'*/}
            {/*          fill='url(#linearGradient-1)'*/}
            {/*          opacity='0.2'*/}
            {/*        ></path>*/}
            {/*        <polygon*/}
            {/*          id='Path-2'*/}
            {/*          fill='#000000'*/}
            {/*          opacity='0.049999997'*/}
            {/*          points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'*/}
            {/*        ></polygon>*/}
            {/*        <polygon*/}
            {/*          id='Path-2'*/}
            {/*          fill='#000000'*/}
            {/*          opacity='0.099999994'*/}
            {/*          points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'*/}
            {/*        ></polygon>*/}
            {/*        <polygon*/}
            {/*          id='Path-3'*/}
            {/*          fill='url(#linearGradient-2)'*/}
            {/*          opacity='0.099999994'*/}
            {/*          points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'*/}
            {/*        ></polygon>*/}
            {/*      </g>*/}
            {/*    </g>*/}
            {/*  </g>*/}
            {/*</svg>*/}
            <svg xmlns="http://www.w3.org/2000/svg" height='75' viewBox="0 0 841.9 595.3">
              <g fill="#61DAFB">
                <path
                    d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                <circle cx="420.9" cy="296.5" r="45.7"/>
                <path d="M520.5 78.1z"/>
              </g>
            </svg>
          </Link>
          {/*<Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>*/}
          {/*  <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>*/}
          {/*    <img className='img-fluid' src={source} alt='Login Cover' />*/}
          {/*  </div>*/}
          {/*</Col>*/}
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='12' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='fw-bold mb-1 text-center'>
                Welcome to Logo!
              </CardTitle>
              {/*<CardText className='mb-2'>Please sign-in to your account and start the adventure</CardText>*/}
              {/*<Alert color='primary'>*/}
              {/*  <div className='alert-body font-small-2'>*/}
              {/*    <p>*/}
              {/*      <small className='me-50'>*/}
              {/*        <span className='fw-bold'>Admin:</span> admin@demo.com | admin*/}
              {/*      </small>*/}
              {/*    </p>*/}
              {/*    <p>*/}
              {/*      <small className='me-50'>*/}
              {/*        <span className='fw-bold'>Client:</span> client@demo.com | client*/}
              {/*      </small>*/}
              {/*    </p>*/}
              {/*  </div>*/}
              {/*  <HelpCircle*/}
              {/*    id='login-tip'*/}
              {/*    className='position-absolute'*/}
              {/*    size={18}*/}
              {/*    style={{ top: '10px', right: '10px' }}*/}
              {/*  />*/}
              {/*  <UncontrolledTooltip target='login-tip' placement='left'>*/}
              {/*    This is just for ACL demo purpose.*/}
              {/*  </UncontrolledTooltip>*/}
              {/*</Alert>*/}
              <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-1'>
                  {/*<Label className='form-label' for='login-email'>*/}
                  {/*  Email*/}
                  {/*</Label>*/}
                  <Controller
                      id='loginEmail'
                      name='loginEmail'
                      control={control}
                      render={({ field }) => (
                          <Input
                              autoFocus
                              type='hidden'
                              placeholder='john@example.com'
                              invalid={errors.loginEmail && true}
                              {...field}
                          />
                      )}
                  />
                </div>
                <div className='mb-1'>
                  {/*<div className='d-flex justify-content-between'>*/}
                  {/*<Label className='form-label' for='login-password'>*/}
                  {/*  Password*/}
                  {/*</Label>*/}
                  {/*<Link to='/forgot-password'>*/}
                  {/*  <small>Forgot Password?</small>*/}
                  {/*</Link>*/}
                  {/*</div>*/}
                  <Controller
                      id='password'
                      name='password'
                      control={control}
                      render={({ field }) => (
                          <Input className='input-group-merge' type='hidden' invalid={errors.password && true} {...field} />
                      )}
                  />
                </div>
                {/*<div className='form-check mb-1'>*/}
                {/*  <Input type='checkbox' id='remember-me' />*/}
                {/*  <Label className='form-check-label' for='remember-me'>*/}
                {/*    Remember Me*/}
                {/*  </Label>*/}
                {/*</div>*/}
                <div className='text-center'>
                  <Button type='submit' color='dark' className='w-300'>
                    Log in with browser
                  </Button>
                </div>

              </Form>
              {/*<p className='text-center mt-2'>*/}
              {/*  <span className='me-25'>New on our platform?</span>*/}
              {/*  <Link to='/register'>*/}
              {/*    <span>Create an account</span>*/}
              {/*  </Link>*/}
              {/*</p>*/}
              {/*<div className='divider my-2'>*/}
              {/*  <div className='divider-text'>or</div>*/}
              {/*</div>*/}
              {/*<div className='auth-footer-btn d-flex justify-content-center'>*/}
              {/*  <Button color='facebook'>*/}
              {/*    <Facebook size={14} />*/}
              {/*  </Button>*/}
              {/*  <Button color='twitter'>*/}
              {/*    <Twitter size={14} />*/}
              {/*  </Button>*/}
              {/*  <Button color='google'>*/}
              {/*    <Mail size={14} />*/}
              {/*  </Button>*/}
              {/*  <Button className='me-0' color='github'>*/}
              {/*    <GitHub size={14} />*/}
              {/*  </Button>*/}
              {/*</div>*/}
            </Col>
          </Col>
        </Row>
      </div>
  )
}

export default Login