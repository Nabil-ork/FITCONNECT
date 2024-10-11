import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <div id="section_footer" class="bg-graident">

          <div className='mt-2 mb-3'>
            <Link href="https://www.facebook.com/" target="_blank" className='social-icon mx-1'>
              <IoLogoFacebook size={25}/>
            </Link>

            <Link href="https://www.instagram.com/" target="_blank" className='social-icon mx-1'>
              <IoLogoInstagram size={25}/>
            </Link>

            <Link href="https://www.linkedin.com/" target="_blank" className='social-icon mx-1'>
              <IoLogoLinkedin size={25}/>
            </Link>

            <Link href="https://www.tiktok.com/" target="_blank" className='social-icon mx-1'>
              <IoLogoTiktok size={25}/>
            </Link>

            <Link href="https://www.youtube.com/" target="_blank" className='social-icon mx-1'>
              <IoLogoYoutube size={25}/>
            </Link>
          </div>

          <p>Copyright © {current_year}, Codes Waves. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
