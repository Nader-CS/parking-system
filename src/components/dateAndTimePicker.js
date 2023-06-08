import * as React from 'react';
// import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickerValue() {
//   const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="PARKING FROM"
          sx={{backgroundColor:'white', border:'1px solid #AA23B6', borderRadius:"8px"}}
        />
        <DateTimePicker
          label="PARKING UNTIL"
          sx={{backgroundColor:'white', border:'1px solid #AA23B6', borderRadius:"8px"}}
        />
        {/* <DateTimePicker
          label="Controlled picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        /> */}
      </DemoContainer>
    </LocalizationProvider>
  );
}