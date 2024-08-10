function CustomButton({ type, className, text }) {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}

export default CustomButton;
