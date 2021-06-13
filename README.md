# phone-plan-demo

following the json format\ 
title, price and fields are required\
make sure the structure of fields are the same among all the plans\
```json
{
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
}
```
