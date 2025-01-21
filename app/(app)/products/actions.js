"use server";

import axios from "@/lib/axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const ProductFormSchema = z.object({
  product: z.string().min(1, "Product Name is required"),
  from: z.string().min(1, "Product From is required"),
  price_baht: z.coerce
    .number()
    .positive("Price in Baht must be a positive number"),
  price_dong: z.coerce
    .number()
    .positive("Price in Dong must be a positive number"),
  price_usd: z.coerce
    .number()
    .positive("Price in USD must be a positive number"),
  profit: z.coerce.number().nonnegative("Profit must be a non-negative number"),
  sale_price: z.coerce
    .number()
    .positive("Sale Price must be a positive number"),
  quantity: z.coerce
    .number()
    .nonnegative("Quantity must be a non-negative number"),
  status: z.boolean(),
});

export const getProducts = async (id = null) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user_token")?.value;
    const url = id ? `/api/products/${id}` : "/api/products";
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Error fetching product(s):", error);
    return null;
  }
};

export const getProduct = async (id) => {
  const token = (await cookies()).get("user_token")?.value;
  if (!token) {
    return { success: false, message: "No Token!" };
  }

  try {
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
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

export async function createProduct(formData) {
  const rawFormData = {
    product: formData.get("product"),
    from: formData.get("from"),
    price_baht: Number(formData.get("price_baht")) || 0,
    price_dong: Number(formData.get("price_dong")) || 0,
    price_usd: Number(formData.get("price_usd")) || 0,
    profit: Number(formData.get("profit")) || 0,
    sale_price: Number(formData.get("sale_price")) || 0,
    quantity: Number(formData.get("quantity")) || 0,
    status: formData.get("status") === "on" ? true : false, // Handle checkbox status
  };
  console.log("Raw Form Data:", rawFormData);

  try {
    const validatedData = ProductFormSchema.parse(rawFormData);
    console.log("Sending request to API:", validatedData);

    const cookieStore = await cookies();
    const token = cookieStore.get("user_token")?.value;
    const res = await axios.post("/api/products", validatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("API Response:", res.data);
    return res.data.data;
  } catch (error) {
    console.error("Validation or submission error:", error);
    return null;
  }
}

export async function updateProduct(prevData, formData) {
  const validatedFields = ProductFormSchema.safeParse({
    product: formData.get("product"),
    from: formData.get("from"),
    price_baht: formData.get("price_baht"),
    price_dong: formData.get("price_dong"),
    price_usd: formData.get("price_usd"),
    profit: formData.get("profit"),
    sale_price: formData.get("sale_price"),
    quantity: formData.get("quantity"),
    status: formData.get("status") === "true",
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
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
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

  redirect("/products");
}

export const deleteProduct = async (prevData, formData) => {
  const token = (await cookies()).get("user_token")?.value;
  if (!token) {
    throw new Error("No Token!");
  }

  try {
    const id = formData.get("id");
    const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
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

  revalidatePath("/products");
};
