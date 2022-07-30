export default function BottomText({ title, text }) {
  return (
    <div>
      <div className="font-bold text-xl mb-2 text-zinc-50">{title}</div>
      <p className="text-gray-500 text-xs">{text}</p>
    </div>
  );
}
