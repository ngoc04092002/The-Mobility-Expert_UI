import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary, NotFound } from "../components";
import { lazy, Suspense } from "react";
import App from "./App";

const Home = lazy(() => import("./Home"));
const SubCategoryPage = lazy(() => import("./SubCategoryPage"));
const AboutUsPage = lazy(() => import("./AboutUsPage"));
const WriteAReviewPage = lazy(() => import("./WriteAReviewPage"));
const BlogPage = lazy(() => import("./BlogPage"));
const BlogDetailPage = lazy(() => import("./BlogPage/BlogDetailPage"));
const DetailProductPage = lazy(() => import("./DetailProductPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/home",
        element: (
          <Suspense fallback={"loading..."}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/category/:type?/:sub_category?",
        element: (
          <Suspense fallback={"loading..."}>
            <SubCategoryPage />
          </Suspense>
        ),
      },
      {
        path: "/category/:type?/detail-product/:id",
        element: (
          <Suspense fallback={"loading..."}>
            <DetailProductPage />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={"loading..."}>
            <AboutUsPage />
          </Suspense>
        ),
      },
      {
        path: "/write-a-review",
        element: (
          <Suspense fallback={"loading..."}>
            <WriteAReviewPage />
          </Suspense>
        ),
      },
      {
        path: "/blog/:category_type?",
        element: (
          <Suspense fallback={"loading..."}>
            <BlogPage />
          </Suspense>
        ),
        children: [
          {
            path: "blog-detail/:id?",
            element: (
              <Suspense fallback={"loading..."}>
                <BlogDetailPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
