import { Wrapper } from "./Layout.styled"
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
    
    return (
        <Wrapper>{children}</Wrapper>
    )
}

Layout.propTypes = {
  children: PropTypes.node,
}