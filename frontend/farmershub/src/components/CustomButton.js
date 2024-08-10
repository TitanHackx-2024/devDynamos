function CustomButton({ type, className, text, ...options }) {
  return (
    <button type={type} className={className} {...options}>
      {text}
    </button>
  );
}

export default CustomButton;
