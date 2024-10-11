import React, { Component } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';
import Link from 'next/link';
import AppLinks from '@/components/AppLinks';

class Hero extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <div id={styles.section_headline_container}>
          <div id={styles.section_headline}>
            
              

            <nav className="navbar text-center text-md-left">
              <Link className="navbar-brand mx-auto mx-md-4" href="/">
                <Image 
                  src="images/RoadsTextWhite.png"
                  alt="FitConnect Logo"
                  height={110}
                  width={210}
                  className=""
                />
              </Link>
            </nav>


            <div className='text-center text-light'>
              <h1 className='pt-1 px-3 pb-3'>{title}</h1>
              <div className='row justify-content-center px-3'>
                <p className='col-md-10 col-lg-6'>
                  {subtitle}
                </p>
              </div>
              < AppLinks />
            </div>

            <div className={`${styles.cover_imgs_container} text-center d-flex justify-content-center animate-slide-up`}>
                <Image 
                  src="images/phones/device_15_home_feed2.png" 
                  alt="Screenshot of FitConnect app."
                  height={400}
                  width={200}
                  className='phone_shadow mt-5 d-none d-md-block'
                />
                <Image 
                  src="images/phones/device_15_player_full.png" 
                  alt="Screenshot of FitConnect app."
                  height={500}
                  width={250}
                  className='phone_shadow mx-4'
                />
                <Image 
                  src="images/phones/device_15_player_response.png" 
                  alt="Screenshot of FitConnect app"
                  height={400}
                  width={200}
                  className='phone_shadow mt-5 d-none d-md-block'
                />
            </div>
          
        </div>
      </>
    );
  }
}

export default Hero;
