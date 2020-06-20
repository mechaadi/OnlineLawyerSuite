import rightleft from "./rightleft.module.css";

export default function App(props) {
  return (
    <div className={rightleft.App}>
      <div className={rightleft.Main}>

        <div className={rightleft.left_box}>
          <img src={props.img} alt="" className={rightleft.image} />
        </div>
        <div className={rightleft.right_box}>
          <div className={rightleft.h1_heading}>{props.title}</div>
          <div className={rightleft.description}>{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
