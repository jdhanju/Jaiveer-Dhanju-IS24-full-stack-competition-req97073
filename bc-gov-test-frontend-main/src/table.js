import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';

function Table(props) {
  //creating table
const [products, setMyData ] = useState(props.myData);

useEffect(() => {
  console.log("Change in child detected, rendering new data");
  setMyData([...props.myData])
}, [props.myData]);

//setting column header names, and matching with the acutal json field name
  const data = React.useMemo(() => [...props.myData], []);
  const columns = React.useMemo(() => [
    {
      Header: 'Product ID',
      accessor: 'productId',
    },
    {
      Header: 'Product Name',
      accessor: 'productName',
    },
    {
      Header: 'Product Owner Name',
      accessor: 'productOwnerName',
    },
    {
      Header: 'Developers',
      accessor: 'Developers',
    },
    {
      Header: 'Scrum Master Name',
      accessor: 'scrumMasterName',
    },
    {
      Header: 'Start Date',
      accessor: 'startDate',
    },
    {
      Header: 'Methodology',
      accessor: 'methodology',
    },
  ], []);
  

 
const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });


  return(
    <div className='table'>
<table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default Table;