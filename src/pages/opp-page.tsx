import { useState, useEffect } from "react"
import type { Opportunity } from "../../types/Opportunity"
import { OpportunityCard } from "../components/opportunity-card"
import { Pagination } from "@/components/ui/pagination"

const PAGE_SIZE = 9

interface OppPageProps {
  opportunities: Opportunity[]
}

export function OppPage({ opportunities }: OppPageProps) {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(opportunities.length / PAGE_SIZE)
  const start = (page - 1) * PAGE_SIZE
  const paged = opportunities.slice(start, start + PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [opportunities])

  function handlePageChange(newPage: number) {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="relative z-0 mx-auto max-w-7xl px-6 pb-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {paged.map((opp) => (
          <OpportunityCard key={opp.id} opportunity={opp} />
        ))}
      </div>

      {opportunities.length === 0 && (
        <p className="py-20 text-center text-gray-400">لا توجد فرص متاحة حالياً</p>
      )}

      {opportunities.length > 0 && (
        <div className="mt-10 flex justify-center">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  )
}
