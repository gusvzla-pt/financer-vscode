// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales } from "../config";

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale)) notFound();

//   return {
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
