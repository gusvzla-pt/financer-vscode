import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Financer",
  description: "Your finance tracker",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <ClerkProvider>
      <html lang={locale}>
        <body className={inter.className}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-blue-50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>Hecho por Gustavo</p>
              </div>
            </footer>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
