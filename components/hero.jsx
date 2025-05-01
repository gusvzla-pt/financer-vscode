"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HeroSection");
  const locale = useLocale();

  return (
    <div className="pb-20 px-4">
      <div>
        <h1>
          {t("title")} <br /> {t("subtitle")}
        </h1>
        <p>{t("description")}</p>
        <div>
          <Link href={`/${locale}/dashboard`}>
            <Button size="lg" className="px-8">
              {t("getStarted")}
            </Button>
          </Link>
          <Link href={`/${locale}/dashboard`}>
            <Button size="lg" variant="outline" className="px-8">
              {t("prices")}
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src="/inteligencia-artificial-finanzas.jpg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
