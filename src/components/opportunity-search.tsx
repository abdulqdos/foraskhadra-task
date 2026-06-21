import { useState, useRef, useEffect } from "react"
import { FiSearch, FiChevronDown } from "react-icons/fi"

const opportunityTypes = [
  { label: "فرص التدريب", key: "internship" },
  { label: "فرص التطوع", key: "volunteering" },
  { label: "المسابقات", key: "competitions" },
  { label: "المؤتمرات", key: "conferences" },
  { label: "الزمالات", key: "fellowships" },
]

interface OpportunitySearchProps {
  onSearch: (name: string, country: string, types: string[]) => void
}

export function OpportunitySearch({ onSearch }: OpportunitySearchProps) {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function toggleType(key: string) {
    setSelectedTypes((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  function handleSearch() {
    onSearch(name, country, selectedTypes)
  }

  const selectedLabels = selectedTypes.length
    ? selectedTypes.map((k) => opportunityTypes.find((t) => t.key === k)?.label).join("، ")
    : "اختر النوع"

  return (
    <section className="relative z-50 mx-auto max-w-7xl px-6 py-6 pb-3">
      <div className="rounded-2xl border border-border bg-card/95 p-4 shadow-md backdrop-blur">
        <div className="flex flex-wrap items-end gap-3">
          <div className="min-w-0 flex-1">
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اكتب اسم الفرصة..."
                className="w-full rounded-xl border border-border bg-white px-3 py-2 pr-8 text-sm text-primary-black outline-none transition-colors focus:border-primary-green focus:ring-1 focus:ring-primary-green"
              />
              <FiSearch className="absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="relative">
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="اكتب اسم الدولة..."
                className="w-full rounded-xl border border-border bg-white px-3 py-2 pr-8 text-sm text-primary-black outline-none transition-colors focus:border-primary-green focus:ring-1 focus:ring-primary-green"
              />
              <FiSearch className="absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div ref={dropdownRef} className="relative min-w-0 flex-1">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-white px-3 py-2 text-sm text-primary-black outline-none transition-colors focus:border-primary-green focus:ring-1 focus:ring-primary-green"
            >
              <span className="truncate">{selectedLabels}</span>
              <FiChevronDown
                className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                  }`}
              />
            </button>
            {isOpen && (
              <div className="absolute left-0 z-99 mt-1 w-full rounded-xl border border-border bg-white shadow-lg">
                {opportunityTypes.map((type) => (
                  <label
                    key={type.key}
                    className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-primary-black transition-colors hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type.key)}
                      onChange={() => toggleType(type.key)}
                      className="size-4 accent-primary-green"
                    />
                    {type.label}
                  </label>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center gap-2 rounded-xl bg-primary-green px-6 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:brightness-105"
          >
            <FiSearch className="size-4" />
            بحث
          </button>
        </div>
      </div>
    </section>
  )
}
