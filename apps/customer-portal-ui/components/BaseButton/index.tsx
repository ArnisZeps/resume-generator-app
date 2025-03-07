import IButtonProps from "@/interfaces/IBaseButtonProps";

export default function BaseButton({ text, dark, type, onClick }: IButtonProps) {
  const buttonColour = dark ? "bg-gray-800" : "bg-white";
  const textColour = dark ? "text-white" : "text-black";
  return (
    <button type={type}  onClick={onClick} className={`${buttonColour} hover:bg-neutral-300 ${textColour} flex items-center gap-2 px-10 py-5 rounded-3xl font-medium `}>
      {text}
    </button>
  );
}
