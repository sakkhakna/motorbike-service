import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {createProduct} from "@/app/(app)/products/actions";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {createMotorbike} from "@/app/(app)/customers/actions";

export default async function Page() {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList className="text-lg">
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/customers">Customers</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="font-bold text-black">
                        <BreadcrumbLink asChild>
                            <Link href="/customers/create">Create Customers</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Card className="bg-gray-50 p-6 pt-10">
                <CardContent>
                    <form action={createMotorbike} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="grid gap-1.5">
                                <Label htmlFor="customer">Customer Name</Label>
                                <Input type="text" id="customer_name" placeholder="Customer Name" name="customer_name" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="phone_number">Phone Number</Label>
                                <Input type="number" id="customer_phone_number" placeholder="Customer Phone Number" name="customer_phone_number" required />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="make">Motorbike Make</Label>
                                <Input type="text" id="make" placeholder="Motorbike Make" name="make" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="model">Model</Label>
                                <Input type="text" id="model" placeholder="Motorbike Model" name="model" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="color">Color</Label>
                                <Input type="text" id="color" placeholder="Motorbike Color" name="color" required />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="grid gap-1.5">
                                <Label htmlFor="year">Year</Label>
                                <Input type="number" id="year" placeholder="Motorbike Year" name="year" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="plate">Plate Number</Label>
                                <Input type="text" id="plate_number" placeholder="Plate Number" name="plate_number" required />
                            </div>

                            <div className="grid gap-1.5">
                                <Label htmlFor="engine_number">Engine Number</Label>
                                <Input type="text" id="engine_number" placeholder="Engine Number" name="engine_number" required />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit" className="w-full sm:w-auto">
                                Add Customer
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>

    )


}