import React, { useState, useEffect } from "react";
import { db } from "../Firebase";

const Todo = () => {
  const [input, setInput] = useState();

  const getvalue = (event) => {
    setInput(event.target.value);
  };

  // Add data into firestore
  const addvalue = async () => {
    db.collection("values")
      .doc()
      .set({
        value: input,
      })
      .then(function () {
        alert("Value successfully written!");
        setInput("");
      })
      .catch(function (error) {
        console.error("Error writing Value: ", error);
      });
    // get only one document
    db.collection("values")
      .doc("SDoCJUi0M7BvkvFHCDWV")
      .get()
      .then((snapshot) => {
        console.log(snapshot.data());
      })
      .catch((e) => console.log(e));
  };

  // get all documnet
  // const events =  db.collection('values').get()
  //     .then(querySnapshot => {
  //       querySnapshot.docs.map(doc => {
  //         console.log('LOG 1', doc.data());
  //         return doc.data();
  //       });
  //     });
  //   console.log('LOG 2', events);

  return (
    <>
      <div className="heading">
        <h1>Todo App</h1>
        <div className="block">
          <input
            type="text"
            required
            placeholder=" what is Todo Your Task ?"
            class="input-res"
            value={input}
            onChange={getvalue}
          />
          <div>
            <button type="submit" className="button" onClick={addvalue}>
              Add
            </button>
          </div>
        </div>
      </div>

      <ul className="collection">
        {/* {input.map(input => {
            return <li className="collection-item" key={input}>
              {input}
             
            </li> */}

        {/* })} */}
      </ul>
    </>
  );
};

export default Todo;
