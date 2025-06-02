import { Description, Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';

export default function InputT({name,value,type ,label,onChange}) {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium ">{label}</Label>
{/*         <Description className="text-sm/6 ">Use your real title so people will recognize you.</Description> */}
        <Input
        type={type}
        name={name}

        onChange={onChange}
        value={value}
          className={clsx(
            'mt-3 block w-full rounded-lg border  px-3 py-1.5 text-sm/6 ',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 '
          )}
        />
      </Field>
    </div>
  )
}
