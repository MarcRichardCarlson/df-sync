import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import image1 from "../public/assets/b.energy_1x1_Logo.png";
import image2 from "../public/assets/cryptonow_1x1_Logo.png";
import image3 from "../public/assets/gbglass_1x1_Logo.png";
import image4 from "../public/assets/mcd_1x1_Logo.png";
import image5 from "../public/assets/mtg_1x1_Logo.png";
import image6 from "../public/assets/objektvision_1x1_Logo.png";
import image7 from "../public/assets/qx_1x1_Logo.png";
import image8 from "../public/assets/skanska_1x1_Logo.png";
import image9 from "../public/assets/smile_1x1_Logo.png";
import image10 from "../public/assets/srv_1x1_Logo.png";
import image11 from "../public/assets/svalner_1x1_Logo.png";
import image12 from "../public/assets/verifone_1x1_Logo.png";
import image13 from "../public/assets/vw_1x1_Logo.png";

const MarqueeScroll: React.FC = () => {
  return (
    <div className="bg-transparent w-full h-full overflow-hidden">
      <Marquee speed={80}>
        <div className="flex whitespace-nowrap space-x-16">
          <Image
            src={image1}
            alt="energy logo"
            style={{ objectFit: "cover", marginLeft: "4rem" }}
          />
          <Image
            src={image2}
            alt="crypto-now logo"
            style={{ objectFit: "cover" }}
          />
          <Image
            src={image3}
            alt="gb-glass logo"
            style={{ objectFit: "cover" }}
          />
          <Image src={image4} alt="mcd logo" style={{ objectFit: "cover" }} />
          <Image src={image5} alt="mtg logo" style={{ objectFit: "cover" }} />
          <Image
            src={image6}
            alt="object-vision logo"
            style={{ objectFit: "cover" }}
          />
          <Image src={image7} alt="qx logo" style={{ objectFit: "cover" }} />
          <Image
            src={image8}
            alt="skanska logo"
            style={{ objectFit: "cover" }}
          />
          <Image src={image9} alt="smile logo" style={{ objectFit: "cover" }} />
          <Image src={image10} alt="srv logo" style={{ objectFit: "cover" }} />
          <Image
            src={image11}
            alt="svalner logo"
            style={{ objectFit: "cover" }}
          />
          <Image
            src={image12}
            alt="verifone logo"
            style={{ objectFit: "cover" }}
          />
          <Image src={image13} alt="vw logo" style={{ objectFit: "cover" }} />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;
