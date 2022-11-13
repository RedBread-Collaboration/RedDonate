// import "./Home.scss";
// import Card from "./components/Card";
import Header from "./components/Header"
// import Leaders from "./components/Leaders"
import "./Home.scss";
import StreamerLeaders from "./components/StreamerLeaders";
// import StreamerCard from "./components/StreamerCard";
import Streamers from "./components/Streamers";

function Home() {
  return (
    <article>
      <Header/>
      <StreamerLeaders/>
      <Streamers/>
    </article>
  );
}

export default Home;
