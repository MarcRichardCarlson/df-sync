
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import image1 from "../public/assets/amazon-web-services-2.svg";
import image2 from "../public/assets/angular-icon-1.svg";
import image3 from "../public/assets/azure-2.svg";
import image4 from "../public/assets/django.svg";
import image5 from "../public/assets/drupal-2.svg";
import image6 from "../public/assets/github-2.svg";
import image7 from "../public/assets/html-5-logo-svgrepo-com.svg";
import image8 from "../public/assets/logo-javascript.svg";
import image9 from "../public/assets/magento-1.svg";
import image10 from "../public/assets/mongodb-icon-2.svg";
import image11 from "../public/assets/new-php-logo.svg";
import image12 from "../public/assets/nodejs-icon.svg";
import image13 from "../public/assets/react-1.svg";
import image14 from "../public/assets/ruby.svg";
import image15 from "../public/assets/shopify-logo-2018.svg";
import image16 from "../public/assets/strapi-2.svg";
import image17 from "../public/assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";
import image18 from "../public/assets/vue-9.svg";
import image19 from "../public/assets/w3_css-official.svg";
import image20 from "../public/assets/wordpress-icon-1.svg";

import React from 'react'

const SummaryCarousel = () => {

  return (

    <Carousel className='w-full flex flex-col gap-8
    '>
      <Image src={image1} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image2} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image3} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image4} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image5} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image6} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image7} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image8} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image9} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image10} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image11} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image12} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image13} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image14} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image15} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image16} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image17} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image18} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image19} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
      <Image src={image20} alt="crypto-now logo" style={{ objectFit: "contain", height: "80px", width: "80px"}} />
  </Carousel>
  )
}

export default SummaryCarousel