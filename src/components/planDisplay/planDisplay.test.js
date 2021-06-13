import React from "react";
import { render, screen } from "@testing-library/react";
import PlanDisplay from "./index";

const getData = () => {
  const jsonData = {
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
  return { jsonData };
};
test("renders display-plan-title", () => {
  const { jsonData } = getData();
  render(<PlanDisplay jsonData={jsonData}/>);
  const element = screen.getByTestId("display-plan-title");
  expect(element).toBeTruthy();
});

test("renders correct number of table row cells", () => {
    const {jsonData} = getData();
    render(<PlanDisplay jsonData={jsonData} />);
    const element = screen.getAllByTestId("table-row-cell");
    expect(element.length === jsonData.plans[0].fields.length).toBeTruthy();
})
