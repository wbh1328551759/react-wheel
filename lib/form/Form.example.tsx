import Form, { FormValue } from './Form';
import React, { useState } from 'react';
import Validator, { noError } from './validator';
import Button from '../button/Button';

const userNames = ['bob', 'ccccccccccc','jack', 'sina', 'mono']
const checkUserName = (userName: string, success: () => void, fail: () => void) => {
  setTimeout(() => {
    if(userNames.indexOf(userName) >= 0){
      success()
    }else {
      fail()
    }
  }, 1000)
}

const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [errors, setErrors] = useState({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {
        key: 'username', validator: {
          name: 'unique',
          validate(username: string){
            return new Promise<void>((resolve, reject) => {
              checkUserName(username, resolve as () => void, reject)
            })
          }
        }
      },
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
    ];
    console.log('rules', rules)
    Validator(formData, rules, (errors) => {
      console.log(errors)
      setErrors(errors);
      if(noError(errors)){
        //
      }
    });
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: '用户名已存在'
    }
    return map[message]
  }

  return (
    <Form formData={formData}
          fields={fields}
          buttons={
            <>
              <Button type='submit' level='important'>提交</Button>
              <Button>返回</Button>
            </>
          }
          errors={errors}
          onChange={(newValue) => setFormData(newValue)}
          onSubmit={onSubmit}
          transformError={transformError}
    />
  );
};

export default FormExample;
