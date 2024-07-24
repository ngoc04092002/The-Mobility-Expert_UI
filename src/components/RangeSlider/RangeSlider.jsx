import React from "react";

import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 5px;
  margin: 14px 0;
`;

const StyledThumb = styled.div`
  height: 14px;
  top: -4px;
  width: 14px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #0db14b;
  border-radius: 50%;
  cursor: grab;
`;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "#C9C9CC" : props.index === 1 ? "#0DB14B" : "#C9C9CC"};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const RangeSlider = ({ min, max, unit }) => {
  return (
    <StyledSlider
      defaultValue={[min, 100]}
      renderTrack={Track}
      renderThumb={(props, state) => {
        return (
          <StyledThumb {...props} className="relative">
            <p className="absolute whitespace-nowrap -top-[17px] right-0 text-[12px] font-normal text-[#1C1E1F]">
              {unit === "USD"
                ? formatter.format(state.valueNow * 100)
                : `${state.valueNow * 50} ${unit}`}
            </p>
          </StyledThumb>
        );
      }}
    />
  );
};

export default RangeSlider;
