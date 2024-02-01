import * as Form from "@radix-ui/react-form";
import { FormEvent, useContext, useState } from "react";
import { Button } from "../Form/Button";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Folder } from "@/interfaces/Folder";

interface FolderFormProps {
  onSaved?: () => void;
  onCancel?: () => void;
}

export function FolderForm({
  onSaved = () => {},
  onCancel = () => {},
}: FolderFormProps) {
  const { folderData, setFolderData } = useContext(BookmarkContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const data = Object.fromEntries(new FormData(event.currentTarget));
    const status = await save({ ...data, id: folderData.id });

    if (status === 200) {
      onSaved();
    }
    setIsLoading(false);
  };

  const save = async (data: Folder) => {
    if (data.id) {
      return await put(data);
    } else {
      return await post(data);
    }
  };

  const post = async (data: Folder) => {
    const { status } = await fetch(`/api/folder`, {
      method: "post",
      body: JSON.stringify(data),
    });
    return status;
  };

  const put = async (data: Folder) => {
    const { status } = await fetch(`/api/folder/${data.id}`, {
      method: "put",
      body: JSON.stringify(data),
    });
    return status;
  };

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Field name="name">
        <div className="flex align-baseline justify-between">
          <Form.Label>Name</Form.Label>
          <Form.Message match="valueMissing" className="text-red-600">
            Please enter a folder name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            value={folderData.name}
            onChange={(e) =>
              setFolderData({ ...folderData, name: e.target.value })
            }
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
