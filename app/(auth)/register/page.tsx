import Banner from '@/components/Banner'
import SignUp from '@/components/SignUp'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center'>
      <Banner />
      <SignUp />
    </div>
  )
}

export default page