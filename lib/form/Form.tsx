import React from 'react';

export interface FormValue{
  [K: string]: any
}

interface FormProps {
  formData: FormValue;
  fields: Array<{name: string, label: string, input: {type: string}}>;
  buttons: React.ReactElement;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]};
}

const Form: React.FC<FormProps> = ({formData, fields, buttons, onSubmit, onChange, errors}: FormProps) => {
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit(e)
  }

  const onInputChange = (name: string, value: string) => {
    const newFormValue = {...formData, [name]: value}
    onChange(newFormValue)
  }
  return (
    <form onSubmit={submit}>
      {fields.map(f => (
        <div key={f.name}>
          {f.label}
          <input
            type={f.input.type}
            value={formData[f.name]}
            onChange={(e) =>
              onInputChange(f.name, e.target.value)
            }/>
            <div>{errors[f.name]}</div>
        </div>
      ))}
      <div>{buttons}</div>
    </form>
  );
};

export default Form;
