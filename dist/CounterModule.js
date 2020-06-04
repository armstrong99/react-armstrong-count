import React, { useEffect, useState } from 'react';

const Armstrong = ({
  inter,
  stopTime,
  startBol,
  children,
  getCount,
  iValue
}) => {
  const [count, setcount] = useState(0);
  const [timerID, setID] = useState(0);
  const [start, setStart] = useState('');
  useEffect(() => {
    setStart(startBol);

    if (!isNaN(iValue)) {
      setcount(iValue);
    } else setcount(0);
  }, [startBol, iValue]);
  useEffect(() => {
    var interval = setInterval(() => {
      if (start === 'start') return setcount(count + 1);
    }, inter * 1000);
    setID(interval);
    return () => clearInterval(interval);
  }, [count, start, inter]);
  getCount(count);

  if (count === stopTime) {
    clearInterval(timerID);
  }

  return (/*#__PURE__*/React.createElement(React.Fragment, null, " ", children, " ")
  );
};

export default Armstrong;