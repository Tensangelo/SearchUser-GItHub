import { useEffect, useState } from 'react';
// components
import TableUsers from '@components/tools/tables/TablesUsers';
import BtnPagesComponent from '@components/tools/tables/pagination/BtnPages';
// Database
import HeaderTable from '@database/headerTable';
// Styles
import Styles from '@styles/users/listUser.module.scss';
// Material ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
// Icons
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';

interface DataProps {
    incomplete_results: boolean;
    items: [];
    total_count: number;
}

const ListUser = () => {

    const Api = process.env.NEXT_PUBLIC_API;

    const [ items, setItems ] = useState<{ data: DataProps } | any >();
    const [ isloading, setIsLoading ] = useState(true);
    const [ search, setSearch ] = useState('');
    const [ pages, setPages ] = useState(1);
    const [ total, setTotal ] = useState(0);

    const getUserId = async(userName: string, page: number) => {
        const res = await fetch(`${Api}/search/users?q=${userName}&page=${page}`, {
            "method": 'GET',
        })

        setIsLoading(true);

        const data = await res.json();
        return { data, res };
    }

    const handleInputSearch = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSearchUser = async() => {
        const RefreshInfo = await getUserId(search, pages);
        setItems(RefreshInfo.data?.items);
        setTotal(RefreshInfo.data?.total_count);
        setIsLoading(false);
    }

    const BackPage = async() => {
        if (pages > 0) {
            let currentPages = pages - 1;
            const RefreshInfo = await getUserId(search, currentPages)
            setItems(RefreshInfo.data?.items);
            setPages(currentPages);
        }
    }

    const NextPage = async() => {
        if (Math.trunc(total / 30) > pages ) {
            let currentPages = pages + 1;
            const RefreshInfo = await getUserId(search, currentPages)
            setItems(RefreshInfo.data?.items);
            setPages(currentPages);
        }
    }

    const BtnPages = async(event: React.ChangeEvent<unknown>, value: number) => {
        const RefreshInfo = await getUserId(search, value)
        setItems(RefreshInfo.data?.items);
        setPages(value);
    }

    return (
        <Box className={Styles.containerListUsers}>
            <Paper className={Styles.searchUser}>
                <Box className={Styles.toolSearch}>
                    <Input
                        className={Styles.inputToolSearch}
                        defaultValue={search}
                        onChange={handleInputSearch}
                        sx={{
                            mb: '10px',
                            width: '30rem'
                        }}
                        placeholder='Buscar usuario'
                    />
                    <Button
                        type='submit'
                        startIcon={<SearchIcon />}
                        className={Styles.BtnTools}
                        onClick={handleSearchUser}
                    >
                        Buscar
                    </Button>
                </Box>
            </Paper>
            <TableUsers
                infoUserRow={HeaderTable}
                isLoading={isloading}
                ListDataUser={items}
            />
            <Box
                className={Styles.toolsPagination}
                display='flex'
                justifyContent='flex-end'
                width={'100%'}
            >
                <BtnPagesComponent
                    onClickPrev={BackPage}
                    onClickNext={NextPage}
                    onChangePagination={BtnPages}
                    valueTotalResults={total}
                    valueCurrentPage={pages}
                />
            </Box>
        </Box>
    )
}

export default ListUser;