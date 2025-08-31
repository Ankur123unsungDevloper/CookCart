import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import ContactForm from "./_components/contact-form";

const ContactSalesPage = () => {
  return (
    <div
      className="p-25 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/backgroundImage/bg4.jpg')` }}
    >
      <div>
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default ContactSalesPage;