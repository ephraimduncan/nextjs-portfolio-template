import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className="max-w-screen px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          Get In Touch
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
