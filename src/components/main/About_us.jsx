import React from 'react';

const About = () => {
    return (
      <div className='self-center mt-[60px] flex items-center h-[739px] bg-gradient-to-r from-[#132C72] to-[#0A0F26] w-[100%] justify-center about'>
            <div className="max-w-[1240px] flex items-center block-about">
                <div className="block">
                    <h1 className='font-sans text-[48px]'>О нас</h1>
                    <p className='font-sans w-[405px] text-[18px] text-white text-opacity-75 about-p mt-[20px]'>
                    Делаем сайты, Telegram-ботов, автоматизацию и дизайн. Работаем с разными задачами: кто-то приходит за простым лендингом, кто-то — за полноценной системой или ботом.
                    <br/>
                    Чаще всего работаем с малым бизнесом, стартапами и частными заказами. Стараемся быть на связи, отвечать по делу и не затягивать сроки.
                    </p>
                </div>
                <div className="img-about">
                    <img src="/Clip-path-group.svg" className='w-[645px] h-[479px]' alt=""/>
                </div>
            </div>
      </div>
    );
  };


export default About;