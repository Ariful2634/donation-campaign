import './Style.css'

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/donategoods.jpg')] bg-cover bg-blend-overlay opacity-40 bg-no-repeat h-[80vh] py-48">
           
            <h2 className='text-white text-4xl flex justify-center items-center   font-semibold'>I Grow By Helping People In Need</h2>
            <div className='text-center mt-4'>
            <input type="text" />
           <div className='bg-red'>
           <button >Search</button>
           </div>
            </div>
            
           
            <div>
               
            </div>
        </div>
    );
};

export default Banner;