/* eslint-disable react/prop-types */


const DonationDetails = ({ donate }) => {
    const {Picture,Category,Title,Price} = donate;
    const displayStyle = {
        backgroundColor : donate.Card_bg,
        color:donate.Category_bg
    }
    const buttonStyle = {
        backgroundColor : donate.Category_bg,
    
    }

    const textStyle = {
        backgroundColor : donate.Card_bg,
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl" style={displayStyle}>
                <figure><img className="h-[220px] w-[230px]" src={Picture} alt="Movie" /></figure>
                <div className="card-body">
                    
                    <div className="w-[80px] " ><button className="px-3 rounded py-1 text-[14px] font-[500]" style={textStyle}>{Category}</button></div>
                    <p className="font-bold text-black">{Title}</p>
                    <p className="font-bold">{Price}</p>
                    <div className="card-actions ">
                        <button className="btn text-white"style={buttonStyle}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default DonationDetails;