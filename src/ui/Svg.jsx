export default function Svg({ src, alt, containerStyle, center, ...props }) {
  const Src = src;
  const onCenterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const conStyle = { ...containerStyle, ...onCenterStyle };

  return (
    <div style={conStyle}>
      <Src alt={alt} {...props} />
    </div>
  );
}
