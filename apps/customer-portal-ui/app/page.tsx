import LinkButton from "@/components/LinkButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <div className="text-white w-full h-full px-0 flex flex-col items-center justify-center md:gap-16 md:flex-row md:px-16  bg-gradient-to-r from-violet-700 to-sky-600 ">
        <div className="flex flex-col gap-6 items-center md:items-start md:gap-12 ">
          <h1 className="text-2xl">Professional resume builder</h1>
          <div className="max-w-96 font-medium border-l-4 border-violet-900 pl-4 space-y-2 md:max-w-full">
            <p>Build best looking resume in minutes!</p>
            <p>Only 2% of resumes win. Yours will be one of them. Lets build you a resume that works.</p>
            <p>Use best industry templates</p>
            <p>2.99$ monthly - no hidden costs</p>
            <p>Change your job search game with Resumex!</p>
          </div>
          <div className="w-full flex justify-center">
            <LinkButton text={"Create now!"} href="/dashboard" />
          </div>
        </div>
        <div className="max-w-xl">
          <Image className="w-[100%] md:w-[440px] h-auto" src={"/hero-1.jpg"} alt="hero-1" width={450} height={0} />
        </div>
      </div>
    </div>

  );
}
