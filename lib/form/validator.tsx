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
    if (rule.validator && !isEmpty(value)) {
      const promise = rule.validator.validate(value);
      addError(rule.key, {message: rule.validator.name, promise});
    }
    if (rule.required && isEmpty(value)) {
      addError(rule.key, {message: 'required'});
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.key, {message: 'minLength'});
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.key, {message: 'maxLength'});
    }
    if (rule.pattern && !isEmpty(value)) {
      if (!(rule.pattern.test(value))) {
        addError(rule.key, {message: 'pattern'});
      }
    }
  });

  Promise.all(
    flat(Object.values(errors))
      .filter(item => item.promise)
      .map(item => item.promise)
  ).then(() => {
    callback(fromEntries(Object.keys(errors).map(key =>
      [key, errors[key].map((i: OneError) => i.message)]
    )));
  }).catch(() => {
    // callback(fromEntries(Object.keys(errors).map(key =>
    //   [key, errors[key].map((i: OneError) => i.message)]
    // )));
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

const fromEntries = (array: Array<[string, string[]]>): { [key: string]: string[] } => {
  const result: { [key: string]: string[] } = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
};
