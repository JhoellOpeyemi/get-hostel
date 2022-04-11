import React, { useState } from "react";

import FaqBox from "../FaqBox";
import { Questions } from "../Questions";

const FaqMain = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <main className="faq-main">
      {Questions.map((item, index) => {
        return (
          <FaqBox
            key={index}
            question={item.question}
            answer={item.answer}
            toggle={toggle}
            index={index}
            selected={selected}
          />
        );
      })}
    </main>
  );
};

export default FaqMain;
