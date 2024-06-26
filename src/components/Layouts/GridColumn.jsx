import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GridColumn = ({ invoiceData }) => {
  const selectedColor = useSelector((state) => state.bgColorReducer.color);
  const BeforeElement = styled.div`
    &::before {
      background-color: ${selectedColor}; /* Set the background color */
    }
  `;

  return (
    <div className=" min-h-[500px] h-full box-border flex bg-white shadow p-4  ">
      <div className="  flex-1 flex  ">
        <div className="basis-2/3 relative flex flex-col">
          <div className="flex flex-col  basis-1/5 pr-2">
            <span className="text-black text-xl font-bold">INVOICE</span>
            <span className=" text-[#2764F6]">#{invoiceData?.invoiceNum}</span>
            <div className="flex flex-col   ">
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
          <div className=" pr-2">
            <div className="flex px-2 mt-1 border-b-[1px] border-black border-solid  ">
              <span className="basis-[50%]">Item</span>
              <span className="basis-[16.5%]">Rate</span>
              <span className="basis-[16.5%]">Qty</span>
              <span className="basis-[16.5%]">Amt</span>
            </div>
            {invoiceData?.itemDetails?.map((item) => (
              <div className="flex  px-2 py-[0.65rem] " key={item.id}>
                <span className="basis-[50%]">{item.item}</span>
                <span className="basis-[16.5%]">{item.rate}</span>
                <span className="basis-[16.5%]">{item.qty}</span>
                <span className="basis-[16.5%]">{item.amount}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-end py-2 pr-2">
            <div className="flex justify-between basis-[45%] px-2">
              <div className="flex flex-col">
                <span className="text-slate-500 py-[0.2rem] ">Subtotal</span>
                {/* <span className="text-slate-500 py-[0.2rem]">Tax</span> */}
                <span className="text-slate-500 py-[0.2rem] ">Tax</span>
                <span className="text-slate-500 py-[0.2rem] ">
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
          <div
            className="flex justify-end py-1  rounded-l-2xl"
            style={{ backgroundColor: `${selectedColor}` }}
          >
            <div className="flex justify-between basis-[45%] pr-4 items-center ">
              <span className="font-semibold text-[11px]  ">Total</span>
              <span className="text-base font-semibold text-[#2764F6]">
                $
                {isNaN(invoiceData?.total)
                  ? invoiceData?.subTotal
                  : invoiceData?.total}
              </span>
            </div>
          </div>
          <div className="mt-2 py-2 w-full px-2  bg-[#FAF9FA] block absolute  bottom-0 ">
            <span className="text-[9px] text-[#B3B2B4] inline-block my-1 ">
              Notes
            </span>
            <p className="text-[10px] italic block">{invoiceData?.note}</p>
          </div>
        </div>
        {/* left side */}
        <div
          className=" basis-1/3 flex flex-col"
          style={{
            color: selectedColor === "#000000" ? "#f5f5f5" : "black",
            border: selectedColor === "#FFFFFF" ? "1px solid #E5E8EB" : "none",
            borderRadius: selectedColor === "#FFFFFF" ? "10px" : "none",
          }}
        >
          {" "}
          <BeforeElement className="flex basis-1/5  relative justify-center items-center  before:content-['']  before:w-full before:h-full before:absolute before:bottom-0 before:left-0 before:rounded-bl-xl">
            <div className="h-12 flex bg-black items-center  z-10">
              <img src={invoiceData?.logo} alt="" className="h-full " />
            </div>
          </BeforeElement>{" "}
          <div
            className=" h-9 flex bg-[#dddddd]"
            style={{ backgroundColor: `${selectedColor}` }}
          >
            <span className="flex-1 bg-white rounded-r-3xl"></span>
            <span className=" flex-1 flex justify-center ">
              <span className="bg-white w-[50%] h-full rounded-full"></span>
            </span>
          </div>
          <BeforeElement className=" flex   py-[1rem]  rounded-tl-lg  flex-1 relative before:content-[''] before:bg-[#dddddd] before:w-full before:h-full before:absolute before:bottom-0 before:left-0 before:rounded-tl-xl">
            <div className="z-10 flex flex-col px-4 gap-y-3 w-full">
              <div className="flex flex-col ">
                <span className="text-[9px] font-bold ">Bill From:</span>
                <p className="break-words w-[140px]">
                  {invoiceData?.companyDetails}{" "}
                </p>
              </div>
              <div className="flex flex-col ">
                <span className="text-[9px] font-bold ">Bill To:</span>
                <p className="break-words w-[140px]">{invoiceData?.bill}</p>
              </div>
            </div>
          </BeforeElement>
        </div>
      </div>
    </div>
  );
};

export default GridColumn;
