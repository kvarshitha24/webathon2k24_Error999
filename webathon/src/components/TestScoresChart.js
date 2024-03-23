import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TestScoresChart = () => {
    const testHistory = [
        { testNumber: 1, score: 2 },
        { testNumber: 2, score: 5 },
        { testNumber: 3, score: 4 },
        { testNumber: 1, score: 8 },
        { testNumber: 2, score: 10 },
        { testNumber: 3, score: 6 },
        // Add more test data as needed
      ];
    const chartRef = useRef();

    useEffect(() => {
        const labels = testHistory.map(entry => entry.testNumber);
        const scores = testHistory.map(entry => entry.score);

        const chart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Test Scores',
                    data: scores,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            chart.destroy();
        };
    }, [testHistory]);

    return <canvas ref={chartRef} />;
};

export default TestScoresChart;