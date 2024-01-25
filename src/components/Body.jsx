import React, { useState } from "react";
import Form from "./Form";
import Preview from "./Preview";

const Body = () => {
  const [invoiceData, setInvoiceData] = useState();

  const saveInvoiceData = (data) => {
    console.log(`${data} consoled`);
    setInvoiceData(data);
  };

  return (
    <>
      <div className=" grid grid-cols-[1.2fr_1fr] ml-[6rem] md:flex md:flex-col md:gap-7 sm:m-5">
        <Form saveInvoiceData={saveInvoiceData} />
        <Preview invoiceData={invoiceData} />
      </div>
    </>
  );
};

export default Body;
