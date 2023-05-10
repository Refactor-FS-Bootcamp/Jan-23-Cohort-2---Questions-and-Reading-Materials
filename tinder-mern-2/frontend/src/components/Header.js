import { Person, Forum } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large" className="header__icon" />
            </IconButton>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="header" className="header__logo" />
            <IconButton>
                <Forum fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}
export default Header