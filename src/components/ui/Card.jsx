import Image from "next/image";


const Card = ({ logo, h, p }) => {

    return (
        <div className="flex flex-col gap-2 cardblock items-center w-[100%] min-w-64 p-7 bg-[#112663] bg-opacity-85 rounded-xl h-[100%]">
            <div className="w-fit h-fit ">
                <Image src={`/${logo}`} width={76} height={70} alt="image"></Image>
            </div>
            <div className="text-center mt-3 text-[20px] font-bold h-card">{h}</div>
            <div className="text-center mt-3 text-[#A9A9A9] text-[16px] text-card">{p}</div>
        </div>
    );
};

export default Card;