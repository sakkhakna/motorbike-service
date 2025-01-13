"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "../actions";
import Image from "next/image";

export default function Page() {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <form action={login}>
          <div className="flex justify-center p-4">
            <Image src="/Logo.png" alt="Logo" width={100} height={100}/>
          </div>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              {/*<div className="flex justify-center">*/}
              {/*  <Image src="/Logo.png" alt="Logo" width={80} height={80}/>*/}
              {/*</div>*/}
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      name="email"
                      required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                        href="#"
                        className="inline-block ml-auto text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" name="password" required/>
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-sm text-center">
                Don&apos;t have an account?{""}
                <Link href="/register" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

  );
}
