import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ui/ScrollButton";
import "@/components/portfolio.css";
import WowInit from '@/components/WowInit';

export async function generateMetadata() {
    return {
      title: "Порфолио",
      description: "Наши работы",
    };
  }

export default function PortfolioPage() {
    return (
      <div className="flex justify-center items-center flex-col max-w-[1600px;] w-[100%]">
        <WowInit />
        <NavBar></NavBar>
            <div className="main-contaner">
                <div className="home-container w-full flex-col flex items-cente">
                  <div className="bg-elipse-left animate__animated animate__fadeIn">
                    <div className="elipse_1 rounded-[100%]"></div>
                    <div className="elipse_2 rounded-[100%]"></div>
                    <div className="elipse_3 rounded-[100%]"></div>
                    <div className="elipse_4 rounded-[100%]"></div>
                    <div className="elipse_5 rounded-[100%]"></div>
                    <div className="block-vict">
                      <div className="elipse_7 rounded-[100%]"></div>
                      <div className="vector_1"></div>
                      <div className="elipse_8 rounded-[100%]"></div>
                    </div>
                    <div className="elipse_9 rounded-[100%]"></div>
                  </div>
                  <div className="bg-elipse-right animate__animated animate__fadeIn">
                    <div className="elipse_10 rounded-[100%]"></div>
                    <div className="elipse_11 rounded-[100%]"></div>
                    <div className="elipse_12 rounded-[100%]"></div>
                    <div className="elipse_13 rounded-[100%]"></div>
                    <div className="elipse_14 rounded-[100%]"></div>
                    <div className="elipse_15 rounded-[100%]"></div>
                    <div className="elipse_16 rounded-[100%]"></div>

                    <div className="block-vict">
                    <div className="vector_3"></div>
                      <div className="elipse_17 rounded-[100%]"></div>
                      <div className="vector_2"></div>
                      <div className="elipse_18 rounded-[100%]"></div>
                    </div>
                    <div className="elipse_19 rounded-[100%]"></div>
                  </div>
                    <div className="text-content flex flex-col items-center animate__animated animate__fadeInUp">
                        <h1><span>Портфолио</span><br></br> нашей компании</h1>
                        <p>Здесь собрана часть наших проектов — всё, что мы сделали с нуля или прокачали для клиентов. Каждый проект здесь — это история сотрудничества, идей и решений.
                        </p>
                    </div>
                    <ScrollButton />
                </div>
                <div className="section-1 flex-col  flex pl-[100px] pr-[100px] justify-between items-center mt-[100px]">
                  <h2>Наши работы</h2>
                  <div className="project-card flex section-about">
                     <img src="/Project1.png" className="wow animate__animated animate__pulse"></img>
                    <div className="col-block flex flex-col justify-center">
                      <h1>Телеграм-бот для музыкальной группы</h1>
                      <p>Пользователи могут ознакомиться с анонсами предстоящих мероприятий, приобрести билеты и забронировать музыкантов для частных вечеринок, корпоративов и других мероприятий. Весь функционал доступен через удобное меню</p>
                      <div className="category">Telegram Bot</div>
                      <a href="https://t.me/chuvak_s_gitaroy_bot" target="_blank"><button>Перейти на сайт <img src="/icon.svg"></img></button></a>
                      <div className="elipse_20 rounded-[100%]"></div>
                      <div className="elipse_22 rounded-[100%]"></div>
                    </div>
                    <div className="elipse_21 rounded-[100%]"></div>
                    <hr className="hr-mobile"></hr>
                  </div>

                  <div className="project-card flex-row-reverse flex section-about">
                    <img src="/Project2.png" className="wow animate__animated animate__pulse"></img>
                    <div className="col-block flex flex-col justify-center">
                      <h1>Бот для организации бизнес-клуба</h1>
                      <p>Для управления участниками и мероприятиями бизнес-клуба разработан Web App чат-бот. Функции: поиск жителей по контактам, расписание мероприятий с голосованием и оплатой, библиотека с книгами и фото/видеогалерея. Предусмотрены напоминания о предстоящих мероприятиях и ежемесячных платежах, с возможностью оплаты как физическими, так и юридическими лицами.
                      </p>
                      <div className="category">Telegram Bot</div>
                      <a href="https://t.me/ANARXI1ST" target="_blank"><button className="btn-project-2">Перейти на сайт <img src="/icon.svg"></img></button></a>
                      <div className="elipse_23 rounded-[100%]"></div>
                    </div>
                    <div className="block-vict">
                      <div className="elipse_24 rounded-[100%]"></div>
                      <div className="vector_4"></div>
                      <div className="elipse_25 rounded-[100%]"></div>
                      </div>
                      <hr className="hr-mobile"></hr>
                  </div>

                  <div className="project-card flex section-about">
                  <div className="elipse_26 rounded-[100%]"></div>
                  <div className="elipse_27 rounded-[100%]"></div>
                  <div className="elipse_28 rounded-[100%]"></div>
                    <img src="/Project3.png" className="wow animate__animated animate__pulse"></img>
                    <div className="col-block flex flex-col justify-center">
                      <h1>Сайт ШОУ-ГРУППЫ "КЬЯНТИ"</h1>
                      <p>Для музыкальной шоу-группы "Кьянти" разработан информативный веб-сайт. Реализован адаптивный макет, галерея выступлений, информация об артистах, форма обратной связи и интеграция с социальными сетями.</p>
                      <div className="category">Веб-сайт</div>
                      <a href="http://chianti-show.ru/" target="_blank"><button className="btn-project-2">Перейти на сайт <img src="/icon.svg"></img></button></a>
                    </div>
                    <div className="elipse_29 rounded-[100%]"></div>
                    <hr className="hr-mobile"></hr>
                  </div>
                </div>
            </div>

                <div className="footer h-[370px]">
                    <Footer></Footer>
                </div>
            </div>
    );
  }