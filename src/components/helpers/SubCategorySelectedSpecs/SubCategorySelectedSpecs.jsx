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

const dataSelectedSpecs = [
  {
    title: "Weight Capacity (lbs.)",
    unit: "lbs",
  },
  {
    title: "Product Weight (lbs.)",
    unit: "lbs",
  },
  {
    title: "Seat Width (in.)",
    unit: "in",
  },
  {
    title: "Seat Depth (in.)",
    unit: "in",
  },
  {
    title: "Seat-to-Floor Height (in.)",
    unit: "in",
  },
  {
    title: "Overall Width (in.)",
    unit: "in",
  },
  {
    title: "Overall Length (in.)",
    unit: "in",
  },
  {
    title: "Ground Clearance (in.)",
    unit: "in",
  },
  {
    title: "Turning Radius (in.)",
    unit: "in",
  },
  {
    title: "Max Speed (mph)",
    unit: "mph",
  },
  {
    title: "Max Driving Range (miles)",
    unit: "miles",
  },
  {
    title: "Max Climbing Angle (degrees)",
    unit: "degrees",
  },
];

const SubCategorySelectedSpecs = () => {
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
          Selected Specs
        </AccordionSummary>
        <AccordionDetails className="!px-0">
          <h3 className="text-[14px] font-semibold">Frame Type</h3>
          <FormGroup className="mb-4">
            <FormControlLabel control={<Checkbox />} label="Disassembles" />
            <FormControlLabel control={<Checkbox />} label="Foldable" />
          </FormGroup>
          {dataSelectedSpecs.map((item) => (
            <div key={item.title} className="mb-8">
              <h5 className="text-[14px] font-semibold mb-6">{item.title}</h5>
              <RangeSlider min={4} max={50} unit={item.unit} />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SubCategorySelectedSpecs;
