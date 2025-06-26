import Layout from "./layout";
import { useEffect, useState } from "react";
import { INews } from "@/types/news";
import { API_BACKEND_PHP } from "@/config/api";
import { useLocation } from "react-router-dom";
import { formatDate } from "@/utils/date";

export default function NewsPage() {
  const location = useLocation();

  const [news, setNews] = useState<INews>();
  const getNews = () => {
    const id =
      location.pathname.split("/")[location.pathname.split("/").length - 1];
    fetch(`${API_BACKEND_PHP}/news.php?id=${id}`)
      .then((e) => e.json())
      .then((e) => setNews(e));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Layout>
      <section className="flex flex-col w-full items-center min-h-full py-8">
        <div className="max-w-[1270] w-full lg:flex-row flex flex-col-reverse justify-center items-start">
          <div className="lg:max-w-[800px] w-full flex flex-col gap-5 px-3 pb-8">
            <h1 className="font-bold text-2xl">{news?.news_title}</h1>
            <div>
              <img src={news?.news_img} width={500} alt="1" />
            </div>
            <p className="text-xs text-default-500 font-light">
              {news?.news_date && formatDate(news.news_date.split(" ")[0])}
            </p>
            <h4 className="font-semibold">{news?.news_subtitle}</h4>
            <p
              className="text-default-600 hyphens-auto"
              lang="ru"
              style={{
                fontSize: 16,
              }}
              dangerouslySetInnerHTML={{ __html: news?.news_content || "" }}
            ></p>
          </div>
          {/* <div className="lg:max-w-[300px] w-full p-2 flex flex-col gap-4">
            <p className="text-default-700 text-sm">Похожие новости</p>
            <div className="flex lg:flex-col gap-4">
              <Link
                href="#"
                className="flex flex-col items-start text-default-700"
              >
                <p className="text-sm text-default-500 font-light">
                  2 май 2025
                </p>
                <h5 className="">
                  Қорғаныс министрі ұшқышсыз ұшу жүйесінің үздік операторларын
                  марапаттады
                </h5>
              </Link>
              <Link
                href="#"
                className="flex flex-col items-start text-default-700"
              >
                <p className="text-sm text-default-500 font-light">
                  2 май 2025
                </p>
                <h5 className="">
                  Қорғаныс министрі ұшқышсыз ұшу жүйесінің үздік операторларын
                  марапаттады
                </h5>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
    </Layout>
  );
}
