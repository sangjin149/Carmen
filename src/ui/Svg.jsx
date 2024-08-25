export default function Svg({ src, alt, ...props }) {
  const Src = src;

  return <Src alt={alt} {...props} />;
}
