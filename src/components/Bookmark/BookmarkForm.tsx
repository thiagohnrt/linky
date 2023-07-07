import * as Form from "@radix-ui/react-form";
import { Button } from "../Form/Button";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

interface BookmarkFormProps {
  onCancel?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function BookmarkForm({ onCancel = () => {} }: BookmarkFormProps) {
  return (
    <Form.Root>
      <Form.Field name="url">
        <div className="flex align-baseline justify-between">
          <Form.Label>URL</Form.Label>
          <Form.Message match="valueMissing" className="text-red-600">
            Please enter a url
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="p-2 w-full outline-none bg-white dark:bg-neutral-900"
            autoComplete="off"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="name" className="mt-2">
        <div className="flex align-baseline justify-between">
          <Form.Label>Name</Form.Label>
          <Form.Message match="valueMissing" className="text-red-600">
            Please enter a name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            className="p-2 w-full outline-none bg-white dark:bg-neutral-900"
            autoComplete="off"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="folder" className="mt-2">
        <div className="flex align-baseline justify-between">
          <Form.Label>Folder</Form.Label>
        </div>
        <Form.Control asChild>
          <select className="p-2 w-full outline-none bg-white dark:bg-neutral-900"></select>
        </Form.Control>
      </Form.Field>
      <div className="flex justify-between mt-4">
        <Form.Submit asChild>
          <Button>Save</Button>
        </Form.Submit>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form.Root>
  );
}
