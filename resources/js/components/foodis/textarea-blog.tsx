import { Description, Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

export default function TextareaBlog({value, onChange, onSend}) {
  return (
    <div className="w-full  px-4">
      <Field>
        <Label className="text-sm/6 font-medium ">Description</Label>
        <Description className="text-sm/6">This will be shown under the product title.</Description>
        <Textarea
        onChange={(ev) => onChangeEvent(ev)}
        value={value}
          className={clsx(
            'mt-3 block w-full resize-none rounded-lg border  px-3 py-1.5 text-sm/6',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 '
          )}
          rows={8}
        />
      </Field>
    </div>
  )
}