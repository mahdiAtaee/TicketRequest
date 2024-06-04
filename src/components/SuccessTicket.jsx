import { Link } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import SUCCESS from "../assets/success.svg";
const SuccessTicket = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg border border-gray-100 w-full h-screen flex items-center justify-center md:h-full md:block">
      <div className="hidden md:flex items-center justify-between">
        <p className="flex items-center justify-center gap-2 font-bold font-iranSansBold">
          <BiSupport className="text-2xl" />
          درخواست‌های پشتیبانی
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-center py-8">
          <img src={SUCCESS} alt="SUCCESS" className="w-[90%] md:w-[50%]"/>
        </div>
        <p
          className="text-sm md:text-lg my-4 font-bold font-iranSansBold w-full md:w-2/3 text-center mx-auto "
          dir="rtl"
        >
          درخواست پشتیبانی شما با موفقیت ثبت شد.
        </p>
        <p className="text-xs md:text-sm font-iranSans w-full md:w-2/3 text-center mx-auto ">
          حداکثر تا ۲۴ ساعت آینده به درخواست شما پاسخ خواهیم داد
        </p>
        <Link
          to="/ticketing/ticket/1234"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] h-14 leading-10 md:translate-x-0 md:left-0 md:relative text-center mt-8 bg-organization md:w-fit mx-auto py-2 px-6 rounded-lg block font-iranSans border border-organization hover:border-organization_hover hover:bg-organization_hover hover:text-white transition duration-500"
        >
          مشاهده وضعیت درخواست پشتیبانی
        </Link>
      </div>
    </div>
  );
};

export default SuccessTicket;
