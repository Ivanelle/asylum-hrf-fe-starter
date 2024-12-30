import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  // TODO: Replace me
  const isAuthenticated = false;

  return (
    <header className='flex w-[100%] primary-c justify-between flex-wrap px-14'>
      <div className='flex justify-between'>
        <NavLink to='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </NavLink>
      </div>
      
      <div className='flex items-center py-4 gap-16'>
        <NavLink to='/' className='nav-btn'>
          Home
        </NavLink>
        <NavLink to='/graphs' className='nav-btn'>
          Graphs
        </NavLink>
        {isAuthenticated && (
          <NavLink to='/profile' className='nav-btn'>
            Profile
          </NavLink>
        )}
        <LoggingButtons />
      </div>

          <div className=" flex flex-col text-center w-full pb-[20px]">
            <h1 className="text-4xl text-white p-[20px]">Asylum Office Grant Rate Tracker</h1>
              <p className="text-white">
                The Asylum Office Grant Rate Tracker provides asylum seekers,
                researchers, policymakers, and the public an interactive tool to
                explore USCIS data on Asylum Office decisions
              </p>
          </div>
    </header>
    
    
  );
}
