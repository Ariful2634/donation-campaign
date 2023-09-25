import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';



const CardDetails = () => {
    
    const {id}= useParams()
    // console.log(id)
    const cards = useLoaderData()

    // console.log(cards)
    


    const card = cards.find(cards=>cards.id===id)
   
    const buttonStyle = {
        backgroundColor : card.Category_bg,
    }

    const btnHandle = ()=>{
        const donate = [];
        const item = JSON.parse(localStorage.getItem('donation'))
        
        if(!item){
            donate.push(card)
            localStorage.setItem('donation',JSON.stringify(donate))
            swal("Great Job!", "You have donate successfully!", "success");
        }
        else{
            const isExist = item.find(card=>card.id===id)
            if(!isExist){
                donate.push(...item,card)
                localStorage.setItem('donation',JSON.stringify(donate))
                swal("Great Job!", "You have donate successfully!", "success");
            }
            else{
                swal("Oops!", "You Can't donate!", "error");
            }
        }
    }


    return (
        <div className="max-w-6xl mx-auto mt-10">
            
            <div className="flex justify-center relative">
            <img className="w-[60vw]" src={card.Picture} alt="" />
            <div className="absolute top-[420px] left-[200px]">
                <button onClick={btnHandle} className='btn text-white border-none ' style={buttonStyle}>Donate {card.Price}</button>
            </div>
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