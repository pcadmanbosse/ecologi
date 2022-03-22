import RDP from "react-datepicker";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import Draggable from "react-draggable";

const DatePickerContainer = styled("div")`
  position: absolute;
  border-radius: 4px;
  padding: 5px;
  background: lightgray;
  display: flex;
  align-items: center;
  &:hover {
    cursor: move;
  }
`;

type DatePickerProps = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
};

const DatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: DatePickerProps) => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }} bounds="parent">
      <DatePickerContainer>
        <div>
          <div>Display from:</div>
          <RDP
            startDate={startDate}
            showYearDropdown
            endDate={endDate}
            onChange={setStartDate}
            selected={startDate}
            minDate={new Date("01/01/2019")}
            maxDate={endDate}
          />
        </div>
        <div>
          <div>to:</div>
          <RDP
            startDate={startDate}
            showYearDropdown
            endDate={endDate}
            onChange={setEndDate}
            selected={endDate}
            minDate={startDate}
            maxDate={new Date()}
          />
        </div>
      </DatePickerContainer>
    </Draggable>
  );
};

export default DatePicker;
