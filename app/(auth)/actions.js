"use server";

import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async (formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const res = await axios.post("/api/login", {
      email,
      password,
    });
    const expirationDate = new Date(Date.now() + res.data.expires);
    const cookieStore = await cookies();
    cookieStore.set("user_token", res.data.data.token, {
      //   expires: expirationDate,
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error.message);
  }
  redirect("/profile");
};

export const register = async (formData) => {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");
    const res = await axios.post("/api/register", {
        name,
        email,
        password,
        password_confirmation,
    });
    const cookieStore = await cookies();
    cookieStore.set("user_token", res.data.data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.log(error.message);
  }
    redirect("/profile");
}

export const logout = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("user_token");
  } catch (error) {
    console.log(error.message);
  }
  redirect("/login");
};
