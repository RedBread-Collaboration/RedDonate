// import "./Home.scss";
import Card from "./components/Card";
import Header from "./components/Header"
// import Leaders from "./components/Leaders"
import "./Home.scss";
import StreamerLeaders from "./components/StreamerLeaders";
import StreamerCard from "./components/StreamerCard";

function Home() {
  return (
    <article>
      <Header/>
      <StreamerLeaders/>
      {/* <Leaders/>  */}
      <div className = "Card__container"> 
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
      <StreamerCard />
      </div>
    </article>
  );
}

export default Home;
