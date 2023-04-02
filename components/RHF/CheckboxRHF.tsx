import {useController} from 'react-hook-form';

export default function CheckboxRHF({name, control, label, className, required}: any) {
  const {field} = useController({name, control});
  return (
    <div className={`form-control ${className}`}>
      <label className="cursor-pointer label">
        <span className="mr-2 label-text">
          {label} {required && '*'}
        </span>
        <input type="checkbox" className="checkbox" checked={field.value} {...field} />
      </label>
    </div>
  );
}
