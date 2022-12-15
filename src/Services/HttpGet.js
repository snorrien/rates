import { useEffect, useState } from 'react';

function HttpGet(url) {
  const [result, setResult] = useState([]);

  useEffect(() => {;
    fetch(`http://localhost:5276/${url}`) // 5276 backend
      .then((res) => res.json())
     
      .then((res) => {
        setResult(res);
      });
  }, []);

  return result;
}

export default HttpGet;