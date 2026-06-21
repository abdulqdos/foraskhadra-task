import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  function getPageNumbers(): (number | "ellipsis")[] {
    const pages: (number | "ellipsis")[] = []
    const delta = 1

    const rangeStart = Math.max(2, currentPage - delta)
    const rangeEnd = Math.min(totalPages - 1, currentPage + delta)

    pages.push(1)

    if (rangeStart > 2) {
      pages.push("ellipsis")
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i)
    }

    if (rangeEnd < totalPages - 1) {
      pages.push("ellipsis")
    }

    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pages = getPageNumbers()

  return (
    <nav dir="ltr" className="flex items-center justify-center gap-1">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex size-9 items-center justify-center rounded-lg border border-gray-200 text-sm transition-colors",
          currentPage === 1
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-600 hover:border-primary-green hover:text-primary-green"
        )}
      >
        <FiChevronLeft className="size-4" />
      </button>

      {pages.map((page, idx) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${idx}`} className="flex size-9 items-center justify-center text-sm text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={cn(
              "flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-colors",
              page === currentPage
                ? "bg-primary-green text-white shadow-sm"
                : "border border-gray-200 text-gray-600 hover:border-primary-green hover:text-primary-green"
            )}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex size-9 items-center justify-center rounded-lg border border-gray-200 text-sm transition-colors",
          currentPage === totalPages
            ? "cursor-not-allowed text-gray-300"
            : "text-gray-600 hover:border-primary-green hover:text-primary-green"
        )}
      >
         <FiChevronRight className="size-4" />
        
      </button>
    </nav>
  )
}
