import { FC, ReactNode } from "react";
import { OnboardContextProvider } from "@/context";
import { AuthRoutes, OnboardRoutes } from "@/utils";
import { useRouter } from "next/router";
import cn from "classnames";

type Props = {
  children: ReactNode;
  steps?: boolean;
};
const OnboardLayout: FC<Props> = ({ children, steps = true }) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <OnboardContextProvider>
      <div className="bg-[#f0fbff] h-screen overflow-y-auto lg:overflow-hidden relative onboarding_layout_container p-2 sm:p-6">
        <div className="lg:absolute flex items-center justify-end mb-6 lg:top-5 lg:right-0">
          <img
            src="/assets/images/Renda-logo-with-tagline.svg"
            onClick={() => router.push(AuthRoutes.LOGIN)}
            className="cursor-pointer pr-10"
          />
        </div>

        <div className="bg-[#1b547f] md_resolution w-[450px] h-[100%] rounded-2xl shadow-md relative">
          {steps && (
            <div className="px-12 text-white h-[100%] absolute w-full flex items-center">
              <div className="stepper-nav">
                <div
                  className={cn("stepper-item my-5", {
                    current: router.pathname === OnboardRoutes.GET_STARTED,
                  })}
                  data-kt-stepper-element="nav"
                >
                  <div
                    className="stepper-wrapper cursor-pointer flex space-x-4 items-center"
                    onClick={() => router.push(OnboardRoutes.GET_STARTED)}
                  >
                    <div
                      className={cn(
                        "stepper-icon rounded-md border-dashed border !border-gray-500 p-2 px-4",
                        router.pathname === "/auth/signup/get-started"
                          ? "bg-gray-400 !border-solid !border-transparent"
                          : ""
                      )}
                    >
                      <span className="stepper-number">1</span>
                    </div>

                    <div className="stepper-label">
                      <h3 className="stepper-title text-xl">Get Started</h3>

                      <div className="stepper-desc text-xs mt-1 text-gray-400">
                        Tell us more about your business
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={cn("stepper-item  my-5", {
                    current: router.pathname === OnboardRoutes.KYC_UPLOAD,
                  })}
                  data-kt-stepper-element="nav"
                >
                  <div
                    className="stepper-wrapper cursor-pointer flex space-x-4 items-center"
                    onClick={() => router.push(OnboardRoutes.KYC_UPLOAD)}
                  >
                    <div className={cn(
                        "stepper-icon rounded-md border-dashed border !border-gray-500 p-2 px-4",
                        router.pathname === "/auth/signup/kyc-upload"
                          ? "bg-gray-400 !border-solid !border-transparent"
                          : ""
                      )}>
                      <i className="ki-outline ki-check stepper-check"></i>
                      <span className="stepper-number">2</span>
                    </div>

                    <div className="stepper-label">
                      <h3 className="stepper-title">KYC Upload</h3>
                      <div className="stepper-desc text-xs mt-1 text-gray-400">
                        To activate your profile
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={cn("stepper-item   my-5", {
                    current: router.pathname === OnboardRoutes.SET_PASSWORD,
                  })}
                  data-kt-stepper-element="nav"
                >
                  <div
                    className="stepper-wrapper cursor-pointer flex space-x-4 items-center"
                    onClick={() => router.push(OnboardRoutes.SET_PASSWORD)}
                  >
                    <div className={cn(
                        "stepper-icon rounded-md border-dashed border !border-gray-500 p-2 px-4",
                        router.pathname === "/auth/signup/set-password"
                          ? "bg-gray-400 !border-solid !border-transparent"
                          : ""
                      )}>
                      <i className="ki-outline ki-check stepper-check"></i>
                      <span className="stepper-number">3</span>
                    </div>

                    <div className="stepper-label">
                      <h3 className="stepper-title">Create your password</h3>
                      <div className="stepper-desc text-xs mt-1 text-gray-400">
                        Secure your account
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={cn("stepper-item  my-5", {
                    current: router.pathname === OnboardRoutes.CONFIRM_EMAIL,
                  })}
                  data-kt-stepper-element="nav"
                >
                  <div
                    className="stepper-wrapper cursor-pointer flex space-x-4 items-center"
                    onClick={() => router.push(OnboardRoutes.CONFIRM_EMAIL)}
                  >
                    <div className={cn(
                        "stepper-icon rounded-md border-dashed border !border-gray-500 p-2 px-4",
                        router.pathname === "/auth/signup/confirm-email"
                          ? "bg-gray-400 !border-solid !border-transparent"
                          : ""
                      )}>
                      <i className="ki-outline ki-check stepper-check"></i>
                      <span className="stepper-number">4</span>
                    </div>

                    <div className="stepper-label">
                      <h3 className="stepper-title">Confirm your email</h3>
                      <div className="stepper-desc text-xs text-gray-400 mt-1">
                        Verify your details
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="w-full px-4 md:!px-14">
          <div
            className={cn(
              "h-full w-full flex items-end pb-6",
              [
                "/auth/signup/set-password",
                "/auth/signup/confirm-email",
                "/auth/signup/kyc-upload",
              ].includes(router.pathname)
                ? "items-center"
                : "items-center"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </OnboardContextProvider>
  );
};

export { OnboardLayout };
