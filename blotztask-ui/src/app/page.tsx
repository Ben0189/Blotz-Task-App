export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <p className="mb-6 font-arial text-[32px] font-bold leading-[48px] tracking-[-0.41px] text-center text-[#278291]">
        Welcome to the new age note taking web
      </p>
      <img
        src="/assets/images/homePageNewPicture.png"
        alt="an incredable image"
        width={600}
        height={400}
      />
    </main>
  );
}
