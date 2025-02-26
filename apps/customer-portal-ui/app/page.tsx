import BaseButton from "@/components/BaseButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 md:gap-48">
      <div className="bg-green-300 font-medium">
        <div className="p-16 flex flex-row gap-2">
          <div className="basis-1/2">
            <h1 className="text-2xl">Professional resume builder</h1>
            <p>Build best looking resume in minutes!</p>
            <p>Only 2% of resumes win. Yours will be one of them. Lets build you a resume that works.</p>
          </div>
          <div className="basis-1/2 flex justify-center items-center">
            <BaseButton></BaseButton>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-2xl">Get hired fast with a powerful resume</p>
      </div>
    </div>
  );
}
