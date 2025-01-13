'use client'

import {Button} from "@/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter, DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {useState} from "react";

export default function CustomerDeleteDialog() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Delete</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this customer? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Delete
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}