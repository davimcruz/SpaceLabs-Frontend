import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-wrap nk-wrap-nosidebar">
            <div className="nk-content ">
              <div className="nk-block nk-block-middle wide-md mx-auto">
                <div className="nk-block-content nk-error-ld text-center">
                  <img
                    className="nk-error-gfx"
                    src="/assets/images/gfx/error-404.svg"
                    alt=""
                  />
                  <div className="wide-xs mx-auto">
                    <h3 className="nk-error-title">
                      Oops! Why did you come here?
                    </h3>
                    <p className="nk-error-text">
                      We are sorry for the incident. You are trying to access a
                      non-existent or deleted page, please return to our
                      platform.
                    </p>
                    <a
                      href="#"
                      className="btn btn-lg btn-primary btn-dim mt-2"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/dashboard");
                      }}
                    >
                      Back To Platform
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
