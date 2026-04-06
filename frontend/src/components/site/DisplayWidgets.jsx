export function EnergyBar({ level = 8 }) {
  return (
    <div className="energy-bar">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`energy-segment ${index < level ? "filled" : "empty"}`}
        />
      ))}
    </div>
  );
}

export function ProgressBar({ value, color = "#00FF41" }) {
  const segments = 10;
  const filledSegments = Math.round((value / 100) * segments);

  return (
    <div className="flex gap-[2px] h-3 w-full">
      {[...Array(segments)].map((_, index) => (
        <div
          key={index}
          className="flex-1"
          style={{
            backgroundColor: index < filledSegments ? color : "transparent",
            border: `1px solid ${color}`,
          }}
        />
      ))}
    </div>
  );
}
