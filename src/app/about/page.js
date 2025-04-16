import NavBar from "@/components/NavBar";
import "@/components/about.css";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ui/ScrollButton";
import WowInit from '@/components/WowInit';

export async function generateMetadata() {
    return {
        title: "О нас",
        description: "Информация о нас",
    };
}

export default function AboutPage() {
    return (
        <div className="flex justify-center items-center flex-col content-max w-[100%]">
                    <WowInit />
            <div className="main-contaner w-[100%]">
                <div className="home-container w-full flex-col flex items-cente">
                    <NavBar></NavBar>
                    <div className="bg-block_1 animate__animated animate__fadeIn">
                    <div className="elipse_4 rounded-[100%]"></div>
                        <div className="elipse_1 rounded-[100%]"></div>
                        <div className="elipse_3 rounded-[100%]"></div>
                        <div className="elipse_2 rounded-[100%]"></div>
                    </div>
                    <div className="bg-block_2 animate__animated animate__fadeIn">
                        <div className="elipse_5 rounded-[100%]"></div>
                        <div className="elipse_6 rounded-[100%]"></div>
                    </div>
                    <div className="bg-block_3 animate__animated animate__fadeIn">
                        <div className="elipse_7 rounded-[100%]"></div>
                    </div>
                    <div className="text-content flex flex-col items-center animate__animated animate__fadeInUp">
                        <h1>
                            Откройте <span>для себя</span> силу нашего <br />
                            <span>видения</span>
                        </h1>
                        <p>
                        Мы подходим к каждому проекту с пониманием задачи и ориентируемся на результат. В этом разделе — немного о нашей команде, ценностях и подходе к работе.
                        </p>
                    </div>
                    <ScrollButton/>
                </div>
            </div>
            <div className="section-about flex flex-col mt-[80px]">
                <h1>Узнайте о нас больше</h1>
                <div className="info-about flex items-end">
                    <p className="font-sans w-[405px] mr-[180px] h-[400px] text-[18px] text-white text-opacity-75 about-p">
                    Все началось с идеи создать команду, которая будет не просто разрабатывать, а понимать, что важно для каждого клиента.
                    <br/>  <br/>Мы начинали с небольших проектов, но с ясной целью — делать качественные и практичные решения, которые решают реальные задачи. Со временем к нам присоединились люди с разными навыками и опытом, что позволило расширить наши возможности и предложить более комплексные услуги.
                    </p>
                    <div className="elipse_8 rounded-[100%]"></div>
                    <div className="w-[645px] overflow-hidden wow animate__animated animate__fadeInRight">
                        <img src="/Clip-path-group.svg" className="w-[645px] h-[479px]" alt="" />
                    </div>
                </div>
                <div className="elipse_9 rounded-[100%]"></div>
                <div className="info-about flex wow animate__animated animate__fadeIn">
                    <div className="info-about-2">
                    <img src="/san.png" className="w-[271px] h-[407px] rounded-[10px] img-about" alt="" />
                    <img src="/dmitry.png" className="w-[271px] h-[407px] rounded-[10px] img-about" alt="" />
                    </div>
                    <div className="elipse_10 rounded-[100%]"></div>
                    <div className="elipse_11 rounded-[100%]"></div>
                    <p className="font-sans w-[37%] ml-[100px] pt-[50px] text-[18px] text-white text-opacity-75 about-p about-p-mob">
                    Меня зовут Дмитрий. Я руководитель студии SAN. Мы создаем решения, которые помогают людям и бизнесам работать проще и эффективнее.
                        <br />
                        <br />
Наша цель — разрабатывать функциональные и визуально привлекательные продукты, которые решают реальные проблемы пользователей.
                    </p>
                    <div className="elipse_12 rounded-[100%]"></div>
                    <div className="elipse_13 rounded-[100%]"></div>
                    <div className="vector_1 rounded-[100%]"></div>
                    <div className="vector_3"></div>
                    <div className="vector_2 rounded-[100%]"></div>
                </div>
                <div className="info-about flex mt-[100px] info-about-mob wow animate__animated animate__fadeIn">
                    <div className="elipse_14 rounded-[100%]"></div>
                    <p className="font-sans w-[50%] ml-[50px] pt-[50px] mr-[70px] text-[18px] text-white text-opacity-75 about-p wow animate__animated animate__fadeInLeft">
                    SAN (Solution is Always Nearby) — Решение всегда рядом!<br/><br/>
                    - Бизнес-решения: Telegram-боты, которые помогают автоматизировать процессы. <br/>
- Интуитивный веб-дизайн: Мы создаем дизайн, который делает сайты удобными, сосредотачиваясь на улучшении взаимодействия.<br/>
- Адаптивные сайты: Разработка сайтов, которые безупречно работают на разных устройствах и обеспечивают быстрый доступ.<br/>
<br/> <span className="text-[16px] ">
<br/>
Сайт разработан на NEXT JS, разработчик - Максим (@ITpersonality01)    </span>      

                    </p>
                    <div className="elipse_15 rounded-[100%]"></div>
                    <img src="/about.png" className="w-[556px] h-[407px] rounded-[10px] wow animate__animated animate__fadeInRight" alt="" />
                </div>
                <div className="footer h-[370px]">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}
