import { ReactNode, useState } from 'react';
// Components
import ModalUser from '@components/tools/modals/ModalBase';
// Mui
import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// Images && icons
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

type contentModalProps = {
    childrenView: ReactNode;
}

const BtnActions = (props: contentModalProps) => {
    const { childrenView } = props;
    const [ openModalView, setOpenModalView ] = useState(false);

    const handleOpenView = () => {
        setOpenModalView(true)
    }
    const handleCloseView = () => {
        setOpenModalView(false)
    }

    return (
        <>
            <Box>
                <IconButton
                    sx={{ color: '#3bb3ff' }}
                    onClick={handleOpenView}
                >
                    <WysiwygIcon />
                </IconButton>
            </Box>
            <ModalUser
                openModal={openModalView}
                closeModal={handleCloseView}
                onClick={handleCloseView}
            >
                {childrenView}
            </ModalUser>
        </>
    )
}

export default BtnActions;