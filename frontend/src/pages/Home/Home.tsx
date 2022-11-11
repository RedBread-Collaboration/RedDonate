// import "./Home.scss";
import Card from "./components/Card";
import Header from "./components/Header"
import "./Home.scss";

function Home() {
  return (
    <article>
      <Header/>
      <div className = "Card__container">
        <Card />
      </div>
    </article>
  );
}

export default Home;
