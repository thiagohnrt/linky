"use client";

import { cn } from "@/lib/utils";
import * as Form from "@radix-ui/react-form";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { RepositoryIcon } from "../Header/RepositoryIcon";
import ThemeIcon from "../Header/ThemeIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";

export function AuthForm() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [hasErrorCredential, setErrorCredential] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget));

    const response = await fetch("/api/auth", {
      method: "post",
      body: JSON.stringify(data),
    });

    const user = await response.json();

    setErrorCredential(!user?._id);
    if (user?._id) {
      router.replace("/");
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="px-3 md:w-[300px]">
        <p className="text-5xl text-center">Linky</p>
        <p className="text-center py-5">
          Organize your favorite links quickly and easily ;)
        </p>
        <Form.Root onSubmit={handleSubmit}>
          <Form.Field name="username" className="mb-7">
            <Form.Control asChild>
              <Input
                type="email"
                placeholder="Email"
                className="w-full data-[invalid='true']:border-red-600"
                required
              />
            </Form.Control>
            <Form.Message
              match="typeMismatch"
              className="text-sm text-red-600 absolute"
            >
              Please enter a valid url
            </Form.Message>
            <Form.Message
              match="valueMissing"
              className="text-sm text-red-600 absolute"
            >
              Please enter a username
            </Form.Message>
          </Form.Field>
          <Form.Field name="password" className="mb-7">
            <Form.Control asChild>
              <Input
                type="password"
                placeholder="Password"
                className="w-full data-[invalid='true']:border-red-600"
                required
              />
            </Form.Control>
            <Form.Message
              match="valueMissing"
              className="text-sm text-red-600 absolute"
            >
              Please enter a password
            </Form.Message>
          </Form.Field>
          <Form.Submit asChild>
            <Button className="w-full" disabled={isLoading}>
              {isLoading ? <ReloadIcon className="animate-spin" /> : "Log In"}
            </Button>
          </Form.Submit>
          <p
            className={cn(
              "text-sm text-red-600",
              !hasErrorCredential && "hidden"
            )}
          >
            That email and password combination is incorrect.
          </p>
        </Form.Root>
        <div className="flex gap-2 justify-center mt-4 pt-2 border-t border-input">
          <RepositoryIcon />
          <ThemeIcon />
        </div>
      </div>
    </div>
  );
}
