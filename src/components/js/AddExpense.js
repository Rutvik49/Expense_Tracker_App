import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import "../css/AddExpenses.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const expand = () => {
  var x = document.getElementById("accordian");
  // console.log(x.getAttribute('style'));
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Addexpense(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // let Today = new Date(2022, 9, 16);

  const [enteredDate, setDate] = useState('');
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  

  const handleDateChange = (event) => {
    // console.log(event.target.value);
    if (event.target.value==null) {
      setDate(new Date(2022, 9, 16));
    } else {
      setDate(event.target.value);
    }

    // setDate(event.target.value);
    // console.log(event.target.value);
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // console.log(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = () => {
    const expenseData = {
      id: Math.random(),
      date: new Date(enteredDate),
      title: Title,
      amount: Amount,
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setDate("");
    setTitle(""); 
    setAmount("");
  };
  // let Today = new Date(2022, 9, 16);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <AddIcon sx={{ fontSize: 30 }} onClick={expand} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add Expense
          </Typography>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>

      <div className="add">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionDetails id="accordian" style={{ display: "none" }}>
            <Box sx={{ "& > :not(style)": { m: 2 } }}>
              <FormControl variant="standard" sx={{ width: "30%" }}>
                <InputLabel htmlFor="input-with-icon-adornment">
                  Select Date
                </InputLabel>
                <Input
                  type="date"
                  id="input-with-icon-adornment"
                  value={enteredDate}
                  onChange={handleDateChange}
                  startAdornment={
                    <InputAdornment position="start">
                      {/* <CalendarMonthIcon /> */}
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                value={Title}
                onChange={handleTitleChange}
                id="input-with-icon-textfield"
                label="Expense Description"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ManageAccountsSharpIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ width: "50%" }}
              />
              <TextField
                value={Amount}
                onChange={handleAmountChange}
                id="input-with-icon-textfield"
                label="Amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupeeSharpIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{ width: "12%" }}
              />

              <Box textAlign="center">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ width: "15%" }}
                >
                  Add Expense
                </Button>
                <Button variant="outlined" onClick={expand} sx={{ ml: 2 }}>
                  Cancel
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
