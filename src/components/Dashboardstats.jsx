import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const DashboardStats = () => {
  const easing = (t, b, c, d) => {
    t /= d;
    return -c * t * (t - 2) + b;
  };

  const stats = [
    {
      label: "Total Profit Value",
      value: 112321.24,
      decimals: 2,
      icon: <IoInformationCircle className="text-gray-400" />,
    },
    {
      label: "Wallet Balance",
      value: 22390.401,
      decimals: 3,
    },
    {
      label: "Wallet Balance",
      value: 22390.401,
      decimals: 3,
    },
    {
      label: "Monthly Revenue",
      value: 1300.0,
      decimals: 2,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full mt-4 ">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          className="bg-white dark:bg-[#212529] rounded-md border-1 border-gray-100 dark:border-[#292e32] shadow-md px-4 py-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-sm font-medium flex items-center gap-1">
              {stat.label}
              {stat.icon && <span>{stat.icon}</span>}
            </p>
          </div>

          <h1
            style={{ fontFamily: '"Momo Trust Sans", sans-serif' }}
            className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-2"
          >
            $
            <CountUp
              end={stat.value}
              duration={4}
              separator=","
              decimals={stat.decimals}
              easingFn={easing}
              enableScrollSpy
            />
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
