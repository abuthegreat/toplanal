import React, { useMemo, useState, useEffect } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import { MRT_Localization_DE } from 'material-react-table/locales/de';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    Box,
    IconButton,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    lighten,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import { getAllSkyReadyData, getActiveSkyReadyData, getPassiveSkyReady, getDateFilteredData } from "./services/skyReadyService.js";

const Example = () => {
    const columns = useMemo(
        () => [
            {
                id: 'auftragseingang',
                header: 'Kopfdaten',
                columns: [
                    {
                        accessorFn: (row) => row.id,
                        id: 'id',
                        header: 'ID',
                        size: 50,
                        Cell: ({ renderedCellValue }) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span>{renderedCellValue}</span>
                            </Box>
                        ),
                    },
                    {
                        accessorFn: (row) => String(row.aktiv),
                        id: 'aktiv',
                        filterVariant: 'autocomplete',
                        header: 'Status',
                        size: 20,
                        Cell: ({ cell }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: cell.getValue() === '1' ? 'yellow' : 'green',
                                    }}
                                />
                            </Box>
                        ),
                    },
                    {
                        accessorKey: 'upc',
                        enableClickToCopy: true,
                        filterVariant: 'autocomplete',
                        header: 'Prod.Nr.',
                        size: 100,
                    },
                    {
                        accessorKey: 'pjn',
                        enableClickToCopy: true,
                        filterVariant: 'autocomplete',
                        header: 'Projekt Nr.',
                        size: 100,
                    },
                    {
                        accessorKey: 'znr',
                        header: 'Zeich.Nr.',
                        enableClickToCopy: true,
                        size: 50,
                    },
                    {
                        accessorKey: 'host',
                        header: 'Station',
                        size: 50,
                    },
                    {
                        accessorKey: 'arbschritt',
                        header: 'AS',
                        size: 20,
                    },
                ],
            },
            {
                id: 'dates',
                header: 'Datum und Zeit',
                columns: [
                    {
                        accessorFn: (row) => `${row.date_s} ${row.time_s}`,
                        id: 'startDate',
                        header: 'Start D&Z',
                        size: 100,
                        Cell: ({ cell }) => cell.getValue(),
                        Header: ({ column }) => <em>{column.columnDef.header}</em>,
                        muiFilterTextFieldProps: {
                            sx: {
                                minWidth: '250px',
                            },
                        },
                    },
                    {
                        accessorFn: (row) => {
                            const date = row.date_e ? row.date_e : '-';
                            const time = row.time_e ? row.time_e : '';
                            return `${date} ${time}`.trim();
                        },
                        id: 'endDate',
                        header: 'End E&Z',
                        size: 200,
                        Cell: ({ cell }) => cell.getValue(),
                        Header: ({ column }) => <em>{column.columnDef.header}</em>,
                        muiFilterTextFieldProps: {
                            sx: {
                                minWidth: '250px',
                            },
                        },
                    },
                    {
                        accessorKey: 'differenz',
                        header: 'Δ',
                        size: 20,
                        Cell: ({ cell }) => cell.getValue() !== null ? cell.getValue() : '-',
                    },
                ],
            },
            {
                id: 'status',
                header: 'Status und Notizen',
                columns: [
                    {
                        accessorKey: 'stueckzahl',
                        header: 'Stückzahl',
                        size: 100,
                        Cell: ({ cell }) => cell.getValue() !== null ? cell.getValue() : '-',
                    },
                    {
                        accessorKey: 'notizen',
                        header: 'Notizen',
                        size: 200,
                        Cell: ({ cell }) => cell.getValue() !== null ? cell.getValue() : '-',
                    },
                ],
            },
        ],
        []
    );

    const [records, setRecords] = useState([]);
    const [showingAllData, setShowingAllData] = useState(false);
    const [columnFilters, setColumnFilters] = useState([]);
    const [stationFilter, setStationFilter] = useState('');

    useEffect(() => {
        callOnlyActiveData();
    }, []);

    function callAllData() {
        getAllSkyReadyData(setRecords);
        setShowingAllData(true);
    }

    function callOnlyActiveData() {
        getActiveSkyReadyData(setRecords);
        setShowingAllData(false);
    }

    function setDateFilter(dateFilterType) {
        getDateFilteredData(dateFilterType, setRecords);
    }

    function handleStationFilterChange(event) {
        const selectedStation = event.target.value;
        if (selectedStation === '') {
            setStationFilter('');
            callOnlyActiveData();
            return;
        }
        setStationFilter(selectedStation);
        const filteredData = records.filter(record => record.host === selectedStation);
        setRecords(filteredData);
    }

    const tableInstance = useMaterialReactTable({
        columns,
        data: records,
        state: {
            columnFilters
        },
        onColumnFiltersChange: setColumnFilters,
        enableTopToolbar: true,
        enableBottomToolbar: true,
        enableColumnFilterModes: true,
        enableColumnOrdering: true,
        enableGrouping: true,
        enableColumnPinning: true,
        enableFacetedValues: true,
        enableRowActions: true,
        enableRowSelection: false,
        initialState: {
            showColumnFilters: false,
            showGlobalFilter: true,
            columnPinning: {
                left: ['mrt-row-expand', 'mrt-row-select'],
                right: ['mrt-row-actions'],
            },
            density: 'compact',
            pageSize: 50,
        },
        paginationDisplayMode: 'pages',
        positionToolbarAlertBanner: 'bottom',
        muiSearchTextFieldProps: {
            size: 'small',
            variant: 'outlined',
        },
        muiPaginationProps: {
            color: 'secondary',
            rowsPerPageOptions: [10, 20, 30, 40, 50],
            shape: 'rounded',
            variant: 'outlined',
        },
        localization: MRT_Localization_DE
    });

    return (
        <>
            <AppComponentHeader sx={{ height: '100vh', width: '100%' }}
                                title="Test Page For SKYready"
            />
            {/* Add Button*/}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: 2 }}>
                {/* Conditional Rendering setShowingAllData */}
                {
                    showingAllData ? (
                            <Button
                                color="primary"
                                startIcon={<VisibilityOffIcon />}
                                variant="contained"
                                onClick={() => {
                                    callOnlyActiveData();
                                }}
                            >
                                Nur aktive Daten anzeigen
                            </Button>
                        ):
                        (
                            <Button
                                color="primary"
                                startIcon={<VisibilityIcon />}
                                variant="contained"
                                onClick={() => {
                                    callAllData();
                                }}
                            >
                                Alle Daten anzeigen
                            </Button>
                        )
                }
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListIcon />}
                    variant="contained"
                    onClick={() => {
                        setDateFilter("today");
                    }}
                    sx={{ ml: 2 }}
                >
                    Heute
                </Button>
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListIcon />}
                    variant="contained"
                    onClick={() => {
                        setDateFilter("yesterday");
                    }}
                    sx={{ ml: 2 }}
                >
                    Gestern
                </Button>
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListIcon />}
                    variant="contained"
                    onClick={() => {
                        setDateFilter("thisWeek");
                    }}
                    sx={{ ml: 2 }}
                >
                    Diese Woche
                </Button>
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListIcon />}
                    variant="contained"
                    onClick={() => {
                        setDateFilter("thisMonth");
                    }}
                    sx={{ ml: 2 }}
                >
                    Dieser Monat
                </Button>
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListIcon />}
                    variant="contained"
                    onClick={() => {
                        setDateFilter("lastMonth");
                    }}
                    sx={{ ml: 2 }}
                >
                    Letzter Monat
                </Button>
                <FormControl sx={{ ml: 2, minWidth: 200 }}>
                    <InputLabel id="station-filter-label">Station</InputLabel>
                    <Select
                        labelId="station-filter-label"
                        value={stationFilter}
                        label="Station"
                        onChange={handleStationFilterChange}
                    >
                        <MenuItem value="">Filter zurücksetzen</MenuItem>
                        <MenuItem value="auftragseingang">Auftragseingang</MenuItem>
                        <MenuItem value="donau">Donau</MenuItem>
                        <MenuItem value="entgraten">Entgraten</MenuItem>
                        <MenuItem value="hobel">Hobel</MenuItem>
                        <MenuItem value="kaast1">Kaast1</MenuItem>
                        <MenuItem value="kaast2">Kaast2</MenuItem>
                        <MenuItem value="langloch">Langloch</MenuItem>
                        <MenuItem value="plattensaege">Plattensaege</MenuItem>
                        <MenuItem value="programmieren">Programmieren</MenuItem>
                        <MenuItem value="saege1">Saege1</MenuItem>
                        <MenuItem value="scm">SCM</MenuItem>
                        <MenuItem value="standbohrmaschine">Standbohrmaschine</MenuItem>
                        <MenuItem value="tigerstop">Tigerstop</MenuItem>
                        <MenuItem value="tischfraese">Tischfraese</MenuItem>
                        <MenuItem value="versand">Versand</MenuItem>
                        <MenuItem value="zuschnitt">Zuschnitt</MenuItem>
                        {/* Add more stations as needed */}
                    </Select>
                </FormControl>
                <Button
                    color="secondary"
                    style={{ marginLeft: '10px' }}
                    startIcon={<FilterListOffIcon />}
                    variant="contained"
                    onClick={() => {
                        callOnlyActiveData();
                    }}
                    sx={{ ml: 2 }}
                >
                    Zurücksetzen
                </Button>
            </Box>
            <AppGridContainer sx={{ height: '100vh', width: '100%' }}>
                <Grid item xs={12} sx={{ height: '100%', width: '100%' }}>
                    <MaterialReactTable table={tableInstance} sx={{ height: '100%', width: '100%' }} />
                </Grid>
            </AppGridContainer>
        </>
    );
};

export default Example;
