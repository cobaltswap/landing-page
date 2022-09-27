import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { PrimaryButton } from "../../components/ui/Button";

export default function ConfirmEmail() {
  const [validationResult, setValidationResult] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { query } = useRouter();
  const { i: tokenID, t: token } = query;
  const shouldRunEffect = useRef(false);

  const resultMap = useMemo(
    () => ({
      success: "success",
      failed: "failed",
      expired: "expired",
      used: "used",
    }),
    []
  );
  useEffect(() => {
    setIsLoading(true);

    async function checkVerificationLink() {
      const url = `/api/email-verification?i=${tokenID}&t=${token}`;
      try {
        const result = await fetch(url);
        const data = await result.json();

        if (!result.ok) throw new Error(data.data.status || resultMap.failed);

        if (data.success) setValidationResult(data.data.status);
      } catch (error) {
        setValidationResult(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    shouldRunEffect.current && checkVerificationLink();

    return () => {
      if (!shouldRunEffect.current) {
        shouldRunEffect.current = true;
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenID, token]);

  if (isLoading) return <EmailValidationLoading />;

  return (
    <>
      {validationResult === resultMap.success || validationResult === resultMap.used ? (
        <EmailValidationSuccessful />
      ) : null}
      {validationResult === resultMap.failed ? <EmailValidationFailed /> : null}
      {validationResult === resultMap.expired ? <EmailValidationTokenExpired /> : null}
    </>
  );
}

function EmailValidationLoading() {
  return (
    <EmailVerificationWrapper>
      <p className="p-5 m-5">Please wait ...</p>
    </EmailVerificationWrapper>
  );
}
function EmailValidationSuccessful() {
  return (
    <EmailVerificationWrapper>
      <div className="mb-3">
        <i className="bi bi-check-circle display-3 text-success"></i>
      </div>
      <p className="mb-4">Your email address was successfully authenticated.</p>
      <div className="d-grid">
        <PrimaryButton>
          <Link href={"https://wa.me/2349078785157"}>Chat with us on Whatsapp</Link>
        </PrimaryButton>
      </div>
    </EmailVerificationWrapper>
  );
}
function EmailValidationFailed() {
  return (
    <EmailVerificationWrapper>
      <div className="mb-3">
        <i className="bi bi-x-circle display-3 text-danger"></i>
      </div>
      <p className="mb-4">Email verification failed!</p>
    </EmailVerificationWrapper>
  );
}

function EmailValidationTokenExpired() {
  return (
    <EmailVerificationWrapper>
      <div className="mb-3">
        <i className="bi bi-question-circle display-3 text-warning"></i>
      </div>
      <p className="mb-4">Email verification link expired!</p>
      <div className="d-grid">
        <PrimaryButton>Click here to send a new link</PrimaryButton>
      </div>
    </EmailVerificationWrapper>
  );
}

function EmailVerificationWrapper({ children }) {
  return (
    <div className="fullscreen d-flex align-items-center justify-content-center bg-primary-local">
      <div className="col-10 col-md-8 col-lg-4 p-4 bg-white text-dark text-center rounded-3">
        {children}
      </div>
    </div>
  );
}
