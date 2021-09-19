import React, { useState, useEffect } from 'react';

const Iteration = () => {
  const [result, setResult] = useState(0);

  const children = {
    value: 1,
    children: [
      {
        value: 0,
        children: [{ value: 1 }, { value: 2, children: [{ value: 3 }] }],
      },
      { value: 4 },
    ],
  };

  const summ = (obj, key) => {
    let fieldIterator = JSON.stringify(obj).matchAll('(?<="' + key + '":)[0-9]*');
    let it = fieldIterator.next();
    let result = 0;

    while (!it.done) {
      result += it.value[0] - 0;
      it = fieldIterator.next();
    }

    return result;
  };

  const getSumm = summ(children, 'value');

  useEffect(() => {
    setResult(getSumm);
  }, [getSumm]);

  return (
    <div>
      {result}
    </div>
  );
}

export default Iteration;
