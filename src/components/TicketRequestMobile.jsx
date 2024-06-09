import { useImperativeFilePicker } from "use-file-picker";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FaFileAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import PDF from "../assets/pdf-file.png";
import { FaArrowRightLong } from "react-icons/fa6";

const TicketRequestMobile = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const sanitizedInput = sanitizeHtml(data.userInput);
    console.log(sanitizedInput);
    navigate("/ticketing/new/success");
  };

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
  return (
    <div>
      <div className="py-4 border-b-2 ">
        <Link
          to="/ticketing/new"
          className="flex items-center gap-4 cursor-pointer border border-white hover:border-blue-200 hover:bg-blue-200 w-fit p-2 rounded-lg transition duration-300"
        >
          <FaArrowRightLong size={20} />
          <span className="font-iranSansMedium text-sm md:text-lg lg:text-xl">
            انتخاب نوع درخواست
          </span>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mt-2 px-4">
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
              <span className="absolute top-full right-5 text-xs text-red-400">
                {message}
              </span>
            )}
          />
        </div>
        <div className="relative my-8 px-4">
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
            className="border border-gray-200 w-full block h-[150px] rounded-xl p-2 outline-none font-iranSans text-sm"
          />
          <ErrorMessage
            errors={errors}
            name="descMessage"
            render={({ message }) => (
              <span className="absolute top-full right-5 text-xs text-red-400">
                {message}
              </span>
            )}
          />
        </div>
        <div className="flex items-center gap-2 relative px-4">
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
            <div className="absolute top-full right-5">
              {filesContent.length ? null : (
                <p className="text-xs pt-2 text-red-400">
                  لطفا یک فایل انتخاب نمایید
                </p>
              )}
              <span className="text-xs text-gray-600 leading-6 mt-2 font-iranSans block ">
                حجم مجاز: 20MB
              </span>
              <span className="text-xs text-gray-600 leading-6  font-iranSans block">
                پسوندهای مجاز: png / jpg / jpeg / pdf
              </span>
            </div>
          </div>
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
        <div className="fixed bottom-0 flex items-center gap-4 justify-end w-full p-4 bg-gray-100 rounded-b-lg">
          <Link
            to="/"
            className="text-center border border-organization  font-iranSans rounded-xl p-2 w-[120px] md:w-[150px] text-xs md:text-sm h-10 hover:bg-organization transition duration-300"
          >
            انصراف
          </Link>
          <button
            type="submit"
            className="border border-organization bg-organization font-iranSans rounded-xl p-2 w-[120px] md:w-[150px] text-xs md:text-sm h-10 hover:bg-organization_hover transition duration-200"
          >
            بررسی درخواست
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketRequestMobile;
