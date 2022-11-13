// import "./Home.scss";
import Card from "./components/Card";
import Header from "./components/Header"
import Leaders from "./components/Leaders";
// import Leaders from "./components/Leaders"
import "./Home.scss";
import Streamers from "./components/Streamers";

function Home() {
  return (
    <article>
      <Header/>
      <Streamers/>
      <Leaders/> 
      <div className = "Card__container"> 
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />  
      </div>
    </article>
  );
}

export default Home;
