export default function Button({ text }) {
  return (
    <div>
      <div className="font-bold text-xl mb-2 text-zinc-50">Interests</div>
      <p className="text-gray-700 text-xs">{text}</p>
    </div>
  );
}
