import { useEffect, useState } from 'react';

function HttpGet<TResult>(url: string) : TResult | unknown {
  const [result, setResult] = useState<TResult>();

  useEffect(() => {
      fetch(`http://158.160.36.14:81/${url}`)
          .then((res) => res.json())
          .then((res) => {
            setResult(res);
          });
  }, []);

  return result;
}

export default HttpGet;