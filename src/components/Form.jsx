import React, { useEffect, useState } from "react";
//test

const Form = ({ saveInvoiceData }) => {
  const [counter, setCounter] = useState(0);
  //handle change.
  const [inputChanged, setInputChanged] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState({
    logo: "",
    invoiceNum: "",
    companyDetails: "",
    bill: "",
    dateIssued: "",
    dueDate: "",
    itemDetails: [
      { id: Math.random() * 100, item: "", rate: "", qty: "", amount: "" },
    ],
    note: "",
    tax: "",
    discount: "",
    shipping: "",
    subTotal: "",
    total: "",
  });
  const calculateAmount = (qty, rate) => {
    if (qty !== "" && rate !== "") {
      return qty * rate;
    } else {
      return "";
    }
  };
  const calculateSubTotalAmount = (itemDetails) => {
    return itemDetails.reduce((total, item) => {
      const amount = calculateAmount(item.qty, item.rate);
      if (item.qty !== "" && item.rate !== "") {
        return total + amount;
      }
    }, 0);
  };

  // const calculateTotalAmount = ({ subTotal, discount = 0, shipping = 0 }) => {
  //   return parseFloat(subTotal) + parseFloat(discount) + parseFloat(shipping);
  // };
  const calculateTotalAmount = (itemDetails) => {
    return (
      parseFloat(itemDetails.subTotal) +
      parseFloat(itemDetails.discount) +
      parseFloat(itemDetails.shipping)
    );
  };
  const subTotal = calculateSubTotalAmount(invoiceDetails.itemDetails);
  const total = calculateTotalAmount(invoiceDetails);

  const handleChange = (e) => {
    const input = e.target.name;
    const value = e.target.value;
    setInvoiceDetails((prev) => {
      return { ...prev, [input]: value };
    });
    setInputChanged(!inputChanged);
  };
  // console.log(invoiceDetails);
  //handle add items
  const [items, setItems] = useState(invoiceDetails.itemDetails);
  const handleAddItems = () => {
    const newItems = [
      ...items,
      {
        id: Math.random() * 100,
        item: "",
        rate: "",
        qty: "",
        amount: "",
      },
    ];
    setItems(newItems);
    setInvoiceDetails((prev) => {
      return { ...prev, subTotal: subTotal, itemDetails: newItems };
    });
    setInputChanged(!inputChanged);

    // console.log(items);
    // console.log(invoiceDetails);
  };

  const deleteItem = (items, index) => {
    items.splice(index, 1);
    setItems(items);
    console.log(items, "index");
    setInvoiceDetails({
      ...invoiceDetails,
      itemDetails: items,
    });
    setInputChanged(!inputChanged);
  };

  useEffect(() => {
    invoiceDetails.subTotal = subTotal;
    invoiceDetails.total = total;
    saveInvoiceData(invoiceDetails);
  }, [inputChanged]);

  const handleItemDetailsChange = (index, event) => {
    const { name, value } = event.target;
    const fieldName = name.split("-")[0];
    // Extract the field name from the input name
    const newItemDetails = [...invoiceDetails.itemDetails];

    newItemDetails[index][fieldName] = value;
    if (event.target.name !== "item") {
      newItemDetails[index]["amount"] =
        newItemDetails[index]["qty"] * newItemDetails[index]["rate"];
    }

    // Update the state with the modified itemDetails array
    setInvoiceDetails({
      ...invoiceDetails,

      itemDetails: newItemDetails,
    });
    setInputChanged(!inputChanged);
  };

  const getLogo = async (e) => {
    const imageFile = e.target.files[0];
    if (e.target.value.length === 0) {
      return null;
    }

    const fileSize = e.target.files[0].size / 1024;
    if (fileSize > 500) {
      return null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (e) => {
      const image = new Image();
      image.src = e.target.result;
      setInvoiceDetails((prev) => {
        return { ...prev, logo: e.target.result };
      });
      setInputChanged(!inputChanged);
    };
  };

  return (
    <div className="md:flex md:justify-center">
      <div className="p-6 ">
        <form className="grid grid-cols-2  gap-2">
          <span className="flex flex-col pb-2">
            <label htmlFor="logo" className="text-xs text-slate-500">
              Logo
            </label>
            <input
              type="file"
              name="logo"
              onChange={getLogo}
              className="  border py-2 pr-1 rounded-lg text-xs text-slate-500 border-solid
                file:mr-2 file:ml-1 file:py-2 file:px-3
                file:rounded-full file:border-0
                file:text-xs file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                md:file:text-[10px]
                md:file:mr-1
                md:file:px-2 
              "
            />
          </span>
          <span className="flex flex-col pb-2">
            <label htmlFor="invoiceNum" className="text-xs text-slate-500">
              Invoice number
            </label>
            <input
              type="text"
              name="invoiceNum"
              onChange={handleChange}
              className="form-input text-xs rounded-lg border-solid "
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="companyDetails" className="text-xs text-slate-500">
              Your company details
            </label>
            <textarea
              name="companyDetails"
              onChange={handleChange}
              className="form-input rounded-lg border-solid text-xs"
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="bill" className="text-xs text-slate-500">
              Bill to
            </label>
            <textarea
              name="bill"
              onChange={handleChange}
              className="form-input text-xs rounded-lg border-solid "
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="dateIssued" className="text-xs text-slate-500">
              Date issued
            </label>
            <input
              type="date"
              name="dateIssued"
              onChange={handleChange}
              className="form-input text-xs rounded-lg border-solid "
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="dueDate" className="text-xs text-slate-500">
              Due date
            </label>
            <input
              type="date"
              name="dueDate"
              onChange={handleChange}
              className="form-input text-xs rounded-lg border-solid "
            />
          </span>
          <div className="py-2 px-3 flex flex-col  col-span-2 bg-[#F3F2F3] rounded-lg md:px-5 md:py-4 sm:px-3 sm:py-2">
            <span className="flex mb-2">
              <span className="basis-[45%] text-xs pl-1 sm:p-0  text-slate-500">
                Item
              </span>
              <span className="basis-[15%] text-xs pl-1 sm:p-0 sm:text-center text-slate-500">
                Rate
              </span>
              <span className="basis-[15%] text-xs pl-3 sm:p-0 sm:text-center text-slate-500">
                Qty
              </span>
              <span className="basis-[20%] text-xs pl-6 sm:p-0 sm:text-center text-slate-500">
                Amount
              </span>
              <span className="basis-[5%] text-xs pl-1 text-slate-500"></span>
            </span>
            <div className="">
              {invoiceDetails.itemDetails.map((item, index) => (
                <div className="flex flex-col mb-2" key={item.id}>
                  <span className="flex justify-center items-center gap-2">
                    <input
                      type="text"
                      name="item"
                      onChange={(event) =>
                        handleItemDetailsChange(index, event)
                      }
                      className="w-[292px] text-xs form-input rounded-lg border-solid md:basis-[45%] sm:w-[145px] "
                    />
                    <input
                      type="number"
                      name="rate"
                      onChange={(event) =>
                        handleItemDetailsChange(index, event)
                      }
                      className="w-[90.8px] text-xs form-input rounded-lg border-solid md:basis-[15%] sm:w-[46px]"
                    />
                    <input
                      type="number"
                      name="qty"
                      onChange={(event) =>
                        handleItemDetailsChange(index, event)
                      }
                      className="w-[90.8px] text-xs  form-input rounded-lg border-solid md:basis-[15%] sm:w-[46px]"
                    />
                    <input
                      type="number"
                      name="amount"
                      disabled
                      value={calculateAmount(item.qty, item.rate)}
                      className="w-[95.84px] text-xs form-input rounded-lg border-solid md:basis-[20%] sm:w-[58px]"
                    />
                    {index !== 0 && (
                      <span
                        className=" h-[25px] w-[25px] flex items-center "
                        onClick={() =>
                          deleteItem(invoiceDetails.itemDetails, index)
                        }
                      >
                        <svg
                          className="h-[23px] w-[23px] md:h-[15px] md:w-[15px] md:basis-[5%] sm:h-[12px] sm:w-[12px]"
                          fill="#6A6969"
                          viewBox="-3.5 0 19 19"
                          xmlns="http://www.w3.org/2000/svg"
                          class="cf-icon-svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
                          </g>
                        </svg>
                      </span>
                    )}

                    {index === 0 && (
                      <span className=" h-[25px] w-[25px]"></span>
                    )}
                  </span>
                </div>
              ))}

              <span className="flex flex-col items-center mt-6 text-xs text-[#2764F6]">
                <span
                  className="inline-flex items-center justify-center rounded-full bg-[#2764F6] h-[30px] w-[30px]"
                  onClick={handleAddItems}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title></title>{" "}
                      <g id="Complete">
                        {" "}
                        <g data-name="add" id="add-2">
                          {" "}
                          <g>
                            {" "}
                            <line
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              x1="12"
                              x2="12"
                              y1="19"
                              y2="5"
                            ></line>{" "}
                            <line
                              fill="none"
                              stroke="#ffffff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              x1="5"
                              x2="19"
                              y1="12"
                              y2="12"
                            ></line>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
                <span className="">Add item</span>
              </span>
            </div>
          </div>
          <div className="basis-[50%]">
            <span className="pt-2 flex gap-y-2 flex-col">
              <label className="text-xs text-slate-500">
                Notes / Payment terms
              </label>
              <textarea
                name="note"
                onChange={handleChange}
                className=" text-xs form-textarea rounded-lg border-solid "
              />
            </span>
          </div>
          <div className="basis-[50%]">
            <span className="pt-2 flex flex-col gap-y-2 items-end">
              <span className=" text-xs flex gap-x-3  ">
                <span className="">Subtotal</span>
                <span className="w-[97.8px] text-right ">${subTotal}</span>
              </span>
              {/* <span className="flex items-center gap-x-3">
                <label htmlFor="tax" className="text-xs text-slate-500">
                  Tax
                </label>
                <input
                  type="number"
                  name="tax"
                  onChange={handleChange}
                  className="w-[97.8px] text-right text-xs form-input rounded-lg border-solid "
                />
              </span> */}
              <span className="flex items-center gap-x-3">
                <label htmlFor="discount" className="text-xs text-slate-500">
                  Tax
                </label>
                <input
                  type="number"
                  name="discount"
                  onChange={handleChange}
                  className="w-[97.8px] text-right text-xs form-input rounded-lg border-solid "
                />
              </span>
              <span className="flex items-center gap-x-3">
                <label htmlFor="shipping" className="text-xs text-slate-500">
                  Shipping fee
                </label>
                <input
                  type="number"
                  name="shipping"
                  onChange={handleChange}
                  className="w-[97.8px] p-2  text-right text-xs form-input rounded-lg border-solid "
                />
              </span>
              <span className="flex items-center gap-x-3 text-xs  text-[#2764F6]">
                <label htmlFor="total" className="text-xs ">
                  Total
                </label>
                <span className="w-[97.8px] text-right">
                  ${isNaN(total) ? subTotal : total}
                </span>
              </span>
            </span>
          </div>

          {/* <div className="">counter: {counter} </div>
          <span
            className="block h-7 w-7 bg-slate-500"
            onClick={() => setCounter((i) => i + 1)}
          >
            click me
          </span> */}
        </form>
      </div>
    </div>
  );
};

export default Form;
