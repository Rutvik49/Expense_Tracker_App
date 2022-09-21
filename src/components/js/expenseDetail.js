import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
// import { shadows } from '@mui/system';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 2,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#478fd7" : "#478fd7",
        color: (theme) => (theme.palette.mode === "dark" ? "white" : "white"),
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.975rem",
        fontWeight: "500",
        ...sx,
      }}
      {...other}
    />
  );
}
Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const expenseDetail = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          p: 0,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item
          style={{ width: "auto" }}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {props.Date.toLocaleDateString()}
        </Item>
        <Item
          sx={{ flexGrow: 1 }}
          style={{ width: "75%" }}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {props.Title}
        </Item>
        <Item
          style={{ width: "15%" }}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          &#x20b9;{props.Amount}
        </Item>
      </Box>
    </div>
  );
};

export default expenseDetail;
