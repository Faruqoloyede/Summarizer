import Banner from '@/components/Banner'
import SignIn from '@/components/SignIn'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center'>
      <Banner />
      <SignIn />
    </div>
  )
}

export default page