import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
// import NavBar2 from "./components/NavBar2";

function Home() {
    return (
      <>
        <NavBar/>
        {/* <NavBar2 /> */}
        <ItemListContainer greeting={"Proximamente..."} />
      </>
    );
  }
  
  export default Home;