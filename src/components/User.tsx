import { useNavigate } from 'react-router-dom';


export const User = ({ user }: any) => {
    const navigate = useNavigate()
    {console.log('USER: ', user)}
    return (
        <div 
            className='bg-gray-50 w-80 flex justify-center py-4 rounded shadow mb-8 mx-6 hover:bg-gray-100 cursor-pointer'
            onClick={() => navigate(`/users/${user._id}`)}>
            <div className='flex flex-col '>
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
};

// export default User