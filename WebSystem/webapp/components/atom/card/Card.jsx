const Card = (props) => {
    const { children } = props;
    return <div className="bg-white shadow-md rounded-lg p-4">{children}</div>;
  };
  
  export default Card;