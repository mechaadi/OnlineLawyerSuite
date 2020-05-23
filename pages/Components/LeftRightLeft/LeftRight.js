import leftright from "./leftright.module.css";

export default function App() {
  return (
    <div className={leftright.App}>
      <div className={leftright.Main}>
        <div className={leftright.left_box}>
          <div className={leftright.h1_heading}>Sed ut perspiciatis unde omnis</div>
          <div className={leftright.description}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</div>
        </div>
        <div className={leftright.right_box}>
                  <img src="https://picsum.photos/400/400" className={leftright.image}/>
        </div>
      </div>
    </div>
  );
}
