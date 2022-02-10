import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import * as React from "react";

import { IChartInfo } from "../../pages/QuantLabPage/QuantLabPage";

interface CheckBoxProps {
  state: IChartInfo;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

export default function ChartInfoCheckBoxes({
  state,
  setState,
}: CheckBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {<FormLabel component="legend">차트정보</FormLabel>}

      <FormGroup
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {Object.keys(state).map((key, idx) => {
          return (
            <FormControlLabel
              key={idx}
              control={
                <Checkbox
                  checked={state[key]}
                  onChange={handleChange}
                  name={key}
                />
              }
              label={key}
            />
          );
        })}
      </FormGroup>

      {/* <FormHelperText>Be careful</FormHelperText> */}
    </FormControl>
  );
}
