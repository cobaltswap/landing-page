import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import launchingIllustration from "../../../public/assets/Launching.png";
import { PrimaryButton } from "../../components/ui/Button";
import SignupForm from "./signup-form";

export default function Signup() {
  const [shouldDisplayDialog, setShouldDisplayDialog] = useState(false);
  const [dialogText, setDialogText] = useState(undefined);

  return (
    <article className="sign-up fullscreen text-white">
      {shouldDisplayDialog ? (
        <Dialog setShouldDisplayDialog={setShouldDisplayDialog}>{dialogText}</Dialog>
      ) : null}
      <Head>
        <title>Sign Up - CobaltSwap</title>
      </Head>
      <div className="container px-3 px-md-4 px-lg-5 mb-5 mb-md-0">
        <div className="row py-4">
          <section className="col-12 col-md-6 pe-md-5 py-5 px-4 px-md-0">
            <div className="col-12 col-md-10 mb-4 mb-md-0">
              <Image className="img-fluid" layout="responsive" src={launchingIllustration} alt="" />
            </div>
            <h1 className="h3 fw-500 mb-4 text-center text-md-start">Welcome to Cobalt</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae delectus, voluptate
              repudiandae eum iure dicta fugiat temporibus enim dolorum animi veniam molestiae
              aliquid dolore.
            </p>

            <p></p>
          </section>
          <section className="col-12 col-md-6 ps-md-5 py-2 py-md-5 px-4 px-md-0">
            <h1 className="h3 fw-500 mb-4 text-center text-md-start">Start your journey here:</h1>
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
      className="position-fixed top-0 start-0 end-0 bottom-0"
      style={{ background: "rgba(0,0,0, 0.7)" }}
    >
      <div
        className="d-flex flex-column position-absolute top-50 start-50 translate-middle col-10 col-md-7 col-lg-4"
        style={{
          backgroundColor: "#fff",
          color: "black",
          padding: "1.5rem",
          borderRadius: "10px",
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
