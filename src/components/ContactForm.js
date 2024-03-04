import React from 'react'
import "./ContactFormStyles.css"

function ContactForm () {
  return (
    <div className='from-container'>
        <h1>Можете отправить отзыв к нам!</h1>
        <form>
            <input placeholder='Имя' />
            <input placeholder='Почта' />
            <input placeholder='Номер' />
            <textarea placeholder='Сообщение' rows="4"></textarea>
            <button>Отправить</button>
        </form>
    </div>
  )
}

export default ContactForm