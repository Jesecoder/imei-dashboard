// pages/index.tsx
import Sidebar from '../components/Sidebar';
import DashboardHeader from '../components/DashboardHeader';
import StatsCard from '../components/StatsCard';
import OrdersChart from '../components/OrdersChart';
import APICard from '../components/APICard';
import InvoiceCard from '../components/InvoiceCard';
import ContactCard from '../components/ContactCard';

const Home = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <StatsCard
            title="Credit"
            value="3.56"
            description="Top Up"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 3a1 1 0 00-2 0v4a1 1 0 002 0V8z" /></svg>}
          />
          <StatsCard
            title="Orders"
            value="3696"
            description="Order Check"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 3a1 1 0 00-2 0v4a1 1 0 002 0V8z" /></svg>}
          />
          <StatsCard
            title="Order Statistics"
            value="3.6k"
            description="Total Orders"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm12 3a1 1 0 00-2 0v4a1 1 0 002 0V8z" /></svg>}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <OrdersChart />
          <APICard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <InvoiceCard />
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Home;


