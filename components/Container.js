import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import Footer from './Footer'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a className={`mr-4 ${isActive ? 'text-white font-semibold' : ''} hover:text-white`}>{text}</a>
    </NextLink>
  )
}

export default function Container(props) {
  const { children, isStickyNav, ...customMeta } = props
  const baseURL = 'hhtps://localhost:3000'
  const meta = {
    title: 'KT Store - The cutest gift cards online',
    description: 'Online store for the cutest gift cards and designs',
    type: 'website',
    image: `${baseURL}/static/imges/noise-background.jpg`,
    ...customMeta
  }
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        {/* Robots */}
        <meta name='robots' content='follow, index' />
        {/* Open Graph */}
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:url' content={`${baseURL}${router.asPath}`} />
        <link rel='canonical' href={`${baseURL}${router.asPath}`} />
        <meta property='og:site_name' content='KT' />
      </Head>
      <div className='w-screen'>
        {/* Navigation */}
        <nav className={`z-50 w-full bg-black bg-opacity-75 ${isStickyNav ? 'sticky top-0' : ''}`}>
          <div className='flex justify-start items-center max-w-screen-lg mx-auto px-5 py-2'>
            <a
              tabIndex={1}
              href='#content'
              className='text-gray-300 bg-black bg-opacity-80 absolute px-3 py-1 -top-12 transform-transition duration-300 ease-in-out focus:top-[8px]'
            >
              Skip to Content
            </a>
            <div className='text-gray-300'>
              <NextLink tabIndex={2} href='/'>
                <a className='mr-4'>KT</a>
              </NextLink>
            </div>
            <div className='text-gray-300 text-sm'>
              <NavItem href='/' text='Shop' />
              <NavItem href='/about' text='About' />
              <NavItem href='/contact' text='Contact' />
            </div>
            <div tabIndex={0} className='ml-auto'>
              <svg
                className='w-7 h-7 text-gray-300 hover:text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                ></path>
              </svg>
            </div>
          </div>
        </nav>
        {/* Main Content */}
        <main id='content' className='w-full'>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}
