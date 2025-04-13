import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../modules/auth/shared/context/Auth.context";
import { CartProvider } from "../modules/checkout/pages/cart/context/Cart.context";
import { CategoriesProvider } from "../modules/user/pages/manager/context/Categories.context";
import { ProductsProvider } from "../modules/user/pages/manager/context/Products.context";
import Chatbot from "../shared/components/Chatbot";
import LocationPathname from "../shared/helpers/LocationPathname";
import Footer from "../shared/components/footer/footer";
import ScrollToTop from "../shared/components/buttons/UpButton.component";
import NavBar from "../shared/components/navbar/NavBar.component";
export const metadata: Metadata = {
  title: "World-Salud",
  description: "La salud nuestra prioridad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
  <body className="min-h-screen flex flex-col">
    <ProductsProvider>
      <AuthProvider>
        <CategoriesProvider>
          <CartProvider>
            <LocationPathname redirectRoutes={["/login", "/signup"]}>
              <NavBar />
              <main className="flex-grow bg-[#D9D9D9]">
                <ScrollToTop />
                <Chatbot />
                {children}
              </main>
            </LocationPathname>
          </CartProvider>
        </CategoriesProvider>
      </AuthProvider>
    </ProductsProvider>
    <Footer />
  </body>
</html>

);
}
