export function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-border bg-surface/60 p-4 flex items-start gap-3">
      <div className="grid place-items-center w-9 h-9 rounded-lg bg-accent/10 text-accent shrink-0">
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted mb-0.5">{label}</p>
        <p className="text-sm font-medium truncate">{value}</p>
      </div>
    </div>
  )
}
