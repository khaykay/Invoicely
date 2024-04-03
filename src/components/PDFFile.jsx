import React from "react";
import logo from "/logo.svg";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { useSelector } from "react-redux";

const PDFFile = ({ invoiceData }) => {
  // const selectedColor = useSelector((state) => state.bgColorReducer.color);
  return (
    <>
      <Document>
        <Page size="A4" style={{}}>
          <View
            className=" min-h-[85%] bg-white shadow p-7 block "
            style={{
              padding: "40 35",
              fontSize: "10.5",
            }}
          >
            <View
              className="  h-full block"
              // style={{ display: "block" }}
            >
              <View
                className=" block "
                //   style={{ display: "block" }}
              >
                <View
                  className="flex justify-between  items-center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    className="h-8 flex items-center"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      height: "36",
                    }}
                  >
                    {invoiceData?.logo !== "" ? (
                      <Image
                        src={invoiceData?.logo}
                        style={{
                          height: "25",
                          width: "25",
                        }}
                      />
                    ) : (
                      <Text> </Text>
                    )}
                    {/* <Image
                      src={logo}
                      alt=""
                      className="h-8"
                      style={{
                        height: "2rem",
                      }}
                    ></Image> */}
                    {/* <Text>musemind</Text> */}
                  </View>
                  <View
                    className="flex flex-col "
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      className="text-slate-500"
                      style={{ color: "rgb(100 116 139)" }}
                    >
                      Invoice No:
                    </Text>
                    <Text
                      className="text-right text-[#2764F6] "
                      style={{
                        color: "rgb(39 100 246)",
                        textAlign: "right",
                        display: "block",
                      }}
                    >
                      #{invoiceData?.invoiceNum}
                    </Text>
                  </View>
                </View>
                <View
                  className="flex  items-center  pt-2 pb-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: "8",
                    paddingBottom: "4",
                  }}
                >
                  <Text
                    className="text-[8px] text-[#B3B2B4]"
                    style={{ color: "rgb(179 178 180)", fontSize: "8" }}
                  >
                    SUMMARY
                  </Text>
                  <Text
                    className=" w-full border-b border-solid border-[#d2d1d2] "
                    style={{
                      width: "100%",
                      borderBottomWidth: "1",
                      borderStyle: "solid",
                      borderColor: "#dddddd",
                    }}
                  ></Text>
                </View>
              </View>
              <View
                className=" flex   py-[0.65rem]"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingTop: "14",
                  paddingBottom: "14",
                }}
              >
                <View
                  className="flex flex-col basis-[35%]"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexBasis: "35%",
                  }}
                >
                  <Text
                    className="text-[9px] font-bold"
                    style={{
                      fontSize: "9",
                      fontWeight: "700",
                    }}
                  >
                    Bill From:
                  </Text>
                  <Text>{invoiceData?.companyDetails}</Text>
                </View>
                <View
                  className="flex flex-col  basis-[35%] pl-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexBasis: "35%",
                    paddingLeft: "12",
                  }}
                >
                  <Text
                    className="text-[9px] font-bold"
                    style={{
                      fontSize: "9",
                      fontWeight: "700",
                    }}
                  >
                    Bill To:
                  </Text>
                  <Text>{invoiceData?.bill}</Text>
                </View>
                <View
                  className="flex flex-col basis-[30%] text-right"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    flexBasis: "30%",
                    textAlign: "right",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      className="text-[9px] font-bold"
                      style={{
                        fontSize: "9",
                        fontWeight: "700",
                      }}
                    >
                      Date Issued:
                    </Text>
                    <Text className="">{invoiceData?.dateIssued}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      className="text-[9px] font-bold"
                      style={{
                        fontSize: "9",
                        fontWeight: "700",
                      }}
                    >
                      Due Date:
                    </Text>
                    <Text className="">{invoiceData?.dueDate}</Text>
                  </View>
                </View>
              </View>
              <View className=" ">
                <View
                  className="flex px-2 py-[0.65rem] rounded-t-md "
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingLeft: "8",
                    paddingRight: "8",
                    paddingTop: "10.4",
                    paddingBottom: "10.4",
                    borderTopLeftRadius: "6",
                    borderTopRightRadius: "6",
                    backgroundColor: `#2764F6`,
                    // backgroundColor: `${selectedColor}`,
                  }}
                >
                  <Text
                    className="basis-[50%]"
                    style={{
                      flexBasis: "50%",
                    }}
                  >
                    Item
                  </Text>
                  <Text
                    className="basis-[16.5%]"
                    style={{
                      flexBasis: "16.5%",
                    }}
                  >
                    Rate
                  </Text>
                  <Text
                    className="basis-[16.5%]"
                    style={{
                      flexBasis: "16.5%",
                    }}
                  >
                    Quantity
                  </Text>
                  <Text
                    className="basis-[16.5%]"
                    style={{
                      flexBasis: "16.5%",
                    }}
                  >
                    Amount
                  </Text>
                </View>
                {invoiceData?.itemDetails?.map((item) => (
                  <View
                    className="flex border border-[#B3B2B4] border-solid px-2 py-[0.65rem] "
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingLeft: "8",
                      paddingRight: "8",
                      paddingTop: "10.4",
                      paddingBottom: "10.4",
                      borderRightWidth: "1",
                      borderLeftWidth: "1",
                      borderBottomWidth: "1",
                      borderColor: "#B3B2B4",
                    }}
                    key={item.id}
                  >
                    <Text
                      className="basis-[50%]"
                      style={{
                        flexBasis: "50%",
                      }}
                    >
                      {item.item}
                    </Text>
                    <Text
                      className="basis-[16.5%]"
                      style={{
                        flexBasis: "16.5%",
                      }}
                    >
                      {item.rate}
                    </Text>
                    <Text
                      className="basis-[16.5%]"
                      style={{
                        flexBasis: "16.5%",
                      }}
                    >
                      {item.qty}
                    </Text>
                    <Text
                      className="basis-[16.5%]"
                      style={{
                        flexBasis: "16.5%",
                      }}
                    >
                      {item.amount}
                    </Text>
                  </View>
                ))}
              </View>
              <View
                className="flex justify-end py-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingTop: "8",
                  paddingBottom: "8",
                }}
              >
                <View
                  className="flex justify-between basis-[45%] px-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: "8",
                    paddingRight: "8",
                    flexBasis: "45%",
                  }}
                >
                  <View
                    className="flex flex-col"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      className="text-slate-500 py-[0.2rem]"
                      style={{
                        color: "rgb(100 116 139)",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      Subtotal
                    </Text>
                    {/* <Text
                      className="text-slate-500 py-[0.2rem]"
                      style={{
                        color: "rgb(100 116 139)",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      Tax
                    </Text> */}
                    <Text
                      className="text-slate-500 py-[0.2rem]"
                      style={{
                        color: "rgb(100 116 139)",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      Tax
                    </Text>
                    <Text
                      className="text-slate-500 py-[0.2rem]"
                      style={{
                        color: "rgb(100 116 139)",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      Shipping Fee
                    </Text>
                  </View>
                  <View
                    className=" text-[11px] flex flex-col "
                    style={{
                      fontSize: "11",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      className="font-semibold text-right py-[0.2rem]"
                      style={{
                        fontWeight: "600",
                        textAlign: "right",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      $ {invoiceData?.subTotal}
                    </Text>
                    {/* <Text
                      className="font-semibold text-right py-[0.2rem]"
                      style={{
                        fontWeight: "600",
                        textAlign: "right",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      {invoiceData?.tax}
                    </Text> */}
                    <Text
                      className="font-semibold text-right py-[0.2rem]"
                      style={{
                        fontWeight: "600",
                        textAlign: "right",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      {invoiceData?.discount}
                    </Text>
                    <Text
                      className="font-semibold text-right py-[0.2rem]"
                      style={{
                        fontWeight: "600",
                        textAlign: "right",
                        paddingTop: "3.2",
                        paddingBottom: "3.2",
                      }}
                    >
                      {invoiceData?.shipping}
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                className=" w-full border-b border-solid border-[#d2d1d2] "
                style={{
                  width: "100%",
                  borderBottomWidth: "1",
                  borderStyle: "solid",
                  borderColor: "#d2d1d2",
                }}
              ></Text>
              <View
                className="flex justify-end py-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingTop: "8",
                  paddingBottom: "8",
                }}
              >
                <View
                  className="flex justify-between basis-[45%] px-2 items-center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingLeft: "8",
                    paddingRight: "8",
                    flexBasis: "45%",
                  }}
                >
                  <Text
                    className="font-semibold text-[11px]"
                    style={{
                      fontWeight: "600",
                      fontSize: "9",
                    }}
                  >
                    Total
                  </Text>
                  <Text
                    className="text-base font-semibold text-[#2764F6]"
                    style={{
                      fontSize: "16",
                      fontWeight: "600",
                      color: "rgb(39 100 246)",
                    }}
                  >
                    $
                    {isNaN(invoiceData?.total)
                      ? invoiceData?.subTotal
                      : invoiceData?.total}
                  </Text>
                </View>
              </View>
              <View
                className="my-2 py-2 px-2 bg-[#FAF9FA] block"
                style={{
                  display: "block",
                  padding: "8",
                  marginTop: "8",
                  marginBottom: "8",
                  backgroundColor: "#FAF9FA",
                }}
              >
                <Text
                  className="text-[9px] text-[#B3B2B4] inline-block my-1 "
                  style={{
                    color: "rgb(179 178 180)",
                    fontSize: "8.5",
                    marginTop: "4",
                    marginBottom: "4",
                    display: "inline - block",
                  }}
                >
                  Notes
                </Text>
                <Text
                  className="text-[10px] italic block"
                  style={{
                    fontSize: "9",
                    fontStyle: "italic",
                    display: "block",
                  }}
                >
                  {invoiceData?.note}
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PDFFile;
