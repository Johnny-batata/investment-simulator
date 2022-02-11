import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const customTextField = styled(Input)({
  variant: 'standard',
  multiline: true,
  id: 'standard-textarea',
  marginTop: '8px',

});

const SectionButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#e59400',
  },
  color: 'black',
  borderColor: 'black',
  height: '35px',
  fontSize: '12px',
});
const SectionButtonSelected = styled(Button)({
  backgroundColor: '#e59400',
  color: 'white',
  borderColor: 'black',
  height: '35px',
  fontSize: '12px',

});

const SimulateButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#e59400',
  },
  width: '45%',
  color: 'black',
  borderWidth: 'thin',

  borderColor: '#e59400',
  boxShadow: 'none',
  borderStyle: 'solid',
  backgroundColor: '#e59400',
});

const CleanFieldsButtons = styled(Button)({
  '&:hover': {
    backgroundColor: 'red',
  },
  width: '45%',
  color: 'black',
  borderWidth: 'thin',
  borderColor: 'black',
  boxShadow: 'none',
  borderStyle: 'solid',
  background: 'none',
});

export {
  customTextField, SimulateButton, CleanFieldsButtons, SectionButton, SectionButtonSelected,
};
