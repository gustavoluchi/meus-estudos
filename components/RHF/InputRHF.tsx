import {useController} from 'react-hook-form';

export default function InputRHF({name, control, label}: any) {
  const {field, fieldState} = useController({name, control});
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...field}
        type="text"
        // placeholder="Type here"
        className={`input input-bordered w-full max-w-xs ${
          fieldState.error && 'input-error'
        }`}
      />
      {fieldState.error && (
        <label className="label">
          <span className="label-text-alt text-error">
            {fieldState.error?.message}
          </span>
        </label>
      )}
    </div>
  );
}
