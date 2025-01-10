import { Modak } from "next/font/google";
import "./globals.css";

const modak = Modak({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Moody",
  description: "Daily mood tracker 24/7 - 365",
};

export default function RootLayout({ children }) {
  const header = (
    <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
      <h1 className={`${modak.className} custom-text-gradient lg:text-3xl md:text-2xl sm:text-xl`}>Moody</h1>
    </header>
  );

  const footer = (
    <footer className='p-4 sm:p-8 grid place-items-center'>
      <p className={`text-indigo-500 text-lg ${modak.className}`}>Created with 💜</p>
    </footer>
  )
  return (
    <html lang="en">
      <body
        className='w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen
          flex flex-col antialiased text-slate-800'
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
