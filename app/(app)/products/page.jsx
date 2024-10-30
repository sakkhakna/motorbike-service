
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {getAllProducts} from "@/app/lib/data";

export default async function page() {

    const allProducts = await getAllProducts();
    console.log("Fetched Products:", allProducts);

    const products = Array.isArray(allProducts.data) ? allProducts.data : [];

    return <>
        <div className="w-full flex justify-between">
            <h1 className="text-xl font-bold">Products</h1>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search..."/>
                <Button type="submit">Search</Button>
            </div>
        </div>
        <Card>
            <CardContent>
                <Table className="p-12">
                    <TableHeader>
                        <TableRow>
                        <TableHead className="text-black font-bold">
                                Product
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                From
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Price ฿
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Price ₫
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Price $
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Profit
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Sale Price
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Status
                            </TableHead>
                            <TableHead className="text-black font-bold">
                                Quantity
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>
                                        <div className="font-medium">{product.product}</div>
                                    </TableCell>
                                    <TableCell>{product.from}</TableCell>
                                    <TableCell>{product.price_baht} Baht</TableCell>
                                    <TableCell>{product.price_dong} Dong</TableCell>
                                    <TableCell>{product.price_usd} $</TableCell>
                                    <TableCell>{product.profit} $</TableCell>
                                    <TableCell>{product.sale_price} $</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs" variant="outline">
                                            {product.status ? "Active" : "Inactive"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="9" className="text-center">
                                    No products available
                                </TableCell>
                            </TableRow>
                        )}
                        {/*<TableRow>*/}
                        {/*    <TableCell>*/}
                        {/*        <div className="font-medium">Sticker</div>*/}
                        {/*        /!*<div className="hidden text-sm text-muted-foreground md:inline">*!/*/}
                        {/*        /!*    liam@example.com*!/*/}
                        {/*        /!*</div>*!/*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        Mr. Balon*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        123 Baht*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        0 Dong*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        2 $*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        1 $*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        3 $*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell>*/}
                        {/*        <Badge className="text-xs" variant="outline">*/}
                        {/*            Active*/}
                        {/*        </Badge>*/}
                        {/*    </TableCell>*/}
                        {/*    /!*<TableCell className="hidden md:table-cell lg:hidden xl:table-column">*!/*/}
                        {/*    /!*    2023-06-23*!/*/}
                        {/*    /!*</TableCell>*!/*/}
                        {/*    <TableCell>10</TableCell>*/}
                        {/*</TableRow>*/}

                        {/*<TableRow>*/}
                        {/*    <TableCell>*/}
                        {/*        <div className="font-medium">Olivia Smith</div>*/}
                        {/*        <div className="hidden text-sm text-muted-foreground md:inline">*/}
                        {/*            olivia@example.com*/}
                        {/*        </div>*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell className="hidden xl:table-column">*/}
                        {/*        Refund*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell className="hidden xl:table-column">*/}
                        {/*        <Badge className="text-xs" variant="outline">*/}
                        {/*            Declined*/}
                        {/*        </Badge>*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell className="hidden md:table-cell lg:hidden xl:table-column">*/}
                        {/*        2023-06-24*/}
                        {/*    </TableCell>*/}
                        {/*    <TableCell className="text-right">$150.00</TableCell>*/}
                        {/*</TableRow>*/}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

    </>
}