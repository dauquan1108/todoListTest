import React from "react";
import PropTypes from "prop-types";
// theme
import { ThemeContext } from "../../themes/theme-context";

// selector
import { amountOfUnfinishedWork } from "../../selectors";
// redux
import { connect } from "react-redux";
// action
import * as action from "../../actions";

function Footer(props) {
  const { onSetStatus, status, countItem, ClearCompleted } = props;
  const SetStatus = (event) => {
    onSetStatus(event);
  };
  const onClearCompleted = () => {
    ClearCompleted();
  };
  //theme
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="footer">
      <samp style={{ fontSize: 15, fontWeight: "bold" }}>{countItem}</samp>
      <button
        style={{
          backgroundColor: status === "All" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("All")}
      >
        All
      </button>
      <button
        style={{
          backgroundColor: status === "Active" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("Active")}
      >
        Active
      </button>
      <button
        style={{
          backgroundColor:
            status === "Completed" ? "red" : theme.backgroundColor,
          color: theme.color,
        }}
        onClick={() => SetStatus("Completed")}
      >
        Completed
      </button>
      <button
        style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countItem: amountOfUnfinishedWork(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ClearCompleted: () => {
      dispatch(action.ON_CLEAR_COMPLETED());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);

Footer.propTypes = {
  SetStatus: PropTypes.func,
  onClearCompleted: PropTypes.func,
};
