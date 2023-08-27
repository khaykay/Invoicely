import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import logo from "/logo.svg";
import PDFFile from "./PDFFile";

const Preview = ({ invoiceData }) => {
  return (
    <div className="md:flex md:justify-center">
      <div className="bg-[#F9FAFF] py-6 px-8 text-xs md:text-[10px] md:px-6 md:w-[70%] sm:w-full">
        <div className="">
          <h3 className="">Preview</h3>
        </div>
        <div className=" min-h-[85%] bg-white shadow p-7 md:p-4 ">
          <div className="  h-full ">
            <div className="  ">
              <div className="flex justify-between  items-center">
                <div className="h-8 flex items-center md:h-6">
                  <img src={invoiceData?.logo} alt="" className="h-8 md:h-6" />
                </div>
                <div className="flex flex-col md:text-[9px]">
                  <span className="text-slate-500">Invoice No:</span>
                  <span className="text-right text-[#2764F6]">
                    #{invoiceData?.invoiceNum}
                  </span>
                </div>
              </div>
              <div className="flex  items-center  pt-2 pb-1 md:pt-1 md:pb-[2px]">
                <span className="text-[8px] text-[#B3B2B4] md:text-[6px]">
                  SUMMARY
                </span>
                <span className=" w-full border-b border-solid border-[#B3B2B4]"></span>
              </div>
            </div>
            <div className=" flex   py-[0.65rem] md:py-[0.35rem]">
              <div className="flex flex-col basis-[35%]">
                <span className="text-[9px] font-bold md:text-[7.5px]">
                  Bill From:
                </span>
                <p>{invoiceData?.companyDetails} </p>
              </div>
              <div className="flex flex-col  basis-[35%] pl-3">
                <span className="text-[9px] font-bold md:text-[7.5px]">
                  Bill To:
                </span>
                <p>{invoiceData?.bill}</p>
              </div>
              <div className="flex flex-col basis-[30%] text-right">
                <div>
                  <span className="text-[9px] font-bold md:text-[7.5px]">
                    Date Issued:{" "}
                  </span>
                  <span className="text-[9px]">{invoiceData?.dateIssued}</span>
                </div>
                <div>
                  <span className="text-[9px] font-bold md:text-[7.5px]">
                    Due Date:{" "}
                  </span>
                  <span className="text-[9px]">{invoiceData?.dueDate}</span>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="bg-[#2764F6] flex px-2 py-[0.65rem] rounded-t-md md:px-1 md:py-[0.5rem] md:gap-1">
                <span className="basis-[50%]">Item</span>
                <span className="basis-[16.5%]">Rate</span>
                <span className="basis-[16.5%]">Quantity</span>
                <span className="basis-[16.5%]">Amount</span>
              </div>
              {invoiceData?.itemDetails?.map((item) => (
                <div
                  className="flex border-x border-b border-[#B3B2B4] border-solid px-2 py-[0.65rem] md:px-1 md:gap-2 md:py-[0.5rem]"
                  key={item.id}
                >
                  <span className="basis-[50%]">{item.item}</span>
                  <span className="basis-[16.5%]">{item.rate}</span>
                  <span className="basis-[16.5%]">{item.qty}</span>
                  <span className="basis-[16.5%]">{item.amount}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-end py-2">
              <div className="flex justify-between basis-[45%] px-2">
                <div className="flex flex-col">
                  <span className="text-slate-500 py-[0.2rem] md:text-[9px]">
                    Subtotal
                  </span>
                  {/* <span className="text-slate-500 py-[0.2rem]">Tax</span> */}
                  <span className="text-slate-500 py-[0.2rem] md:text-[9px]">
                    Tax
                  </span>
                  <span className="text-slate-500 py-[0.2rem] md:text-[9px]">
                    Shipping Fee
                  </span>
                </div>
                <div className=" text-[11px] flex flex-col ">
                  <span className="font-semibold text-right py-[0.2rem]">
                    ${invoiceData?.subTotal}
                  </span>
                  {/* <span className="font-semibold text-right py-[0.2rem]">
                    {invoiceData?.tax}
                  </span> */}
                  <span className="font-semibold text-right py-[0.2rem]">
                    {invoiceData?.discount}
                  </span>
                  <span className="font-semibold text-right py-[0.2rem]">
                    {invoiceData?.shipping}
                  </span>
                </div>
              </div>
            </div>
            <span className=" w-full border-b border-solid border-[#d2d1d2] "></span>
            <div className="flex justify-end py-2">
              <div className="flex justify-between basis-[45%] px-2 items-center">
                <span className="font-semibold text-[11px] md:text-[9px]">
                  Total
                </span>
                <span className="text-base font-semibold text-[#2764F6]">
                  $
                  {isNaN(invoiceData?.total)
                    ? invoiceData?.subTotal
                    : invoiceData?.total}
                </span>
              </div>
            </div>
            <div className="my-2 py-2 px-2 bg-[#FAF9FA] block">
              <span className="text-[9px] text-[#B3B2B4] inline-block my-1 md:my-[0]">
                Notes
              </span>
              <p className="text-[10px] italic block">{invoiceData?.note}</p>
            </div>
          </div>
        </div>

        <div className="h-10 flex items-center justify-end gap-5 mt-4">
          <PDFDownloadLink
            document={<PDFFile invoiceData={invoiceData} />}
            fileName="Invoice"
          >
            {({ loading }) =>
              loading ? (
                <span className="bg-violet-50 text-violet-700 rounded-s-lg  px-2 py-[0.65rem] w-[5rem] text-center shadow-md font-semibold">
                  Loading
                </span>
              ) : (
                <span className="bg-violet-50 text-violet-700 rounded-s-lg  px-2 py-[0.65rem] w-[5rem] text-center shadow-md font-semibold">
                  Download
                </span>
              )
            }
          </PDFDownloadLink>
          {/* <span className="bg-[#2764F6] text-white rounded-e-lg px-2 py-[0.65rem] w-[5rem] text-center shadow-md shadow-slate-600/50 font-semibold">
            Print
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Preview;
