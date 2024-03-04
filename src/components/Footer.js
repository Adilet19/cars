import React from 'react'
import "./FooterStyle.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Rent Car</h1>
                <p>Выбери лучший сервис для себя</p>
            </div>
            <div>
                <a href='https://ru-ru.facebook.com/'>
                <i className='fa-brands fa-facebook-square'></i>
        </a>
        <a href='https://www.instagram.com/kaparov_v/'>
                <i className='fa-brands fa-instagram-square'></i>
        </a>
        <a href='https://www.behance.net/galleries'>
                <i className='fa-brands fa-behance-square'></i>
        </a>
        <a href='https://twitter.com/?lang=ru'>
                <i className='fa-brands fa-twitter-square'></i>
        </a>
 
    </div>
    </div>

        <div className='bottom'>
            <div>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href='https://github.com/Adilet19?tab=repositories'>Github</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troubleshooting</a>
                <a href='/'>Contact Us</a>
            </div>
        </div>
    </div>
  )
}

export default Footer