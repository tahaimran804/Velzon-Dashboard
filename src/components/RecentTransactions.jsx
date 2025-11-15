import React from 'react'
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from 'react-router'
const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      title: "USDT Deposit",
      date: "25-08-2025",
      time: "12:33 PM",
      amount: "$112,031.65",
      type: "deposit"
    },
    {
      id: 2,
      title: "BTC Withdraw",
      date: "26-08-2025",
      time: "03:45 PM",
      amount: "$520.00",
      type: "withdraw"
    },
    {
      id: 3,
      title: "ETH Purchase",
      date: "27-08-2025",
      time: "09:10 AM",
      amount: "$2,450.75",
      type: "withdraw"
    },
    {
      id: 4,
      title: "Referral Bonus",
      date: "28-08-2025",
      time: "01:25 PM",
      amount: "$150.00",
      type: "deposit"
    },
  ];
  const visibleTransaction = transactions.slice(0, 4);
  return (
    <div className="w-full">
      <ul className="my-4 flex flex-col gap-2 items-start">
        {visibleTransaction.map((tx) => (
          <li
            key={tx.id}
            className="flex flex-col w-full bg-white dark:bg-[#292e32] rounded-md shadow-sm"
          >
            <div className="flex items-center gap-2 justify-between w-full py-3 px-3">
              {/* Left Side */}
              <div className="flex sm:items-center items-start sm:flex-row flex-col gap-3">
                <span className="bg-[#f5f5f5] dark:bg-[#212529] dark:text-white text-black py-2 px-2 flex items-center justify-center text-xl rounded-full">
                  <HiMiniCurrencyDollar />
                </span>
                <div className="flex flex-col items-start">
                  <h3 className="text-base font-semibold text-black dark:text-white">{tx.title}</h3>
                  <p className="flex items-center flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-300">
                    <span>{tx.date}</span>
                    <span>{tx.time}</span>
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex gap-1 items-center flex-wrap">
                {tx.type === "deposit" ? (
                  <FaPlus className="text-green-600 text-sm" />
                ) : (
                  <FaMinus className="text-red-600 text-sm" />
                )}
                <h3 className="text-base font-semibold text-black dark:text-white">{tx.amount}</h3>
              </div>
            </div>

            {/* Center Line */}
            <div className="w-[90%] mx-auto h-[1px] bg-[#f5f5f5] dark:bg-[#212529]"></div>
          </li>
        ))}
      </ul>
      <Link to={"/transactions"}>
      <button className='w-full py-2 bg-[#f5f5f5] dark:bg-[#292e32] dark:text-white text-black text-lg rounded-full'>View All</button>
      </Link>
    </div>
  );
};

export default RecentTransactions;
