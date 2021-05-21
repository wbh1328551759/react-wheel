import { FormValue } from './Form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validator?: {
    name: string;
    validate: (value: string) => Promise<void>
  }
}

type FormRules = Array<FormRule>

interface FormErrors {
  [key: string]: string[]
}

interface OneError {
  message: string;
  promise?: Promise<any>
}

const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
};

export const noError = (errors: any) => {
  return Object.keys(errors).length === 0;
};

const Validator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void): void => {
  let errors: any = {};
  const addError = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };

  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.validator && isEmpty(value)) {
      //自定义的校验器
      const promise = rule.validator.validate(value);
      console.log('promise', promise)
      addError(rule.key, {message: '用户名已存在', promise});
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, {message: '必填'});
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, {message: '你太短了'});
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, {message: '你太长了'});
    }
    if (rule.pattern && !isEmpty(value)) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, {message: '格式不正确'});
      }
    }
  });
  const promiseList = flat(Object.values(errors))
    .filter(item => item.promise)
    .map(item => item.promise);

  Promise.all(promiseList)
    .then(() => {
      const newErrors = fromEntries(Object.keys(errors).map(key =>
        [key, errors[key].map((i: OneError) => i.message)]
      ))
      callback(newErrors);
    })
    .catch(() => {
      const newErrors = fromEntries(Object.keys(errors).map(key =>
        errors[key].map((i: OneError) => i.message)
      ))
      callback(newErrors);
    });
};

export default Validator;

const flat = (array: Array<any>): Array<any> => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

const fromEntries = (array: Array<[string, string[]]>): {[key: string]: string[]}  => {
  const result: {[key: string]: string[]} = {}
  for(let i= 0; i< array.length; i ++){
    result[array[i][0]] = array[i][1]
  }
  return result
}
