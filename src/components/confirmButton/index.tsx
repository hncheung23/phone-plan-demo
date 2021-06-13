import React from "react";
import "./index.css";

interface Props {
  label: string;
  onClick: () => void;
}

const ConfirmButton = (props: Props) => {
  const { label, onClick } = props;
  return <div className='confirmButton-root' onClick={() => onClick()}>{label}</div>;
};

export default ConfirmButton;
