import './Header.css';
function Header({ user, title, password}) {
    return (
        <>
            <hr />
            <h2>Props Value</h2>
            <h1 className='header_title'>This is Header</h1>
            <h3>{ user }</h3>
            <h3>{ title }</h3>
            <h3>{ password }</h3>
        </>
    )
}

export default Header;