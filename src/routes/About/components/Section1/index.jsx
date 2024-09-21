import cn from './style.module.scss'
import ImageWrapper from '../imageWrapper'
import img from './farmer.webp'
const Section1 = () => {
  return (
    <div className={cn.Section1_wrapper}>
     <div className={cn.box1}>
      <h4>About Agriculture farm</h4>
      <h1>Our Company and the Traditions of Agricultural Farming</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ullam est quisquam incidunt laudantium deleniti sapiente ab facilis repellendus pariatur molestias, totam dignissimos sunt voluptates, molestiae harum asperiores doloribus atque?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sed?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a perferendis amet nisi aspernatur eos repellat sapiente aperiam ullam debitis?</p>
    </div>
      <ImageWrapper src={img} alt="Image about farm" className={cn.ImageWrapper} />

    </div>
   
  )
}

export default Section1
