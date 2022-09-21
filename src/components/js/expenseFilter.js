import * as React from "react";
// import { useState } from "react";
// import { styled, alpha } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from '@mui/material/InputBase';
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const years = ["All","2020", "2021", "2022", "2023", "2024"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Expenseilter(props) {
  // const [year,setYear]=useState('')

  const handleYearChange = (event) => {
    // let currentYear=(event.target.value)
    props.onSelectYear(event.target.value);
  };

  const theme = useTheme();
//   const [personName, setPersonName] = React.useState([handleChange]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    
    const [personName, setPersonName] = React.useState([handleChange]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Select Year
          </Typography>
          <div>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel sx={{ color: "white" }} id="demo-multiple-name-label">
                Year
              </InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                sx={{ color: "white" }}
                value={props.year}
                onChange={handleYearChange}
                //   onChange={handleYearChange}

                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {years.map((name) => (
                  <MenuItem 
                    key={name}
                    value={name}

                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
