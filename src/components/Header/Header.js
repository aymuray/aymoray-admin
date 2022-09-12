import './Header.css'

export function Header({ ContentTitle }) {

  return (
      <header className="cont-header">
          <span className='header-title'>
            {ContentTitle}
          </span>
      </header>
  );
}

export default Header;
