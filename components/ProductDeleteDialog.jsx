"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {deleteProduct} from "@/app/(app)/products/actions";

export default function ProductDeleteDialog({ productId }) {
    const [isPending, setIsPending] = useState(false);

    const handleDelete = async () => {
        setIsPending(true);
        try {
            await deleteProduct(productId);
            alert("Product deleted successfully!");
        } catch (error) {
            alert("Failed to delete product: " + error.message);
        } finally {
            setIsPending(false);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Delete</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this product? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="destructive" onClick={handleDelete} disabled={isPending}>
                            {isPending ? "Deleting..." : "Delete"}
                        </Button>
                        {/*<Button type="submit" variant="destructive">*/}
                        {/*    Delete*/}
                        {/*</Button>*/}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}