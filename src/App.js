import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import TableComponent from "./components/TableComponent";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
        id: 1,
        title: 'Mersedes Benz G550',
        img:'1.jpeg',
        year: '2013',
        category: 'Универсал',
        price: '130 000 тг'
      },
      {
        id: 2,
        title: 'Lexus LS 570',
        img:'6.jpg',
        year: '2020',
        category: 'Универсал',
        price: '120 000 тг'
      },
      {
        id: 3,
        title: 'Hyundai Tucson',
        img:'3.jpg',
        year: '2014',
        category: 'Универсал',
        price: '45 000 тг'
      },
      {
        id: 4,
        title: 'Toyota Camry 70',
        img:'2.jpg',
        year: '2015',
        category: 'Седан',
        price: '40 000 тг'
      },
      {
        id: 5,
        title: 'Hyundai Sonata',
        img:'4.webp',
        year: '2018',
        category: 'Седан',
        price: '40 000 тг'
      },
      {
        id: 6,
        title: 'Hyundai Accent',
        img:'5.webp',
        year: '2017',
        category: 'Седан',
        price: '35 000 тг'
      },
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  render(){
  return (
    <div className="wrapper">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>

        </Routes>

        <br></br><br></br>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <hr></hr> 
        <br></br><br></br>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <br></br>
        <TableComponent />

        <hr></hr><Footer/>

    </div>
  )
  }


  deleteOrder(id){
      this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }


  addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)

    this.setState({orders: [...this.state.orders, item]})
  }

}

export default App;
