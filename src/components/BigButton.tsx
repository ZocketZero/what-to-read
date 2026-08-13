import { FC } from "react";

interface BT {
  onclick: Function;
  title: string;
  small?: boolean;
}

const BigButton: FC<BT> = ({ onclick, title, small }) => {
  return (
    <button
      className={`btn-random${small ? " btn-random--sm" : ""}`}
      onClick={() => onclick()}
      title="คลิกเพื่อสุ่ม"
    >
      {title}
    </button>
  );
};

export default BigButton;
