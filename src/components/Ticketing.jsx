import { useImperativeFilePicker } from "use-file-picker";
import { FaFileAlt } from "react-icons/fa";
import INFO from "../assets/information.png";
import AGENCY from "../assets/agency.png";
import MONEY from "../assets/save-money.png";
import WALLET from "../assets/wallet.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

const Ticketing = () => {
  const navigate = useNavigate();
  const [department, setDepartment] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => navigate("/ticketing/new/success");

  const {
    openFilePicker,
    filesContent,
    removeFileByReference,
    removeFileByIndex,
  } = useImperativeFilePicker({
    multiple: true,
    readAs: "DataURL",
  });

  const handleRemoveFile = (file, i) => {
    removeFileByReference(file);
    removeFileByIndex(i);
  };

  const handleSetDepartment = (e) => {
    setDepartment(e.target.id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="shadow-lg p-16 rounded-t-lg border border-gray-100">
        <div>
          <p className="font-iranSansBold w-full text-center font-bold py-4 text-sm md:text-[1rem]">
            لطفا برمبنای خدماتی که خریداری کرده‌اید دسته مورد نظرتان را انتخاب
            کنید.
          </p>
          <p className="font-iranSans w-full text-center px-8 text-xs md:text-sm">
            دسته‌بندی به ما کمک می‌کند که در کمترین زمان ممکن سوال شما را توسط
            متخصص آن حوزه پاسخ دهیم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
          <div
            id="withdraw"
            onClick={(e) => handleSetDepartment(e)}
            className={` ${
              department === "withdraw" ? "text-white bg-green-500" : ""
            } flex group items-center justify-center flex-col gap-4 w-full h-32 p-4 border border-gray-300 cursor-pointer rounded-xl hover:bg-green-500 hover:text-white transition-colors duration-300`}
          >
            <img
              src={WALLET}
              alt="wallet"
              className={`${
                department === "withdraw" ? "brightness-0 invert" : ""
              } w-10 h-10 object-cover group-hover:brightness-0 group-hover:invert transition duration-300`}
            />
            <span className="font-iranSans text-xs md:text-sm">
              برداشت از حساب
            </span>
          </div>
          <div
            id="Deposit"
            onClick={(e) => handleSetDepartment(e)}
            className={` ${
              department === "Deposit" ? "text-white bg-green-500" : ""
            } flex group items-center justify-center flex-col gap-4 w-full h-32 p-4 border border-gray-300 cursor-pointer rounded-xl hover:bg-green-500 hover:text-white transition-colors duration-300`}
          >
            <img
              src={MONEY}
              alt="save money"
              className={`${
                department === "Deposit" ? "brightness-0 invert" : ""
              } w-10 h-10 object-cover group-hover:brightness-0 group-hover:invert transition duration-300`}
            />
            <span className="font-iranSans text-xs md:text-sm">
              واریز به حساب
            </span>
          </div>
          <div
            id="agency"
            onClick={(e) => handleSetDepartment(e)}
            className={` ${
              department === "agency" ? "text-white bg-green-500" : ""
            } flex group items-center justify-center flex-col gap-4 w-full h-32 p-4 border border-gray-300 cursor-pointer rounded-xl hover:bg-green-500 hover:text-white transition-colors duration-300`}
          >
            <img
              src={AGENCY}
              alt="agency"
              className={`${
                department === "agency" ? "brightness-0 invert" : ""
              } w-10 h-10 object-cover group-hover:brightness-0 group-hover:invert transition duration-300`}
            />
            <span className="font-iranSans text-xs md:text-sm">نمایندگی</span>
          </div>
          <div
            id="info"
            onClick={(e) => handleSetDepartment(e)}
            className={` ${
              department === "info" ? "text-white bg-green-500" : ""
            } flex group items-center justify-center flex-col gap-4 w-full h-32 p-4 border border-gray-300 cursor-pointer rounded-xl hover:bg-green-500 hover:text-white transition-colors duration-300`}
          >
            <img
              src={INFO}
              alt="info"
              className={`${
                department === "info" ? "brightness-0 invert" : ""
              } w-10 h-10 object-cover group-hover:brightness-0 group-hover:invert transition duration-300`}
            />
            <span className="font-iranSans text-xs md:text-sm">عمومی</span>
          </div>
        </div>
        <div className="relative mt-8">
          <p className="font-iranSansBold font-bold py-4 text-sm md:text-[1rem] text-right">
            در کارد زیر عنوان پیام خود را وارد فرمایید.
          </p>
          <input
            type="text"
            name="title"
            placeholder="عنوان پیام"
            {...register("title", {
              required: "* لطفا عنوان پیام را وارد فرمایید",
              minLength: {
                value: 2,
                message: "لطفا بیشتر از 2 کاراکتر وارد نمایید",
              },
              maxLength: {
                value: 50,
                message: "لطفا کمتر از 50 کاراکتر وارد نمایید",
              },
            })}
            className="border border-gray-200 w-full h-12 rounded-xl p-2 outline-none font-iranSans text-sm"
          />
          <ErrorMessage
            errors={errors}
            name="title"
            render={({ message }) => (
              <span className="absolute top-full right-0 text-xs text-red-400">
                {message}
              </span>
            )}
          />
        </div>
        <div className="relative my-8">
          <textarea
            placeholder="شرح پیام"
            name="descMessage"
            {...register("descMessage", {
              required: "* پر کردن این فیلد اجباری است",
              minLength: {
                value: 2,
                message: "لطفا بیشتر از 2 کاراکتر وارد نمایید",
              },
              maxLength: {
                value: 500,
                message: "لطفا کمتر از 500 کاراکتر وارد نمایید",
              },
            })}
            className="border border-gray-200 w-full rounded-xl p-2 outline-none font-iranSans text-sm"
          />
          <ErrorMessage
            errors={errors}
            name="descMessage"
            render={({ message }) => (
              <span className="absolute top-full right-0 text-xs text-red-400">
                {message}
              </span>
            )}
          />
        </div>
        <div className="flex items-center gap-2 relative mb-8">
          <div>
            <a
              onClick={() => openFilePicker()}
              className="cursor-pointer w-fit h-32 p-4 rounded-xl border border-blue-500 flex items-center justify-center flex-col gap-4 outline-none"
            >
              <FaFileAlt color="#2196f3" size={32} />
              <span className="w-full font-iranSans text-sm text-blue-400">
                افزودن فایل
              </span>
            </a>
            <span className="text-xs text-gray-600 leading-6 mt-2 font-iranSans block absolute top-full right-0">
              حجم مجاز: 20MB
            </span>
            <span className="text-xs text-gray-600 leading-6  font-iranSans block absolute top-[125%] right-0">
              پسوندهای مجاز: png / jpg / jpeg / pdf
            </span>
          </div>
          {filesContent.length ? (
            filesContent.map((file, index) => (
              <div key={index} className="w-24 h-32 rounded-xl relative top-0">
                <img
                  alt={file.name}
                  src={file.content}
                  className="w-full h-full object-cover rounded-xl"
                />
                <span
                  onClick={() => handleRemoveFile(file, index)}
                  className="absolute top-2 right-2 rounded-full w-6 h-6 bg-gray-50 text-black text-sm flex items-center justify-center font-iranSans cursor-pointer"
                >
                  X
                </span>
              </div>
            ))
          ) : (
            <p className="absolute top-[150%] right-0 text-xs text-red-400">
              لطفا یک فایل انتخاب نمایید
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4 justify-end w-full p-4 mb-8 bg-gray-100 rounded-b-lg">
        <button className="border border-organization  font-iranSans rounded-xl p-2 w-[120px] md:w-[150px] text-xs md:text-sm h-10 hover:bg-organization transition duration-300">
          انصراف
        </button>
        <button
          type="submit"
          className="border border-organization bg-organization font-iranSans rounded-xl p-2 w-[120px] md:w-[150px] text-xs md:text-sm h-10 hover:bg-organization_hover transition duration-200"
        >
          بررسی درخواست
        </button>
      </div>
    </form>
  );
};

export default Ticketing;
