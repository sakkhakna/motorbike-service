'use server';

import axios from "@/lib/axios";
import { cookies } from "next/headers";
import { z } from "zod";

const ProductFormSchema = z.object({
    product: z.string().min(1, 'Product Name is required'),
    from: z.string().min(1, 'Product From is required'),
    price_baht: z.coerce.number().positive('Price in Baht must be a positive number'),
    price_dong: z.coerce.number().positive('Price in Dong must be a positive number'),
    price_usd: z.coerce.number().positive('Price in USD must be a positive number'),
    profit: z.coerce.number().nonnegative('Profit must be a non-negative number'),
    sale_price: z.coerce.number().positive('Sale Price must be a positive number'),
    quantity: z.coerce.number().nonnegative('Quantity must be a non-negative number'),
    status: z.boolean(),
});

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

export async function createProduct(formData) {

    const rawFormData = {
        product: formData.get('product'),
        from: formData.get('from'),
        price_baht: Number(formData.get('price_baht')) || 0,
        price_dong: Number(formData.get('price_dong')) || 0,
        price_usd: Number(formData.get('price_usd')) || 0,
        profit: Number(formData.get('profit')) || 0,
        sale_price: Number(formData.get('sale_price')) || 0,
        quantity: Number(formData.get('quantity')) || 0,
        status: formData.get('status') === 'on' ? true : false, // Handle checkbox status
    };
    console.log('Raw Form Data:', rawFormData);

    try {
        const validatedData = ProductFormSchema.parse(rawFormData);
        console.log('Sending request to API:', validatedData);

        const cookieStore = await cookies();
        const token = cookieStore.get("user_token")?.value;
        const res = await axios.post("/api/products", validatedData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log('API Response:', res.data);
        return res.data.data;
    } catch (error) {
        console.error("Validation or submission error:", error);
        return null;
    }
}