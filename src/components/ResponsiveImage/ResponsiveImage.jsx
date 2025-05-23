export default function ResponsiveImage({ image, wrapperClasses = "" }) {
  return (
    <div className={wrapperClasses}>
      <picture>
        <source media="(max-width: 768px)" srcSet={`${image.sources.mobile.x1} 1x, ${image.sources.mobile.x2} 2x`} />
        <source media="(max-width: 1024px)" srcSet={`${image.sources.tablet.x1} 1x, ${image.sources.tablet.x2} 2x`} />
        <img
          src={image.sources.desktop.x1}
          srcSet={`${image.sources.desktop.x1} 1x, ${image.sources.desktop.x2} 2x`}
          alt={image.alt}
          className="w-full h-auto"
          loading="lazy"
        />
      </picture>
    </div>
  );
}
