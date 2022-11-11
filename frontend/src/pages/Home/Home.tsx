// import "./Home.scss";
import Card from "./components/Card";
import Header from "./components/Header"
// import Leaders from "./components/Leaders"
import "./Home.scss";

function Home() {
  return (
    <article>
      <Header/>
      <span className="Top">Топ стримеров</span>
      <div className = "Top__container">
        <div className = "Top__position">
          <span className = "Top__number third"> 3 </span>
          <Card />
        </div>
        <div className="Top__position">
          <span className="Top__number first"> 1 </span>
          <Card />
        </div>
        <div className="Top__position">
          <span className="Top__number second"> 2 </span>
          <Card />
        </div>
      </div>
      <div className = "Card__container">
        <Card />
      </div>
    </article>
  );
}

export default Home;
