import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ContactForm from "./_components/contact-form";

const ContactSalesPage = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg4.jpg')` }}
      role="img"
      aria-label="https://unsplash.com/photos/a-table-topped-with-different-types-of-spices-Nihdo084Yos?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    >

      <div className="flex flex-col">
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactSalesPage;