import React from "react";
import Radio from "@mui/material/Radio";
import { Button, ButtonGroup } from "@mui/material";

const Btn = () => {
  const [selectedValue, setSelectedValue] = React.useState("all");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <ButtonGroup size="small" sx={{ backgroundColor: "royalblue" }}>
      <Button sx={{ color: "white" }}>
        <Radio
          {...controlProps("all")}
          size="10px"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "aqua",
            },
          }}
        />
        All
      </Button>
      <Button sx={{ color: "white" }}>
        <Radio
          {...controlProps("today")}
          size="10px"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "aqua",
            },
          }}
        />
        Today
      </Button>
      <Button sx={{ color: "white" }}>
        <Radio
          {...controlProps("between")}
          size="10px"
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "aqua",
            },
          }}
        />
        Between
      </Button>
    </ButtonGroup>
  );
};
export default Btn;
