import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";
import Default from "./Layouts/Default";
import GridRow from "./Layouts/GridRow";
import GridColumn from "./Layouts/GridColumn";
import { useSelector } from "react-redux";

const Preview = ({ invoiceData }) => {
  const layout = useSelector((state) => state.layoutReducer.layout);

  return (
    <div className="md:flex md:justify-center ">
      <div className="bg-[#F9FAFF]  py-6 px-8 text-xs md:text-[10px] md:px-6 md:w-[70%] sm:w-full ">
        <div className="">
          <h3 className="">Preview</h3>
        </div>
        {/* {layout == "default" && (
          <PDFViewer>
            <PDFFile />
          </PDFViewer>
        )} */}
        {/* {layout == "default" && <PDFFile />} */}
        {layout == "default" && <Default invoiceData={invoiceData} />}
        {layout == "gridrow" && <GridRow invoiceData={invoiceData} />}
        {layout == "gridcolumn" && <GridColumn invoiceData={invoiceData} />}
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
