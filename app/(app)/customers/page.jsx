import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {getMotorbikes} from "@/app/(app)/customers/actions";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import React from "react";
import CustomerDeleteDialog from "@/components/customer/customer-delete-dialog";

export default async function Page() {

    const motorbikes = await getMotorbikes();
    // const customers = await getCustomers();

    return <>
        <div className="flex justify-between w-full">
            <h1 className="text-xl font-bold">Customers</h1>
            <div className="flex items-center w-full max-w-sm space-x-2">
                <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
                    <Link href={`/customers/create`}>+ Customers</Link>
                </Button>
                <Input type="text" placeholder="Search..."/>
                <Button>Search</Button>
            </div>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold text-black">Name</TableHead>
                    <TableHead className="font-bold text-black">Phone Number</TableHead>
                    <TableHead className="font-bold text-black">Motorbike Make</TableHead>
                    <TableHead className="font-bold text-black">Motorbike Model</TableHead>
                    <TableHead className="font-bold text-black">Motorbike Color</TableHead>
                    <TableHead className="font-bold text-black">Motorbike Year</TableHead>
                    <TableHead className="font-bold text-black">Motorbike Plate</TableHead>
                    <TableHead className="font-bold text-black">Motorbike VIN</TableHead>
                    <TableHead className="font-bold text-black">Action</TableHead>
                </TableRow>
            </TableHeader>
                <TableBody>
                    {motorbikes && motorbikes.length > 0 ? (
                        motorbikes.map((motorbike) => (
                            <TableRow key={motorbike.id}>
                                <TableCell>{motorbike.customer_name}</TableCell>
                                <TableCell>{motorbike.customer_phone_number}</TableCell>
                                <TableCell>{motorbike.make}</TableCell>
                                <TableCell>{motorbike.model}</TableCell>
                                <TableCell>{motorbike.color}</TableCell>
                                <TableCell>{motorbike.year}</TableCell>
                                <TableCell>{motorbike.plate_number}</TableCell>
                                <TableCell>{motorbike.engine_number}</TableCell>
                                <TableCell className="flex gap-2">
                                    <Button asChild className="bg-green-600 text-white hover:bg-green-500">
                                        <Link href={`/customers/${motorbike.id}/edit`}>Edit</Link>
                                    </Button>
                                    <CustomerDeleteDialog motorbikeId={motorbike.id}/>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="9" className="text-center">
                                No customer available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
        </Table>
        {/*<div className="w-full">*/}
        {/*    <Card>*/}
        {/*        <CardContent>*/}
        {/*            <Table>*/}
        {/*                <TableCaption>A list of your recent invoices.</TableCaption>*/}
        {/*                <TableHeader>*/}
        {/*                    <TableRow>*/}
        {/*                        <TableHead className="w-[100px]">Name</TableHead>*/}
        {/*                        <TableHead>Phone Number</TableHead>*/}
        {/*                        <TableHead>Motorbike Make</TableHead>*/}
        {/*                        <TableHead>Motorbike Model</TableHead>*/}
        {/*                        <TableHead>Motorbike Color</TableHead>*/}
        {/*                        <TableHead>Motorbike Year</TableHead>*/}
        {/*                        <TableHead>Motorbike Plate</TableHead>*/}
        {/*                        <TableHead>Motorbike VIN</TableHead>*/}
        {/*                        <TableHead className="text-right">Action</TableHead>*/}
        {/*                    </TableRow>*/}
        {/*                </TableHeader>*/}
        {/*                <TableBody>*/}
        {/*                    {customers && customers.length > 0 ? (*/}
        {/*                        customers.map((customer) => (*/}
        {/*                            <>*/}
        {/*                                {customer.motorbikes.map((motorbike) => (*/}
        {/*                                    <TableRow key={customer.id}>*/}
        {/*                                        <TableCell>{customer.name}</TableCell>*/}
        {/*                                        <TableCell>{customer.phone_number}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.make}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.model}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.color}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.year}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.plate_number}</TableCell>*/}
        {/*                                        <TableCell>{motorbike.engine_number}</TableCell>*/}
        {/*                                        <TableCell className="text-right">*/}
        {/*                                            <CustomerEditDialog/>*/}
        {/*                                            <CustomerDeleteDialog/>*/}
        {/*                                        </TableCell>*/}
        {/*                                    </TableRow>*/}
        {/*                                ))}*/}
        {/*                                {customer.motorbikes.length === 0 && (*/}
        {/*                                    <TableRow key={`no-bike-${customer.id}`}>*/}
        {/*                                        <TableCell>{customer.name}</TableCell>*/}
        {/*                                        <TableCell>{customer.phone_number}</TableCell>*/}
        {/*                                        <TableCell colSpan={5}>No motorbikes</TableCell>*/}
        {/*                                        <TableCell className="text-right">*/}
        {/*                                            <CustomerEditDialog customerId={customer.id}/>*/}
        {/*                                            <CustomerDeleteDialog customerId={customer.id}/>*/}
        {/*                                        </TableCell>*/}
        {/*                                    </TableRow>*/}
        {/*                                )}*/}
        {/*                            </>*/}
        {/*                        ))*/}
        {/*                    ) : (*/}
        {/*                        <TableRow>*/}
        {/*                            <TableCell colSpan={8}>No customers found.</TableCell>*/}
        {/*                        </TableRow>*/}
        {/*                    )}*/}
        {/*                </TableBody>*/}
        {/*            </Table>*/}
        {/*        </CardContent>*/}
        {/*    </Card>*/}

        {/*</div>*/}
    </>
}