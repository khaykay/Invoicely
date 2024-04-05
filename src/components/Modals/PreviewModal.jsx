import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePreview } from "../../Redux/previewSlice";
import Preview from "../Preview";

const PreviewModal = () => {
  const previewModal = useSelector((state) => state.previewReducer.value);
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    const togglePreviewModal = (event) => {
      if (previewModal && ref.current && !ref.current.contains(event.target)) {
        dispatch(togglePreview());
      }
    };
    document.addEventListener("mousedown", togglePreviewModal);
    return () => {
      document.removeEventListener("mousedown", togglePreviewModal);
    };
  }, [previewModal]);
  return (
    <>
      {previewModal && (
        <div
          ref={ref}
          className="fixed  h-3/4 bg-slate-500 bottom-0 w-screen overflow-scroll"
        >
          <div className="flex  justify-center">
            <Preview />
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
