import Banner from "./components/Banner";
import Card from "./components/Card"
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

const categories = [
  "Amistoso",
  "Senário",
  "Campeonato Brasileiro",
  "Speed",
  "LA Paintball",
  "Jogo Contra",
  "Pilares"
]

function filterCategory(id){
  return videos.filter(video => video.category === categories[id]);
}

function App() {
  return (
    <>
      <Header />
      <Banner image="home1"/>
      <Container>

        <Category category="Amistoso">
           {filterCategory(0).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="Senário">
           {filterCategory(1).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="Campeonato Brasileiro">
           {filterCategory(2).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="Speed">
           {filterCategory(3).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="LA Paintball">
           {filterCategory(4).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="Jogo Contra">
           {filterCategory(5).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category="Pilares">
           {filterCategory(6).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
