import { Link } from "react-router-dom";
import { BiSupport } from "react-icons/bi";
import SUCCESS from "../assets/success.svg";
const SuccessTicket = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg border border-gray-100 w-full">
      <div className="flex items-center justify-between">
        <p className="flex items-center justify-center gap-2 font-bold font-iranSansBold">
          <BiSupport className="text-2xl" />
          درخواست‌های پشتیبانی
        </p>
      </div>
      <div>
        <div className="w-full flex items-center justify-center py-8">
          <img src={SUCCESS} alt="SUCCESS" />
        </div>
        <p
          className="text-lg my-4 font-bold font-iranSansBold w-2/3 text-center mx-auto "
          dir="rtl"
        >
          درخواست پشتیبانی شما با موفقیت ثبت شد.
        </p>
        <p className="text-sm font-iranSans w-2/3 text-center mx-auto ">
          حداکثر تا ۲۴ ساعت آینده به درخواست شما پاسخ خواهیم داد
        </p>
        <Link
          to="/ticketing/ticket/1234"
          className="mt-8 bg-organization w-fit mx-auto py-2 px-6 rounded-lg block font-iranSans border border-organization hover:border-organization_hover hover:bg-organization_hover hover:text-white transition duration-500"
        >
          مشاهده وضعیت درخواست پشتیبانی
        </Link>
      </div>
    </div>
  );
};

export default SuccessTicket;
