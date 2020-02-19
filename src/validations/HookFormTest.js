import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HookForm() {
  const { register, handleSubmit, watch, getValues, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mt-4">
        <div className="form-group">
          <label>Nama</label>
          <input
            className="form-control"
            id="fieldnama"
            name="nama"
            placeholder="Masukkan Nama"
            ref={register({
              required: "Nama tidak boleh kosong",
              minLength: { value: 5, message: "minimal 5 characters" }
            })}
          />
          <span className="text-danger font-italic">
            {errors.nama && errors.nama.message}
          </span>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            className="form-control"
            name="email"
            placeholder="Masukkan Email"
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
          <span className="text-danger font-italic">
            {errors.email && errors.email.message}
          </span>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            id="fieldpassword"
            type="password"
            name="password"
            placeholder="Masukkan Password"
            ref={register({
              required: "Password tidak boleh kosong",
              minLength: {
                value: 7,
                message: "minimal 7 karakter"
              }
            })}
          />
          <span className="text-danger font-italic">
            {errors.password && errors.password.message}
          </span>
        </div>

        <div className="form-group">
          <label>Konfirmasi Password</label>
          <input
            className="form-control"
            id="fieldpassword"
            type="password"
            name="konfirmasipassword"
            placeholder="Masukkan Konfirmasi Password"
            ref={register({
              required: "Password tidak sesuai",

              validate: value =>
                value === getValues().password || "Password tidak cocok"
            })}
          />
          <span className="text-danger font-italic">
            {errors.konfirmasipassword && errors.konfirmasipassword.message}
          </span>
        </div>

        <input className="btn btn-info" type="submit" value="Submit" />
      </div>
    </form>
  );
}
