import { jsondata } from "@/lib/data";
import Marquee from "react-fast-marquee";




const MarqueeData = async () => {

const tiles = await jsondata(); 


  
   const marqueeContent = tiles.map(tile => tile.title).join(' | ');
  const fullText = `New Arrivals: ${marqueeContent} | Weekly Feature: Modern Geometric Patterns | Join the Community...`;
 
 
  return (
    <div className="mt-4">
       <Marquee 
        speed={40} 
        gradient={false}
        className="text-white bg-black font-medium text-xl p-4"
        pauseOnHover
      >
        {fullText}
      </Marquee>
    </div>
  );
};

export default MarqueeData;