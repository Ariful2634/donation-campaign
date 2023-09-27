import { useEffect, useState } from "react";
import ApexChart from "react-apexcharts"

const Statistics = () => {

    const [data, setData] = useState([])
    const [donationId, setDonationId] = useState([])
    const [parcent, setParcent] = useState(0)

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(val => setData(val))
        const item = JSON.parse(localStorage.getItem('donation'))
        if (item) {
            setDonationId(item)
        }
    }, [])

    useEffect(() => {
        const donationAmount = donationId.reduce((arf, singId) => {
            const matId = data.find((val) => val.id === parseInt(singId.id))
            if (matId) {

                return arf + matId.Price
            }
            return arf

        }, 0)
        if (donationAmount > 0 && data.length > 0) {
            const totalDonate = data.reduce((arf, totalPrice) => arf + totalPrice.Price, 0)
            const calculate = (donationAmount / totalDonate) * 100
            setParcent(calculate)
        }
        else {
            setParcent(0)
        }
    }, [donationId, data])

    const userParcent = 100 - parcent;
    const chart = [{
        name: 'Your Donation',
        data: 100 - userParcent,
    },
    {
        name: 'Total Donations',
        data: userParcent,
    }
    ]
    const setting = {
        labels: chart.map(val => val.name),
        legend: {
            position: 'bottom'
        }

    }

    return (
        <div className="flex justify-center mx-auto lg:mt-20">
            <div className="w-full md:w-2/3 lg:w-1/2">
                <ApexChart options={setting} series={chart.map(val => val.data)} type="pie" >

                </ApexChart>
            </div>

        </div>
    );
};

export default Statistics;