'use client';

import React, { useEffect, useState } from 'react';
import Card from '../ui/Card';
import CardBlock from '../ui/CardBlock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "../main.css";

const Cards = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopContent = (
    <div className="max-w-[1240px] w-full grid grid-cols-2 grid-rows-2 gap-4 self-center block-card card-top ">
      <div className="col-span-2 flex gap-4 justify-center h-[230px] block-card wow animate__animated animate__fadeInUp">
        <a style={{ width: '105%' }} href="/webdev">
          <CardBlock logo="frameworks.svg" h="Разработка сайтов на фреймворках" p="Разработка сайтов на современных фреймворках. FastApi, NEXT.JS, VUE" /></a>
        <CardBlock logo="design icon.svg" h="Разработка дизайна" p="Создание макетов. UX/UI дизайн" />
      </div>

      <div className="grid grid-cols-3 gap-4 col-span-2 justify-center mx-auto mt-[-132px] block-card t-card wow animate__animated animate__fadeInUp">
        <Card logo="bot-icon.svg" h="Разработка Telegram ботов" p="Разработка чат-ботов любой сложности" />
        <Card logo="scraping.svg" h="Парсинг данных" p="Парсинг нужных вам открытых данных для анализа" />
        <a style={{ width: '100%' }} href="/webdev"><Card logo="laptop-icon.svg" h="Разработка сайтов на Tilda" p="Быстрая и недорогая разработка сайтов на Тильде" /></a>
        <a style={{ width: '100%' }} href="/webdev"><Card logo="noun-business-card-7120895 2.svg" h="Digital визитки" p="Как сайты визитки, но не только в web-формате" /></a>
        <Card logo="Vector.svg" h="Интеграция сервисов" p="Интегрируем нужные вам сервисы для удобной работы" />
        <Card logo="laptop-icon.svg" h="E-Commerce" p="Сделаем интернет-магазин не только на сайте, но и в Telegram" />
      </div>
    </div>
  );

  const mobileContent = (
    <div className="max-w-[1240px] w-full self-center clider-adap">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 200,
          modifier: 1.5,

        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <a style={{ width: '105%' }} href="/webdev">
          <CardBlock logo="frameworks.svg" h="Разработка сайтов на фреймворках" p="Разработка сайтов на современных фреймворках. FastApi, NEXT.JS, VUE" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <CardBlock logo="design icon.svg" h="Разработка дизайна" p="Создание макетов. UX/UI дизайн" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="bot-icon.svg" h="Разработка Telegram ботов" p="Разработка чат-ботов любой сложности" />
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="scraping.svg" h="Парсинг данных" p="Парсинг нужных вам открытых данных для анализа" />
        </SwiperSlide>
        <SwiperSlide>
        <a style={{ width: '105%' }} href="/webdev">
          <Card logo="laptop-icon.svg" h="Разработка сайтов на Tilda" p="Быстрая и недорогая разработка сайтов на Тильде" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a style={{ width: '105%' }} href="/webdev">
          <Card logo="noun-business-card-7120895 2.svg" h="Digital визитки" p="Как сайты визитки, но не только в web-формате" />
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <Card logo="Vector.svg" h="Интеграция сервисов" p="Интегрируем нужные вам сервисы для удобной работы" />
        </SwiperSlide>
        <SwiperSlide>
        <a style={{ width: '105%' }} href="/webdev">
          <Card logo="laptop-icon.svg" h="E-Commerce" p="Сделаем интернет-магазин не только на сайте, но и в Telegram" />
        </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );

  return isMobile ? mobileContent : desktopContent;
};

export default Cards;
