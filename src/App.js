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

        <Category category={categories[0]}>
           {filterCategory(0).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[1]}>
           {filterCategory(1).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[2]}>
           {filterCategory(2).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[3]}>
           {filterCategory(3).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[4]}>
           {filterCategory(4).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[5]}>
           {filterCategory(5).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
        <Category category={categories[6]}>
           {filterCategory(6).map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>

      </Container>
      <Footer />
    </>
  );
}

export default App;
