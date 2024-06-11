"use client";

import NavigationContext from "@/contexts/navigation-context";
import { useEffect, useTransition } from "react";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useSDK } from "@metamask/sdk-react";

type NavigationProviderProps = {
  children?: React.ReactNode;
};

export default function NavigationProvider({
  children,
}: NavigationProviderProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const { sdk, connected, account } = useSDK();

  useEffect(() => {
    if (!isPending) {
      inAnimation();
    }
  }, [isPending]);

  if (!account && pathname !== "/" && typeof window !== "undefined") {
    window.location.href = "/";
    return;
  }

  return (
    <NavigationContext.Provider
      value={{
        almightyPush: (url: string) => {
          let myUrl = url.replace(/^\/+/, "");

          outAnimation().then(() => {
            window.location.href = `/${myUrl}`;
          });
        },
        push: (url: string, afterPageAnimationOut?: () => Promise<void>) => {
          let myUrl = url.replace(/^\/+/, "");
          let myPathname = pathname.replace(/^\/+/, "");
          if (myPathname === myUrl) return;

          outAnimation().then(async () => {
            try {
              if (afterPageAnimationOut) {
                await afterPageAnimationOut();
              }
              startTransition(() => {
                router.push(`/${myUrl}`);
              });
            } catch (error) {
              console.error(error);
              startTransition(() => {});
            }
          });
        },
      }}
    >
      {/* in production change this into flex not hidden */}
      <div className="flex pointer-events-none items-center justify-center w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[9999]">
        <div
          id="spinner"
          className="z-[99999] animate-spin inline-block size-10 border-[4px] border-current border-t-transparent text-white rounded-full "
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div
          id="banner-1"
          className="min-h-screen bg-[#1c1c1c] z-10 fixed top-0 left-0 w-full"
        />
      </div>
      <div>{children}</div>
    </NavigationContext.Provider>
  );
}

function outAnimation() {
  return new Promise((resolve) => {
    document.body.classList.add("stop-scrolling");
    const spinner = document.getElementById("spinner");
    const tl = gsap.timeline();
    tl.fromTo(
      spinner,
      {
        duration: 0.3,
        opacity: 0,
      },
      { duration: 0.3, opacity: 1, ease: "power2.in" }
    );
    const bannerOne = document.getElementById("banner-1");

    if (bannerOne) {
      const tl = gsap.timeline();

      tl.set([bannerOne], {
        yPercent: -100,
      }).to([bannerOne], {
        yPercent: 0,
        stagger: 0.2,
        onComplete: () => {
          resolve("done");
        },
      });
    }
  });
}

function inAnimation() {
  document.body.classList.add("stop-scrolling");
  const spinner = document.getElementById("spinner");
  const tl = gsap.timeline();
  tl.fromTo(
    spinner,
    {
      duration: 0.3,
      opacity: 1,
    },
    { duration: 0.3, opacity: 0, ease: "power2.out" }
  );
  const bannerOne = document.getElementById("banner-1");

  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set([bannerOne], {
      yPercent: 0,
    }).to([bannerOne], {
      yPercent: -100,
      stagger: 0.2,
      onComplete: () => {
        document.body.classList.remove("stop-scrolling");
      },
    });
  }
}
