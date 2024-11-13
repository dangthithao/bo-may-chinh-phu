import { useEffect, useState } from "react";
import Info from "./components/info/info";
interface NhomItem {
  nhom: string;
}
function App() {
  const [nhomConditions, setNhomConditions] = useState<string[]>([]);
  const dataUrl = document.getElementById("root")?.getAttribute("data-json");
  // lấy dữ liệu từ data.json
  let datalink:string;
  useEffect(() => {
    if (dataUrl) {
      datalink = `${dataUrl}`; // Nếu có dataUrl
    }
    console.log("Datalink:", datalink);
    fetch(datalink) //đường dẫn lấy dữ liệu data.json
      .then((response) => response.json()) //chuyển đổi dữu liệu
      .then((data: NhomItem[]) => {
        const nhomList = Array.from(new Set(data.map((item) => item.nhom)));
        setNhomConditions(nhomList);
      });
  }, []);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            {nhomConditions.map((condition, index) => (
              <div key={index} className="col-md-12">
                <Info nhomCondition={condition} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

