import exp from 'constants';
import { useRouter } from 'next/router';

const UserID = () => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <h1>User ID: {slug}</h1>
            <p>Ini adalah detail pengguna dengan ID {slug}</p>
        </div>
    );
};

export default UserID;