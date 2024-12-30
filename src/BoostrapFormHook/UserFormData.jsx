import "rsuite/dist/rsuite.min.css";
import { Modal, ButtonToolbar, Button } from "rsuite";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./userForm.css";
function StudentDetails() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const [update, setupdate] = useState(false);
  const [currentId, setcurrentId] = useState();
  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [students, setStudents] = useState([]);

  const apiUrl = "http://localhost:5000/api/students";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await axios.get(apiUrl);
    setStudents(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    fetchStudents();
  };

  const handlUpdate = (id, value) => {
    const studentToUpdate = students.find((student) => student._id === id);
    setcurrentId(id);
    if (studentToUpdate) {
      setValue("name", studentToUpdate.name);
      setValue("email", studentToUpdate.email);
      setValue("phone", studentToUpdate.phone);
      setupdate(true);
    } else {
      setupdate(false);
      reset();
      setValue("name", "");
      setValue("email", "");
      setValue("phone", "");
    }
    setSize(value);
    setOpen(true);
  };

  const onSubmit = async (data) => {
    if (update && currentId) {
      await axios.put(`${apiUrl}/${currentId}`, data);
      setupdate(false); // Reset update mode
      setcurrentId(null);
      setValue("name", "");
      setValue("email", "");
      setValue("phone", "");
    } else {
      await axios.post(apiUrl, data);
      setValue("name", "");
      setValue("email", "");
      setValue("phone", "");
    }

    fetchStudents();
  };

  return (
    <div className="container mt-5 main-container">
      <div className="d-flex flex-row justify-content-end">
        <ButtonToolbar>
          <Button size="xs" onClick={() => handleOpen("xs")}>
            Add Student
          </Button>
        </ButtonToolbar>
      </div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handlUpdate(student._id)}
                >
                  Update
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <ButtonToolbar></ButtonToolbar>

      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be a valid 10-digit number",
                  },
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>

            <Modal.Footer>
              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentDetails;
