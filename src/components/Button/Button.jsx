import { LoadButton } from "./Button.styled"
import PropTypes from 'prop-types'

export const LoadMoreButton = ({text, onClickButton}) => {
    return (
        <LoadButton type="button" onClick={onClickButton}>
            {text}
        </LoadButton>
    )
}
LoadMoreButton.propTypes = {
    text: PropTypes.string,
    onClickButton: PropTypes.func
}

