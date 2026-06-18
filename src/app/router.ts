import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Dashboard from '@/pages/Dashboard';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Payment from '@/pages/Payment';
import Portfolio from '@/pages/Portfolio';
import Pricing from '@/pages/Pricing';
import Process from '@/pages/Process';
import ServiceDetail from '@/pages/ServiceDetail';
import Services from '@/pages/Services';
import Signup from '@/pages/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "services/:serviceId", Component: ServiceDetail },
      { path: "portfolio", Component: Portfolio },
      { path: "about", Component: About },
      { path: "process", Component: Process },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "payment", Component: Payment },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
      { path: "dashboard", Component: Dashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
