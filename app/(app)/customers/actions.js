'use server'

import {cookies} from "next/headers";
import axios from "@/lib/axios";

export const getCustomers = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user_token")?.value;
        const res = await axios.get("api/customers", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data.data;
    } catch (error) {
        return null;
    }
}