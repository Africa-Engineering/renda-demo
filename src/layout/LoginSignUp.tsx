import React, { FC } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utils";
import CarouselComponent from "../components/carousel/CarouselComponent";
import { url } from "inspector";

type Props = {
  children: React.ReactNode;
  autoCenter?: boolean;
};
const LoginContainer: FC<Props> = ({ children, autoCenter = false }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="login_md_resolution h-screen items-center justify-center px-4 pt-4">
        <CarouselComponent />
      </div>
      <div className="h-screen px-6 relative flex items-center">
        <div className="absolute top-5 right-0">
          <img
            src="/assets/images/Renda-logo-with-tagline.svg"
            onClick={() => router.push(AuthRoutes.LOGIN)}
            className="cursor-pointer pr-10"
          />
        </div>

        <div className="w-full lg:w-3/4">{children}</div>
      </div>
    </div>
  );
};

export { LoginContainer };
