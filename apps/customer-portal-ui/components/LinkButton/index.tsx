import ILinkButtonProps from "@/interfaces/ILinkButtonProps";

export default function LinkButton({ text, href }: ILinkButtonProps) {
  return (
    <a href={href}>
      <button className="bg-white text-md hover:bg-violet-200 text-black flex items-center gap-2 px-10 py-5 rounded-3xl font-medium">{text}</button>
    </a>
  );
}
