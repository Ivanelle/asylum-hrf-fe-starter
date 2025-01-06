import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  const {
    isLoading,
    error,
    user,
    logout
  } = useAuth0();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
  }

  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center p-4'>Oops... {error.message}</div>
  }

  if (!user) {
    navigate('/404');
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mx-auto w-96"> 
        <div className="flex justify-center items-center"> 
          <img src={user.picture} alt="Profile Picture" className="w-24 h-24 rounded-full mb-4" />
        </div>
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-500">{user.email}</p>
        <button className="mt-4 
          bg-blue-500 
          hover:bg-blue-700 
          text-white 
          font-bold 
          py-2 px-4 
          rounded"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile
