import { useEffect, useState } from 'react';

function HttpGet(url) {
  const [result, setResult] = useState([]);

  useEffect(() => {
      fetch(`http://158.160.36.14:81/${url}`) // 5276 backend
          .then((res) => res.json())
          .then((res) => {
            setResult(res);
          });
  }, []);

  return result;
}

export default HttpGet;