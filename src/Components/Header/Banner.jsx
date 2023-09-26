import { useEffect, useState } from 'react';
import DisplayCard from '../DisplayCard/DisplayCard'
import './Style.css'

const Banner = () => {
    const [name, setName] = useState('');
    const [loadData, setLoadData] = useState([]);
    const [change, setChange] = useState('');

    const func = () => {
        setName(change);
    }

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setLoadData(data))
            .catch(error => console.error('Error loading data:', error));
    }, []);

    const sub = e => {
        e.preventDefault();
    }

    const nam = e => {
        setChange(e.target.value);
    }

    // Set textValue to all data when name is empty, otherwise filter it
    const textValue = name ? loadData.filter(item => item.Category.includes(name)) : loadData;

    return (
        <div>
            <div className="bg-[url('/src/assets/Rectangle-4281.png')] bg-white bg-opacity-90 bg-cover bg-blend-overlay bg-no-repeat h-[80vh] py-24 md:py-48 lg:py-48">
                <div>
                    <h2 className='text-black text-2xl md:text-4xl lg:text-4xl flex justify-center items-center font-semibold'>I Grow By Helping People In Need</h2>
                </div>
                <div className='text-center mt-4'>
                    <div className="form-control">
                        <div className="input-group flex justify-center items-center">
                            <form onSubmit={sub}>
                                <input onChange={nam} type="text" placeholder="Search Here…" name="name" className="input input-bordered" />
                                <button onClick={func} className="btn btn-error">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <DisplayCard value={textValue}></DisplayCard>
        </div>
    );
};

export default Banner;