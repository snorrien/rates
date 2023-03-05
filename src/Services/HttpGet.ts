import { useEffect, useState } from 'react';

export function HttpGet<TResult>(endpoint: string) : TResult {
  const [result, setResult] = useState<TResult>();

  useEffect(() => {
      fetch(`http://localhost:80/${endpoint}`)
          .then((res) => res.json())
          .then((res) => {
            setResult(res);
          });
  }, []);

  return <TResult> result;
}

export default HttpGet;