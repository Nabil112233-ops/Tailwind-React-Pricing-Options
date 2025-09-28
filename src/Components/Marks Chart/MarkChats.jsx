import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChats = ({ marksPromise }) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // Data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.subjects.physics,
            chemistry: studentData.subjects.chemistry,
            biology: studentData.subjects.biology
        }
        const avg = (student.physics + student.chemistry + student.biology) / 3;
        student.avg = avg;
        return student
    })

    return (
        <div>
            <BarChart width={1100} height={500} data={marksChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='red'></Bar>
                <Bar dataKey={'physics'} fill='green'></Bar>
                <Bar dataKey={'biology'} fill='yellow'></Bar>
                <Bar dataKey={'chemistry'} fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarkChats;