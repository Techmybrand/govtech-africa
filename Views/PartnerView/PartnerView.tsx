import React from "react";
import { BecomeASponsor, BookAStand, Contact, Organisations, PrivateSector, Registration, WhyPartner } from "@/components";
import { BookATicket, Carousel, HeroComponent } from "@/shared";
import styles from "./PartnerView.module.scss"

const PartnerView = () => {
  const items = ["/svgs/slider_27.svg",
    "/svgs/slider_27.svg",
    "/svgs/slider_27.svg",
    "/svgs/slider_27.svg",
    "/svgs/slider_27.svg",
    "/svgs/slider_27.svg",
  ]
  return (
    <React.Fragment>
      <HeroComponent title="A New Era for African governance"
        subText={`Join us as we chart the course for Africa"s
          public sector renaissance`}
        backgroundImage="/images/hero_for_partner.png"
        headerSubtextClass={styles.header_subtext_class}
      />
      <BookATicket />
      <WhyPartner />
      <PrivateSector />
      <Organisations />
      <Contact />
      <BecomeASponsor />
      <Carousel items={items} direction="left" speed="slow" />
      <BookAStand />
      <Carousel items={items} direction="right" speed="slow" />
      <Registration />
    </React.Fragment>
  )
}

export default PartnerView;