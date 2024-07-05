// components/OrderChart.tsx
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const OrdersChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        data: [40, 30, 20, 50, 60, 70, 80, 90, 100, 110, 120, 130],
        borderColor: '#7C3AED',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Orders</h3>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default OrdersChart;


