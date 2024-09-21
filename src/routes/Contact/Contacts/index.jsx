import cn from "./style.module.scss";

const Contact = () => {
  return (
    <div className={cn.contact_container}>
      <div className={cn.contact_info}>
        <div className={cn.location}>
          <h3>Our Location</h3>
          <p>2900 Lapeer Rd, Port Hurons, MI 49070</p>
        </div>
        <div className={cn.hours}>
          <h3>Working Hours</h3>
          <p>Monday - Friday 8AM - 9PM</p>
          <p>Saturday - Sunday 9AM - 5PM</p>
        </div>
        <div className={cn.phone}>
          <h3>Office Phone</h3>
          <p>+9998 (93) 305-65-12</p>
          <p>+998 (94) 474-23-23</p>
        </div>
        <div className={cn.email}>
          <h3>Email</h3>
          <p>info@companyname.com</p>
          <p>sale@companyname.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
