"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {register} from "@/app/(auth)/actions";
import Image from "next/image";

export default function Page() {
  return (
      <div className="flex items-center justify-center min-h-screen">
        <form action={register}>
          <div className="flex justify-center p-4">
            <Image src="/Logo.png" alt="Logo" width={100} height={100}/>
          </div>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" name="name" required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" name="password" required/>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="passwordConfirmation">
                    Password Confirmation
                  </Label>
                  <Input id="passwordConfirmation" type="password" name="password_confirmation" required/>
                </div>
                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </div>
              <div className="mt-4 text-sm text-center">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>

  );
}
