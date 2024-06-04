import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import INFO from "../assets/information.png";
import AGENCY from "../assets/agency.png";
import MONEY from "../assets/save-money.png";
import WALLET from "../assets/wallet.png";
import { MdKeyboardArrowLeft } from "react-icons/md";

const TicketingMobile = () => {
  return (
    <div>
      <div className="py-4 border-b-2 ">
        <Link
          to="/ticket/list"
          className="flex items-center gap-4 cursor-pointer border border-white hover:border-blue-200 hover:bg-blue-200 w-fit p-2 rounded-lg transition duration-300"
        >
          <FaArrowRightLong size={20} />
          <span className="font-iranSansMedium text-sm md:text-lg lg:text-xl">
            درخواست پشتیبانی آنلاین
          </span>
        </Link>
      </div>
      <div>
        <ul className="p-4">
          <li className="cursor-pointer py-4 border-b-2">
            <Link
              to="/ticketing/new/form"
              className="flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={WALLET}
                  alt="wallet"
                  className="w-6 h-6 object-cover group-hover:brightness-0 group-hover:invert transition duration-300"
                />
                <span className="font-iranSansBold font-bold text-sm">
                  برداشت از حساب
                </span>
              </div>
              <MdKeyboardArrowLeft color="#aaa" size={20} />
            </Link>
          </li>
          <li className="cursor-pointer py-4 border-b-2">
            <Link
              to="/ticketing/new/form"
              className="flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={MONEY}
                  alt="MONEY"
                  className="w-6 h-6 object-cover group-hover:brightness-0 group-hover:invert transition duration-300"
                />
                <span className="font-iranSansBold text-sm">واریز به حساب</span>
              </div>
              <MdKeyboardArrowLeft color="#aaa" size={20} />
            </Link>
          </li>
          <li className="cursor-pointer py-4 border-b-2">
            <Link
              to="/ticketing/new/form"
              className="flex items-center justify-between gap-4 cursor-pointer"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={AGENCY}
                  alt="agency"
                  className="w-6 h-6 object-cover group-hover:brightness-0 group-hover:invert transition duration-300"
                />
                <span className="font-iranSansBold text-sm">نمایندگی</span>
              </div>
              <MdKeyboardArrowLeft color="#aaa" size={20} />
            </Link>
          </li>
          <li className="cursor-pointer py-4 border-b-2">
            <Link
              to="/ticketing/new/form"
              className="flex items-center justify-between "
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={INFO}
                  alt="info"
                  className="w-6 h-6 object-cover group-hover:brightness-0 group-hover:invert transition duration-300"
                />
                <span className="font-iranSansBold text-sm">عمومی</span>
              </div>
              <MdKeyboardArrowLeft color="#aaa" size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TicketingMobile;
