import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {addProduct, createProduct} from "@/app/(app)/products/actions";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function Page() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList className="text-lg">
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/products">Products</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="font-bold text-black">
                        <BreadcrumbLink asChild>
                            <Link href="/products/create">Create Product</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="bg-gray-50 p-6 pt-10">
                <CardContent>
                    <form action={createProduct} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="grid gap-1.5">
                                <Label htmlFor="product">Product Name</Label>
                                <Input type="text" id="product" placeholder="Product Name" name="product" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="from">Product From</Label>
                                <Input type="text" id="from" placeholder="Product From" name="from" required />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="price_baht">Price in Baht</Label>
                                <Input type="number" id="price_baht" placeholder="Price in Baht" name="price_baht" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="price_dong">Price in Dong</Label>
                                <Input type="number" id="price_dong" placeholder="Price in Dong" name="price_dong" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="price_usd">Price in USD</Label>
                                <Input type="number" id="price_usd" placeholder="Price in USD" name="price_usd" required />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="profit">Profit</Label>
                                <Input type="number" id="profit" placeholder="Profit" name="profit" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="sale_price">Sale Price</Label>
                                <Input type="number" id="sale_price" placeholder="Sale Price" name="sale_price" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input type="number" id="quantity" placeholder="Quantity" name="quantity" required />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-1">
                            <div className="grid gap-1.5">
                                <Label htmlFor="status">Status</Label>
                                <Input type="checkbox" id="status" name="status" required />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button type="submit" className="w-full sm:w-auto">
                                Add Product
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
