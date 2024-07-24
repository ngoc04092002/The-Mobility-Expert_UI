import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import { ExpandMoreIcon } from "../../../assets/icons";

const SubCategoryManufacturer = () => {
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
          Manufacturer
        </AccordionSummary>
        <AccordionDetails className="!p-0">
          <FormGroup>
            {new Array(8).fill(0).map((item, index) => (
              <div key={index} className="flex items-center">
                <FormControlLabel
                  control={<Checkbox />}
                  label={`Manufacturer 0${index + 1}`}
                />
              </div>
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SubCategoryManufacturer;
