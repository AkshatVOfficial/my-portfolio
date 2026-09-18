export function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-[0.35] animate-grid-pan" />

      <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full bg-accent/[0.14] blur-[120px]" />
      <div className="absolute top-[45%] -right-40 w-[30rem] h-[30rem] rounded-full bg-accent/[0.10] blur-[130px]" />

      <div className="absolute inset-0 bg-grain" />
    </div>
  )
}
