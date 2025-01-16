import ProductEditForm from "@/components/product/product-edit-form";
import { getProduct } from "../../actions";

export default async function EditProductPage({ params }) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product.success) {
    throw new Error(product.message);
  }

  return <ProductEditForm product={product.data} />;
}
