import React from "react";
import "./HandleForm.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const HandleForm = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <div className="col-md-6 m-auto mt-2">
      <h1>YouTube Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            {...register("username", {
              required: {
                value: "true",
                message: "username is required",
              },
            })}
          />
          <p className="text-danger">{errors?.username?.message}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: {
                value: "true",
                message: "Email is required",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="text-danger">{errors?.email?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Channel</label>
          <input
            type="text"
            className="form-control"
            {...register("channel", {
              required: {
                value: "true",
                message: "channel name is required",
              },
            })}
          />
          <p className="text-danger">{errors?.channel?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default HandleForm;
