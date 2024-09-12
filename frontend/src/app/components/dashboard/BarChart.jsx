import { DashboardContext } from "@/app/context/dashboard-context";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const { bar } = useContext(DashboardContext);
  const data1 = {
    labels: ["Jan", "Feb"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: [20_000, 15_000],
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: [15_000, 10_000_000_000],
      },
    ],
  };

  const options1 = {
    responsive: true,

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card">
      {/* {barChartData && <Bar data={data1} options={options1} />} */}
      <Bar data={data1} options={options1} />
      {/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
    </div>
  );
};

export default BarChart;
