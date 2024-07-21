export default function Svg({ src, alt, containerStyle, center, ...props }) {
    const Src = src;
    const conStyle = { ...containerStyle, placeItems: center && "center" };

    return (
        <div style={conStyle}>
            <Src alt={alt} {...props} />
        </div>
    );
}
