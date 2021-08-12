import { useState } from "react";

function InputText(props) {
  const { title, onChange, addData } = props;
  const [keyWord, setKeyWord] = useState("");
  const handleSubmit = (event) => {
    const valueFrom = {
      name: keyWord,
    };
    addData && addData(valueFrom);
    addData && setKeyWord("");
    event.preventDefault();
  };
  const handleChange = (event) => {
    setKeyWord(event.target.value);
    onChange && onChange(event);
  };
  return (
    <div
      className="InputText"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyWord}
          onChange={handleChange}
          placeholder={title}
        />
      </form>
    </div>
  );
}
export default InputText;
