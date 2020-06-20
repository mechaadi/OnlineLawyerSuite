import leftright from "./leftright.module.css";

export default function App(props) {
  return (
    <div className={leftright.App}>
      <div className={leftright.Main}>
        <div className={leftright.left_box}>
          <div className={leftright.h1_heading}>{props.title}</div>
          <div className={leftright.description}>{props.desc}</div>
        </div>
        <div className={leftright.right_box}>
          <img src={props.img} alt="" className={leftright.image} />
        </div>
      </div>
    </div>
  );
}
