import { BiSupport } from "react-icons/bi";
import EMPTYBOX from "../assets/empty-message.svg";
import { Link } from "react-router-dom";
const RequestBox = () => {
  return (
    <div className="shadow-lg p-4 rounded-lg border border-gray-100 h-screen md:h-full ">
      <div className="flex items-center justify-between">
        <p className="flex items-center justify-center gap-2 font-bold font-iranSansBold">
          <BiSupport className="text-2xl" />
          درخواست‌های پشتیبانی
        </p>
        <Link
          to="/ticketing/new"
          className="font-iranSans text-[#0077DB] text-sm flex items-center justify-center gap-2 transition border border-white cursor-pointer hover:bg-[#F2F9FF] hover:border-[#C9E3F8] hover:border duration-500 p-1 rounded-lg"
        >
          <span className="font-bold text-xl inline-block align-bottom">+</span>{" "}
          ایجاد درخواست جدید
        </Link>
      </div>
      <div className="w-full flex items-center justify-center md:block flex-col">
        <div className="w-full flex items-center justify-center">
          <img src={EMPTYBOX} alt="EMPTYBOX" className="w-full md:w-1/3"/>
        </div>
        <p
          className="text-lg my-4 font-bold font-iranSansBold w-2/3 text-center mx-auto "
          dir="rtl"
        >
          صندوق درخواست‌های پشتیبانی شما خالی است.
        </p>
        <p className="text-sm font-iranSans w-2/3 text-center mx-auto ">
          اگر سوال یا مشکلی دارید می توانید با ایجاد درخواست پشتیبانی در
          سریعترین زمان ممکن آن را پیگیری کنید.
        </p>
        <Link
          to="/ticketing/new"
          className="fixed bottom-5 w-[90%] md:relative mt-8 bg-organization bg-opacity-55 text-center md:w-fit mx-auto py-2 px-6 rounded-lg block  font-iranSans border border-organization hover:border-organization_hover hover:bg-organization_hover transition duration-500"
        >
          ایجاد درخواست جدید
        </Link>
      </div>
    </div>
  );
};

export default RequestBox;
