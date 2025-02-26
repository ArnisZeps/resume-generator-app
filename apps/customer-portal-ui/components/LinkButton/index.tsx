import ILinkButtonProps from "@/interfaces/ILinkButtonProps";

export default function LinkButton({ text, href }: ILinkButtonProps) {
  return (
    <a href={href}>
      <button className="bg-white text-xs hover:bg-neutral-300 text-black flex items-center gap-2 px-5 py-3 rounded-3xl font-medium">{text}</button>
    </a>
  );
}
