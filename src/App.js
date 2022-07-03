import React, { useEffect, useState } from "react";
import "./Celebrity/Celebrity.module.css";
import Celebrities from "./Celebrities";

const URL = "https://halloffame-server.herokuapp.com/fames?guest=true";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [ids, setIds] = useState();

  console.log(fetchedData);
  console.log(ids);
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await fetch(URL);
        const receivedData = await res.json();
        setFetchedData(receivedData?.data);
        setIds(receivedData?.data?.list.map((l) => l.id));
      } catch (error) {
        console.log(error);
      }
    };

    fetchHandler();
  }, []);

  return (
    <div>
      <h1>Celebrities</h1>
      {ids && <Celebrities fetchedData={fetchedData} ids={ids} />}
    </div>
  );
}

export default App;
