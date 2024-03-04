import React from 'react'
import "./MainStyles.css"
import MainData from './MainData'

const Main = () => {
  return (
    <div className='mine'>
        <h1>Как арендовать автомобиль?</h1>
    
    <MainData 
    className="first-des"
        heading="Все просто и быстро!"
        li="Выберите и забронируйте авто"
        li1="Получите авто в удобном для Вас месте"
        li2="Подпишите договор"
        img1="https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1618642542397-ef97a739f1d7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <MainData
    className="first-des-reverse"
        heading="Наши Услуги:"
        li="Автомобильная Аренда: Парк современных автомобилей различных классов готов удовлетворить запросы как частных лиц, так и предприятий."
        li1 = "Строительное Оборудование: Мы предоставляем широкий ассортимент строительных машин и инструментов для профессиональных строительных проектов."
        li2 = "Офисное Оборудование: Современная офисная техника, мебель и другие ресурсы, чтобы обеспечить ваш офис всем необходимым для эффективной работы."
        img1="https://images.unsplash.com/photo-1541586876893-83885cc6e4df?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1569780713692-cc2dd5bb5591?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    
    <MainData 
    className="first-des"
        heading="Условия Аренды"
        li="Возраст: от 22 лет"
        li1="Стаж: от 2 лет"
        li2="Депозит: от 30 000 тг"
        img1="https://images.unsplash.com/photo-1621979787123-daf3ba3187e2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1641431616381-3f0613d82ca7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />


    <div className='img'>
        <img alt='' src='https://images.unsplash.com/photo-1549458395-e14f2e6d39c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        <img alt='' src='https://images.unsplash.com/photo-1634988083890-48c022e82d81?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      </div>
    </div>
  )
}

export default Main