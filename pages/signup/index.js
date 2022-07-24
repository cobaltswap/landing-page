import SignupForm from "../../components/signup-page/signup-form";

export default function Signup() {
  return (
    <article className="fullscreen bg-primary-local">
      <div className="container px-3 px-md-4 px-lg-5">
        <div className="row py-4">
          <section className="col-12 col-md-6 pe-md-5 py-5">
            <h2 className="h3 fw-bold mb-4 mb-md-5 text-center text-md-start">
              Terms and Conditions
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae delectus, voluptate
              repudiandae eum iure dicta fugiat temporibus enim dolorum animi veniam molestiae
              aliquid dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae delectus, voluptate
              repudiandae eum iure dicta fugiat temporibus enim dolorum animi veniam molestiae
              aliquid dolore.
            </p>
            <p></p>
          </section>
          <section className="col-12 col-md-6 ps-md-5 py-2 py-md-5">
            <h1 className="h3 fw-bold mb-4 mb-md-5 text-center text-md-start">
              To join the Cobalt family today, start your journey here;
            </h1>
            <SignupForm />
          </section>
        </div>
      </div>
    </article>
  );
}
