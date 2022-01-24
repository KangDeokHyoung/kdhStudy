import React from "react";

const ModalContents = ({ closeHandler }: any) => {
  return (
    <>
      <div className="modal-content">
        <div>모달컨텐츠</div>
      </div>
      <div className="modal-bg" onClick={closeHandler} />
    </>
  );
};

export default ModalContents;
