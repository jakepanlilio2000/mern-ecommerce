import React from 'react'
import HeaderDefiner from './ui/headerDefiner'
import { siteConfig } from '../lib/constants'
import AppLogo from './ui/app-logo'


function AuthSide() {
  return (
    <div className="relative">
        <div className="mx-auto mt-10">
            <AppLogo></AppLogo>
            <HeaderDefiner className="text-white uppercase">{siteConfig.companyName}</HeaderDefiner>
        </div>
        <span className="absolute bottom-0 left-0">
            {siteConfig.link}
        </span>
    </div>
  )
}

export default AuthSide