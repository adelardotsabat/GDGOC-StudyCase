function ErrorState({ error, onRetry }) {
  return (
    <div role="alert" className="rounded-card border border-line p-8 text-center">
      <p className="text-lg font-bold">Something went wrong</p>
      <p className="mt-2 text-body">{error?.message ?? 'Please try again.'}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 h-11 rounded-btn bg-brand px-5 font-medium text-white hover:opacity-90"
      >
        Try again
      </button>
    </div>
  )
}

function EmptyState({ message }) {
  return (
    <div className="rounded-card border border-dashed border-line p-8 text-center text-body">
      {message}
    </div>
  )
}

export default function DataState({
  loading,
  error,
  data,
  onRetry,
  skeleton,
  emptyMessage = 'Nothing to show yet.',
  children,
}) {
  if (loading) return skeleton
  if (error) return <ErrorState error={error} onRetry={onRetry} />
  if (!data || data.length === 0) return <EmptyState message={emptyMessage} />
  return children(data)
}