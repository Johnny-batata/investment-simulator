import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const customTextField = styled(Input)({
  variant: 'standard',
  multiline: true,
  id: 'standard-textarea',
  marginTop: '15px',
});

const SectionButton = styled(Button)((props) => ({
  color: props.mycolor,
  '&:hover': {
    backgroundColor: '#e59400',
    color: 'white',
  },
  borderColor: 'black',
  background: props.mybackground,
  height: '42px !important',
  fontSize: '12px',
  minWidth: '15px',

}));

const SimulateButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#e59400',
  },
  width: '48%',
  color: 'black',
  borderWidth: 'thin',
  height: '55px !important',
  borderColor: '#e59400',
  boxShadow: 'none',
  borderStyle: 'solid',
  backgroundColor: '#e59400',
  ':disabled': {
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0.30)',
    border: 'none',
  },
});

const CleanFieldsButtons = styled(Button)({
  '&:hover': {
    backgroundColor: 'red',
  },
  width: '48%',
  color: 'black',
  borderWidth: 'thin',
  borderColor: 'black',
  boxShadow: 'none',
  borderStyle: 'solid',
  background: 'none',
});

export {
  customTextField, SimulateButton, CleanFieldsButtons, SectionButton,
};
