import ReactDom from "react-dom";

export const BackDrop = (props) => {
  const handleClick = () => {
    if (props.onClose) {
      props.onClose();
    }
  };
  return <div className="loader-overlay" onClick={handleClick}></div>;
};

const Loader = () => {
  return ReactDom.createPortal(
    <>
      <BackDrop />
      <div className="loading-dots">
        <div>Loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  );
};

export default Loader;
