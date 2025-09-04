import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
    },
  });

  const onSubmit = async (data) => {
    try {
      // const res = await axios.post("http://127.0.0.1:7023/user/login", {
      //   email: data.email,
      //   password: data.password,
      // });

      // console.log(res.data);

      if (data.role === "admin") {
        navigate("/admin/Students");
      } else if (data.role === "student") {
        navigate("/student/My_Profile");
      } else if (data.role === "alumni") {
        navigate("/alumni/Professional_Details");
      }
    } catch (err) {
      console.log(err);
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">CampusConnect Login</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.co\.in$/,
                  message: "Email must be in format: user@xyz.co.in",
                },
              })}
            />
            {errors.email && (
              <div className="text-danger small">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    "Password must be at least 8 characters, include 1 uppercase letter and 1 number.",
                },
              })}
            />
            {errors.password && (
              <div className="text-danger small">{errors.password.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Login as</label>
            <select
              className="form-select"
              {...register("role", { required: "Role is required" })}
            >
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
