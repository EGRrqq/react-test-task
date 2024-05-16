function Input({ register, name, required, ...props }) {
  const registerProps = name && register ? register(name, { required }) : {};

  return <input {...registerProps} {...props} />;
}

export default Input;
