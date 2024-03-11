import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/shared/layout";
import { ProductFormPage } from "./pages/productForm";


export const Router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        )
    },
    {
        path: "product/create",
        element: (
            <Layout>
                <ProductFormPage />
            </Layout>
        )
    }
]);