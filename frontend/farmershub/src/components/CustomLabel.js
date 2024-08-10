function CustomLabel({ htmlFor, className, text }) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default CustomLabel;
