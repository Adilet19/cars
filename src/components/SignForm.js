import React from 'react'
import "./ContactFormStyles.css"

function SignForm () {
  return (
    <div className='from-container'>
        <h1>Добро пожаловать к нам!</h1>
        <form>
            <input placeholder='Имя' />
            <input placeholder='Почта' />
            <input placeholder='Номер' />
            <input placeholder='Пароль' />
            <button>Войти</button>
            <br></br>
           
        </form>
        <a href="/reg">
            <button>Зарегистрироваться</button>
            </a>
    </div>
  )
}

export default SignForm