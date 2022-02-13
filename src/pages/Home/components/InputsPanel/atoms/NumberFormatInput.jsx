import React, { useContext } from 'react';
import NumberFormat from 'react-number-format';
import Context from '../../../../../Provider/Context';
import { customTextField } from '../muiStyled/muiStyled';

const NumberFormatInput = ({ type, e }) => {
  const {
    form, handleChange, clearState, currentOptions, errors, handleClick,
  } = useContext(Context);
  const checkType = () => {
    if (type === 'currency') {
      return (
        <NumberFormat
          customInput={customTextField}
          variant="outlined"
          onChange={(event) => handleChange(event, e)}
          autoComplete="off"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          name={e}
          className="fields"
          value={form[e].value}
        />
      );
    }
    return (
      <NumberFormat
        className="fields"
        customInput={customTextField}
        variant="outlined"
        onValueChange={(values) => handleChange(values, e)}
        isAllowed={(values) => {
          const { value } = values;
          return Number(value) >= 0 && Number(value) <= 100;
        }}
        suffix="%"
        decimalScale={form[e].value >= 100 ? 0 : 2}
        decimalSeparator=","
        value={form[e].value}
      />
    );
  };

  return (
    checkType()
  );
};

export default NumberFormatInput;
