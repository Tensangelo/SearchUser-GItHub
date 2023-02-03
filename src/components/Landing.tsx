// Styles
import Styles from '@styles/landing.module.scss';
import EastIcon from '@mui/icons-material/East';
import Link from 'next/link';

const Landing = () => {
    return (
        <section className={Styles.containerLanding}>
            <h1>
                Realice busquedas de usuarios rapidamente.
            </h1>
            <p>GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. GitHub ya alcanza más de 100 millones de desarrolladores</p>
            <Link href={'/ListUsers'}>
                Empiezar a buscar
                <EastIcon sx={{ ml: '1rem' }} />
            </Link>
        </section>
    )
}

export default Landing;