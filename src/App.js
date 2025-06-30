import Banner from "./components/Banner";
import Card from "./components/Card"
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";


function App() {
  return (
    <>
      <Header />
      <Banner image="home1"/>
      <Container>
        {/* <section className="cards">
           
           {
            videos.map(videos => {
              return <Card id={videos.id} key={videos.id} />
            })
           }
        </section> */}
         {/* <h2>Geografia</h2>
         <section className="cards">
           {videos.map(videos =>  <Card id={videos.id} key={videos.id} /> )}
        </section> */}
        <Category category="LA Paintball">
           {videos.map(videos => <Card id={videos.id} key={videos.id} /> )}
        </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;
