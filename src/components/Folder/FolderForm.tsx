import * as Form from "@radix-ui/react-form";
import { FormEvent, useState } from "react";
import { Button } from "../Form/Button";

interface FolderFormProps {
  onSaved?: () => void;
  onCancel?: () => void;
}

export function FolderForm({
  onSaved = () => {},
  onCancel = () => {},
}: FolderFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const folderName = data.folderName.toString();
    const folderKey = Buffer.from(folderName).toString("base64");
    console.log(folderKey);
    const { status } = await fetch(`/api/folder`, {
      method: "post",
      body: JSON.stringify({
        name: folderName,
        key: folderKey,
      }),
    });
    if (status === 200) {
      onSaved();
    }
    setIsLoading(false);
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field name="folderName">
        <div className="flex align-baseline justify-between">
          <Form.Label>Name</Form.Label>
          <Form.Message match="valueMissing" className="text-red-600">
            Please enter a folder name
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
      <div className="flex justify-between mt-4">
        <Form.Submit asChild>
          <Button loading={isLoading}>Save</Button>
        </Form.Submit>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form.Root>
  );
}
