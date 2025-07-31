import Feature from "./pages/Feature";
import FeatureCollection from "./pages/FeatureCollection";
import FreeShippingBanner from "./pages/FreeShippingBanner";
import HeroSection from "./pages/HeroSection";
import NewArrival from "./pages/NewArrival";



export default function Home() {
  return (
   <>
   <div>
  <HeroSection/>
  <Feature/>
  <FreeShippingBanner/>
  <NewArrival/>
  <FeatureCollection/>
   </div>
   </>
  );
}
