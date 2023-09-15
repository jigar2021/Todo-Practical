import React from "react";
import Todos from "./Todos/Todos";
import AddTodo from "./Todos/AddTodo";
import FilterTodos from "./Todos/FilterTodos";

//material-ui grid
import Grid from "@mui/material/Grid";

const styles = {
  container: {
    maxWidth: 500,
    margin: `50px auto`,
  },
};

const App = () => {
  return (
    <div style={styles.container}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AddTodo />
          <FilterTodos />
          <Todos />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
