import { useEffect, useState } from "react";
import Card from "./Card";

const DisplayCard = () => {
    const [card,setCard]=useState([])

    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data =>setCard(data))
    },[])

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-3 mt-10">
                {
                    card.map(cards=><Card key={cards.id} cards={cards}></Card>)
                }
            </div>
        </div>
    );
};

export default DisplayCard;