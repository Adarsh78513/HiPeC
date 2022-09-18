const LinkButton = ({link, text}) => {
    return (
        <button className="link-button">
            <a href={link}>{text}</a>
        </button>
    );
}

export default LinkButton;