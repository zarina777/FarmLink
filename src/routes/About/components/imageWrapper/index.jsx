import styles from './ImageWrapper.module.scss';

const ImageWrapper = ({ src, alt, className }) => {
  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};



export default ImageWrapper;
