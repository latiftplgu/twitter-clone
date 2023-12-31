import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
};
const Modal = (props: ModalProps) => {
  const handleClose = useCallback(() => {
    if (props.disabled) return;
    props.onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.disabled, props.onClose]);
  const handleSubmit = useCallback(() => {
    if (props.disabled) return;
    props.onSubmit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.disabled, props.onSubmit]);
  if (!props.isOpen) return null;
  return (
    <div
      className="
  justify-center 
  items-center
  flex
  overflow-x-hidden
  overflow-y-auto
  fixed
  inset-0
  z-50
  outline-none
  focus-outline-none
  bg-neutral-500
  bg-opacity-70"
    >
      <div
        className="relative 
    w-full
    lg:w-3/6
    my-6
    mx-auto
    lg:max-w-3xl
    h-full
    lg:h-auto"
      >
        <div
          className="h-full
        lg:h-auto
        border-0
        rounded-lg
        shadow-lg
        relative
        flex
        flex-col
        w-full
        bg-black
        outline-none
        focus:outline-none
        "
        >
          <div
            className="flex
            items-center
            justify-between
            p-10
            rounded-t"
          >
            <h3
              className="text-3xl
            font-semibold
            text-white"
            >
              {props.title}
            </h3>
            <button
              onClick={handleClose}
              className="
            p-1
            ml-auto
            border-0
            text-white
            hover:opacity-70
            transition"
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div
            className="
          relative p-10
          flex-auto
          "
          >
            {props.body}
          </div>
          <div
            className="
          flex flex-col gap-2 p-10"
          >
            <Button
              disabled={props.disabled}
              onClick={handleSubmit}
              label={props.actionLabel}
              secondary
              fullWidth
              large
            />
            {props.footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
