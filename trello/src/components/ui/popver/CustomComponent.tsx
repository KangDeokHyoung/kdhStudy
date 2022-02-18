import React, { useState } from "react";
import { Popover, Whisper, Button } from "rsuite";
import { IoMdTrash } from "react-icons/io";
import "./CustomComponent.scss";
import { BsPlusLg } from "react-icons/bs";

export const DeleteCardComponent = ({ placement, children, deleteUser, id }: any) => (
  <Whisper
    trigger="click"
    placement={placement}
    speaker={<PopoverDeleteCard deleteUser={deleteUser} id={id} />}
  >
    <Button appearance="subtle" id="list-input-button">
      <IoMdTrash className="list-input-icon" />
    </Button>
  </Whisper>
);

const PopoverDeleteCard = React.forwardRef(({ deleteUser, id, ...props }: any, ref: any) => {
  return (
    <div className="delete-pop">
      <Popover ref={ref} {...props}>
        <div className="">
          <div onClick={() => deleteUser(id)}>삭제 하시겠습니까?</div>
        </div>
      </Popover>
    </div>
  );
});

export const AddCardComponet = ({ placement, createUser, children }: any) => (
  <Whisper
    trigger="click"
    placement={placement}
    speaker={<PopoverAddCard createUser={createUser} />}
  >
    <Button appearance="subtle" id="list-input-button">
      <BsPlusLg className="add-Card-icon" />
      <span>Add a Card</span>
    </Button>
  </Whisper>
);

const PopoverAddCard = React.forwardRef(({ createUser, ...props }: any, ref: any) => {
  const [addCard, setAddCard] = useState("");
  return (
    <Popover ref={ref} {...props}>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createUser(addCard);
          }}
        >
          <input value={addCard} onChange={(e) => setAddCard(e.target.value)}></input>
        </form>
      </div>
    </Popover>
  );
});
