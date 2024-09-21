import cn from './style.module.scss'
import Card from '../card'
import ImageWrapper from '../imageWrapper'
import rasm1 from '../images/category-1.png'
import rasm2 from '../images/category-2.png'
import rasm3 from '../images/category-3.png'
import rasm4 from '../images/category-4.png'


const Section2 = () => {
  return (
   <>
   <div className={cn.section2_container}>
   <div className={cn.text}>
    <div className={cn.part1}>
        <h4>What We’re Doing</h4>
        <h2>Services We Provide</h2>
    </div>
    <div className={cn.part2}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad doloremque quam, quia maxime nisi, laboriosam perspiciatis voluptate corporis molestias totam veniam libero ex fugit commodi facilis blanditiis cupiditate quasi quae.
    </div>
   </div>
   <div className={cn.cards}>
   <Card 
                title="Card Title"
                content="This is a brief description of the card content."
                className={cn.card_box}
            ><ImageWrapper src={rasm1} alt='this is photo' className={cn.card}/></Card>
   <Card 
                title="Card Title"
                content="This is a brief description of the card content."
                className={cn.card_box}
            ><ImageWrapper src={rasm2} alt='this is photo'className={cn.card}/></Card>
   <Card 
                title="Card Title"
                className={cn.card_box}
                content="This is a brief description of the card content."
            ><ImageWrapper src={rasm3} alt='this is photo' className={cn.card}/></Card>
   <Card 
                title="Card Title"
                className={cn.card_box}
                content="This is a brief description of the card content."
            ><ImageWrapper src={rasm4} alt='this is photo' className={cn.card}/></Card>
   </div>
  
   </div>
   </>
  )
}

export default Section2
