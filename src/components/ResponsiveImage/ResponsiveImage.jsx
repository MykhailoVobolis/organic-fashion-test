export default function ResponsiveImage({ image, wrapperClasses = "" }) {
  return (
    <div className={wrapperClasses}>
      <img
        src={image.sources.desktop.x1}
        srcSet={`
    ${image.sources.mobile.x1} 375w,
    ${image.sources.mobile.x2} 750w,
    ${image.sources.tablet.x1} 768w,
    ${image.sources.tablet.x2} 1536w,
    ${image.sources.desktop.x1} 1440w,
    ${image.sources.desktop.x2} 2880w
  `}
        sizes="(max-width: 768px) 375px, (max-width: 1024px) 768px, 1440px"
        alt={image.alt}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
}
