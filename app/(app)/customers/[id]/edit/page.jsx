import {getMotorbike} from "@/app/(app)/customers/actions";
import CustomerEditForm from "@/components/customer/customer-edit-form";

export default async function EditCustomerPage({ params }) {
   const { id } = await params;

   const motorbike = await getMotorbike(id);

   if (!motorbike.success) {
       throw new Error(motorbike.message);
   }

   return <CustomerEditForm motorbike={motorbike.data} />;
}