import React from "react";
import Header from "../components/Header";
import Items from "../components/Items";
import Navbar from "../components/Navbar";
import TableComponent from "../components/TableComponent";
import Footer from "../components/Footer";


class Cars extends React.Component {
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
          img:'5.png',
          year: '2017',
          category: 'Седан',
          price: '35 000 тг'
        },
        {
            id: 7,
            title: 'Zeekr 001',
            img:'11.png',
            year: '2013',
            category: 'Универсал',
            price: '109 000 тг'
          },
          {
            id: 8,
            title: 'Tesla Model X',
            img:'12.png',
            year: '2020',
            category: 'Универсал',
            price: '45 000 тг'
          },
          {
            id: 9,
            title: 'Nissan GTR',
            img:'13.png',
            year: '2014',
            category: 'Универсал',
            price: '80 000 тг'
          },
          {
            id: 10,
            title: 'Mersedes W223',
            img:'14.png',
            year: '2015',
            category: 'Седан',
            price: '100 000 тг'
          },
          {
            id: 11,
            title: 'Hyundai Elantra',
            img:'15.png',
            year: '2018',
            category: 'Седан',
            price: '50 000 тг'
          },
          {
            id: 12,
            title: 'Camry 75',
            img:'16.png',
            year: '2017',
            category: 'Седан',
            price: '55 000 тг'
          },
        ]
      }
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
    }
    render(){
    return (
    <div className="wrapper">
      <Navbar />
       <br></br><br></br>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <hr></hr> 
        <br></br><br></br>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
  <br></br> 
        <TableComponent />
        <Footer/>

    </div>
  );
  
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
export default Cars;
