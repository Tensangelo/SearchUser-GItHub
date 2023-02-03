import { ChangeEvent, ReactNode } from 'react';
// Material ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// Styles
import Styles from '@styles/tools/pagination.module.scss'

type ButtonsPagesProps = {
    onClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangePagination: (event: ChangeEvent<unknown>, page: number) => void
    valueTotalResults: number;
    valueCurrentPage: number;
}

const BtnPagesComponent = (props: ButtonsPagesProps) => {
    const {
        onClickPrev,
        onClickNext,
        onChangePagination,
        valueTotalResults,
        valueCurrentPage
    } = props;

    return (
        <Box  className={Styles.botonsToolsPagination}>
            <Button
                className={Styles.BtnPaginations}
                variant='contained'
                onClick={onClickPrev}
            >
                Back
            </Button>
            <Stack spacing={2} display='flex' justifyContent='center'>
                <Pagination
                    className={Styles.Pagintation}
                    count={Math.ceil(valueTotalResults / 30)}
                    page={valueCurrentPage}
                    onChange={onChangePagination}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    hidePrevButton
                    hideNextButton
                />
            </Stack>
            <Button
                className={Styles.BtnPaginations}
                variant='contained'
                onClick={onClickNext}
            >
                Next
            </Button>
        </Box>
    )
}

export default BtnPagesComponent;