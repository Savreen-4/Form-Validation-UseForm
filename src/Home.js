import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [nameToBeUpdate, setNameToUpdate] = useState("");
  const [lastnameToBeUpdate, setLastNameToUpdate] = useState("");
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    //   getData();
    let data = JSON.parse(localStorage.getItem("food"));
    setItems(data);
  }, []);

  const getData = () => {
    let data = JSON.parse(localStorage.getItem("food"));
    setItems(data);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      // let food = [];
      let foodData = JSON.parse(localStorage.getItem("food"));
      console.log(foodData, "foodData");
      // if (foodData === null) {
      //   food.push(values);
      //   localStorage.setItem("food", JSON.stringify(food));
      // } else {
      foodData.push(values);
      localStorage.setItem("food", JSON.stringify(foodData));
      let data = JSON.parse(localStorage.getItem("food"));
      setItems(data);
      //   getData()/
      // }
    },
  });

  const handleDelete = (index) => {
    console.log(index);
    setItems(items.splice(index, 1));
    localStorage.setItem("food", JSON.stringify(items));

    let data = JSON.parse(localStorage.getItem("food"));
    setItems(data);
    // getData();
  };

  const handleUpdate = (value, index) => {
    console.log(index, "index++++++");
    setNameToUpdate(value.firstName);
    setLastNameToUpdate(value.lastName);
    setId(index);
  };

  const handleSave = (index) => {
    let prevData = JSON.parse(localStorage.getItem("food"));
    let objectToBeUpdate = prevData[index];
    objectToBeUpdate["firstName"] = nameToBeUpdate;
    objectToBeUpdate["lastName"] = lastnameToBeUpdate;
    prevData.splice(index, 1, objectToBeUpdate);
    localStorage.setItem("food", JSON.stringify(prevData));
    setShow(true);
    let data = JSON.parse(localStorage.getItem("food"));
    setItems(data);
  };

//   The handleChange method updates the form values based on the input’s name attribute that was changed.

  // console.log(formik.values,'formik values',items )
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="firstName"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <br />

          <label>Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <br />

          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {items
          ? items.map((value, index) => {
              //   console.log(index,'>>')
              return (
                <div key={index}>
                  {!show ? (
                    <>
                      <input
                        hidden={id !== index}
                        type="text"
                        defaultValue={nameToBeUpdate}
                        onChange={(e) => setNameToUpdate(e.target.value)}
                      ></input>
                      <input
                        hidden={id !== index}
                        type="text"
                        defaultValue={lastnameToBeUpdate}
                        onChange={(e) => setLastNameToUpdate(e.target.value)}
                      ></input>
                      <button
                        disabled={!nameToBeUpdate}
                        hidden={id !== index}
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                  <h3>{value.firstName}</h3>
                  <span>
                    <h3>{value.lastName}</h3>
                  </span>
                  <span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleUpdate(value, index)}>
                      Edit
                    </button>
                  </span>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}
