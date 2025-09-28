import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Stu 1", "physics": 78, "chemistry": 82, "biology": 74 },
  { "id": 2, "name": "Stu 2", "physics": 65, "chemistry": 71, "biology": 69 },
  { "id": 3, "name": "Stu 3", "physics": 90, "chemistry": 87, "biology": 92 },
  { "id": 4, "name": "Stu 4", "physics": 56, "chemistry": 62, "biology": 59 },
  { "id": 5, "name": "Stu 5", "physics": 81, "chemistry": 77, "biology": 85 },
  { "id": 6, "name": "Stu 6", "physics": 69, "chemistry": 74, "biology": 72 },
  { "id": 7, "name": "Stu 7", "physics": 88, "chemistry": 91, "biology": 86 },
  { "id": 8, "name": "Stu 8", "physics": 73, "chemistry": 68, "biology": 70 },
  { "id": 9, "name": "Stu 9", "physics": 95, "chemistry": 89, "biology": 93 },
  { "id": 10, "name": "Stu 10", "physics": 60, "chemistry": 65, "biology": 63 }
]

const ResultsChart = () => {
    return (
        <div className='ml-24 my-7'>
            <LineChart width={600} height={300} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='chemistry'></Line>
                <Line dataKey={'biology'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;