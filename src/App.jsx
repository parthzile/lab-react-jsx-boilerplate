import "./App.css";

<<<<<<< HEAD
const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  const images = imageData();

  return (
    <div className="App">
      <div className="image-container">
        {images.map(image => (
          <img key={image.id} src={image.img} alt={`elephant-${image.id}`} />
        ))}
      </div>
    </div>
=======
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
>>>>>>> 64a7cbd7d2311d87c583fcbe07a2a309abe8cd97
  );
}

export default App;


