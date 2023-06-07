import {Line} from 'react-chartjs-2';
import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
export function Chart({title, data}) {
    var data = {
        labels: data,
        datasets: [
            {
                label: 'Voltage',
                data: data,
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: 'rgba(37, 99, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(37, 99, 235, 0.4)',
                hoverBorderColor: 'rgba(37, 99, 235, 1)',
            },
        ]
    };

    return (
        <div class="w-full bg-white border border-zinc-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-700">
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-zinc-200 rounded-t-lg bg-zinc-50 dark:border-zinc-700 dark:text-gray-400 dark:bg-zinc-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <li class="mr-2 inline-block p-4 text-black rounded-tl-lg dark:bg-zinc-800 dark:text-white">
                    {title}
                </li>
            </ul>
            <a class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-zinc-700 dark:border-zinc-700 dark:hover:bg-zinc-900">
                <Line data={data}/>
            </a>
        </div>
    );
}
