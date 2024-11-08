"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
// import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
// import { toast } from "sonner";
// import urls from "@/lib/urls";
// import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [gloading, setGLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // const router = useRouter();
  const formSchema = z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(8),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        // callbackUrl: "/dashboard", // Redirect after successful login
      });
      // if (response?.user?.isSuccessful)
      toast.success("Login successful");
      console.log(response);
      if (response?.error) {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  toast.error(error);
  console.log(error);

  const handleLogin = async () => {
    setGLoading(true);
    setError(null);

    try {
      const response = await signIn("google", {
        // callbackUrl: "/dashboard",
        redirect: false,
      });

      if (response?.error) {
        setError("Google login failed. Please try again later.");
      }
    } catch {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setGLoading(false);
    }
  };
  return (
    <AuthWrapper type={"login"}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <Button variant={"rect"} className="w-full mt-4" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </Form>

      <div className="flex justify-center w-full my-5">
        <p>or</p>
      </div>

      <div className="flex gap-4">
        <Button
          variant={"google"}
          className="w-full"
          onClick={handleLogin}
          disabled={gloading}
        >
          {gloading ? (
            "Logging in..."
          ) : (
            <>
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={20}
                height={20}
              />
              <p>Login with Google</p>
            </>
          )}
        </Button>
      </div>
    </AuthWrapper>
  );
};

export default Login;
