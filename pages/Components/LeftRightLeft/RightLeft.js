import leftright from "./leftright.module.css";

export default function App() {
  return (
    <div className={leftright.App}>
      <div className={leftright.Main}>
    
        <div className={leftright.right_box}>
                  <img src="https://picsum.photos/400/400" className={leftright.image}/>
              </div>
              <div className={leftright.left_box}>
              <h1>Lorem Ipsum</h1>
            </div>
      </div>
    </div>
  );
}
