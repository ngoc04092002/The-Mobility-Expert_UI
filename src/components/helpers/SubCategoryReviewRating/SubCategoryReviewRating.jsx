import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import "./style.css";
import { ExpandMoreIcon, StarIcon } from "../../../assets/icons";

const SubCategoryReviewRating = () => {
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
          Review Rating
        </AccordionSummary>
        <AccordionDetails className="!p-0">
          <FormGroup>
            {new Array(5).fill(0).map((item, index) => (
              <div key={index} className="flex items-center">
                <FormControlLabel control={<Checkbox />} />
                <div className="flex justify-center items-center">
                  <p className="w-4">{index}</p>
                  <StarIcon />
                </div>
              </div>
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SubCategoryReviewRating;
