import { FaUsers, FaSeedling } from 'react-icons/fa';
import { LuWallet } from "react-icons/lu";
import { HiOutlineDocumentText } from "react-icons/hi2";

const Home= () => {
    // Hardcoded data for demonstration
    const summaryData = [
        {
            title: 'Total Farmers',
            value: '847',
            change: '+12%',
            period: 'vs last month',
            icon: <FaUsers className="w-8 h-8 text-green-600 p-2 bg-green-100 rounded-lg" />,
        },
        {
            title: 'Active Crops',
            value: '2,156',
            change: '+8%',
            period: 'vs last month',
            icon: <FaSeedling className="w-8 h-8 text-green-600 p-2 bg-green-100 rounded-lg" />,
        },
        {
            title: 'Total Harvest',
            value: '45.2k',
            change: '-3%',
            period: 'vs last season',
            icon: <HiOutlineDocumentText className="w-8 h-8 text-amber-500 p-2 bg-amber-100 rounded-lg" />,
        },
        {
            title: 'Revenue',
            value: '$1.2M',
            change: '+15%',
            period: 'vs last quarter',
            icon: <LuWallet className="w-8 h-8 text-purple-600 p-2 bg-purple-100 rounded-lg" />,
        },
    ];

    const recentActivityData = [
        {
            user: 'Maria Rodriguez',
            action: 'added new crop',
            item: 'Organic Tomatoes',
            time: '2 mins ago',
        },
        {
            user: 'John Anderson',
            action: 'updated farm profile',
            item: 'Farm B',
            time: '15 mins ago',
        },
        {
            user: 'Alex Chen',
            action: 'uploaded financial report',
            item: 'Q3 2024',
            time: '1 hr ago',
        },
        {
            user: 'Sara Lee',
            action: 'completed harvest for',
            item: 'Wheat',
            time: '2 hrs ago',
        },
    ];

    return (
        <div className="p-8 space-y-8 bg-white">
            {/* Dashboard Header */}
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-600">
                <h1 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back! Here's what's happening with your cooperative today.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {summaryData.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">{item.title}</p>
                            <h2 className="text-3xl font-bold text-gray-900 mt-1">{item.value}</h2>
                            <p className={`text-sm mt-1 ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {item.change} <span className="text-gray-500">{item.period}</span>
                            </p>
                        </div>
                        {item.icon}
                    </div>
                ))}
            </div>

            {/* Main Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-800">Crops by Type</h3>
                        <div className="flex space-x-2">
                            <button className="text-sm px-4 py-1 rounded-full text-gray-600 hover:bg-gray-100">Month</button>
                            <button className="text-sm px-4 py-1 rounded-full bg-green-600 text-white hover:bg-green-700">Year</button>
                        </div>
                    </div>
                    <div className="mt-4 h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-lg">
                        Placeholder for chart or graph
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-gray-800">Farmer Distribution</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0-4a2 2 0 110-4 2 2 0 010 4z"/></svg>
                        </button>
                    </div>
                    <div className="mt-4 h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-lg">
                        Placeholder for map or distribution chart
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
                    <a href="#" className="text-sm text-green-600 hover:underline">View All</a>
                </div>
                <div className="space-y-4">
                    {recentActivityData.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt={activity.user} />
                            <div className="flex-1">
                                <p className="text-sm">
                                    <span className="font-semibold text-gray-900">{activity.user}</span> {activity.action} <span className="font-semibold text-green-700">{activity.item}</span>
                                </p>
                                <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
