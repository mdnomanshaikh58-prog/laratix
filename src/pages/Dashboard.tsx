import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Package,
  Clock,
  CheckCircle2,
  XCircle,
  LogOut,
  User,
  Settings,
  FileText,
  Calendar,
} from 'lucide-react';

interface Order {
  id: string;
  serviceId: string;
  serviceName: string;
  tier: string;
  price: string;
  deliveryTime: string;
  paymentMethod: string;
  orderDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
}

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/dashboard' } });
      return;
    }

    // Get user info
    setUserName(localStorage.getItem('userName') || 'User');
    setUserEmail(localStorage.getItem('userEmail') || 'user@example.com');

    // Load orders from localStorage
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }

    // Check if new order was placed
    const state = location.state as any;
    if (state?.orderPlaced && state?.orderDetails) {
      const newOrder = {
        ...state.orderDetails,
        id: `ORD-${Date.now()}`,
      };
      const updatedOrders = [newOrder, ...orders];
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      // Clear the state
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'in-progress':
        return <Package className="w-5 h-5" />;
      case 'completed':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {userName}!
              </h1>
              <p className="text-gray-600">{userEmail}</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter((o) => o.status === 'pending').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter((o) => o.status === 'in-progress').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orders.filter((o) => o.status === 'completed').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Orders</h2>

          {orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
              <p className="text-gray-600 mb-6">
                Start your first project with Laratix Lab
              </p>
              <Link
                to="/services"
                className="inline-block bg-[#0CB35D] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0a9d4f] transition-colors"
              >
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Order Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <FileText className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {order.serviceName}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Package className="w-4 h-4" />
                              {order.tier} Package
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(order.orderDate).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              Delivery: {order.deliveryTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Status */}
                      <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {getStatusIcon(order.status)}
                        <span className="capitalize">{order.status.replace('-', ' ')}</span>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-gray-600 mb-1">Total</p>
                        <p className="text-xl font-bold text-gray-900">{order.price}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link
                          to={`/services/${order.serviceId}`}
                          className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          View Service
                        </Link>
                        <Link
                          to="/contact"
                          className="px-4 py-2 bg-[#0CB35D] text-white rounded-lg text-sm font-medium hover:bg-[#0a9d4f] transition-colors"
                        >
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Order ID */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Order ID: {order.id}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/services"
            className="bg-gradient-to-br from-[#0CB35D] to-[#0a9d4f] text-white rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <Package className="w-10 h-10 mb-4" />
            <h3 className="font-bold text-lg mb-2">Browse Services</h3>
            <p className="text-white/90 text-sm">
              Explore our analytics services and start a new project
            </p>
          </Link>

          <Link
            to="/contact"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <User className="w-10 h-10 text-gray-600 mb-4" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">Get Support</h3>
            <p className="text-gray-600 text-sm">
              Contact our team for help with your projects
            </p>
          </Link>

          <Link
            to="/portfolio"
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <FileText className="w-10 h-10 text-gray-600 mb-4" />
            <h3 className="font-bold text-lg text-gray-900 mb-2">View Portfolio</h3>
            <p className="text-gray-600 text-sm">
              See examples of our previous work and case studies
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
