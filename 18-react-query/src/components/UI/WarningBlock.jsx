function WarningBlock({ title, message }) {
  return (
    <>
      <div className="warning-block-icon">!</div>
      <div className="warning-block-text">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </>
  );
}

export default WarningBlock;
