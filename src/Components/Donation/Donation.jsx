import { useEffect, useState } from "react";
import DonationDetails from "./DonationDetails";


const Donation = () => {


    const [donation,setDonation]=useState([])
    const [noDonation,setNoDonation]=useState("")
    const [show,setShow]=useState(false)

    
    useEffect(()=>{
        
        const item = JSON.parse(localStorage.getItem('donation'))
       if(item){
        setDonation(item)
       }
       else{
        
        setNoDonation("There is no donation yet")
       }
    },[])


    return (
        <div>
          
            
           { noDonation ? <p className="text-5xl text-center mt-20">There is no donation yet</p> :
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto gap-8 mt-8">
                    {
                       show ?  donation.map(donate=><DonationDetails key={donate.id} donate={donate}></DonationDetails>) :
                       donation.slice(0,4).map(donate=><DonationDetails key={donate.id} donate={donate}></DonationDetails>)
                    }
                </div>
                <div className="text-center mt-6">
                    <button onClick={()=>setShow(!show)} className="btn bg-[#009444] text-white">See All</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Donation;