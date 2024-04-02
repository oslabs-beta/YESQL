import { createSlice } from "@reduxjs/toolkit";


// Inside our store we have:
// 1. query: This is where all pieces of the query field is being stored. 
//    We use it to display buttons and we access the parent property
//    in order to see which table or what type this specific part is of the query. 
//    It can be a clause, an empty string, a condition, or the table name of the column. 
//    There is still more work to do on the type of parent each object should have. 
// 2. removedNode: We use this state in order to store the node that we'd like to
//    remove from the query. Then we access removedNode in the customNode in order
//    to change the class of that specific button in the tables to remove the purple 
//    background from the button/column. 
// 3. numOfClauses: This is only used for the display of the query. We've updated it 
//    so that each time we add a clause, we jump onto the next line in the query field. 
//    This makes it much easier to read instead of having an enormous string in one line. 
//    We DON'T want this to happen for our first clause, select, which is why we are tracking
//    the number of clauses so that we can add a <br/> tag when the clauses are more than 2. 
const initialState = { 
  query: [{
    string: "SELECT",
    parent: "clause"
  }],
  removedNode: {},
  numOfClauses: 1,
}

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    // 1. indexOfFrom: This variable is being used in order for us to find
    //    where the index of from is in our query array. This way we can select wether
    //    whatever we are adding should be pushed to the end of the array, or if 
    //    we need to use the slice method in order to insert the new object before the FROM clause. 
    // 2. We are using the fromIncluded in order to know wether we should be adding the FROM clause. 
    //    If the FROM clause is already included in the query, we don't need to add it again. 

    add(state, action) {
      let indexOfFrom;
      let fromIncluded = false;
      state.query.forEach((el, index) => {
        if (el.string === 'FROM') {
          fromIncluded = true;
          indexOfFrom = index;
        }
      });
      fromIncluded 
      && action.payload.parent !== 'clause' 
      && state.numOfClauses < 3 
      ? 
      state.query.splice(indexOfFrom, 0, action.payload) 
      : state.query.push(action.payload);
      if (!fromIncluded && state.query.length > 0) {
        state.query.push({ string: 'FROM', parent: 'clause' });
        state.numOfClauses++;
      }
      const isParentIncluded = state.query.some(el => el.string === action.payload.parent);
      if (action.payload.parent && !isParentIncluded) 
      state.query.push({string: action.payload.parent, parent: action.payload.parent})
    },
    // In the remove reducer, we are filtering out the object that we receive through the payload. 
    remove(state, action) {
      state.removedNode = action.payload;
      state.query = state.query.filter((node) => 
        !(node.string === action.payload.string 
        && node.parent === action.payload.parent
      ));
    },
    // We are adding a clause through the addClause reducer. We want to make 
    // sure that the added clause isn't an '=' or an '*'. 
    // If the clause that's being adding is an '='-sign, 
    // we want to add another property of inputVisible assigned to true. 
    // We are using this property for determining if we should display 
    // an input field or if we should hide it (which it does after an input
    // has been added to the query).

    addClause(state, action) {
      if (action.payload !== '=' && action.payload !== '*') {
        state.query.push({
          string: action.payload,
          parent: 'clause'
        });
        state.numOfClauses++;
      } else {
        state.query.push({
          string: action.payload,
          parent: 'condition',
          inputVisible: true
        });
        state.numOfClauses++
      }
    },
    // removeInput is being invoked from DBQuery when a user has submitted an input value
    // to the query. This reducer will access the object at the index of the lengths query - 2, 
    // and reassign the inputVisible to false, which will hide the input.
    removeInput(state, action) {
      state.query[state.query.length - 2].inputVisible = false;
    },
    removeClause(state, action) {
    }
  },
})

export const { add, remove, addClause, removeInput } = querySlice.actions
export default querySlice.reducer;