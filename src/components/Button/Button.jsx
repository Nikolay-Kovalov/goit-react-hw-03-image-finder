import { LoadMoreButton } from "./Button.styled"
export const LoadButton = ({ load }) => {
    return (
        <LoadMoreButton onClick={load}>Загрузить еще</LoadMoreButton>
    )
}