import './Style.css'

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/Rectangle-4281.png')] bg-cover bg-blend-overlay opacity-40 bg-no-repeat h-[80vh] py-48">

            <h2 className='text-black text-2xl md:text-4xl lg:text-4xl flex justify-center items-center   font-semibold'>I Grow By Helping People In Need</h2>
            <div className='text-center mt-4'>
                <div className="form-control">
                    <div className="input-group flex justify-center">
                        <input type="text" placeholder="Search Here…" className="input input-bordered" />
                        <button className="btn btn-error">
                           Search
                        </button>
                    </div>
                </div>
                
            </div>


            <div>

            </div>
        </div>
    );
};

export default Banner;