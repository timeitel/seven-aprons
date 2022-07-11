import { IKnownColors } from "@styles/theme";
import { useMediaQuery } from "common/hooks";
import { LandingImage } from "modules/home/Landing";
import { FC } from "react";

interface Props {
  title: string;
  titlePrefix?: string;
  subtitle: string;
  imgSrc?: string;
}

export const Landing: FC<Props> = ({
  title,
  titlePrefix,
  subtitle,
  imgSrc = "images/landing-food.jpg",
  children,
}) => {
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <section
      id="home"
      className="header relative pt-16 items-center flex"
      style={{
        position: "relative",
        maxHeight: isDesktop ? "860px" : "unset",
        height: "40vh",
      }}
    >
      <LandingImage alt="Indonesian food" src={imgSrc} />
      <div className="container z-10 mx-auto items-center flex flex-wrap mt-12">
        <div
          className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"
          style={{ margin: "auto" }}
        >
          <div className="pt-32 sm:pt-0">
            {titlePrefix && (
              <p
                className="font-semibold text-2xl mb-2"
                style={{ color: IKnownColors.grey200 }}
              >
                {titlePrefix}
              </p>
            )}
            <h2 className="font-semibold text-6xl text-white text-center">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white text-center whitespace-nowrap">
              {subtitle}
            </p>
            <div style={{ marginBottom: isDesktop ? "0" : "4rem" }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};