import { useLoaderData, useParams } from "react-router-dom";



const CardDetails = () => {
    
    const {id}= useParams()
    console.log(id)
    const cards = useLoaderData()
    console.log(cards)


    const card = cards.find(cards=>cards.id===id)
    console.log(card)

    return (
        <div className="max-w-6xl mx-auto mt-10">
            
            <div className="flex justify-center">
            <img className="w-[60vw]" src={card.Picture} alt="" />
            </div>
           <div className="lg:ml-[165px] md:ml-[165px] ml-[83px]">
           <h2 className="font-bold md:text-4xl text-xl  lg:text-4xl mt-4 mb-4">{card.Title}</h2>
           </div>
           <div className="flex justify-center">
           <p className="w-[60vw] ">{card.Description}</p>
           </div>
        </div>
    );
};

export default CardDetails;