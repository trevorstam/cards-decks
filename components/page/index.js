import React from "react";

import Deck from "../deck/";

const Page = props => {
  return props.content.map((section, i) => <Deck content={section} />);
};

export default Page;
