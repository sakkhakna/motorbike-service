"use server"

import axios from "@/lib/axios";
import { cookies } from "next/headers";

export const getProducts = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user_token")?.value;
        const res = await axios.get("/api/products", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data.data;
    } catch (error) {
        return null;
    }
}