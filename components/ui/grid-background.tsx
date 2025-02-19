export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-20 h-full w-full bg-black">
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(105, 95, 226, 0.15) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  )
}

