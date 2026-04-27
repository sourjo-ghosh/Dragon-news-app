"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const photoUrl = formData.get("photoURL");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(name, photoUrl, email, password);
    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photoUrl,
      callbackURL: "/",
    });
    if(error){
      alert(`${error.message}`)
    }
    if(data){
      alert('Registration successful')
    }
    console.log(data, error)
  };

  return (
    <div className="mx-auto flex min-h-[80vh] w-full items-center justify-center bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="w-full max-w-xl rounded-2xl bg-white px-5 py-7 shadow-sm sm:px-8 sm:py-10">
        <h2 className="mb-2 text-center text-2xl font-bold text-[#403F3F] sm:text-3xl">
          Create your account
        </h2>
        <p className="mb-6 text-center text-sm text-[#706F6F] sm:mb-8">
          Join Dragon News and start reading smarter.
        </p>

        <Form
          className="flex w-full flex-col gap-6"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label className="text-base font-semibold text-[#403F3F]">
              Your Name
            </Label>
            <Input className="text-base" placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="photoURL" type="text">
            <Label className="text-base font-semibold text-[#403F3F]">
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
            <Label className="text-base font-semibold text-[#403F3F]">
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
            <Label className="text-base font-semibold text-[#403F3F]">
              Password
            </Label>
            <Input
              className="text-base"
              placeholder="Create a strong password"
            />
            <Description className="text-sm text-[#706F6F]">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="mt-2 flex flex-col gap-3">
            <Button type="submit" className="w-full bg-[#403F3F] text-white">
              Register
            </Button>
            <p className="text-center text-sm font-medium text-[#706F6F]">
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
