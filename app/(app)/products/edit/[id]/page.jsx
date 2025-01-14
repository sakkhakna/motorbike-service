import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {getProducts, updateProduct} from "@/app/(app)/products/actions";
import {Button} from "@/components/ui/button";

export default async function Page({ params }){

    const { id } = await params;
    const product = await getProducts(id);

    if (!product) {
        return (
            <div>
                <p>Product not found or an error occurred.</p>
                <Link href="/products">
                    <Button>Go Back to Products</Button>
                </Link>
            </div>
        );
    }

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
                            <Link href={`/products/edit/${id}`}>Edit Product</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="bg-gray-50 p-6 pt-10">
                <CardContent>
                    <form action={updateProduct} className="space-y-6">
                        <input type="hidden" name="id" value={id} />  {/* Add this line */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="grid gap-1.5">
                                <Label htmlFor="product">Product Name</Label>
                                <Input
                                    type="text"
                                    id="product"
                                    placeholder="Product Name"
                                    name="product"
                                    defaultValue={product?.product || ""}
                                    required
                                />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="from">Product From</Label>
                                <Input
                                    type="text"
                                    id="from"
                                    placeholder="Product From"
                                    name="from"
                                    defaultValue={product?.from || ""}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="price_baht">Price in Baht</Label>
                                <Input
                                    type="number"
                                    id="price_baht"
                                    placeholder="Price in Baht"
                                    name="price_baht"
                                    defaultValue={product?.price_baht || ""}
                                    required
                                />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="price_dong">Price in Dong</Label>
                                <Input
                                    type="number"
                                    id="price_dong"
                                    placeholder="Price in Dong"
                                    name="price_dong"
                                    defaultValue={product?.price_dong || ""}
                                    required
                                />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="price_usd">Price in USD</Label>
                                <Input
                                    type="number"
                                    id="price_usd"
                                    placeholder="Price in USD"
                                    name="price_usd"
                                    defaultValue={product?.price_usd || ""}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="profit">Profit</Label>
                                <Input
                                    type="number"
                                    id="profit"
                                    placeholder="Profit"
                                    name="profit"
                                    defaultValue={product?.profit || ""}
                                    required
                                />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="sale_price">Sale Price</Label>
                                <Input
                                    type="number"
                                    id="sale_price"
                                    placeholder="Sale Price"
                                    name="sale_price"
                                    defaultValue={product?.sale_price || ""}
                                    required
                                />
                            </div>
                            <div className="grid gap-1.5">
                                <Label htmlFor="quantity">Quantity</Label>
                                <Input
                                    type="number"
                                    id="quantity"
                                    placeholder="Quantity"
                                    name="quantity"
                                    defaultValue={product?.quantity || ""}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="w-full sm:w-auto">
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}