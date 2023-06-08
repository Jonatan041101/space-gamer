'use client';
import { ApolloProvider } from '@apollo/client';
import './globals.css';
import '../css/main.css';
import { Inter } from 'next/font/google';
import { client } from '@/utils/apollo';
import { useBearStore } from '@/store/store';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { handleViewListProduct, handleViewCart } = useBearStore(
    (state) => state
  );
  const closeAllModal = () => {
    handleViewListProduct(false);
    handleViewCart(false);
  };
  return (
    <html lang="en">
      <body
        // className={inter.className}
        className="body"
        onClick={closeAllModal}
      >
        <ApolloProvider client={client}>
          <Header />
          {children}
          <Footer />
        </ApolloProvider>
      </body>
    </html>
  );
}
