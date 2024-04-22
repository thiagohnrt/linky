import Favicon from "@/components/Favicon";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItemLink,
  CommandList,
} from "@/components/ui/command";
import * as dataService from "@/services/dataService";

export default async function Mobile() {
  const folders = await dataService.getData();
  return (
    <Command className="">
      <CommandInput placeholder="Search" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {folders.map((folder, f) => {
          return (
            <CommandGroup key={f} heading={folder.name}>
              {folder.data.map((bookmark, b) => {
                return (
                  <CommandItemLink
                    key={b}
                    href={bookmark.url}
                    className="[&[data-selected=true]_.url]:opacity-50"
                    classNameLink="flex items-center gap-2"
                    target="_blank"
                  >
                    <Favicon bookmark={bookmark} />
                    <span className="whitespace-nowrap">{bookmark.name}</span>
                    <span className="whitespace-nowrap text-ellipsis overflow-hidden url opacity-0 transition-opacity duration-300">
                      {bookmark.url}
                    </span>
                  </CommandItemLink>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </Command>
  );
}
