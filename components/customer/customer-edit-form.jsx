"use client";

import { useActionState } from "react";
import { updateMotorbike } from "@/app/(app)/customers/actions";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CustomerEditForm({ motorbike }) {
    const initialState = { message: "", errors: {} };
    const [state, formAction, isPending] = useActionState(
        updateMotorbike,
        initialState
    );

    return (
        <Card className="p-6 pt-10 bg-gray-50">
            <CardContent>
                <form action={formAction} className="space-y-6">
                    <input name="id" defaultValue={motorbike.id} hidden />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-1.5">
                            <Label htmlFor="product">Customer Name</Label>
                            <Input
                                type="text"
                                id="customer_name"
                                name="customer_name"
                                placeholder="Customer Name"
                                defaultValue={motorbike.customer_name}
                            />
                            <div id="product-error">
                                {state.errors?.customer_name &&
                                    state.errors?.customer_name.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>

                        <div className="grid gap-1.5">
                            <Label htmlFor="phone_number">Phone Number</Label>
                            <Input
                                type="number"
                                id="customer_phone_number"
                                placeholder="Customer Phone Number"
                                name="customer_phone_number"
                                defaultValue={motorbike.customer_phone_number}
                                required
                            />
                            <div id="from-error">
                                {state.errors?.customer_phone_number &&
                                    state.errors?.customer_phone_number.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="make">Motorbike Make</Label>
                            <Input
                                type="text"
                                id="make"
                                placeholder="Price in Baht"
                                name="make"
                                defaultValue={motorbike.make}
                                required
                            />
                            <div id="price_baht-error">
                                {state.errors?.make &&
                                    state.errors?.make.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="price_dong">Model</Label>
                            <Input
                                type="text"
                                id="model"
                                placeholder="Motorbike Model"
                                name="model"
                                defaultValue={motorbike.model}
                                required
                            />
                            <div id="price_dong-error">
                                {state.errors?.model &&
                                    state.errors?.model.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="color">Color</Label>
                            <Input
                                type="text"
                                id="color"
                                placeholder="Motorbike Color"
                                name="color"
                                defaultValue={motorbike.color}
                                required
                            />
                            <div id="price_usd-error">
                                {state.errors?.color &&
                                    state.errors?.color.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="grid gap-1.5">
                            <Label htmlFor="year">Year</Label>
                            <Input
                                type="number"
                                id="profit"
                                placeholder="Motorbike Year"
                                name="year"
                                defaultValue={motorbike.year}
                                required
                            />
                            <div id="profit-error">
                                {state.errors?.year &&
                                    state.errors?.year.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="plate_number">Plate Number</Label>
                            <Input
                                type="text"
                                id="plate_number"
                                placeholder="Sale Price"
                                name="plate_number"
                                defaultValue={motorbike.plate_number}
                                required
                            />
                            <div id="sale_price-error">
                                {state.errors?.plate_number &&
                                    state.errors?.plate_number.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <div className="grid gap-1.5">
                            <Label htmlFor="engine_number">Engine Number</Label>
                            <Input
                                type="number"
                                id="engine_number"
                                placeholder="Engine Number"
                                name="engine_number"
                                defaultValue={motorbike.engine_number}
                                required
                            />
                            <div id="quantity-error">
                                {state.errors?.engine_number &&
                                    state.errors?.engine_number.map((error) => (
                                        <p key={error} className="mt-2 text-sm text-red-500">
                                            {error}
                                        </p>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="w-full sm:w-auto"
                            disabled={isPending}
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}