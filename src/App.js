import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js";
import { Route, BrowserRouter as Router, Routes }from "react-router-dom"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAcsessoriesMenu from "./components/HotAcsessoriesMenu.js"
import HotAcsessories from "./components/HotAcsessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import data from "./data/data.json"
import NavOptions from "./components/NavOptions.js"
function App() {
 
  return (
    <Router>
       <PreNavbar/>
        <Navbar />
         
         <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} audio={data.audio} home = {data.home} accessories={data.accessories} />

        <Slider start ={ data.banner.start} />
        <Offers offer = {data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES" />
        <HotAcsessoriesMenu />
        <Routes>
              <Route path='/music' element={<HotAcsessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
            
              <Route path='/smartDevice' element={<HotAcsessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

              <Route path='/home' element={<HotAcsessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.home} />} />

               <Route path='/lifeStyle' element={<HotAcsessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle} />} />\

               <Route path='/mobileAccessories' element={<HotAcsessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories} />} />      
        </Routes>
              
        <Heading text="PRODUCT REVIEWS" />      

        <ProductReviews  productReviews= { data.productReviews}/>

        <Heading text="VIDEOS" />

        <Videos videos={data.videos} />        
        
        <Heading text="IN THE PRESS" />
        
        <Banner banner={data.banner} />

        <Footer footer={data.footer} />

       
    </Router>
    
  );
}

export default App;
