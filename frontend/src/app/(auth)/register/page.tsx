import HeaderDefiner from '@/app/components/ui/headerDefiner'
import Input from '@/app/components/ui/input'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: "Register",
  description: "Create a customer account"
}


function Register() {
  return (
    <section className="bg-auth-modal-bg shadow-xl">
      {/* half */}
      <div className=""></div>
      {/*  */}
      <div>
        <HeaderDefiner className='uppercase'>Register</HeaderDefiner>
        <form action="">
          <Input type="text" placeholder="Username" logo="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"></Input>
          <Input type="password" placeholder="Password" logo="https://cdn-icons-png.flaticon.com/512/81/81052.png"></Input>
          <Link href="#" className="text-blue-300">Forgot Password?</Link>
          <button className="">Login</button>
          
        </form>
      </div>
    </section>
  )
}

export default Register