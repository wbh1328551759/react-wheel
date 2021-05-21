import React from 'react';
import Input from '../input/Input';
import classes from '../helpers/classes';
import './form.scss'
export interface FormValue {
  [K: string]: any
}

interface FieldItem{
  name: string;
  label: string;
  input: { type: string };
}

interface FormProps {
  formData: FormValue;
  fields: FieldItem[];
  buttons: React.ReactElement;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}

const Form: React.FC<FormProps> = ({formData, fields, buttons, onSubmit, onChange, errors}: FormProps) => {
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    onChange(newFormValue);
  };

  return (
    <form onSubmit={submit}>
      <table className='wr-form-table'>
        {fields.map((f: FieldItem) => (
          <tr className={classes('wr-form-tr')} key={f.name}>
            <td className='wr-form-td'>
              <span className='wr-form-label'>{f.label}</span>
            </td>
            <td className='wr-form-td'>
              <Input
                className='wr-form-input'
                type={f.input.type}
                value={formData[f.name]}
                onChange={(e) =>
                  onInputChange(f.name, e.target.value)
                }/>
            </td>
            <div className='wr-form-error'>{errors[f.name]?.join(', ')}</div>
          </tr>
        ))}
        <tr className='wr-form-tr'>
          <td className='wr-form-td'/>
          <td className='wr-form-td'>
            {buttons}
          </td>
        </tr>
      </table>
    </form>
  );
};

export default Form;
