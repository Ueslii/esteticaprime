export function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block bg-yellow-400/20 text-yellow-400 text-sm px-3 py-1 rounded-full border border-yellow-400/30">
      {text}
    </span>
  );
}
