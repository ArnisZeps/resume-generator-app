import LinkButton from "@/components/LinkButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:gap-48">
      <div className="bg-stone-200 font-medium">
        <div className="px-0 flex flex-col items-center max-w-7xl mx-auto md:gap-16 md:flex-row md:place-items-center md:px-16">
          <div className="flex py-10 flex-col gap-6 items-center md:items-start md:gap-12">
            <h1 className="text-2xl">Professional resume builder</h1>
            <div className="max-w-96 font-medium border-l-4 border-black pl-4 space-y-2 md:max-w-full">
              <p>Build best looking resume in minutes!</p>
              <p>Only 2% of resumes win. Yours will be one of them. Lets build you a resume that works.</p>
              <p>Use best templates</p>
              <p>Cheap price - 4.99$ monthly</p>
              <p>Change your job search game with Resumex!</p>
            </div>
            <div className="w-full flex justify-center">
              <LinkButton text={"Create now!"} href="http://www.google.com" />
            </div>
          </div>
          <div className="max-w-xl">
            <Image className="w-[100%] md:w-[450px] h-auto" src={"/hero-1.jpg"} alt="hero-1" width={450} height={0} />
          </div>
        </div>
      </div>
    </div>
  );
}
