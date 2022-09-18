import { useState } from "react";
import SignupForm from "../../components/signup-page/signup-form";
import { PrimaryButton } from "../../components/ui/Button";

export default function Signup() {
  const [shouldDisplayDialog, setShouldDisplayDialog] = useState(false);
  const [dialogText, setDialogText] = useState(undefined);

  return (
    <article className="fullscreen bg-primary-local">
      {shouldDisplayDialog ? (
        <Dialog setShouldDisplayDialog={setShouldDisplayDialog}>{dialogText}</Dialog>
      ) : null}
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
            <SignupForm
              setShouldDisplayDialog={setShouldDisplayDialog}
              setDialogText={setDialogText}
            />
          </section>
        </div>
      </div>
    </article>
  );
}

function Dialog({ children, setShouldDisplayDialog }) {
  return (
    <div
      className="position-absolute top-0 start-0 end-0 bottom-0"
      style={{ background: "rgba(0,0,0, 0.7)" }}
    >
      <div
        className="d-flex flex-column position-absolute top-50 start-50 translate-middle"
        style={{
          backgroundColor: "#fff",
          color: "black",
          padding: "1.5rem",
          borderRadius: "10px",
          maxWidth: "30%",
        }}
      >
        <div className="d-flex justify-content-end">
          <i className="bi bi-x-circle btn" onClick={() => setShouldDisplayDialog(false)}></i>
        </div>
        <div className="mt-3 mb-5 fw-bold text-center mx-4">{children}</div>
        <div className="d-grid">
          <PrimaryButton onClick={() => setShouldDisplayDialog(false)}>Ok</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
