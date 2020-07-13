import _ from 'lodash';

export type Modifiers = {
  [key: string]: string | boolean | number | undefined;
};

function bem(className: string, modifiers: Modifiers, customClass?: string) {
  let classNames = [customClass];

  if (_.isNull(className)) {
    _.forEach(modifiers, (prop, key) => {
      if (typeof prop !== 'undefined') {
        if (_.isBoolean(prop)) {
          if (prop) classNames.push(key);
        } else {
          classNames.push(`${key}-${prop}`);
        }
      }
    });

    return classNames.join(' ').trim();
  }

  classNames = [customClass, className];
  _.forEach(modifiers, (prop, key) => {
    if (typeof prop !== 'undefined') {
      if (_.isBoolean(prop)) {
        if (prop) classNames.push(`${className}--${key}`);
      } else {
        classNames.push(`${className}--${key}-${prop}`);
      }
    }
  });

  return classNames.join(' ').trim();
}

export default bem;
