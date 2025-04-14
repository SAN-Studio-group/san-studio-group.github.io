import NavBar from "@/components/NavBar";
import "@/components/webdev.css";
import Footer from "@/components/Footer";
import WowInit from '@/components/WowInit';

export async function generateMetadata() {
  return {
    title: "Разработка сайтов",
    description: "Описание разработки сайтов на фреймворках",
  };
}

export default function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full max-w-[1600px]">
        <WowInit />
        <NavBar></NavBar>
        <div className="section-1 flex pl-[100px] pr-[100px] justify-between items-center mt-[50px]">
          <div className="el-1"></div>
          <div className="el-2"></div>
          <div className="description-development w-[571px] animate__animated animate__fadeIn">
            <h1>
              Описание <span>разработки сайтов</span> на фреймворках
            </h1>
            <div className="el-3"></div>
            <div className="el-4"></div>

            <p>
            Создаем сайты на популярных фреймворках, чтобы обеспечить их быструю работу и гибкость. Это помогает нам делать проекты удобными и легко масштабируемыми.
            </p>
          </div>
          <div className="development-img  animate__animated animate__fadeInRight">
            <img src="development.svg"></img>
          </div>
        </div>
        <div className="section-2 flex pl-[100px] pr-[100px] justify-between items-center mt-[100px]">
          <div className="strategy flex flex-wrap justify-between gap-8 w-[614px] ">
            <div className="info-strategy w-[277px]">
              <h1>Стратегия</h1>
              <p>
              Выбираем фреймворки, которые обеспечивают быстрый запуск, гибкость и масштабируемость проекта, исходя из бизнес-целей клиента.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Подход</h1>
              <p>
              Работаем с гибкими фреймворками, настраиваем их под уникальные нужды бизнеса, фокусируясь на удобстве и производительности.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Процесс</h1>
              <p>
              Каждый этап разработки сопровождается тестированием и настройкой под требования клиента, с учетом обратной связи.
              </p>
            </div>
            <div className="info-strategy w-[277px]">
              <h1>Последние этапы</h1>
              <p>
              Проводим тестирование, грузим сайт на сервер, настраиваем SEO(если нужно)
              </p>
            </div>
            <div className="work mt-[30px]">
          <h1>Как мы работаем?</h1>
          </div>
          <div className="work-process w-full text-white rounded-lg wow animate__animated animate__fadeIn">
            <div className="flex">

              <div className="flex flex-col flex-1 gap-4">
                <div className="flex items-center">
                  <span className="number mr-2">1</span>
                  <p>Анализируем задачи</p>
                </div>
                <div className="flex items-center">
                  <span className="number mr-2">2</span>
                  <p>Планируем проект</p>
                </div>
                <div className="flex items-center">
                  <span className="number mr-2">3</span>
                  <p>Разрабатываем дизайн</p>
                </div>
              </div>

              <div className="flex flex-col flex-1 gap-4">
                <div className="flex items-center">
                  <span className="number mr-2">4</span>
                  <p>Программируем решения</p>
                </div>
                <div className="flex items-center">
                  <span className="number mr-2">5</span>
                  <p>Сопровождаем проект</p>
                </div>
              </div>
            </div>
          </div>

          </div>
          <div className="projects flex">
          <div className="vector"></div>
          <div className="our-projects flex flex-col">
            <h1>Наши проекты</h1>
            <div className="project wow animate__animated animate__backInRight">
                <img src="Сайт1.png"></img>
                <p>Сайт конвертер валют</p>
            </div>
            <div className="project wow animate__animated animate__backInRight">
                <img src="Сайт2.png"></img>
                <p>Web-дизайн для компании</p>
            </div>
            <div className="project wow animate__animated animate__backInRight">
                <img src="/Project3.png"></img>
                <p>Проект для шоу-группы</p>
            </div>
          </div>
          </div>
        </div>
        <div className="footer h-[370px]">
                    <Footer></Footer>
          </div>
      </div>
    </>
  );
}