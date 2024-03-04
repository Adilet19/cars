import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MainData from "../components/MainData";
import Navbar from "../components/Navbar";
import "../components/ServiceStyles.css"
import "../components/MainStyles.css"


function Service() {
    return (
      <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1606427127406-c7792d1f6c12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Сервис"
        
        btnClass="hide"
      />
      
      <div className="service">
      <img alt='' src ="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />   
     <h1>Страхование автомобилей и пассажиров</h1>
    </div>  

      <br></br><br></br><br></br><br></br>


    <MainData 
    className="first-des"
        heading="Только у нас"
        li="Круглосуточная техническая поддержка"
        li1="Техническое обслуживание"
        li2="Доставки и прием автомобилей 24/7"
        img1="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
        <br></br>

        <q>Неважно, что ты стоишь рядом с тачкой и она твоя. Важно другое: то, как ты на ней ездишь! Запомни это.</q>
        <br></br>
        <br></br>
        <Footer/>
      </>
    );
  }
  
  export default Service;
  