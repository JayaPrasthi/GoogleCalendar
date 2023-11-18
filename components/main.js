import { Week } from "./test";
import { Month } from "./monthlyCalender";
import { Path } from "./routing";
import { useState, useEffect } from "react";
import { OptionData } from "./Option1";


export const MainComponent = () => {
  const [component, setComponent] = useState();
  const [select, setSelect] = useState("Month");
  const handleClick = (param) => {
      setSelect(param);
  };

  const jsonObj = [
    {
      selectValue: "Month",
      Component: <Month onButtonClick={handleClick} selectProps={select} />,
    },

    {
      selectValue: "Week",
      Component: <Week onButtonClick={handleClick} selectProps={select} />,
    },
  ];

  
  useEffect(() => {
    jsonObj.forEach((value) => {
      if (select == value.selectValue) {
        setComponent(value.Component);
      }
    });
  }, [select]);

  

  return (
    <>
     {component}
    </>
  );

  
};
