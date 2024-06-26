import React, { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";
import PreviewModal from "./Modals/PreviewModal";
import { useDispatch, useSelector } from "react-redux";
import { togglePreview } from "../Redux/previewSlice";
const Body = () => {
  const [invoiceData, setInvoiceData] = useState();
  const previewModal = useSelector((state) => state.previewReducer.value);
  const dispatch = useDispatch();
  const handleClickPreview = () => {
    dispatch(togglePreview());
    console.log(previewModal);
  };

  const saveInvoiceData = (data) => {
    // console.log(`${data} consoled`);
    setInvoiceData(data);
  };

  return (
    <>
      <div className=" flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] lg:ml-[6rem] ">
        <Form saveInvoiceData={saveInvoiceData} />
        <div className="hidden lg:flex">
          <Preview invoiceData={invoiceData} />
        </div>

        <div
          className="lg:hidden fixed right-0 bottom-0"
          onClick={handleClickPreview}
        >
          preview button
        </div>
        <PreviewModal invoiceData={invoiceData} />
      </div>
    </>
  );
};

export default Body;
