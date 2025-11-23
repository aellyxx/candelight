"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center">
            <span className="text-white text-xs">🕯️</span>
          </div>
          <span className="font-serif font-semibold text-white">Candlelight</span>
        </div>
        <p className="text-xs text-white text-center sm:text-right">
          © {currentYear} Candlelight. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
