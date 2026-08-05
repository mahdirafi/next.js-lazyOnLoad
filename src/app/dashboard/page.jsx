'use client';
// import HeavyCharts from '@/components/HeavyCharts';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const HeavyCharts = dynamic(() => import('@/components/HeavyCharts'), 
     {
     loading: () => <p>Loading...</p>,
    }
);

const LineChart = dynamic( () => import('@/components/Charts').then((mon) => mon.LineChart))
const PieChart = dynamic( () => import('@/components/Charts').then((mon) => mon.PieChart))

const Dashboard = () => {

    const [showCharts, setShowCharts] = useState(false);
    return (
        <div className="p-6 space-y-3">
            <button className="bg-amber-800 text-amber-50 px-4 py-3 mb-12 cursor-pointer"
                onClick={ ()=> {setShowCharts(true)}}>
                Show the Charts
             </button>

             {showCharts &&  <HeavyCharts/>}

             <LineChart/>

             <PieChart/>
        </div>
    );
};

export default Dashboard;