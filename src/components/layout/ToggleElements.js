import CSSTransition from "react-transition-group/CSSTransition";
import "./ToggleElements.css";
export default function ToggleElements(props) {
  return (
    <>
      <div className="MyBlock">
        <div className="straightline" />
      </div>

      <CSSTransition in={props.show} timeout={1000} classNames="myFade">
        <div className="circle"></div>
      </CSSTransition>
    </>
  );
}
