import Feature from "./pages/Feature";
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
   </div>
   </>
  );
}
