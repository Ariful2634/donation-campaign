/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ cards }) => {

    const displayStyle = {
        backgroundColor : cards.Card_bg,
        color:cards.Category_bg
    }
    const buttonStyle = {
        backgroundColor : cards.Card_bg,
    }

    const {id, Picture, Title, Category } = cards


    const cardHandle = ()=>{
        console.log('click')
    }

    return (
        <div >
            <Link to={`/details/${id}`}>
            <div onClick={cardHandle} className="card shadow-xl" style={displayStyle}>
                <figure><img  src={Picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="w-[80px] " ><button className="px-3 rounded py-1 text-[14px] font-[500]" style={buttonStyle}>{Category}</button></div>
                    <p className="font-semibold text-[18px]">{Title}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;