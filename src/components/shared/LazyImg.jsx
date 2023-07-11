const LazyImage = ({ src, alt, ...attrs }) => (
  <img src={src} alt={alt} {...attrs} />
)

export default LazyImage

// ! Working only with default export