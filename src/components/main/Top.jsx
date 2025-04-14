import React from 'react';
import Image from 'next/image';

const Top = () => {
    return (
        <div className="flex justify-between items-center mt-3 w-full justify-self-start top-justi">
            <div className='bg-block'>
                <div className="elipse_1 rounded-[100%]"></div>
                <div className="elipse_2 rounded-[100%]"></div>
                <div className="elipse_3 rounded-[100%]"></div>
                <div className="elipse_4 rounded-[100%]"></div>
            </div>
            <div className="flex justify-self-center self-start mt-40 ml-28 flex-col top-block w-[554px] adap-content animate__animated animate__fadeInLeft">

                <h1 className="text-[64px] leading-none text-top">
                    <span className="text-orange">IT-аутсорсинг</span>, который работает для вас
                </h1>
                <p className="mt-12 text-[#777B8A]">
                    Что разработать нужно вам — поручить уж лучше нам!
                </p>
            </div>
            <Image
                alt="picture"
                src="/picture.png"
                className="justify-self-end top-image"
                width={853}
                height={751}
                style={{ objectFit: "contain" }}
            />
        </div>
    );
};
export default Top;