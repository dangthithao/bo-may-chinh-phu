import infoData from "../../../public/data.json";

interface InfoProps {
  nhomCondition: String;
}

const Info = ({ nhomCondition }: InfoProps) => {
  // Lọc danh sách theo nhomCondition
  const filteinfoData = infoData.filter((item) => item.nhom === nhomCondition);

  return (
    <div>
      {filteinfoData.length > 0 && (
        // Lấy nhom của phần tử đầu tiên trong mảng đã lọc
        <h2 className="text-center text-uppercase heading text-white">
          {filteinfoData[0].nhom}
        </h2>
      )}
      <div className="row justify-content-around">
        {filteinfoData.map((item) => (
          <div className="col-md-6 my-4" key={item.hoVaTen}>
            <div className="rounded-3 p-3 info">
              <div className="row">
                <div className="col">
                  <img
                    src={item.linkAnh}
                    alt={item.hoVaTen}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-7">
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
      </div>
    </div>
  );
};

export default Info;
