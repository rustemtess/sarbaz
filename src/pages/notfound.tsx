import { title } from "@/components/primitives";
import Layout from "./layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="flex flex-col w-full justify-center items-center min-h-full py-8">
        <h1
          className={`${title()} z-10 mb-5`}
          style={{
            fontSize: 28,
          }}
        >
          404 Page not found
        </h1>
      </section>
    </Layout>
  );
}
