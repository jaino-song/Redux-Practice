import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './UserSlice';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { user, loading , error } = useSelector((state) => state.user);

    useEffect(() => {
        console.time('fetchUser');
        dispatch(fetchUser());
        console.timeEnd('fetchUser');
    }, [dispatch]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!user) return <div>No user data</div>

    return (
        <div>
            <h1>Hi</h1>
            <h1>First Name: {user.name.first} Last Name: {user.name.last}</h1>
        </div>
    );
};

export default UserProfile;

