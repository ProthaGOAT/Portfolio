import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      className={`flex w-full rounded-2xl border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-[#91D4FC] dark:border-gray-700 dark:bg-gray-900 dark:ring-offset-gray-900 dark:focus:ring-[#3B0060] ${className}`}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"
export { Input }
