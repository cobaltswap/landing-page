import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import config from "../../config.json";
import parsePhoneNumberForView from "../../utils/parse-phone-number-for-view";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions - CobaltSwap</title>
      </Head>
      <div className="position-relative">
        <Navbar />
        <Header />
        <div className="col-12 col-lg-9 mx-auto">
          <Terms />
          <Privacy />
          <TermsContact />
          <p className="col-12 col-md-11 mx-auto text-secondary fw-600 h4 mb-5">Last Updated: May 10, 2020</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
function Header() {
  return (
    <div className="terms-header">
      <div className="container py-5 px-4 px-md-5 my-2 text-center">
        <h1 className="display-1 font-heading fw-600">General Terms and Privacy Policy</h1>
        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/">
                <a className="text-primary-local">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              General Terms and Privacy Policy
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

function Terms() {
  return (
    <div className="terms">
      <div className="container py-2 px-4 px-md-5">
        <div className="">
          <h2 className="h3 mb-3">General Terms and Conditions</h2>
          <p>
            Please read the following Terms and Conditions of Service (“Terms”) carefully before
            using the CobaltSwap platform. Your access to and use of the Platform is subject to your
            acceptance of and compliance with these Terms. These Terms apply to all Users, Notaries
            and others who access or use the Platform.
          </p>
          <p>
            By using the CobaltSwap Platform and Website, you accept these Termsconsectetur
            adipiscing elit. Scelerisque vel sit tortor fusce justo et hendrerit aliquet morbi.
            Justo nunc odio dui amet hac integer diam amet faucibus. Eget pellentesque lectus
            scelerisque molestie sagittis egestas quam. Duis sit cursus magna massa in. Urna, enim
            viverra phasellus amet dui, massa nisi feugiat.
          </p>
        </div>
      </div>
    </div>
  );
}
function Privacy() {
  return (
    <div className="privacy">
      <div className="container py-2 px-4 px-md-5">
        <div className="">
          <h2 className="h3 mb-3">Privacy Policy</h2>
          <p>
            Please read the following Terms and Conditions of Service (“Terms”) carefully before
            using the CobaltSwap platform. Your access to and use of the Platform is subject to your
            acceptance of and compliance with these Terms. These Terms apply to all Users, Notaries
            and others who access or use the Platform.
          </p>
          <p>
            By using the CobaltSwap Platform and Website, you accept these Termsconsectetur
            adipiscing elit. Scelerisque vel sit tortor fusce justo et hendrerit aliquet morbi.
            Justo nunc odio dui amet hac integer diam amet faucibus. Eget pellentesque lectus
            scelerisque molestie sagittis egestas quam. Duis sit cursus magna massa in. Urna, enim
            viverra phasellus amet dui, massa nisi feugiat.
          </p>
          <h3 className="h5">The Information that we collect</h3>
          <p>
            Please read the following Terms and Conditions of Service (“Terms”) carefully before
            using the CobaltSwap platform. Your access to and use of the Platform is subject to your
            acceptance of and compliance with these Terms.
          </p>
          <p>
            By using the CobaltSwap Platform and Website, you accept these Termsconsectetur
            adipiscing elit. Scelerisque vel sit tortor fusce justo et hendrerit aliquet morbi.
            Justo nunc odio dui amet hac integer diam amet faucibus.
          </p>
          <h3 className="h5">How We Collect, Process, Use and Share Personal Data</h3>
          <p>
            Please read the following Terms and Conditions of Service (“Terms”) carefully before
            using the CobaltSwap platform. Your access to and use of the Platform is subject to your
            acceptance of and compliance with these Terms.
          </p>
          <p>
            By using the CobaltSwap Platform and Website, you accept these Termsconsectetur
            adipiscing elit. Scelerisque vel sit tortor fusce justo et hendrerit aliquet morbi.
            Justo nunc odio dui amet hac integer diam amet faucibus.
          </p>
        </div>
      </div>
    </div>
  );
}

function TermsContact() {
  return (
    <div className="terms-contact mb-5">
      <div className="container py-2 px-4 px-md-5">
        <h2 className="h3">Contact Us</h2>
        <p>If you have questions or concerns with respect to these Terms, please contact us</p>
        <div className="bg-teal-green rounded-3 p-3">
          <p className="h6">CobaltSwap Technologies</p>
          <p className="mb-1">
            <span className="h6">Email: </span>
            <Link href={`mailto:${config.contact.email}`}>
              <a>{config.contact.email}</a>
            </Link>
          </p>
          <p className="mb-1">
            <span className="h6">Telephone: </span>
            <Link href={`tel:+${config.contact.mobilePhone1}`}>
              <a>{parsePhoneNumberForView(config.contact.mobilePhone1)}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
