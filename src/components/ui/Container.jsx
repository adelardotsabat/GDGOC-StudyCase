export default function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-page px-5 md:px-8 min-[1312px]:px-0 ${className}`}>
      {children}
    </div>
  )
}