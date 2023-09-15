import React, { Fragment } from "react";
import {
  SHOW_COMPLETED_TODOS,
  SHOW_ACTIVE_TODOS,
} from "../../redux/constants/constants";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
    color: "#313777",
    fontFamily: "Montserrat, sans-serif",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "15px 0 5px",
  },
  subtitle: {
    fontSize: "16px",
    margin: "5px 0",
  },
};

//receive redux activeFilter and show correct message
const TodoEmptyState = ({ activeFilter }) => {
  const renderMessage = () => {
    switch (activeFilter) {
      case SHOW_COMPLETED_TODOS:
        return (
          <Fragment>
            <h2 style={styles.title}>No Items..</h2>
          </Fragment>
        );
      case SHOW_ACTIVE_TODOS:
        return (
          <Fragment>
            <h2 style={styles.title}>No Items..</h2>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <h2 style={styles.title}>No Items..</h2>
          </Fragment>
        );
    }
  };

  return <span style={styles.container}>{renderMessage()}</span>;
};

export default TodoEmptyState;
