import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join us for great homes
            </p>

            <p className='footer-suprsciprtion-text'>
                You can unsub at anytime 
            </p>
            <div className='input-areas'>
                <form>
                    <input className='footer-input' type = "email" name = "email" placeholder="Your Email">
                    
                    </input>
                    <Button buttonStyle='btn--outline'>
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to ='/signup'>How it works</Link>
                    <Link to ='/'>What people say about us</Link>
                    <Link to ='/'>Partners</Link>
                    <Link to ='/'>Venues</Link>
                    <Link to ='/'>Terms of Service</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to ='/'>Homes@home.com</Link>
                    <Link to ='/'>123-456-7890</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Home Previews</h2>
                    <Link to ='/'>Washington Park</Link>
                    <Link to ='/'>Apple Drive</Link>
                    <Link to ='/'>Ottoman Square</Link>
                    <Link to ='/'>Roadao Street</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to ='/'>Instagram</Link>
                    <Link to ='/'>Youtube</Link>
                    <Link to ='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to = '/' className='social-logo'>
                        K estates <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <small className='website-rights'>K Estates</small>
                <div className='social-icons'>
                    <a href='https://www.facebook.com/' className='social-icon-link facebook' aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/' className='social-icon-link instagram' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/' className='social-icon-link youtube' aria-label='Youtube'>
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a href='https://www.twitter.com/' className='social-icon-link twitter' aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer