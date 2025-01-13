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
import {getCustomers} from "@/app/(app)/customers/actions";
import CustomerEditDialog from "@/components/CustomerEditDialog";
import CustomerDeleteDialog from "@/components/CustomerDeleteDialog";
import {Card, CardContent} from "@/components/ui/card";

export default async function Page() {

    const customers = await getCustomers();

    return <>
        <h1 className="text-xl font-bold">Customers</h1>
        <div className="w-full">
            <Card>
                <CardContent>
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Phone Number</TableHead>
                                <TableHead>Motorbike Make</TableHead>
                                <TableHead>Motorbike Model</TableHead>
                                <TableHead>Motorbike Color</TableHead>
                                <TableHead>Motorbike Year</TableHead>
                                <TableHead>Motorbike Plate</TableHead>
                                <TableHead>Motorbike VIN</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers && customers.length > 0 ? (
                                customers.map((customer) => (
                                    <>
                                        {customer.motorbikes.map((motorbike) => (
                                            <TableRow key={customer.id}>
                                                <TableCell>{customer.name}</TableCell>
                                                <TableCell>{customer.phone_number}</TableCell>
                                                <TableCell>{motorbike.make}</TableCell>
                                                <TableCell>{motorbike.model}</TableCell>
                                                <TableCell>{motorbike.color}</TableCell>
                                                <TableCell>{motorbike.year}</TableCell>
                                                <TableCell>{motorbike.plate_number}</TableCell>
                                                <TableCell>{motorbike.engine_number}</TableCell>
                                                <TableCell className="text-right">
                                                    <CustomerEditDialog />
                                                    <CustomerDeleteDialog />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        {customer.motorbikes.length === 0 && (
                                            <TableRow key={`no-bike-${customer.id}`}>
                                                <TableCell>{customer.name}</TableCell>
                                                <TableCell>{customer.phone_number}</TableCell>
                                                <TableCell colSpan={5}>No motorbikes</TableCell>
                                                <TableCell className="text-right">
                                                    <CustomerEditDialog customerId={customer.id} />
                                                    <CustomerDeleteDialog customerId={customer.id} />
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8}>No customers found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    </>
}