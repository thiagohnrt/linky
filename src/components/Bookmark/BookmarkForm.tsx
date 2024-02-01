import * as Form from "@radix-ui/react-form";
import { Button } from "../Form/Button";
import { useState, FormEvent, useEffect, useCallback, useContext } from "react";
import { Folder } from "@/interfaces/Folder";
import { BookmarkContext } from "@/contexts/bookmarkContext";
import { Bookmark } from "@/interfaces/Bookmark";

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
  const { bookmarkData, setBookmarkData } = useContext(BookmarkContext);

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

    const form = Object.fromEntries(new FormData(event.currentTarget));
    const status = await save({ ...form, id: bookmarkData.id } as Bookmark);

    if (status === 200) {
      onSaved();
    }
    setIsLoading(false);
  };

  const save = async (data: Bookmark) => {
    if (data.id) {
      return await put(data);
    } else {
      return await post(data);
    }
  };

  const post = async (data: Bookmark) => {
    const { status } = await fetch(`/api/bookmark`, {
      method: "post",
      body: JSON.stringify(data),
    });
    return status;
  };

  const put = async (data: Bookmark) => {
    const { status } = await fetch(`/api/bookmark/${data.id}`, {
      method: "put",
      body: JSON.stringify(data),
    });
    return status;
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
            value={bookmarkData.url}
            onChange={(e) =>
              setBookmarkData({ ...bookmarkData, url: e.target.value })
            }
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
            value={bookmarkData.name}
            onChange={(e) =>
              setBookmarkData({ ...bookmarkData, name: e.target.value })
            }
            className="p-2 w-full outline-none bg-white dark:bg-neutral-900"
            autoComplete="off"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name="folderId" className="mt-2">
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
              <option
                value={folder.id}
                key={"folder_opt-" + i}
                // TODO Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
                selected={folder.id === bookmarkData.folderId}
              >
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
