import {useController} from 'react-hook-form';

export default function InputRHF({name, control, label, className, required}: any) {
  const {field, fieldState} = useController({name, control});
  return (
    <div className={`form-control w-full px-2 ${className}`}>
      <label className="label">
        <span className="label-text">
          {label} {required && '*'}
        </span>
      </label>
      <input
        {...field}
        type="text"
        // placeholder="Type here"
        className={`input input-bordered w-full ${fieldState.error && 'input-error'}`}
      />
      {fieldState.error && (
        <label className="label">
          <span className="label-text-alt text-error">{fieldState.error?.message}</span>
        </label>
      )}
    </div>
  );
}
