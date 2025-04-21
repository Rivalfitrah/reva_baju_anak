import React from 'react'

function SidebarDash() {
  return (
    <>
        <div className="w-64 bg-white h-screen fixed top-0 left-0 shadow-lg">
            <div className="flex items-center justify-center h-14 border-b">
            <h1 className="text-lg font-bold">Dashboard</h1>
            </div>
            <div className="p-4">
            <ul>
                <li className="flex items-center space-x-2 py-2">
                <a href="/dashboard" className="text-gray-600">
                    <span>Dashboard</span>
                </a>
                </li>
                <li className="flex items-center space-x-2 py-2">
                <a href="/dashboard/products" className="text-gray-600">
                    <span>Products</span>
                </a>
                </li>
                <li className="flex items-center space-x-2 py-2">
                <a href="/dashboard/orders" className="text-gray-600">
                    <span>Orders</span>
                </a>
                </li>
                <li className="flex items-center space-x-2 py-2">
                <a href="/dashboard/customers" className="text-gray-600">
                    <span>Customers</span>
                </a>
                </li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default SidebarDash