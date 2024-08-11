import { IconButton, Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import { Colors } from '../../../styles/theme';
import { convertToDate, Percent, USDollar2Dig } from '../../../utils/useful';

const columns = [
    { 
      field: 'id', 
      headerName: 'id', 
    },
    { 
      field: 'clientID',
      headerName: 'clientID', 
    },
    { 
      field: 'equipment', 
      headerName: 'Equipment', 
      align:'left',
      flex: 1,
      minWidth: 90,
      justifyContent:'flex-start',
      cellClassName: 'table-title left-align-cell clickable-cell',
      headerClassName: 'table-header',
    },
    { 
      field: 'description', 
      headerName: 'Description', 
      flex: 1,
      minWidth: 160,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
    },
    { 
      field: 'specifications', 
      headerName: 'Specifications', 
      flex: 1,
      minWidth: 200,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => {
        return (
          cellValues.value.length > 25 ? `${cellValues.value.slice(0,25)}...` : cellValues.value
      )}
    },
    { 
      field: 'name', 
      headerName: 'Seller', 
      flex: 1,
      minWidth: 150,
      cellClassName: 'table-title clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
    },
    { 
      field: 'costPrice', 
      headerName: 'Cost Price', 
      flex: 1,
      minWidth: 80,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => USDollar2Dig.format(cellValues.value)
    },
    { 
      field: 'sellPrice', 
      headerName: 'Sell Price', 
      flex: 1,
      minWidth: 80,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => USDollar2Dig.format(cellValues.value)
    },
    { 
      field: 'notes', 
      headerName: 'Notes', 
      headerAlign: 'center', 
      flex: 1,
      minWidth: 180,
      headerClassName: 'table-header',
      cellClassName: 'clickable-cell',
      sortable: false,
      renderCell: (cellValues) => {
        return (
          cellValues.value.length > 25 ? `${cellValues.value.slice(0,25)}...` : cellValues.value
      )}
    },
    { 
      field: 'createdAt', 
      headerName: 'Created', 
      flex: 1,
      minWidth: 90,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => convertToDate(cellValues.value)
    },
    { 
      field: 'updatedAt', 
      headerName: 'Updated', 
      flex: 1,
      minWidth: 90,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => convertToDate(cellValues.value)
    },
    { 
      field: "delete", 
      headerName: 'Delete', 
      flex: 1,
      minWidth: 60,
      headerAlign: 'center', 
      cellClassName: '',
      headerClassName: 'table-header',
      sortable: false, 
      renderCell: (cellValues) => {
        return (
            <IconButton>
                <DeleteForeverIcon 
                    sx={{
                        fontSize:'22px',
                        color: red[500], 
                        transition: '.8s all', 
                        ':hover': { color: Colors.primary }
                    }} 
                />
            </IconButton>
      )},
    }
  ];
  
  const handleSetRows = (orders) => {
    let rows = [];
      (orders?.map(element => {
        let newRow = { 
          id: element._id, 
          clientID: element.clientID,
          equipment: element.equipment,
          description: element.description,
          specifications: element.specifications,
          name: element.clientInfo?.name,
          /* phoneNumber: element.clientInfo?.phoneNumber, */
          costPrice: element.costPrice,
          sellPrice: element.sellPrice,
          notes: element.notes,
          createdAt: element.createdAt,
          updatedAt: element.updatedAt,
          delete: ''
        }
        rows.push(newRow);
      }))
      return rows;
  }

  export { columns, handleSetRows }