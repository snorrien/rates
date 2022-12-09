import { useEffect, useState } from 'react';

function HttpGet(url) {
  let [result, setResult] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5276/${url}`) // 5276 backend
          .then((res) => res.json())
          .then((res) => {
            setResult(res);
          });
  }, []);

  console.log(result);
  return result;
}

export default HttpGet;