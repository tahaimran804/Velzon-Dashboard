import React, { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import { LuArrowDownToLine } from "react-icons/lu";
import DashboardFooter from "../components/DashboardFooter";
import { IoIosSearch } from "react-icons/io";
import TransactionsData from "./../Data/TransactionsData";

const Transactions = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("")
  const categories = [
    "All",
    ...new Set(TransactionsData.map((item) => item.category)),
  ];
  const TransactionsFilter =
    filter === "All"
      ? TransactionsData.filter((item) => {
        const matchSearch = item.id
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchSearch;
      })
      : TransactionsData.filter((item) => {
        const matchCategory = item.category === filter;
        const matchSearch = item.id
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
      });



  const exportCSV = () => {
    const rows = [
      ["ID", "Date", "Time", "Type", "Account", "Amount", "Status"],
      ...TransactionsFilter.map((item) => [
        item.id,
        item.date,
        item.time,
        item.type,
        item.account,
        item.amount_usd,
        item.status,
      ]),
    ];
    const csvContent = rows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="w-[100%] bg-[#EEEEF4] dark:bg-[#1a1d21] h-full overflow-auto">
      <DashboardHeader title={"Dashboard"} />
      <section className="py-5 px-5 mt-6 flex items-end flex-col w-full h-full gap-4">
        <button
          onClick={exportCSV}
          className="flex items-center gap-1 bg-purple-700 rounded-md text-white py-2 px-4"
        >
          <span>
            <LuArrowDownToLine />
          </span>
          Export CSV
        </button>

        <div className="bg-[white] dark:bg-[#292e32] h-[100vh] shadow-md w-full overflow-y-scroll rounded-md">
          <div className="flex md:flex-row flex-col-reverse gap-4 items-center justify-between w-full px-8 py-3 border-b border-gray-100">
            <ul className="flex items-center gap-4 flex-wrap justify-between w-full md:gap-10 text-lg text-black dark:text-white">
              {categories.map((ElemItem) => (
                <li
                  key={ElemItem}
                  onClick={() => setFilter(ElemItem)}
                  className={`cursor-pointer transition-all list-none capitalize ${filter === ElemItem
                    ? "text-purple-600 font-bold border-b-2 border-purple-600 pb-1"
                    : "hover:text-purple-500 text-black dark:text-white"
                    }`}
                >
                  {ElemItem}
                </li>
              ))}
            </ul>

            <div className="flex items-end justify-end w-full">
              <li className="flex items-center gap-1 text-black dark:text-white">
                <span className="text-2xl">
                  <IoIosSearch />
                </span>
                <input
                  className="w-full border-0 outline-0 py-2 px-2 placeholder:text-black dark:placeholder:text-white border-b border-gray-500 text-[16px] placeholder:text-sm"
                  type="text"
                  placeholder="Search by ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </li>
            </div>
          </div>

          {/* Horizontal scroll wrapper */}
          <div className="overflow-x-auto">
            <div className="w-[900px] lg:w-[100%] bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800">
              {/* Header Row */}
              <div className="bg-gray-50 dark:bg-[#1a1d21] px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <ul className="grid grid-cols-5 text-[16px] font-semibold text-gray-600 dark:text-gray-300 min-w-[800px]">
                  <li>ID</li>
                  <li>Date & Time</li>
                  <li>Type</li>
                  <li>Amount</li>
                  <li className="text-center">Status</li>
                </ul>
              </div>

              {/* Transaction Rows */}
              <div className="divide-y divide-gray-100 dark:divide-[#292e32]">

                {TransactionsFilter.length === 0 ? (
                  <div className="text-center py-10 text-gray-500 dark:text-gray-300 text-lg font-semibold">
                    No Results Found
                  </div>
                ) : (
                  TransactionsFilter.map((item) => (
                    <ul
                      key={item.id}
                      className="grid grid-cols-5 items-center px-6 py-4 hover:bg-gray-50 dark:hover:bg-[#292e32] dark:bg-[#1a1d21] bg-[white] transition min-w-[800px]"
                    >
                      <li className="text-base font-semibold text-gray-800 dark:text-gray-100">
                        {item.id}
                      </li>

                      <li className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                          {item.date}
                        </span>
                        <span className="text-sm text-gray-500">{item.time}</span>
                      </li>

                      <li className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-500">{item.account}</span>
                      </li>

                      <li
                        className={`text-base font-semibold ${parseFloat(item.amount_usd.replace(/[$,]/g, "")) > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                          }`}
                      >
                        {item.amount_usd}
                      </li>

                      <li className="flex justify-center">
                        <span
                          className={`px-4 py-1 text-sm font-semibold rounded-full text-white ${item.status === "pending"
                            ? "bg-yellow-500/90"
                            : item.status === "complete"
                              ? "bg-green-600"
                              : item.status === "processing"
                                ? "bg-blue-500"
                                : "bg-red-600"
                            }`}
                        >
                          {item.status}
                        </span>
                      </li>
                    </ul>
                  ))
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <DashboardFooter /> */}
    </div>
  );
};

export default Transactions;
