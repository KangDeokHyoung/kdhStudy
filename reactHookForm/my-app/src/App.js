import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const Password = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  Password.current = watch("password");

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input name="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && errors.email.type === "required" && <p>필수 항목입니다.</p>}
      {errors.email && errors.email.type === "pattern" && <p>Email 형식으로 작성 하십시오</p>}

      <label>name</label>
      <input name="name" {...register("name", { required: true, maxLength: 7 })} />
      {errors.name && errors.name.type === "required" && <p>필수 항목입니다.</p>}
      {errors.name && errors.name.type === "maxLength" && <p>your input exceed maximum length</p>}

      <label>Password</label>
      <input
        name="password"
        type="password"
        {...register("password", { required: true, minLength: 7 })}
      />
      {errors.password && errors.password.type === "required" && <p>필수 항목입니다.</p>}
      {errors.password && errors.password.type === "minLength" && (
        <p>패스워드 글자는 최소 6글자 이상입니다.</p>
      )}

      <label>Password Confirm</label>
      <input
        type="password"
        name="password_Confirm"
        {...register("password_Confirm", {
          required: true,
          validate: (value) => value === Password.current,
        })}
      />
      {errors.password_Confirm && errors.password_Confirm.type === "required" && (
        <p>필수 항목입니다.</p>
      )}
      {errors.password_Confirm && errors.password_Confirm.type === "validate" && (
        <p>패스워드가 일치하지 않습니다.</p>
      )}
      <input type="submit" />
    </form>
  );
};

export default App;
