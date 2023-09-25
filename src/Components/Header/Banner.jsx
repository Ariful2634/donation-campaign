import { useEffect, useState } from 'react';
import './Style.css'


const Banner = () => {

    const [name,steName]=useState()
    const [loadData,setLoadData]=useState([])

    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setLoadData(data))
    },[])

    const sub = e=>{
        e.preventDefault()
        console.log(name)
    }

    const nam = e=>{
        steName(e.target.value)
    }

    const textValue = loadData.filter(load=>load.Category===name)
    console.log(textValue)

    return (
        <div className="bg-[url('/src/assets/Rectangle-4281.png')] bg-white bg-opacity-90 bg-cover bg-blend-overlay  bg-no-repeat h-[80vh] py-24 md:py-48 lg:py-48">
             {/* <div className="absolute inset-0 bg-gray-100 h-[522px] top-[88px] opacity-80"></div> */}
            <div>
            <h2 className='text-black text-2xl md:text-4xl lg:text-4xl flex justify-center items-center   font-semibold'>I Grow By Helping People In Need</h2>
            </div>
            <div className='text-center mt-4'>
                <div className="form-control">
                    <div className="input-group flex justify-center items-center">
                        <form onSubmit={sub} >
                        <input onChange={nam} type="text" placeholder="Search Here…" name="name" className="input input-bordered" />
                        <button className="btn btn-error">
                           Search
                        </button>
                        </form>
                    </div>
                </div>
                
            </div>


            <div>
                
            </div>
            
        </div>
    );
};

export default Banner;