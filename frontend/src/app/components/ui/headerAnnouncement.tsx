import React from 'react'

interface HeaderAnnouncementProps{
  className?: string;
  children: React.ReactNode
}


function HeaderAnnouncement({className, children}: HeaderAnnouncementProps) {
  return (
    <h1 className={`text-4xl ${className}`}>{children}</h1>
  )
}

export default HeaderAnnouncement