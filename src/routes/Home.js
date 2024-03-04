import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Выбирай Нас"
        text="Лучшие автомобили для вас"
        buttonText="Забронировать"
        url="/cars"
        btnClass="show"
      />
      <Main/>

      <Footer/>
    </>
  );
}

export default Home;
