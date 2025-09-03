
import { 
  BarChart3, 
  Users, 
  Wheat, 
  Building2, 
  TrendingUp, 
  FileText, 
  Truck, 
  Calendar, 
  UserCog, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown,
} from 'lucide-react';
import { Link, Outlet } from 'react-router';

export default function Index ()  {
  const sidebarItems = [
    {
      category: 'MANAGEMENT',
      items: [
        { icon: BarChart3, label: 'Dashboard', count: null, active: true, link: '/dashboard/home' },
        { icon: Users, label: 'Farmers', count: 847, active: false, link: '/dashboard/farmers' },
        { icon: Wheat, label: 'Crops', count: '2.1k', active: false, link: '/dashboard/crops' },

        // { icon: Building2, label: 'Cooperatives', count: 12, active: false }
      ]
    },
    // {
    //   category: 'OPERATIONS',
    //   items: [
    //     { icon: TrendingUp, label: 'Analytics', count: null, active: false },
    //     { icon: FileText, label: 'Financial Reports', count: null, active: false },
    //     { icon: Truck, label: 'Supply Chain', count: null, active: false },
    //     { icon: Calendar, label: 'Seasonal Planning', count: null, active: false }
    //   ]
    // },
    // {
    //   category: 'SYSTEM',
    //   items: [
    //     { icon: UserCog, label: 'User Roles', count: null, active: false },
    //     { icon: Settings, label: 'Settings', count: null, active: false }
    //   ]
    // }
  ];



  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">AgriCoop</h1>
              <p className="text-xs text-gray-500">Cooperative Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6">
              <h3 className="px-4 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
                {category.category}
              </h3>
              <nav className="space-y-1 px-2">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={itemIndex}
                      to={item.link}
                      className={`group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        item.active
                          ? 'bg-green-50 text-green-700 border-r-2 border-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* <Icon className={w-5 h-5 ${item.active ? 'text-green-600' : 'text-gray-400'}} /> */}
                        <span>{item.label}</span>
                      </div>
                      {item.count && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {item.count}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                  Admin Portal
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Live Environment
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search farmers, crops, reports..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              {/* Settings */}
              <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-900" />

              {/* User Profile */}
              <Link to="/dashboard/profile">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
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

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
        </main>
      </div>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors">
          <span className="text-sm font-medium px-2">Help</span>
        </button>
      </div>
    </div>
  );
};

