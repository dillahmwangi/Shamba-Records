import { Wheat, Users, BarChart3, ChevronDown, User, Menu, X } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom'; // Use 'react-router-dom'
import { useState , useSelector} from 'react';

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const sidebarItems = [
    {
      category: 'MANAGEMENT',
      items: [
        { icon: BarChart3, label: 'Dashboard', active: true, link: '/' },
        { icon: Users, label: 'Farmers', active: false, link: '/farmers' },
    
        { icon: User, label: 'Logout', active: false, link: '/auth/login' },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex-shrink-0 p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Shamba Records</h1>
              <p className="text-xs text-gray-500">Cooperative Management</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((category, i) => (
            <div key={i} className="mb-6">
              <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                {category.category}
              </h3>
              <nav className="space-y-1 px-2">
                {category.items.map((item, j) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={j}
                      to={item.link}
                      className={`group flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        item.active
                          ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setSidebarOpen(false)} // Close sidebar on link click
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 bg-white shadow-sm border-r border-gray-200 flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Shamba Records</h1>
              <p className="text-xs text-gray-500">Cooperative Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((category, i) => (
            <div key={i} className="mb-6">
              <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                {category.category}
              </h3>
              <nav className="space-y-1 px-2">
                {category.items.map((item, j) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={j}
                      to={item.link}
                      className={`group flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        item.active
                          ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content and Header */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="flex-shrink-0 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu on Mobile */}
            <div className="lg:hidden">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-600 focus:outline-none focus:bg-gray-100">
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className="hidden lg:block"></div> {/* Spacer for alignment on desktop */}

            {/* User Profile */}
            <div className="flex items-center space-x-4">
              <Link to="/profile">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">JA</span>
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-900">John Anderson</p>
                    <p className="text-xs text-gray-500">System Administrator</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-25 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}