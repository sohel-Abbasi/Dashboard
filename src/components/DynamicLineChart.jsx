import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const XAXISRANGE = 777000; // Example range, adjust as needed

// Helper to generate new data points
function getNewSeries(lastDate, range) {
  const newDate = lastDate + 86400000; // Add 1 day in ms
  const newValue =
    Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  return { x: newDate, y: newValue };
}

const DynamicLineChart = () => {
  const chartRef = useRef(null);
  const dataRef = useRef([]);
  const lastDateRef = useRef(new Date().getTime());

  useEffect(() => {
    // Initialize data
    let data = [];
    let lastDate = lastDateRef.current;
    for (let i = 0; i < 10; i++) {
      const point = getNewSeries(lastDate, { min: 10, max: 90 });
      data.push(point);
      lastDate = point.x;
    }
    dataRef.current = data;
    lastDateRef.current = lastDate;

    const options = {
      series: [
        {
          data: data.slice(),
        },
      ],
      chart: {
        id: "realtime",
        height: 350,
        type: "line",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Dynamic Updating Chart",
        align: "left",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        range: XAXISRANGE,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Interval for updating chart
    const interval = setInterval(() => {
      let lastDate = lastDateRef.current;
      const newPoint = getNewSeries(lastDate, { min: 10, max: 90 });
      dataRef.current.push(newPoint);
      lastDateRef.current = newPoint.x;

      // Keep only the latest 10 points
      if (dataRef.current.length > 10) {
        dataRef.current.shift();
      }

      chart.updateSeries([
        {
          data: dataRef.current,
        },
      ]);
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
      chart.destroy();
    };
  }, []);

  return (
    <div className="dynamic-line-chart">
      <h3>Dynamic Updating Chart</h3>
      <p>Real-time data updates every second</p>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DynamicLineChart;
