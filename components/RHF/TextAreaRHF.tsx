import {useController} from 'react-hook-form';

export default function TextAreaRHF({
  name,
  control,
  label,
  className,
  required
}: any) {
  const {field, fieldState} = useController({name, control});
  return (
    <div className={`form-control w-full px-2 ${className}`}>
      <label className="label">
        <span className="label-text">
          {label} {required && '*'}
        </span>
      </label>
      <textarea
        {...field}
        // placeholder="Type here"
        className={`textarea textarea-bordered h-48 ${
          fieldState.error && 'textarea-error'
        }`}
        required={required}
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
