// import "./Home.scss";
import Card from "./components/Card";
import Header from "./components/Header"
import Leaders from "./components/Leaders";
// import Leaders from "./components/Leaders"
import "./Home.scss";

function Home() {
  return (
    <article>
      <Header/>
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
