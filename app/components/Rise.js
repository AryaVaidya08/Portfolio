// Splits text into per-letter spans that rise into place; words stay unbroken.
export default function Rise({ text, start = 0, step = 14 }) {
  let n = start;
  return (
    <>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="word">
          {[...word].map((ch, ci) => (
            <span key={ci} className="letter" style={{ animationDelay: `${Math.min(n++, 140) * step}ms` }}>
              {ch}
            </span>
          ))}
          {" "}
        </span>
      ))}
    </>
  );
}
