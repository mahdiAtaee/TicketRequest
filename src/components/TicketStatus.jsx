// import { useImperativeFilePicker } from "use-file-picker";
import { FaArrowRightLong } from "react-icons/fa6";
// import { FiLink } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useState } from "react";
// import PDF from "../assets/pdf-file.png";
import { Link } from "react-router-dom";

const TicketStatus = () => {
  const [messages, setMessages] = useState([
    {
      text: "سلام وقتتون بخیر، سوالی داشتم",
      sender: "user",
    },
    {
      text: "کاربر گرامی با سلام مشکل شما حل شد",
      sender: "admin",
    },
  ]);
  const [message, setMessage] = useState("");
  // const {
  //   openFilePicker,
  //   filesContent,
  //   errors,
  //   removeFileByReference,
  //   removeFileByIndex,
  // } = useImperativeFilePicker({
  //   multiple: true,
  //   readAs: "DataURL",
  // });

  // if (errors) {
  //   console.log(errors);
  // }

  // const handleRemoveFile = (file, i) => {
  //   removeFileByReference(file);
  //   removeFileByIndex(i);
  // };

  const handleSendMessage = () => {
    setMessages([...messages, { text: message, sender: "admin" }]);
    console.log(message);
    setMessage("");
  };

  return (
    <div className="shadow-lg p-4 rounded-lg border border-gray-100">
      <Link
        to="/ticket/list"
        className="flex items-center gap-4 cursor-pointer border border-white hover:border-blue-200 hover:bg-blue-200 w-fit p-2 rounded-lg transition duration-300"
      >
        <FaArrowRightLong size={24} />
        <span className="font-bold font-iranSansBold text-sm md:text-lg lg:text-xl">
          بازگشت به لیست درخواست‌ها
        </span>
      </Link>
      <div className="flex items-center justify-between py-6 mt-6 font-iranSans border-b-2 ">
        <span className="font-iranSansBold font-bold text-lg md:text-xl lg:text-2xl">
          برداشت از حساب
        </span>
        <span className="text-xs md:text-sm rounded-full py-2 px-6 bg-blue-200 text-blue-500">
          در حال بررسی
        </span>
      </div>
      <div className="py-6">
        <p className="font-iranSans text-xs md:text-sm ">
          دوشنبه، 14 خرداد 1403 14:01
        </p>
        <div className="border-r-[3px] border-organization_hover mt-4 px-4 text-sm font-iranSans">
          <ul>
            <li className="mt-2 leading-6">
              <span className="text-gray-400">عنوان درخواست:</span>
              <span> عنوان درخواست برداشت وجه</span>
            </li>
            <li className="mt-2 leading-6">
              <span className="text-gray-400">شرح درخواست:</span>
              <span> شرح درخواست برداشت وجه</span>
            </li>
            <li className="mt-2 leading-6">
              <span className="text-gray-400">نوع دپارتمان درخواست:</span>
              <span> درخواست برداشت وجه</span>
            </li>
          </ul>
        </div>
      </div>
      {messages && (
        <div className="border-t-2">
          {messages.map((message, index) => (
            <div key={index}>
              <p className="font-iranSans text-xs md:text-sm pt-4">
                یکشنبه، 19 خرداد 1403 22:01
              </p>
              <p
                className={`${
                  message?.sender === "user"
                    ? "border-blue-500 "
                    : "border-organization"
                } ${
                  messages.length - 1 === index
                    ? ""
                    : "after:block after:absolute after:left-0 after:w-full after:h-[1px] after:top-full after:bg-gray-200 after:mt-4"
                } px-2 text-sm border-r-2  leading-10  font-iranSansLight mt-2 relative py-2 bg-gray-100 my-4
                `}
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <div className="relative">
          <textarea
            id="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder=" "
            className=" block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-t-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-organization peer border border-b-0 resize-none h-[100px] p-2 outline-none font-iranSans"
          />
          <label
            htmlFor="Message"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            متن پیام
          </label>
        </div>
        {/* <div className="w-full border-x-2 border-gray-300">
          <div
            className={`${
              filesContent.length > 0 ? "border-t-2" : ""
            } w-[90%] mx-auto p-4  flex items-center gap-2`}
          >
            {filesContent.map((file, index) => (
              <div key={index} className="w-24 h-32 rounded-xl relative top-0">
                <img
                  alt={file.name}
                  src={
                    filesContent[index]?.name.includes(".pdf")
                      ? PDF
                      : file.content
                  }
                  className="w-full h-full object-cover rounded-xl"
                />
                <span
                  onClick={() => handleRemoveFile(file, index)}
                  className="absolute top-2 right-2 rounded-full w-6 h-6 bg-gray-50 text-black text-sm flex items-center justify-center font-iranSans cursor-pointer"
                >
                  X
                </span>
              </div>
            ))}
          </div>
        </div> */}
        <div className="border border-gray-300 rounded-b-xl p-2 bg-gray-100 h-16 flex items-center gap-4 justify-end">
          {/* <button
            onClick={() => openFilePicker()}
            className="border border-gray-400  font-iranSans p-2 h-10 w-10 rounded-full hover:bg-gray-300 transition duration-200 flex items-center justify-center"
          >
            <FiLink />
          </button> */}
          <button
            onClick={handleSendMessage}
            className="border border-blue-400 text-white bg-blue-400 font-iranSans py-2 px-4 w-fit flex items-center rounded-full text-sm gap-2 h-10 hover:bg-blue-500 transition duration-200"
          >
            <HiOutlinePaperAirplane size={20} />
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketStatus;
