import TableHeader from "./TableHeader"

const TableRow = () => {
  return (
    <div className="table-row">
       <TableHeader title="Name" />
       <TableHeader title="Category" />
       <TableHeader title="Price" />
       <TableHeader title="Quantity" />
       <TableHeader title="Value" />
       <TableHeader title="Action" />

      

    </div>
  )
}

export default TableRow