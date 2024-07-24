import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import RangeSlider from "../../RangeSlider";
import { ExpandMoreIcon } from "../../../assets/icons";

const SubCategoryPrice = () => {
  return (
    <div>
      <p className="border border-solid border-[#C9C9CC] opacity-70"></p>
      <Accordion className="!shadow-none">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="!px-0 !text-[16px] !font-semibold"
        >
          Price
        </AccordionSummary>
        <AccordionDetails className="!px-0">
          <RangeSlider min={5} max={100} unit="USD" />
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label=" Under $1,500" />
            <FormControlLabel
              control={<Checkbox />}
              label=" $1,500 to $2,000"
            />
            <FormControlLabel
              control={<Checkbox />}
              label=" $2,000 to $3,000"
            />
            <FormControlLabel
              control={<Checkbox />}
              label=" $3,000 to $4,000"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SubCategoryPrice;
