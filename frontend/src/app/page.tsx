import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center p-6">
        <Image alt="Logo do Instituto Incentive" src={"/logo.svg"} width={200} height={200}/>
        <h1 className="text-3xl font-bold mt-3 mb-3">Instituto Incentive</h1>
        <p className="max-w-[600px] font-normal text-justify">O <strong>Instituto Incentive</strong> de Inovação, Desenvolvimento e Transformação Social é uma organização da sociedade civil sem fins lucrativos, dedicada à promoção da inclusão social, inovação e desenvolvimento sustentável. Fundado em 2001, o Instituto atua em diversas frentes para fortalecer comunidades, reduzir desigualdades e criar oportunidades para pessoas em situação de vulnerabilidade social.</p>
      </div>
    </div>
  );
}
