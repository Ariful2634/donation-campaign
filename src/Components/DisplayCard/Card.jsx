/* eslint-disable react/prop-types */


const Card = ({ cards }) => {
    const { Picture, Title, Category, Category_bg, Card_bg, Text_bg } = cards
    return (
        <div className={`${Card_bg}`}>
            <div className="card   shadow-xl" >
                <figure><img src={Picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className={`${Category_bg}`}>
                        {Category}
                       
                    </h2>
                    <p className={`${Text_bg}`}>{Title}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;