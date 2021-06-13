import React, { useRef } from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import ConfirmButton from "../confirmButton";
const PLACEHOLDER = {
  plans: [
    {
      title: "Standard Plan",
      price: 0,
      fields: [
        {
          label: "fieldA",
          value: false,
        },
        {
          label: "fieldB",
          value: false,
        },
        {
          label: "fieldC",
          value: false,
        },
        {
          label: "fieldD",
          value: false,
        },
        {
          label: "fieldE",
          value: true,
        },
      ],
    },
    {
      title: "Premium Plan",
      price: 10,
      fields: [
        {
          label: "fieldA",
          value: false,
        },
        {
          label: "fieldB",
          value: false,
        },
        {
          label: "fieldC",
          value: false,
        },
        {
          label: "fieldD",
          value: true,
        },
        {
          label: "fieldE",
          value: true,
        },
      ],
    },
    {
        title: "Supreme Plan",
        price: 100,
        fields: [
          {
            label: "fieldA",
            value: true,
          },
          {
            label: "fieldB",
            value: true,
          },
          {
            label: "fieldC",
            value: true,
          },
          {
            label: "fieldD",
            value: true,
          },
          {
            label: "fieldE",
            value: true,
          },
        ],
      },
  ],
};

const JSONInputFn = (props) => {
  const jsonInputRef = useRef();
  const { getJson } = props;
  const submitJson = () => {
    if ( jsonInputRef.current.state.error) return
    getJson(
      jsonInputRef.current.state.prevPlaceholder ||
        jsonInputRef.current.state.jsObject
    );
  };
  return (
    <>
      <JSONInput
        ref={jsonInputRef}
        placeholder={PLACEHOLDER}
        locale={locale}
        style={{
          outerBox: {
            height: 0,
            width: "auto",
          },
          container: {
            height: "80vh",
            width: "-webkit-fill-available",
          },
        }}
      />
      <ConfirmButton label="submit" onClick={submitJson} />
    </>
  );
};

export default JSONInputFn;
