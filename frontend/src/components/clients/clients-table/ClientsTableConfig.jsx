import { IconButton, Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red } from '@mui/material/colors';
import { Colors } from '../../../styles/theme';

const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      hide: true 
    },
    { 
      field: 'name', 
      headerName: 'Full name', 
      align:'left',
      flex: 1,
      minWidth: 120,
      justifyContent:'flex-start',
      cellClassName: 'table-title left-align-cell clickable-cell',
      headerClassName: 'table-header',
    },
    { 
      field: 'phoneNumber', 
      headerName: 'Phone number', 
      flex: 1,
      minWidth: 120,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
    },
    { 
      field: 'email', 
      headerName: 'Email', 
      flex: 1,
      minWidth: 200,
      cellClassName: 'clickable-cell',
      headerAlign: 'center', 
      headerClassName: 'table-header',
      renderCell: (cellValues) => {
        return (
          <Stack>
            { cellValues.value === '' ? 'No data' : cellValues.value }
          </Stack>
      )}
    },
    { 
        field: 'notes', 
        headerName: 'Notes', 
        headerAlign: 'center', 
        flex: 1,
        minWidth: 220,
        headerClassName: 'table-header',
        cellClassName: 'clickable-cell',
        sortable: false,
        renderCell: (cellValues) => {
          return (
            cellValues.value.length > 25 ? `${cellValues.value.slice(0,25)}...` : cellValues.value
        )}
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
  
  const handleSetRows = (clients) => {
    let rows = [];
      (clients?.map(element => {
        let newRow = { 
          id: element._id, 
          name: element.name,
          phoneNumber: element.phoneNumber,
          email: element.email,
          notes: element.notes ,
          delete: ''
        }
        rows.push(newRow);
      }))
      return rows;
  }

  export { columns, handleSetRows }