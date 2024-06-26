import React from "react";
import { useSelector } from "react-redux";

const Default = ({ invoiceData }) => {
  const selectedColor = useSelector((state) => state.bgColorReducer.color);
  return (
    <div className=" min-h-[85%] bg-white shadow p-7 ">
      <div className="  h-full ">
        <div className="  ">
          <div className="flex justify-between  items-center">
            <div className="h-8 flex items-center ">
              <img src={invoiceData?.logo} alt="" className="h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500">Invoice No:</span>
              <span className="text-right text-[#2764F6]">
                #{invoiceData?.invoiceNum}
              </span>
            </div>
          </div>
          <div className="flex  items-center  pt-2 pb-1 ">
            <span className="text-[8px] text-[#B3B2B4] ">SUMMARY</span>
            <span className=" w-full border-b border-solid border-[#B3B2B4]"></span>
          </div>
        </div>
        <div className=" flex   py-[0.65rem] ">
          <div className="flex flex-col basis-[35%]">
            <span className="text-[9px] font-bold">Bill From:</span>
            <p>{invoiceData?.companyDetails} </p>
          </div>
          <div className="flex flex-col  basis-[35%] pl-3">
            <span className="text-[9px] font-bold ">Bill To:</span>
            <p>{invoiceData?.bill}</p>
          </div>
          <div className="flex flex-col basis-[30%] text-right">
            <div>
              <span className="text-[9px] font-bold ">Date Issued: </span>
              <span className="text-[9px]">{invoiceData?.dateIssued}</span>
            </div>
            <div>
              <span className="text-[9px] font-bold ">Due Date: </span>
              <span className="text-[9px]">{invoiceData?.dueDate}</span>
            </div>
          </div>
        </div>
        <div className=" ">
          <div
            className=" flex px-2 py-[0.65rem] rounded-t-md "
            style={{
              backgroundColor: `${selectedColor}`,
              color: selectedColor === "#000000" ? "#f5f5f5" : "black",
            }}
          >
            <span className="basis-[50%]">Item</span>
            <span className="basis-[16.5%]">Rate</span>
            <span className="basis-[16.5%]">Quantity</span>
            <span className="basis-[16.5%]">Amount</span>
          </div>
          {invoiceData?.itemDetails?.map((item) => (
            <div
              className="flex border-x border-b border-[#B3B2B4] border-solid px-2 py-[0.65rem] "
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
              <span className="text-slate-500 py-[0.2rem] ">Subtotal</span>
              {/* <span className="text-slate-500 py-[0.2rem]">Tax</span> */}
              <span className="text-slate-500 py-[0.2rem] ">Tax</span>
              <span className="text-slate-500 py-[0.2rem] ">Shipping Fee</span>
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
            <span className="font-semibold text-[11px] ">Total</span>
            <span className="text-base font-semibold text-[#2764F6]">
              $
              {isNaN(invoiceData?.total)
                ? invoiceData?.subTotal
                : invoiceData?.total}
            </span>
          </div>
        </div>
        <div className="my-2 py-2 px-2 bg-[#FAF9FA] block">
          <span className="text-[9px] text-[#B3B2B4] inline-block my-1 ">
            Notes
          </span>
          <p className="text-[10px] italic block">{invoiceData?.note}</p>
        </div>
      </div>
    </div>
  );
};

export default Default;
