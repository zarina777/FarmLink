
import Container from '../../components/Container/Container';
import { useForm } from 'react-hook-form';
import FAQ from './components/FAQ';
import cn from './style.module.scss'; // Adjust the import according to your structure

const ContactPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your API
    reset(); 
  };

  return (
    <div className={cn.contactPage}>
      <Container>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form onSubmit={handleSubmit(onSubmit)} className={cn.contactForm}>
        <div className={cn.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
        </div>
        <div className={cn.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <button type="submit" className={cn.submitButton}>Send Message</button>
      </form>
      <FAQ/>
      </Container>
      
    </div>
  );
};

export default ContactPage;
