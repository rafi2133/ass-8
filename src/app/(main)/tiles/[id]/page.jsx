import Image from "next/image";
import Link from "next/link";


const TilesDetailsPage =async ({params}) => {

    const {id, material,dimensions,currency,price,category,image,description,title} = await params;

    
    return (
        <div>
            {
                id.length > 0 ? <div className="">
                <div className="card  bg-base-100 shadow-sm flex flex-col">
  <figure>
  
      <Image
      height={600}
      width={600}
      src={image}
      alt={title}
      >
      </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
        <Link href={'/'}>
      <button className="bg-[#d81b99] hover:bg-[#b8167a] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">Go To Home</button>
        </Link>
    </div>
  </div>
</div>
                </div> : "nai"
            }
            TilesDetailsPage

        </div>
    );
};

export default TilesDetailsPage;