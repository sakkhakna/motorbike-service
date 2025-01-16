"use client";

import { useActionState } from "react";
import { updateProduct } from "@/app/(app)/products/actions";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ProductEditForm({ product }) {
  const initialState = { message: "", errors: {} };
  const [state, formAction, isPending] = useActionState(
    updateProduct,
    initialState
  );

  return (
    <Card className="p-6 pt-10 bg-gray-50">
      <CardContent>
        <form action={formAction} className="space-y-6">
          <input name="id" defaultValue={product.id} hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1.5">
              <Label htmlFor="product">Product Name</Label>
              <Input
                type="text"
                id="product"
                name="product"
                placeholder="Product Name"
                defaultValue={product.product}
              />
              <div id="product-error">
                {state.errors?.product &&
                  state.errors?.product.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="from">Product From</Label>
              <Input
                type="text"
                id="from"
                placeholder="Product From"
                name="from"
                defaultValue={product.from}
                required
              />
              <div id="from-error">
                {state.errors?.from &&
                  state.errors?.from.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
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
                defaultValue={product.price_baht}
                required
              />
              <div id="price_baht-error">
                {state.errors?.price_baht &&
                  state.errors?.price_baht.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="price_dong">Price in Dong</Label>
              <Input
                type="number"
                id="price_dong"
                placeholder="Price in Dong"
                name="price_dong"
                defaultValue={product.price_dong}
                required
              />
              <div id="price_dong-error">
                {state.errors?.price_dong &&
                  state.errors?.price_dong.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="price_usd">Price in USD</Label>
              <Input
                type="number"
                id="price_usd"
                placeholder="Price in USD"
                name="price_usd"
                defaultValue={product.price_usd}
                required
              />
              <div id="price_usd-error">
                {state.errors?.price_usd &&
                  state.errors?.price_usd.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
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
                defaultValue={product.profit}
                required
              />
              <div id="profit-error">
                {state.errors?.profit &&
                  state.errors?.profit.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="sale_price">Sale Price</Label>
              <Input
                type="number"
                id="sale_price"
                placeholder="Sale Price"
                name="sale_price"
                defaultValue={product.sale_price}
                required
              />
              <div id="sale_price-error">
                {state.errors?.sale_price &&
                  state.errors?.sale_price.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                type="number"
                id="quantity"
                placeholder="Quantity"
                name="quantity"
                defaultValue={product.quantity}
                required
              />
              <div id="quantity-error">
                {state.errors?.quantity &&
                  state.errors?.quantity.map((error) => (
                    <p key={error} className="mt-2 text-sm text-red-500">
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <input
              id="status"
              name="status"
              defaultValue={product.status}
              hidden
            />
            <div id="status-error">
              {state.errors?.status &&
                state.errors?.status.map((error) => (
                  <p key={error} className="mt-2 text-sm text-red-500">
                    {error}
                  </p>
                ))}
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
