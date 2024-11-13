import Info from "./components/info/info";
function App() {
    const nhomCondition= "Thủ tướng Chính phủ"
    const nhomCondition1= "Phó thủ tướng chính phủ"
    const nhomCondition2= "Bộ trưởng, Trưởng ngành"
  return (
    <>
      <div className="home">
        <div className="container">
          <h2 className="text-center text-uppercase my-4">
            Bộ máy Chính phủ sau khi được kiện toàn
          </h2>
          <div className="row">
            <div className="col-md-12">
              <Info nhomCondition={nhomCondition}/>
            </div>
            <div className="col-md-12">
              <Info nhomCondition={nhomCondition1}/>
            </div>
            <div className="col-md-12">
              <Info nhomCondition={nhomCondition2}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
