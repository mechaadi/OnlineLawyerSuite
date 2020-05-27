import rightleft from "./rightleft.module.css";

export default function App() {
  return (
    <div className={rightleft.App}>
      <div className={rightleft.Main}>
    
        <div className={rightleft.left_box}>
                  <img src="https://picsum.photos/400/400" className={rightleft.image}/>
              </div>
              <div className={rightleft.right_box}>
          <div className={rightleft.h1_heading}>Sed ut perspiciatis unde omnis</div>
          <div className={rightleft.description}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</div>
        </div>
      </div>
    </div>
  );
}
