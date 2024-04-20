import styled from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  function onChange(event: React.FormEvent<HTMLInputElement>) {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("hello", value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder="username"/>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
