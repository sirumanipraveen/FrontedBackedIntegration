








// import UseFormBoostrap from "./BoostrapFormHook/UseFormBoostrap";

// import  { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({ name: "", age: "" });

//   // Fetch data from the backend
//   useEffect(() => {
//     fetch("http://localhost:5001/api/data")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:5001/api/data", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.message);
//         // Refresh the data after adding a new user
//         setData([...data, formData]);
//         setFormData({ name: "", age: "" }); // Reset the form
//       })
//       .catch((error) => console.error("Error posting data:", error));
//   };

//   return (
//     <div>
//       <h1>Users from MongoDB</h1>
//       <ul>
//         {data.map((user, index) => (
//           <li key={index}>
//             Name: {user.name}, Age: {user.age}
//           </li>
//         ))}
//       </ul>

//       <h2>Add a New User</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Add User</button>
//       </form>

//    <UseFormBoostrap/>  
//     </div>


 
//   );





// }

// export default App;























// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017";

// const client = new MongoClient(uri);

// async function practice() {
//   try {
//     await client.connect;

//     const db = client.db("details");
//     const collection = db.collection("eachuser");
//     // const insertdata = await collection.updateOne(
//     //     {name:"praveen"},
//     //     {$set:{name:"kumar"}}
//     // )
//     // console.log(insertdata)

//     const insertmany = await collection.insertMany([{   name: "praveen",   age: 23,  },  {    name: "praveen",    age: 23,},{  name: "praveen",age: 23 },
    
//     ]);
//     console.log(insertmany)

//     // const updateOnedata = await collection.updateOne({ name: "manikanta" }, {$set:{name:"mani"}});
//     // console.log(updateOnedata)


//     // const updatemanys = await collection.updateMany({name:"praveen"},{$set:{name:"manikanta"}})
//     // console.log(updatemanys)


//     // const deletes = await collection.deleteOne({name:"manikanta"})
//     // console.log(deletes)



//   } catch (err) {
//     console.log(error.message, "error message");
//   }
// }

// practice();












// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Example API Endpoint
// app.get("/", (req, res) => {
//     res.json({ message: 'Hello from the backend!' });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




// const express = require("express");
// const cors = require("cors");
// const { MongoClient } = require("mongodb");

// const app = express();
// const PORT = 5000;

// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);

// app.use(cors());
// app.use(express.json());

// // Endpoint to fetch data from MongoDB
// app.get("/api/data", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db("details");
//     const collection = db.collection("eachuser");

//     const data = await collection.find({}).toArray(); // Fetch all data
//     res.json(data);
//   } catch (err) {
//     res.status(500).send(err.message);
//   } finally {
//     await client.close();
//   }
// });

// // Start the backend server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });










































// import "rsuite/dist/rsuite.min.css";
// import { Modal, ButtonToolbar, Button } from "rsuite";
// import { useState } from "react";
// import { Form } from "react-bootstrap";

// import BoostrapTable from "./BoostrapTable";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";

// import "./userForm.css";

// const StudentDetails = () => {
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm();
//   const [newData, setNewData] = useState([]);

//   const Getdata = async () => {
//     const response = await axios.get("http://localhost:5002/api/data");
//     setNewData(response);
//   };
//   Getdata();

//   const onSubmit = (data) => {
//     fetch("http://localhost:5002/api/data", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.message);
//         setNewData((prevData) => [...prevData, data]);
//       })
//       .catch((error) => console.error("Error posting data:", error));

//     setValue("name", "");
//     setValue("email", "");
//     setValue("phone", "");
//     setValue("Gender", "");
//   };

//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <ButtonToolbar className=" d-flex flex-row justify-content-end">
//         <Button onClick={handleOpen}>Add Student Details</Button>
//       </ButtonToolbar>

//       <Modal open={open} onClose={handleClose}>
//         <Modal.Header>
//           <Modal.Title className="text-center">Student Details </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="container">
//             <div className="row d-flex justify-content-center align-items-center ">
//               <div className=" col-5">
//                 <Form onSubmit={handleSubmit(onSubmit)}>
//                   <Form.Group controlId="name">
//                     <Form.Label className="text-start w-100 text-dark sizeoftext">
//                       Name
//                     </Form.Label>
//                     <Controller
//                       name="name"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "Name is required" }}
//                       render={({ field }) => (
//                         <Form.Control
//                           type="text"
//                           className="textsize"
//                           placeholder="Enter your name"
//                           isInvalid={!!errors.name}
//                           {...field}
//                         />
//                       )}
//                     />
//                     <Form.Control.Feedback>
//                       {errors.name?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>

//                   <Form.Group controlId="email">
//                     <Form.Label className="text-start w-100 text-dark sizeoftext">
//                       Email
//                     </Form.Label>
//                     <Controller
//                       name="email"
//                       control={control}
//                       defaultValue=""
//                       rules={{
//                         required: "Email is required",
//                         pattern: {
//                           value:
//                             /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                           message: "Invalid email address",
//                         },
//                       }}
//                       render={({ field }) => (
//                         <Form.Control
//                           type="email"
//                           className="textsize"
//                           placeholder="Enter your email"
//                           isInvalid={!!errors.email}
//                           {...field}
//                         />
//                       )}
//                     />
//                     <Form.Control.Feedback>
//                       {errors.email?.message}
//                     </Form.Control.Feedback>
//                   </Form.Group>

