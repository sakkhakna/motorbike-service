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

const customers = [
    {
        id: 1,
        name: "John Doe",
        phoneNumber: "0123456789",
        motorbikeMake: "Vespa",
        motorbikeModel: "Sprint 150",
        motorbikeYear: "2020",
        motorbikeColor: "White",
        motorbikePlate: "PP 2AB-1234",
        motorbikeVIN: "1234567890",
    }
    ]

export default function Page() {
    return <>
        <h1 className="text-xl font-bold">Customers</h1>
        <div className="w-full">
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
                    {customers.map((customer) => (
                        <TableRow key={customer.id}>
                            <TableCell className="font-medium">{customer.name}</TableCell>
                            <TableCell>{customer.phoneNumber}</TableCell>
                            <TableCell>{customer.motorbikeMake}</TableCell>
                            <TableCell>{customer.motorbikeModel}</TableCell>
                            <TableCell>{customer.motorbikeColor}</TableCell>
                            <TableCell>{customer.motorbikeYear}</TableCell>
                            <TableCell>{customer.motorbikePlate}</TableCell>
                            <TableCell className="text-right">{customer.motorbikeVIN}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    </>
}