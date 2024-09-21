

const Card = ({ title, content, children, className }) => {
    return (
        <div className={className}>
            {children}
            <div className={content}>
                <h2 className={title}>{title}</h2>
                <p className="text">{content}</p>
            </div>
        </div>
    );
};

export default Card;
