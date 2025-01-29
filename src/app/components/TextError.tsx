const TextError = (props: { children?: Readonly<React.ReactNode> }) => {
  return <div className="error">{props.children}</div>;
};

export default TextError;
