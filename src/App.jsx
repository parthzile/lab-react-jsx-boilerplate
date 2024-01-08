import "./App.css";

function App(dataImg) {
  // code here

  const Data = dataImg.dataImg;

  return (
    <>
      <div className="container">
        <div>
          <img src={Data[0].img} alt="" id={Data[0].id} />
        </div>
        <div>
          <img src={Data[1].img} alt="" id={Data[1].id} />
        </div>
        <div>
          <img src={Data[2].img} alt="" id={Data[2].id} />
        </div>
        <div>
          <img src={Data[3].img} alt="" id={Data[3].id} />
        </div>
      </div>
    </>
  );
}

export default App;


