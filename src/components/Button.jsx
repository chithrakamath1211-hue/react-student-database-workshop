export default function Button({
    name,
    onClick,
    type = "button",
    className = "button"
}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {name}
        </button>
    );
}