"use client"

import {Loader2} from "lucide-react";
import {useActionState} from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogClose, DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {deleteMotorbike} from "@/app/(app)/customers/actions";

export default function CustomerDeleteDialog({ motorbikeId }) {
    const [state, formAction, isPending] = useActionState(deleteMotorbike, null);

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <form action={formAction}>
            <input id="id" name="id" defaultValue={motorbikeId} hidden />
            <DialogHeader>
              <DialogTitle>Delete</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this customer? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" variant="destructive" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" /> Deleting
                    </>
                  ) : (
                    <>Delete</>
                  )}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
}