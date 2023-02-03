import { useState, useEffect } from 'react'
// Components
import LoadingComponent from '@components/tools/Loading';
import ModalSmall from '@components/tools/modals/ModalSmall';
import Followers from './Followers';
import Following from './Following';
// ]STyles
import Styles from '@styles/users/getUsers.module.scss'
// Mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Button from '@mui/material/Button';

type UserProps = {
    User: string;
}

interface DataUser {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    location: string;
    email: string;
    company: string;
    bio: string;
    blog: string;
    followers_url: string;
    following_url: string;
}

const GetUser = (props: UserProps) => {

    const { User } = props;
    const Api = process.env.NEXT_PUBLIC_API;

    const [ isLoading, setIsLoading ] = useState(true);
    const [ dataUser, setDataUser ] = useState<DataUser>([] as any);
    const [ followers, setFollowers ] = useState<object | number>(0);
    const [ following, setFollowing ] = useState<object | number>(0);

    const [ openModalFollowers, setOpenModalFollowers ] = useState(false);
    const [ openModalFollowing, setOpenModalFollowing ] = useState(false);


    const handleOpenFollowers = () => {
        setOpenModalFollowers(true)
    }
    const handleCloseFollowers = () => {
        setOpenModalFollowers(false)
    }

    const handleOpenFollowing= () => {
        setOpenModalFollowing(true)
    }
    const handleCloseFollowing = () => {
        setOpenModalFollowing(false)
    }

    useEffect(() => {
        const getUser = async() => {
            const res = await fetch(User, {
                'method': 'GET',
            })

            const data = await res.json();

            setDataUser(data);
            setIsLoading(false);
        }

        getUser();
    },[User])

    const {
        id,
        name,
        login,
        location,
        email,
        company,
        bio,
        avatar_url,
        blog,
        followers_url,
        following_url
    } = dataUser;

    useEffect(() => {
        const followersUser = async() => {
            if (followers_url) {
                const res = await fetch(followers_url, {
                    'method': 'GET',
                })
                const data = await res.json()
                setFollowers(data);
            }
        }
        const followingUser = async() => {
            if (login) {
                const res = await fetch(`${Api}/users/${login}/following`, {
                    'method': 'GET',
                })
                const data = await res.json()
                setFollowing(data);
            }
        }

        followersUser();
        followingUser();
    },[Api, followers_url, login])

    let NumberFollowers = Object.keys(followers).length;
    let NumberFolling = Object.keys(following).length;

    return (
        <Container>
            {!isLoading ? (
                <>
                    <Box className={Styles.containerBannerUser} >
                        <picture>
                            <Image
                                src={avatar_url}
                                alt={'avatar user'}
                                width={200}
                                height={200}
                            />
                        </picture>
                        <Paper elevation={3} className={Styles.bannerInfoUser} >
                            <p>{name || 'No registra'}</p>
                        </Paper>
                        <Button variant="contained" className={Styles.BtnTools} onClick={handleOpenFollowers}>
                            {NumberFollowers} Seguidores
                        </Button>
                        <Button variant="contained" className={Styles.BtnTools} onClick={handleOpenFollowing}>
                            {NumberFolling} Siguiendo
                        </Button>
                    </Box>
                    <Box className={Styles.containerUser}>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>N° Id: </p>
                            <p>{id}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>Alias: </p>
                            <p>{login || 'No registra'}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>Email: </p>
                            <p>{email || 'No registra'}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>Ubicacion: </p>
                            <p>{location || 'No registra'}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>Compañia: </p>
                            <p>{company || 'No registra'}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUser} >
                            <p>Blog: </p>
                            <p>{blog || 'No registra'}</p>
                        </Paper>
                        <Paper elevation={3} className={Styles.containerInfoUserBio} >
                            <p>Biografia: </p>
                            <p>{bio || 'Sin biografia'}</p>
                        </Paper>
                    </Box>
                    <ModalSmall
                        title='Seguidores'
                        openModal={openModalFollowers}
                        closeModal={handleCloseFollowers}
                        onClick={handleCloseFollowers}
                    >
                        <Followers Followers={followers} />
                    </ModalSmall>
                    <ModalSmall
                        title='Seguidos'
                        openModal={openModalFollowing}
                        closeModal={handleCloseFollowing}
                        onClick={handleCloseFollowing}
                    >
                        <Following Following={following} />
                    </ModalSmall>
                </>
            ) : (
                <LoadingComponent typeTag='div' />
            )}
        </Container>
    )
}

export default GetUser;