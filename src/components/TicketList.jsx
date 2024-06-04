import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const TicketList = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="p-8">
      <div className="border rounded-xl shadow-md p-8">
        <span className="w-full flex items-center gap-2 font-iranSansBold font-bold text-xl">
          <VscSearch />
          جستجوی درخواست ها
        </span>
        <div className="relative my-6">
          <input
            type="search"
            id="Message"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder=" "
            className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer border p-2 outline-none font-iranSans"
          />
          <label
            htmlFor="Message"
            className="absolute text-sm font-iranSans text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            جستجوی عنوان ،شماره یا نوع درخواست
          </label>
        </div>
      </div>
      <div className="lg:border lg:rounded-xl lg:shadow-md mt-8">
        <div className="flex items-center justify-between px-8 pt-4">
          <p className="flex items-center justify-center gap-2 font-bold font-iranSansBold">
            <BiSupport className="text-2xl" />
            درخواست‌های پشتیبانی
          </p>
          <Link
            to="/ticketing/new"
            className="font-iranSans text-[#0077DB] text-sm flex items-center justify-center gap-2 transition border border-white cursor-pointer hover:bg-[#F2F9FF] hover:border-[#C9E3F8] hover:border duration-500 p-1 rounded-lg"
          >
            <span className="font-bold text-xl inline-block align-bottom">
              +
            </span>{" "}
            ایجاد درخواست جدید
          </Link>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 lg:overflow-x-hidden">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light font-iranSans overflow-hidden">
                  <thead className="border-b border-neutral-200 bg-gray-100 text-sm font-iranSansUltraLight">
                    <tr>
                      <th scope="col" className="px-2 md:px-4 lg:px-6 py-2">
                        شماره درخواست
                      </th>
                      <th scope="col" className="px-2 md:px-4 lg:px-6 py-2">
                        نوع درخواست
                      </th>
                      <th scope="col" className="px-2 md:px-4 lg:px-6 py-2">
                        وضعیت
                      </th>
                      <th scope="col" className="px-2 md:px-4 lg:px-6 py-2">
                        آخرین بروزرسانی
                      </th>
                      <th scope="col" className="px-2 md:px-4 lg:px-6 py-2">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="whitespace-nowrap px-2 md:px-4 lg:px-6 py-2">1234</td>
                      <td className="whitespace-nowrap px-2 md:px-4 lg:px-6 py-2">
                        درخواست برداشت از حساب
                      </td>
                      <td className="whitespace-nowrap px-2 md:px-4 lg:px-6 py-2">
                        <span className="text-xs rounded-full py-1 px-4 bg-blue-200 text-blue-500">
                          در حال بررسی
                        </span>
                        {/* <span className="text-xs rounded-full py-1 px-4 bg-green-200 text-green-500">
                          پاسخ داده شده
                        </span>
                        <span className="text-xs rounded-full py-1 px-4 bg-red-200 text-red-500">
                          مشکل
                        </span> */}
                      </td>
                      <td className="whitespace-nowrap px-2 md:px-4 lg:px-6 py-2">
                        14 خرداد - ساعت 14:01
                      </td>
                      <td className="whitespace-nowrap px-2 md:px-4 lg:px-6 py-2">
                        <Link
                          to={`/ticketing/ticket/${1234}`}
                          className="font-iranSans text-[#0077DB] text-sm flex items-center justify-center gap-2 transition border border-white cursor-pointer hover:bg-[#F2F9FF] hover:border-[#C9E3F8] hover:border duration-500 p-1 rounded-lg"
                        >
                          مشاهده درخواست
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
