import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';

type LoadingProps = {
    typeTag: 'div' | 'td' | 'section'
}

const LoadingComponent = (props: LoadingProps) => {
    const { typeTag } = props;

    return (
        <Box
            component={typeTag}
            sx={{
                width: '100%',
                position: 'absolute',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0'
            }}
        >
            <LoadingButton
                size='large'
                variant="outlined"
                loading={true}
                disabled
                fullWidth
                color='primary'
                sx={{
                    height: '100%',

                    'div': {
                        'span': {
                            color: '#067566',
                            width: '50px !important',
                            height: '50px !important',
                        }
                    }
                }}
            >
                Reload
            </LoadingButton>
        </Box>
    )
}

export default LoadingComponent;