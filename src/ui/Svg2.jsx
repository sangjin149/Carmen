export default function Svg({ src, alt, width, height, scale = 1, top = 0, left = 0, viewBox, ...props }) {
    const Src = src;

    const viewBoxWidth = scale > 0 ? width / scale : width;
    const viewBoxHeight = scale > 0 ? height / scale : height;

    return (
        <Src
            alt={alt}
            width={width}
            height={height}
            viewBox={viewBox ?? `${-left} ${-top} ${viewBoxWidth} ${viewBoxHeight}`}
            {...props}
        />
    );
}
