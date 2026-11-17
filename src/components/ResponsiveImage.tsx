export type ImageVariant = {
  src: string;
  width: number;
};

export type ResponsiveAsset = {
  width: number;
  height: number;
  avif: readonly ImageVariant[];
  webp: readonly ImageVariant[];
  jpg: readonly ImageVariant[];
};

function toSrcSet(variants: readonly ImageVariant[]): string {
  return variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ");
}

function fallbackSrc(variants: readonly ImageVariant[]): string {
  return (variants.find((variant) => variant.width >= 768) ?? variants[variants.length - 1]).src;
}

type ResponsiveImageProps = {
  image: ResponsiveAsset;
  alt: string;
  sizes: string;
  className?: string;
  pictureClassName?: string;
  priority?: boolean;
};

export function ResponsiveImage({
  image,
  alt,
  sizes,
  className,
  pictureClassName = "block h-full w-full",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <picture className={pictureClassName}>
      <source type="image/avif" srcSet={toSrcSet(image.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={toSrcSet(image.webp)} sizes={sizes} />
      <img
        src={fallbackSrc(image.jpg)}
        srcSet={toSrcSet(image.jpg)}
        sizes={sizes}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
