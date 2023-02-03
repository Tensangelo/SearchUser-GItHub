import Image from 'next/image';
// Style
import Styles from '@styles/tools/tables.module.scss';
// Components}
import GetUser from '@components/users/GetUser';
import BtnActions from '../BtnActions';
// Material ui
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Icons
import LaunchIcon from '@mui/icons-material/Launch';

type TableUserProps = {
    infoUserRow: string[];
    ListDataUser: [];
    isLoading: boolean;
}

const TableUsers = (props: TableUserProps) => {

    const { infoUserRow, ListDataUser, isLoading } = props;

    return (
        <TableContainer sx={{ minHeight: '300px', maxHeight: '720px' }}>
            <Table stickyHeader aria-label='sticky table' sx={{ minHeight: '300px' }}>
                <TableHead>
                    <TableRow>
                        {infoUserRow.map((row, i) => {
                            return (
                                <TableCell key={i} className={Styles.tableCellHeader}>
                                    {row}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                {ListDataUser ? (
                    <>
                        {ListDataUser?.length <= 0 ? (
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={5} className={Styles.tableCellNothing}>
                                        <p>Usuario no encontrado</p>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        ) : (
                            <TableBody sx={{
                                position: 'relative',
                                height: '10rem',
                            }}>
                                {ListDataUser.map((data: any) => {
                                    const { id, login, avatar_url, url, html_url } = data;

                                    return (
                                        <TableRow key={id}>
                                            <TableCell className={Styles.tableCellBody}>
                                                {id}
                                            </TableCell>
                                            <TableCell className={Styles.tableCellBody}>
                                                <picture>
                                                    <Image
                                                        src={avatar_url}
                                                        alt={'Icon user'}
                                                        width={55}
                                                        height={55}
                                                        priority
                                                    />
                                                </picture>
                                            </TableCell>
                                            <TableCell className={Styles.tableCellBody}>
                                                {login}
                                            </TableCell>
                                            <TableCell className={Styles.tableCellBody}>
                                                <IconButton
                                                    sx={{ color: '#3bb3ff' }}
                                                    href={html_url}
                                                    target='_blank'
                                                >
                                                    <LaunchIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell className={Styles.tableCellBody}>
                                                <BtnActions
                                                    childrenView={<GetUser User={url} />}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        )}
                    </>
                ) : (
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={5} className={Styles.tableCellNothing}>
                                <p>Por favor ingrese un nombre en el campo de arriba.</p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    )
}

export default TableUsers;