import { MouseEventHandler, ReactNode } from 'react';
// styleSheets
import Styles from '@styles/tools/modals/modal.module.scss';
// Mui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

type ModalViewUserProps = {
    openModal: boolean;
    closeModal: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    onClick: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    children?: ReactNode;
    buttonText?: string;
}

const ViewUser = (props: ModalViewUserProps) => {
    const {
        openModal,
        closeModal,
        onClick,
        title,
        children,
        buttonText= 'Cerrar',
    } = props;

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
        >
            <Box className={Styles.containerModalSmall}>
                <h2>{title}</h2>
                {children}

                <div className={Styles.containerBtn}>
                    <Button
                        className={`${Styles.BtnTools}`}
                        variant="contained"
                        onClick={onClick}
                    >
                        {buttonText}
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default ViewUser;