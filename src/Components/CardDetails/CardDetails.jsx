import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';



const CardDetails = () => {

    const { id } = useParams()

    const cards = useLoaderData()
    // const intId = parseInt(id)





    const card = cards.find(cards => cards.id == id)

    const buttonStyle = {
        backgroundColor: card.Category_bg,
    }

    const btnHandle = () => {
        const donate = [];
        const item = JSON.parse(localStorage.getItem('donation'))

        if (!item) {
            donate.push(card)
            localStorage.setItem('donation', JSON.stringify(donate))
            swal("Great Job!", "You have donate successfully!", "success");
        }
        else {
            const isExist = item.find(card => card.id === id)
            if (!isExist) {
                donate.push(...item, card)
                localStorage.setItem('donation', JSON.stringify(donate))
                swal("Thank You!", "You have donate successfully!", "success");
            }
            
        }
    }


    return (
        <div className="max-w-6xl mx-auto mt-10">

            <div className="flex justify-center relative">
                <img className="w-[60vw]" src={card.Picture} alt="" />
                <div className="inset-0 bg-black opacity-50 w-[255px] h-[65px] top-[94px] left-[85px] md:w-[459px] md:h-[75px] md:top-[213px] 
                md:left-[155px] lg:w-[820px]  lg:h-[100px] absolute  lg:left-[165px]  lg:top-[410px]">

                </div>

                <div className="absolute top-[105px] left-[100px] md:top-[230px] md:left-[170px] lg:top-[440px] lg:left-[200px] ">
                    <button onClick={btnHandle} className='btn text-white border-none ' style={buttonStyle}>Donate ${card.Price}</button>
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