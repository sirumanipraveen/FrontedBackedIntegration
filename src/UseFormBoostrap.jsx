import { Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import BoostrapTable from "./BoostrapFormHook/BoostrapTable";
import { useState } from "react";
import axios from "axios";
import './userForm.css'

function UseFormBoostrap() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [newData, setNewData] = useState([]);

  const Getdata = async () => {
    try {
      const response = await axios.get("http://localhost:5002/api/data");
      setNewData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    Getdata();
  }, []);

  const onSubmit = (data) => {
    fetch("http://localhost:5002/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.message);
        setNewData((prevData) => [...prevData, data]);
      })
      .catch((error) => console.error("Error posting data:", error));

    setValue("name", "");
    setValue("email", "");
    setValue("phone", "");
    setValue("Gender", "");
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card m-2 p-5 col-5 shadow-lg" style={{ backgroundColor: "#f8f9fa" }}>
            <h3 className="text-center mb-4 text-dark">User Form</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label className="Labelelement">Name</Form.Label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      isInvalid={!!errors.name}
                      {...field}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label className="text-dark d-block">Email</Form.Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      isInvalid={!!errors.email}
                      {...field}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="Gender" className="mb-3">
                <Form.Label className="text-dark d-block">Gender</Form.Label>
                <Controller
                  name="Gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Form.Select isInvalid={!!errors.Gender} {...field}>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </Form.Select>
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.Gender?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="phone" className="mb-3">
                <Form.Label className="text-dark text-start">Phone</Form.Label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <Form.Control
                      type="number"
                      placeholder="Enter your phone number"
                      isInvalid={!!errors.phone}
                      {...field}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Submit
              </button>
            </Form>
          </div>
          <div className="m-3 col-6 vh-100 pt-5">
            <BoostrapTable newData={newData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UseFormBoostrap;
