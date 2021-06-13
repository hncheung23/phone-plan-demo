import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Checkbox from "@material-ui/core/Checkbox";

interface Field {
  label: string;
  value: boolean;
}

interface Plan {
  title: string;
  price: number;
  fields: Array<Field>;
}

interface Plans {
  plans: Array<Plan>;
}

interface Props {
  jsonData: Plans;
}

const useStyles = makeStyles({
  root: {
    padding: "3rem",
  },
  table: {
    minWidth: 650,
  },
  pageTitle: {
    display: "flex",
    justifyContent: "center",
    padding: "4rem",
    fontWeight: "bold",
    fontSize: 30,
  },
  noBorder: {
    border: 0,
  },
  selection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const PlanDisplay = (props: Props) => {
  const { jsonData } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState("");

  const handleChange = (value: string) => {
    setChecked(value);
  };

  const tableHeader = jsonData.plans.map((plan) => plan.title);
  const tableRows = jsonData.plans[0].fields.map((field) => {
    const obj = { label: field.label, values: [] as Array<boolean> };
    jsonData.plans.map((plan) => {
      const target = plan.fields.find((x) => x.label === field.label) || {
        value: false,
      };
      obj.values = [...obj.values, target.value];
      return true;
    });
    return obj;
  });
  return (
    <div className={classes.root}>
      <div className={classes.pageTitle} data-testid="display-plan-title">Choose a Plan</div>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {tableHeader.map((th, index) => {
                return (
                  <TableCell key={index} align="center">
                    <div>{th}</div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow key={index} >
                <TableCell component="th" scope="row" data-testid="table-row-cell">
                  {row.label}
                </TableCell>
                {row.values.map((x) => {
                  return (
                    <TableCell align="center">
                      {x ? <CheckIcon /> : <ClearIcon />}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                className={classes.noBorder}
              ></TableCell>
              {jsonData.plans.map((plan) => {
                return (
                  <TableCell className={classes.noBorder} align="center">
                    <div className={classes.selection}>
                      <Checkbox
                        checked={plan.title === checked}
                        onChange={() => handleChange(plan.title)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      <div>
                        <b>{`HKD${plan.price} `}</b>
                        {"/Month"}
                      </div>
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PlanDisplay;
