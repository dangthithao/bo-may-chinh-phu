import infoData from "../../../public/data.json";
interface InfoProps{
  nhomCondition:String
}
const Info= ({ nhomCondition} :InfoProps) => {
  return (
    <div>
      {infoData.length > 0 && (  
        <h2 className="text-center text-uppercase heading text-white">  
          {infoData[0].nhom}  
        </h2>  
      )}  
    <div className=" row justify-content-around ">
      {infoData
        .filter((item) => item.nhom === nhomCondition)
        .map((item) => (
          <div className="col-md-6 my-4 ">
            <div className="rounded-3 p-3 info">
            <div className="row  ">
              <div className="col">
                <img
                  src={item.linkAnh}
                  alt={item.hoVaTen}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="col-7 col-md-8 col-sm-7">
                <p className="text-top">{item.hoVaTen}</p>
                <p>
                  <span>Ngày sinh: </span>
                  {item.ngaySinh}
                </p>
                <p>
                  <span>Chức vụ: </span>
                  {item.chucVu}
                </p>
                <p>
                  <span>Quê quán: </span>
                  {item.queQuan}
                </p>
                <p>
                  <span>Trình độ: </span>
                  {item.trinhDo}
                </p>
              </div>
            </div>
            </div>

          </div>
        ))}
    </div></div>
  );
};

export default Info;
