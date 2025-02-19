import CustomNavbar from "../components/nav";
import Carou from "../components/carsole";
import IdeaSection from "../components/conste";
import Cards from "../components/cards";
import Footer from "../components/Footer";
// import Ideator from "../pages/Idea";
const Home=()=>{


    return(
<div>
    <CustomNavbar/>
    <Carou/>
    <IdeaSection/>
    <Cards/>
    <Footer />
    {/* <Ideator></Ideator> */}
</div>
    )
}

export default Home