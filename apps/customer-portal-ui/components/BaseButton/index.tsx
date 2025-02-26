import IButtonProps from "@/interfaces/IBaseButtonProps";

export default function BaseButton({ text }: IButtonProps) {
  return (
    <button className="bg-white text-xs hover:bg-neutral-300 text-black flex items-center gap-2 px-5 py-3 rounded-3xl font-medium">
      {text}
    </button>
  );
}
