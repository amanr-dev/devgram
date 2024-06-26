import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterLinksColProps = {
  title: string;
  links: Array<string>;
};

const FooterLinksCol = ({ title, links }: FooterLinksColProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold ">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((l) => (
          <Link href="/">{l}</Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" width={115} height={38} alt="Devgram" />
          <p className="text-start text-sm font-normal mt-5 max-w-xs ">
            Devgram is the world's leading community for creatives to share,
            grow and get hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterLinksCol
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />

          <div className="flex-1 flex flex-col gap-4">
            <FooterLinksCol
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterLinksCol
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
          <FooterLinksCol
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex-1 flex flex-col gap-4">
            <FooterLinksCol
              title={footerLinks[4].title}
              links={footerLinks[4].links}
            />
            <FooterLinksCol
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
          </div>
          <FooterLinksCol
            title={footerLinks[6].title}
            links={footerLinks[6].links}
          />
        </div>
      </div>

      <div className="flexBetween footer_copyright">
        <p>@ 2024 Devgram. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">11,001 </span>
          projects submitted.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
