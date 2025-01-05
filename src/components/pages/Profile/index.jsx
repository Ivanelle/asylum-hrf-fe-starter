import { useAuth0 } from "@auth0/auth0-react";

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
    user
  } = useAuth0();

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center p-4'>Oops... {error.message}</div>
  }

  return (
    <div>
      <h2>Profiel</h2>
      <img src={user.picture} alt="Profile Picture" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Profile;
