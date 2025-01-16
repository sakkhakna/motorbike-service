"use server";

import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const getUser = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user_token")?.value;
    const res = await axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    return null;
  }
};
