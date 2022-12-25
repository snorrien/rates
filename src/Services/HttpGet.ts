import { useEffect, useState } from 'react';

function HttpGet<TResult>(endpoint: string) : TResult {
  const [result, setResult] = useState<TResult>();


  useEffect(() => {
      fetch(`http://158.160.36.14:81/${endpoint}`)
          .then((res) => res.json())
          .then((res) => {
            setResult(res);
          });
  }, []);

  return <TResult> result;
}

export default HttpGet;