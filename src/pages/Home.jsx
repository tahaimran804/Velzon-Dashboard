import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi";
import { IoInformationCircle } from "react-icons/io5";
import DashboardStats from '../components/Dashboardstats';
import StockPage from '../components/StockPage';
import RecentTransactions from '../components/RecentTransactions';
import DashboardFooter from '../components/DashboardFooter';

const Home = () => {
  return (
    <div className='w-[100%] bg-[#EEEEF4] dark:bg-[#1a1d21] h-full overflow-auto'>
      <DashboardHeader title={"Dashboard"} />
      <section>
        <div className='w-full mt-6 flex flex-col items-center justify-between py-5 px-5 bg-[white] dark:bg-[#292e32]'>
          <div className='flex w-full gap-2 items-center justify-start sm:justify-end'>
            <button className='bg-purple-700 py-3 px-6 w-[140px] rounded-lg text-white flex items-center justify-center gap-1'><span><PiHandDeposit /></span> Deposit</button>
            <button className='bg-purple-700 py-3 px-6 w-[140px] rounded-lg text-white flex items-center justify-center gap-1'><span><PiHandWithdraw /></span> Withdraw</button>
          </div>
          <DashboardStats />
        </div>

        <div className="mt-6 py-4 px-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="w-full h-[auto] rounded-md bg-white dark:bg-[#212529]">
            <StockPage />
          </div>
          <div className="w-full px-4 py-4 rounded-md h-[auto] bg-white dark:bg-[#212529]">
            <p className='text-[16px] sm:text-xl text-black dark:text-white font-bold'>Recent Transactions</p>
            <RecentTransactions />
          </div>
        </div>

        <div className='py-4 px-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex flex-col gap-1 items-start bg-white dark:bg-[#212529] py-4 px-4 rounded-md'>
            <button className='bg-purple-700 text-white py-1 px-4 rounded-full'>Loans</button>
            <h3 className='text-sm sm:text-lg font-semibold text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium quas maiores commodi quaerat?</h3>
          </div>
          <div className='flex flex-col gap-1 items-start bg-purple-700 py-4 px-4 rounded-xl'>
            <button className='bg-white text-black py-1 px-4 rounded-full'>Contact</button>
            <h3 className='sm:text-lg text-sm font-semibold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium quas maiores commodi quaerat?</h3>
          </div>
        </div>
      </section>
      <DashboardFooter />
    </div>
  )
}

export default Home