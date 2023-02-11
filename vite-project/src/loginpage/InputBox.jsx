const InputBox = ({ name, value, onChange, placeholder, type }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputBox;
