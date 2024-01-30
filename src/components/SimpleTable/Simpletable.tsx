import {
    MaterialReactTable,
    useMaterialReactTable,
  } from 'material-react-table';
  import { Box, IconButton, ThemeProvider, Tooltip, createTheme, useMediaQuery } from '@mui/material';
  import FileDownloadIcon from '@mui/icons-material/FileDownload';
  import { mkConfig, generateCsv, download } from 'export-to-csv'; 
  import { data, columns } from './makeData';
  
  const csvConfig = mkConfig({
    fieldSeparator: ',',
    decimalSeparator: '.',
    useKeysAsHeaders: true,
  });
  
const Simpletable = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const handleExportData = () => {
      const csv = generateCsv(csvConfig)(data);
      download(csvConfig)(csv);
    };
  
    const table = useMaterialReactTable({
      columns,
      data,
      enableColumnActions: false,
      enableColumnFilters: false,
      enablePagination: false,
      enableSorting: false,
      enableGlobalFilter:false,
      enableBottomToolbar: false,
      enableFullScreenToggle:false,
      enableDensityToggle : false,
      enableHiding : false,
      
      renderTopToolbarCustomActions: () => (

        <Box
            sx={{
            display: 'flex',
            gap: '16px',
            padding: '8px',
            flexWrap: 'wrap',
        }}>
            <Tooltip arrow title="Download Data">
            <IconButton onClick={handleExportData}>
            <FileDownloadIcon />
            </IconButton>
            </Tooltip>
        </Box>
        
      ),
    });
  
    const theme = createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: prefersDarkMode ? '#111829' : '#1976d2',
          },
          text: {
            primary: prefersDarkMode ? '#fff' : '#111829',
          },
          background: {
            default: prefersDarkMode ? '#111829' : '#fff',
            paper: prefersDarkMode ? '#111829' : '#fff',
          }
        },
      });

      
    return (
    <ThemeProvider theme={theme}>
    <MaterialReactTable table={table} />
  </ThemeProvider>)
  };
  
  export default Simpletable;
  