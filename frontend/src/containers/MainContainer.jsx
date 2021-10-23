
import React from "react";
import { connect } from "react-redux";
import Main from "../components/Main";
import { popular, predictable, setTab } from "../modules/main";

const MainContainer = ({
  popularList,
  predictableList,
  currTab,
  popular,
  predictable,
  setTab,
}) => {
  return (
    <Main
      popularList={popularList}
      predictableList={predictableList}
      currTab={currTab}
      onPopular={popular}
      onPredictable={predictable}
      onSetTab={setTab}
    />
  );
};

export default connect(
  ({ catchOn }) => ({
    popularList: catchOn.popularList,
    predictableList: catchOn.predictableList,
    currTab: catchOn.currTab,
  }),
  { popular, predictable, setTab }
)(MainContainer);
