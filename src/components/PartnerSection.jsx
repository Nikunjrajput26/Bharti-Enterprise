import React from "react";
import PartnerSlider from "./PartnerSlider";
import InfoSection from "./InfoSection";

const PartnerSliderProps = {
  title: "Our Partners",
  subtitle: "Trusted by Industry Leaders",
  description:
    "We collaborate with top organizations to deliver the best solutions. Meet our valued partners below.",
};

export default function PartnerSection() {
  return (
    <>
      <InfoSection
      {...PartnerSliderProps}
      />
      <PartnerSlider />
    </>
  );
}
