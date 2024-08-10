import React from "react";
import "./HandleForm.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const HandleForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        facebook: "",
        linkedin: "",
      },
      phoneNumbers: ["", ""],
      Hobbies: [{ hobby: "" }],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "Hobbies",
    control,
  });

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

        <div className="mb-3">
          <label className="form-label">Facebook</label>
          <input
            type="text"
            className="form-control"
            {...register("social.facebook")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Linkedin</label>
          <input
            type="text"
            className="form-control"
            {...register("social.linkedin")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Primary PhoneNumber</label>
          <input
            type="text"
            className="form-control"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Secondary PhoneNumber</label>
          <input
            type="text"
            className="form-control"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div>
          <label>List of Hobbies</label>
          <div>
            {fields.map((hobby, index) => {
              return (
                <div className="mb-2" key={hobby?.id}>
                  <input
                    className="form-control"
                    type="text"
                    {...register(`Hobbies.${index}.hobby`)}
                  />
                  {index > 0 && (
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => remove(index)}
                    >
                      Remove Hobbies
                    </button>
                  )}
                </div>
              );
            })}
            <button
              className="btn btn-success mb-2"
              onClick={() => append({ hobby: "" })}
            >
              {" "}
              Add Hobbies
            </button>
          </div>
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
