import { useRouter } from "next/router";
import LayoutScripts from "../src/components/layouts/scripts";

export default function NotFound() {
  const router = useRouter();
  return (
    <LayoutScripts>
      <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle wide-xs mx-auto">
                        <div class="nk-block-content nk-error-ld text-center">
                            <h2 class="nk-coming-head">Coming Soon!</h2>
                            <h3 class="nk-error-title">Enjoy the best, with the best.</h3>
                            <p class="nk-error-text">Experience something totally new and out of the ordinary. News soon, keep up with us!</p>
                            <a
                              href="#"
                              className="btn btn-lg btn-primary btn-dim mt-2"
                              onClick={(e) => {
                                e.preventDefault();
                                router.push("/dashboard/overview");
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
    </LayoutScripts>
  );
}
