'use client';

import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import axios from "@/lib/axios";

export default function ProductEditDialog({product}) {
    const [formData, setFormData] = useState(product);
    const [isSaving, setIsSaving] = useState(false);

    const excludeKeys = ["id", "created_at", "updated_at"];
    const filteredKeys = Object.keys(product).filter((key) => !excludeKeys.includes(key));

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({...prev, [id]: value}));
    }

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const token = document.cookie
                .split("; ")
                .find((row) => row.startsWith("user_token"))
                ?.split("=")[1];
            const res = await axios.put(`/api/products/${product.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("Product updated successfully");
        } catch (error) {
            console.error("Error updating product", error);
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Customer</DialogTitle>
                    <DialogDescription>
                        Make changes to your product here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {filteredKeys.map((key) => (
                        <div key={key} className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor={key} className="text-right">
                                {key.replace("_", " ").toUpperCase()}
                            </Label>
                            <Input
                                id={key}
                                value={formData[key] || ""}
                                onChange={handleChange}
                                className="col-span-3" />
                        </div>
                    ))}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="name" className="text-right">*/}
                    {/*        Product Name*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="name"*/}
                    {/*        placeholder="Mr Big"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="phoneNumber" className="text-right">*/}
                    {/*        Product From*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="phoneNumber"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="" className="text-right">*/}
                    {/*        Price Baht*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="motorbikeMake"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Price Dong*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="motorbikeModel"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Price USD*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="motorbikeColor"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Profit*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="motorbikeYear"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Sale Price*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="plateNumber"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Status*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="enginNumber"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="grid grid-cols-4 items-center gap-4">*/}
                    {/*    <Label htmlFor="username" className="text-right">*/}
                    {/*        Quantity*/}
                    {/*    </Label>*/}
                    {/*    <Input*/}
                    {/*        id="enginNumber"*/}
                    {/*        placeholder="012345678"*/}
                    {/*        className="col-span-3"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
                <DialogFooter>
                    <Button type="button" onClick={handleSave} disabled={isSaving}>{isSaving ? "Saving..." : "Save Changes"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}