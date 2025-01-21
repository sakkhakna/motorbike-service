"use server";

import {cookies} from "next/headers";
import axios from "@/lib/axios";
import { z } from "zod";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const MotorbikeFormSchema = z.object({
    customer_name: z.string().min(1, "Customer Name is required"),
    customer_phone_number: z.string().min(1, "Customer Phone Number is required"),
    make: z.string().min(1, "Motorbike Make is required"),
    model: z.string().min(1, "Motorbike Model is required"),
    color: z.string().min(1, "Motorbike Color is required"),
    year: z.coerce.number().min(1, "Motorbike Year is required"),
    plate_number: z.string().min(1, "Motorbike Plate Number is required"),
    engine_number: z.string().min(1, "Motorbike Engine Number is required").nullable(),
});

export const getMotorbikes = async (id = null) => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user_token")?.value;
        const url = id ? `/api/motorbikes/${id}` : "/api/motorbikes";
        const res = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data.data;
    } catch (error) {
        console.error("Error fetching motorbike(s):", error);
        return null;
    }
};

export const getMotorbike = async (id) => {
    const token = (await cookies()).get("user_token")?.value;
    if (!token) {
        return { success: false, message: "No Token!" };
    }

    try {
        const res = await fetch(`${BACKEND_URL}/api/motorbikes/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        if (!res.ok) {
            return {
                success: false,
                message: `Error ${res.status}: ${data.message}`,
            };
        }
        return { success: true, data: data.data };
    } catch (error) {
        console.log(error);
        return { success: false, message: "Something went wrong!" };
    }
};

export async function createMotorbike(formData) {
    const rawFormData = {
        customer_name: formData.get("customer_name"),
        customer_phone_number: formData.get("customer_phone_number"),
        make: formData.get("make"),
        model: formData.get("model"),
        color: formData.get("color"),
        year: Number(formData.get("year")) || 0,
        plate_number: formData.get("plate_number"),
        engine_number: formData.get("engine_number"),
    };

    try {
        const validatedData = MotorbikeFormSchema.parse(rawFormData);
        console.log("Sending request to API:", validatedData);

        const cookieStore = await cookies();
        const token = cookieStore.get("user_token")?.value;
        const res = await axios.post("/api/motorbikes", validatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error("Validation or submission error:", error);
        return null;
    }

    redirect("/customers");
}

export async function updateMotorbike(prevData, formData) {
    const validatedFields = MotorbikeFormSchema.safeParse({
        customer_name: formData.get("customer_name"),
        customer_phone_number: formData.get("customer_phone_number"),
        make: formData.get("make"),
        model: formData.get("model"),
        color: formData.get("color"),
        year: Number(formData.get("year")) || 0,
        plate_number: formData.get("plate_number"),
        engine_number: formData.get("engine_number"),
    });
    if (!validatedFields.success) {
        return {
            message: "Some fields are missing",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const token = (await cookies()).get("user_token")?.value;
    if (!token) {
        throw new Error("No Token!");
    }

    try {
        const id = formData.get("id");
        const res = await fetch(`${BACKEND_URL}/api/motorbikes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                ...validatedFields.data,
            }),
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${data.message}`);
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

    redirect("/customers");

}

export const deleteMotorbike = async (prevData, formData) => {
    const token = (await cookies()).get("user_token")?.value;
    if (!token) {
        throw new Error("No Token!");
    }

    try {
        const id = formData.get("id");
        const res = await fetch(`${BACKEND_URL}/api/motorbikes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await res.json();
        if (!res.ok) {
            throw new Error(`Error ${res.status}: ${data.message}`);
        }
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }

    revalidatePath("/customers");
}

// export const getCustomers = async () => {
//     try {
//         const cookieStore = await cookies();
//         const token = cookieStore.get("user_token")?.value;
//         const res = await axios.get("api/customers", {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return res.data.data;
//     } catch (error) {
//         return null;
//     }
// }

