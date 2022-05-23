import { getCentersData } from "./Common/API";
import Date from "./Component/Date";
import Table from "./Component/Table";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const CentresData = async (date) => {
    const datas = await getCentersData(date);
    setLoading(false);
    setData(datas);
  };

  useEffect(() => {
    CentresData("20-05-2022");
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="container">
      <div>
        <Date CentresData={CentresData} />
      </div>
      {data && <Table data={data} />}
    </div>
  );
}

export default App;
