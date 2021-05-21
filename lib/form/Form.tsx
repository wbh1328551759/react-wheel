import React from 'react';
import Input from '../input/Input';
import classes from '../helpers/classes';
import './form.scss';

export interface FormValue {
  [K: string]: any
}

interface FieldItem {
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
  transformError?: (message: string) => string;
}

const Form: React.FC<FormProps> = ({formData, fields, buttons, onSubmit, onChange, errors, transformError}: FormProps) => {
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value};
    onChange(newFormValue);
  };

  const transformMessage = (message: string) => {
    const map: any = {
      required: '必填',
      minLength: '太短了',
      maxLength: '太长了'
    }
    return (transformError && transformError(message)) || map[message] || ''
  }

  return (
    <form onSubmit={submit}>
      <table className='wr-form-table'>
        <tbody>
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
            <td className='wr-form-error'>
              {/*<div className='wr-form-error'>*/}
                {transformMessage(errors[f.name] && errors[f.name][0])}
              {/*</div>*/}
            </td>
          </tr>
        ))}
        <tr className='wr-form-tr'>
          <td className='wr-form-td'/>
          <td className='wr-form-td'>
            {buttons}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
