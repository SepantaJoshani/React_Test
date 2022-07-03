import React, { useEffect, useState } from "react";
import Celebrity from "./Celebrity";

let firstIndex = -1;
function Celebrities({ ids, fetchedData }) {
  const [celebrities, setCelebrities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  function loadOne() {
    firstIndex++;
    setCelebrities([...celebrities, fetchedData.list[firstIndex]]);
    // change current index
  }
  useEffect(() => {
    if (ids && ids.length) {
      loadOne();
    }
  }, [ids]);
  return (
    <div>
      <button
        disabled={firstIndex + 1 >= parseInt(fetchedData.size)}
        onClick={loadOne}
      >
        Load One More
      </button>
      {celebrities &&
        celebrities.map((celebrity, index) => (
          <Celebrity key={index} celebrity={celebrity} />
        ))}
    </div>
  );
}

export default Celebrities;
