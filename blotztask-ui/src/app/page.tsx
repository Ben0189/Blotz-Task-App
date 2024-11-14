import { P } from '@/components/ui/heading-with-anchor';

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <p className="w-[679px] h-[60px] absolute top-[197px] left-[402px] font-arial text-[32px] font-bold leading-[48px] tracking-[-0.41px] text-center text-[#278291]">
        Welcome to the new age note taking web
      </p>
      <img
        src="/assets/images/homePageNewPicture.png"
        alt="an incredable image"
        className="w-[849px] h-[350px] absolute top-[305px] left-[296px]"
      />
    </main>
  );
}
