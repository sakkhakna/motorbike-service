import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import {getProducts} from "@/app/(app)/products/actions";
import ProductDeleteDialog from "@/components/ProductDeleteDialog";
import ProductEditDialog from "@/components/ProductEditDialog";
import Link from "next/link";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold">Products</h1>
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Link href={`/products/create`} className={buttonVariants({ variant: "outline" })}>+ Product</Link>
          <Input type="text" placeholder="Search..." />
          <Button>Search</Button>
        </div>
      </div>
      {/*<Card>*/}
      {/*  <CardHeader>*/}
      {/*    <Table>*/}
      {/*      <TableHeader>*/}
      {/*        <TableRow>*/}
      {/*          <TableHead></TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Product</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">From</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Price ฿</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Price ₫</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Price $</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Profit</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">*/}
      {/*            Sale Price*/}
      {/*          </TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Status</TableHead>*/}
      {/*          <TableHead className="font-bold text-black">Quantity</TableHead>*/}
      {/*          <TableHead className="font-bold text-black ">Action</TableHead>*/}
      {/*        </TableRow>*/}
      {/*      </TableHeader>*/}
      {/*    </Table>*/}
      {/*  </CardHeader>*/}
      {/*  <CardContent>*/}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="font-bold text-black">Product</TableHead>
                <TableHead className="font-bold text-black">From</TableHead>
                <TableHead className="font-bold text-black">Price ฿</TableHead>
                <TableHead className="font-bold text-black">Price ₫</TableHead>
                <TableHead className="font-bold text-black">Price $</TableHead>
                <TableHead className="font-bold text-black">Profit</TableHead>
                <TableHead className="font-bold text-black">
                  Sale Price
                </TableHead>
                <TableHead className="font-bold text-black">Status</TableHead>
                <TableHead className="font-bold text-black">Quantity</TableHead>
                <TableHead className="font-bold text-black ">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products && products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell></TableCell>
                    <TableCell>{product.product}</TableCell>
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
                    <TableCell className="">
                      <ProductEditDialog product={product}
                      />
                      <ProductDeleteDialog />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="9" className="text-center">
                    No products available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
      {/*  </CardContent>*/}
      {/*</Card>*/}
    </>
  );
}
