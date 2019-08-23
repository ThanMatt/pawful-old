import React from 'react';

const input = (props) => {
  let inputType;
  
  switch (props.type) {

    case 'input':
      inputType = <input
        className={props.className}
        name={props.name}
        {...props.config}
        onChange={props.onChange}
        value={props.value}
      />
      break;

    case 'textarea':
      inputType = <textarea className={props.className} name={props.name} onChange={props.onChange} {...props.config} />
      break;

    case 'select':
      inputType = <div className={props.className}>
        <select name={props.name} onChange={props.onChange}>
          {props.options.map((option) => <option>{option}</option>)}
        </select>
      </div>
      break;

    default:
      inputType = <input
        className={props.className}
        name={props.name}
        {...props.config}
        onChange={props.onChange}
        value={props.value}
      />
      break;
  }
  return (
    <div className="field" {...props.divConfig}>
      <label className={'label has-text-black ' + (props.labelClassName ? props.labelClassName : '')}>{props.label}</label>
      <div className="control">
        {inputType}
      </div>
    </div>
  )
}

export default input;