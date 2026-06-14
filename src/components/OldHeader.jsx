import './Header.css';
function Header(props) {
    return (
        <>
            <hr />
            <h2>Props Value</h2>
            <h1 className='header_title'>This is Header</h1>
            <h3>{ props.user }</h3>
            <h3>{ props.title }</h3>
            <h3>{ props.password }</h3>
        </>
    )
}

export default Header;