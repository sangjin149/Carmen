import { styled } from 'styled-components';

export default function Image({ src, alt, svg, containerStyle, ...props }) {
  const Svg = svg ?? null;
  return (
    <div style={containerStyle}>
      {Svg ? (
        <Svg alt={alt} {...props} />
      ) : (
        <Img src={src} alt={alt} {...props} />
      )}
    </div>
  );
}

const Img = styled.img`
  object-fit: contain;
`;
