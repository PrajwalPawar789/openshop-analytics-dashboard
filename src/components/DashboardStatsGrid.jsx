import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';

export default function DashboardStatsGrid() {
	return (
		<div className="flex flex-wrap justify-center md:justify-start gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-xl md:text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm md:text-base text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-base md:text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm md:text-base text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-xl md:text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm md:text-base text-gray-500 font-light">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-base md:text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm md:text-base text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-xl md:text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm md:text-base text-gray-500 font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-base md:text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm md:text-base text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-green-600">
					<IoCart className="text-xl md:text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm md:text-base text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-base md:text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm md:text-base text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	);
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 mb-4 md:mb-0 md:mr-4 md:last:mr-0 flex items-center">{children}</div>;
}