//                   <Form.Group controlId="Gender">
//                     <Form.Label className="text-start w-100 text-dark sizeoftext">
//                       Gender
//                     </Form.Label>
//                     <Controller
//                       name="Gender"
//                       control={control}
//                       defaultValue=""
//                       rules={{ required: "Gender is required" }}
//                       render={({ field }) => (
//                         <Form.Select
//                           isInvalid={!!errors.Gender}
//                           {...field}
//                           className="textsize"
//                         >
//                           <option className="textsize">Select</option>
//                           <option className="textsize">Male</option>
//                           <option className="textsize">Female</option>
//                           <option className="textsize">Others</option>
//                         </Form.Select>
//                       )}
//                     />
//                   </Form.Group>

//                   <Form.Group controlId="phone">
//                     <Form.Label className="text-start w-100 text-dark sizeoftext">
//                       Phone Number
//                     </Form.Label>
//                     <Controller
//                       name="phone"
//                       control={control}
//                       className="textsize"
//                       defaultValue=""
//                       rules={{
//                         required: "phone number is required",
//                         value: 10,
//                       }}
//                       render={({ field }) => (
//                         <Form.Control
//                           type="number"
//                           className="textsize"
//                           placeholder="phone number"
//                           isInvalid={errors.phone}
//                           {...field}
//                         />
//                       )}
//                     />

//                     <Form.Control.Feedback>
//                       {errors.phone?.phone}
//                     </Form.Control.Feedback>
//                   </Form.Group>
//                   <div className="d-flex flex-row justify-content-end">
//                     <button
//                       type="submit"
//                       className=" m-1 text-white button-style bg-primary"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>

//           <Button onClick={handleClose} appearance="subtle">
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <div className="m-3 col-6 vh-100  ">
//         <BoostrapTable newData={newData} />
//       </div>
//     </>
//   );
// };

// export default StudentDetails;

// import  { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// function StudentDetails() {
//   const [students, setStudents] = useState([]);
//   const [modalData, setModalData] = useState(null); // For the modal (Add/Update)
//   const [showModal, setShowModal] = useState(false);

//   const apiUrl = "http://localhost:5000/api/students";

//   // Fetch students from API
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const response = await axios.get(apiUrl);
//     setStudents(response.data);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`${apiUrl}/${id}`);
//     fetchStudents();
//   };

//   const handleSave = async () => {
//     if (modalData._id) {
//       await axios.put(`${apiUrl}/${modalData._id}`, modalData);
//     } else {
//       await axios.post(apiUrl, modalData);
//     }
//     fetchStudents();
//     closeModal();
//   };

//   const openModal = (student = {}) => {
//     setModalData(student);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setModalData(null);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <h1>Student Management</h1>
//         <button className="btn btn-primary" onClick={() => openModal()}>Add Student</button>
//       </div>
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student._id}>
//               <td>{student.name}</td>
//               <td>{student.email}</td>
//               <td>{student.phone}</td>
//               <td>
//                 <button
//                   className="btn btn-warning btn-sm me-2"
//                   onClick={() => openModal(student)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => handleDelete(student._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {showModal && (
//         <div className="modal show" style={{ display: "block" }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">
//                   {modalData._id ? "Update Student" : "Add Student"}
//                 </h5>
//                 <button type="button" className="btn-close" onClick={closeModal}></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="mb-3">
//                     <label className="form-label">Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={modalData.name || ""}
//                       onChange={(e) =>
//                         setModalData({ ...modalData, name: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       value={modalData.email || ""}
//                       onChange={(e) =>
//                         setModalData({ ...modalData, email: e.target.value })
//                       }
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Phone</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={modalData.phone || ""}
//                       onChange={(e) =>
//                         setModalData({ ...modalData, phone: e.target.value })
//                       }
//                     />
//                   </div>
//                   <button
//                     type="button"
//                     className="btn btn-primary"
//                     onClick={handleSave}
//                   >
//                     Save
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StudentDetails

















































// const express = require("express");
// const { MongoClient } = require("mongodb");
// const cors = require("cors");
// const app = express();

// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// const port = 5002;



// app.use(cors());
// app.use(express.json());

// app.post("/api/data", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db("taskTable");
//     const collection = db.collection("tasks");

//     // const newUser = req.body;
//     const inserData = await collection.insertOne({
//       name: "praveen",
//       email: "p@gmail.com",
//       gender: "male",
//       phone: 1234234,
//     });
//     res.json(inserData);
//   } catch (error) {
//     console.error(error.message, "error");
//     res
//       .status(500)
//       .json({ message: "Failed to insert data", error: error.message });
//   }
// });

// app.get("/", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db("taskTable");
//     const collection = db.collection("tasks");

//     const getdata = await collection.find({}).toArray();
//     res.json(getdata);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Failed to fetch data", error: error.message });
//   }
// });


// app.delete("/api/data/:id", async (req, res) => {
//   try {
//     const db = client.db("taskTable");
//     const collection = db.collection("tasks");
//     const { id } = req.params;

//     const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });

//     if (deleteResult.deletedCount === 1) {
//       res.json({ message: "Document deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Document not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ message: "Failed to delete data", error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });






































// const express = require("express");
// const { MongoClient, ObjectId } = require("mongodb");
// const cors = require("cors");

// const app = express();
// const port = 5000;

// // MongoDB connection
// const uri = "mongodb://localhost:27017";
// const client = new MongoClient(uri);
// const dbName = "schoolDB";

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/api/students", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const students = await db.collection("students").find({}).toArray();
//     res.json(students);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/api/students", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const newStudent = req.body;
//     const result = await db.collection("students").insertOne(newStudent);
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.put("/api/students/:id", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const { id } = req.params;
//     const updatedStudent = req.body;
//     const result = await db.collection("students").updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updatedStudent }
//     );
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.delete("/api/students/:id", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const { id } = req.params;
//     const result = await db.collection("students").deleteOne({ _id: new ObjectId(id) });
//     res.json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });





















