import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/app/lib/data";
import {getProducts} from "@/app/(app)/products/actions";

export default async function page() {
  // const allProducts = await getAllProducts();
  // console.log("Fetched Products:", allProducts);
  //
  // const products = Array.isArray(allProducts) ? allProducts.data : [];
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold">Products</h1>
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Input type="text" placeholder="Search..." />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <Card>
        <CardContent>
          <Table className="p-12">
            <TableHeader>
              <TableRow>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="font-medium">{product.name}</div>
                    </TableCell>
                    {/*<TableCell>{product.from}</TableCell>*/}
                    {/*<TableCell>{product.price_baht} Baht</TableCell>*/}
                    {/*<TableCell>{product.price_dong} Dong</TableCell>*/}
                    {/*<TableCell>{product.price_usd} $</TableCell>*/}
                    {/*<TableCell>{product.profit} $</TableCell>*/}
                    {/*<TableCell>{product.sale_price} $</TableCell>*/}
                    {/*<TableCell>*/}
                    {/*  <Badge className="text-xs" variant="outline">*/}
                    {/*    {product.status ? "Active" : "Inactive"}*/}
                    {/*  </Badge>*/}
                    {/*</TableCell>*/}
                    {/*<TableCell>{product.quantity}</TableCell>*/}
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
        </CardContent>
      </Card>
    </>
  );
}
