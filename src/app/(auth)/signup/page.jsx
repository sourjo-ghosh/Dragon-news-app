"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { ArrowRightToSquare } from "@gravity-ui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  useEffect(() => {
    if (message !== "please-login") return;
    toast.custom(
      <div className="flex justify-center items-center gap-5 text-gray-800 dark:text-gray-400 bg-gray-100 dark:bg-zinc-900 p-3 rounded-2xl">
        <ArrowRightToSquare />
        <div>
          <h1>Login First </h1>
          <p>Please log in first to view this page!</p>
        </div>
      </div>,
    );
  }, [message]);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const photoUrl = formData.get("photoURL");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photoUrl,
    });
    if (error) {
      toast.custom(
        <div className="flex justify-center items-center gap-5 text-gray-800 dark:text-gray-400 bg-gray-100 dark:bg-zinc-900 p-3 rounded-2xl">
          <ArrowRightToSquare />
          <div>
            <h1>Signup failed</h1>
            <p>{error.message}</p>
          </div>
        </div>,
      );
      return;
    }
    if (data) {
      await authClient.signOut();
      toast.custom(
        <div className="flex justify-center items-center gap-5 text-gray-800 dark:text-gray-400 bg-gray-100 dark:bg-zinc-900 p-3 rounded-2xl">
          <ArrowRightToSquare />
          <div>
            <h1>Signup successful</h1>
            <p>Your account was created. You can log in now.</p>
          </div>
        </div>,
      );
      router.push("/login");
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="mx-auto flex min-h-[80vh] w-full items-center justify-center bg-gray-100 dark:bg-zinc-800 px-4 py-8 sm:px-6 sm:py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white dark:bg-zinc-900 px-5 py-7 shadow-sm sm:px-8 sm:py-10">
        <h2 className="mb-2 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Create your account
        </h2>
        <p className="mb-6 text-center text-sm text-gray-600 dark:text-gray-400 sm:mb-8">
          Join Dragon News and start reading smarter.
        </p>

        <Form
          className="flex w-full flex-col gap-6"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label className="text-base font-semibold text-black dark:text-white">
              Your Name
            </Label>
            <Input className="text-base" placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="photoURL" type="text">
            <Label className="text-base font-semibold text-black dark:text-white">
              Photo URL
            </Label>
            <Input className="text-base" placeholder="Enter your photo URL" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-base font-semibold text-black dark:text-white">
              Email
            </Label>
            <Input
              className="text-base"
              placeholder="Enter your email address"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-base font-semibold text-black dark:text-white">
              Password
            </Label>
            <InputGroup className="flex justify-between items-center">
              <InputGroup.Input
                className="w-full max-w-70"
                type={isVisible ? "text" : "password"}
                placeholder="Enter Your Password"
              />
              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description className="text-sm text-gray-600 dark:text-gray-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="mt-2 flex flex-col gap-3">
            <Button type="submit" className="w-full bg-[#403F3F] text-white">
              Register
            </Button>
            <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <span className="bg-linear-to-r from-[#F75B5F] to-[#FF8C47] bg-clip-text text-transparent">
                <Link href="/login">Login</Link>
              </span>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
