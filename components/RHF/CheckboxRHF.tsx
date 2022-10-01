import {useController} from 'react-hook-form';

export default function CheckboxRHF({name, control, label, className}: any) {
  const {field} = useController({name, control});

  return (
    <div className={`form-control ${className}`}>
      <label className="label cursor-pointer">
        <span className="label-text mr-2">{label}</span>
        <input type="checkbox" className="checkbox" {...field} />
      </label>
    </div>
  );
}
