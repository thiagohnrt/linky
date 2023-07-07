import * as Form from "@radix-ui/react-form";
import { Button } from "../Form/Button";
import { useState, FormEvent } from "react";

interface BookmarkFormProps {
  onSaved?: () => void;
  onCancel?: () => void;
}

export function BookmarkForm({
  onSaved = () => {},
  onCancel = () => {},
}: BookmarkFormProps) {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const { status } = await fetch(`/api/bookmark`, {
      method: "post",
      body: JSON.stringify({
        url,
        name,
      }),
    });
    if (status === 200) {
      onSaved();
    }
    setIsLoading(false);
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
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
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <Button loading={isLoading}>Save</Button>
        </Form.Submit>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form.Root>
  );
}
