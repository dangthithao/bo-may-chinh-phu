import { useEffect, useState } from "react";
import Info from "./components/info/info";
interface NhomItem {
  nhom: string;
}
function App() {
  const [nhomConditions, setNhomConditions] = useState<string[]>([]);
 
  // lấy dữ liệu từ data.json
  useEffect(() => {
    const datalink = `/data.json`;
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
