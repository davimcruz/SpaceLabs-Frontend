import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <div class="nk-app-root">
        <div class="nk-main ">
            <div class="nk-wrap nk-wrap-nosidebar">
                <div class="nk-content ">
                    <div class="nk-block nk-block-middle wide-xs mx-auto">
                        <div class="nk-block-content nk-error-ld text-center">
                            <h2 class="nk-coming-head">Coming Soon!</h2>
                            <h3 class="nk-error-title">Enjoy the best, with the best.</h3>
                            <p class="nk-error-text">Experience something totally new and out of the ordinary. News soon, keep up with us!</p>
                            <a href="html/index.html" class="btn btn-lg btn-dim btn-primary mt-2">Our Community</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
