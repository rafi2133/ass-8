import MarqueeData from "@/components/Banner/MarqueeData";
import SwiperCom from "@/components/Banner/SwiperCom";
import FeaturedTiles from "@/components/FeaturedTiles/Featured Tiles";





export default function Home() {
  return (
   <div className="mb-20">

    <SwiperCom></SwiperCom>
    <MarqueeData></MarqueeData>

    <FeaturedTiles></FeaturedTiles>
   </div>
    
  );
}
