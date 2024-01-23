import * as Form from "@radix-ui/react-form";
import { Button } from "../Form/Button";
import { useState, FormEvent, useEffect, useCallback, useContext } from "react";
import { Folder } from "@/interfaces/Folder";
import { BookmarkContext } from "@/contexts/bookmarkContext";

interface BookmarkFormProps {
  onSaved?: () => void;
  onCancel?: () => void;
}

async function getData(): Promise<Folder[]> {
  try {
    const response = await fetch(`http://localhost:3000/api/folder`, {
      // cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
  return [];
}

export function BookmarkForm({
  onSaved = () => {},
  onCancel = () => {},
}: BookmarkFormProps) {
  const { folderKey } = useContext(BookmarkContext);
  const initialFolders: Folder[] = [];
  const [folders, setFolders] = useState(initialFolders);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFolders = useCallback(async () => {
    const data = await getData();
    setFolders(data);
  }, []);

  useEffect(() => {
    fetchFolders();
  }, [fetchFolders]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const { status } = await fetch(`/api/bookmark`, {
      method: "post",
      body: JSON.stringify(data),
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
          <Form.Message match="typeMismatch" className="text-red-600">
            Please enter a valid url
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="url"
            className="p-2 w-full outline-none bg-white dark:bg-neutral-900"
            autoComplete="off"
            placeholder="https://example.com"
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
      <Form.Field name="folderKey" className="mt-2">
        <div className="flex align-baseline justify-between">
          <Form.Label>Folder</Form.Label>
          <Form.Message match="valueMissing" className="text-red-600">
            Please select a folder
          </Form.Message>
        </div>
        <Form.Control asChild>
          <select
            className="p-2 w-full outline-none bg-white dark:bg-neutral-900"
            required
          >
            <option value="">Select</option>
            {folders.map((folder, i) => (
              <option value={folder.key} key={"folder_opt-" + i}>
                {folder.name}
              </option>
            ))}
          </select>
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
