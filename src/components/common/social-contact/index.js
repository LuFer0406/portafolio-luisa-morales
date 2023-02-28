import React from 'react'
import './social-contact.css'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

function SocialContact() {
  return (
    <div className='social-contact'>
       <a href='https://github.com/LuFer0406'>
        <div className='social-icon-div'>
          <GitHubLogoIcon className='social-icon'/>
        </div>
       </a>
       <a href='https://www.linkedin.com/in/fernanda-morales-8408b523b/'>
        <div className='social-icon-div'>
          <LinkedInLogoIcon className='social-icon'/>
        </div>
       </a>
    </div>
  )
}

export default SocialContact