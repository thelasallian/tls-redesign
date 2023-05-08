import styles from '@/styles/Footer/Full/Footer.module.scss'
import dayjs from 'dayjs';

export default function FooterFull() {

    const goToTheTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const tlsCreationDate = dayjs('1960-10-24');
    const currentDate = dayjs();
    const tlsEra = currentDate.diff(tlsCreationDate, 'year');

    return (
        <div className={styles.footer__wrapper__full}>
            <div className={styles.socials__wrapper__list}>
                <a href="https://facebook.com/TheLaSallian">
                    <svg className={styles.socials__icon__facebook} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/>
                    </svg>
                </a>
                <a href="https://instagram.com/TheLaSallian">
                    <svg className={styles.socials__icon__svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                    </svg>
                </a>
                <a href="https://twitter.com/TheLaSallian">
                    <svg className={styles.socials__icon__svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/>
                    </svg>
                </a>
                <a href="https://t.me/TheLaSallian">
                    <svg className={styles.socials__icon__svg} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="24px" height="24px">
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
                    </svg>
                </a>
                

            </div>
            <div className={styles.footer__details__wrapper}>
                <div className={styles.details__text__container}>
                    <strong>The LaSallian</strong> is the official student publication of De La Salle University. It is of the students, by the students, and for the students. Our student writers, photographers, videographers, artists, and web managers are committed to the {tlsEra}-year tradition of journalistic excellence and issue-oriented critical thinking.
                    <br/><br/>
                    Student Media House, Fifth Floor Br. Connon Hall, De La Salle University, 2401 Taft Avenue
                    <br/><br/>
                    Manila, Philippines
                </div>
            </div>
            <div className={styles.ender__details__wrapper}>
                <div>Powered by Depresso</div>
                <div onClick={goToTheTop} className={styles.ender__toTheTop__link}>To the top</div>
            </div>
        </div>
    );
}