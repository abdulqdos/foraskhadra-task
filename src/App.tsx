import { useState } from "react"
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { OpportunitySearch } from "./components/opportunity-search";
import { OppPage } from "./pages/opp-page";
import { opportunities } from "../data/opportunity"
import type { Opportunity } from "../types/Opportunity"
import "./index.css";

const typeKeyToValue: Record<string, string> = {
  internship: "Internship",
  volunteering: "Volunteering",
  competitions: "Competition",
  conferences: "Conference",
  fellowships: "Fellowship",
}

function filterOpportunities(
  all: Opportunity[],
  name: string,
  country: string,
  types: string[]
): Opportunity[] {
  return all.filter((opp) => {
    if (name && !opp.title.includes(name)) return false
    if (country && !opp.country.includes(country)) return false
    if (types.length > 0) {
      const mapped = types.map((k) => typeKeyToValue[k])
      if (!mapped.includes(opp.type)) return false
    }
    return true
  })
}

export default function App() {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [types, setTypes] = useState<string[]>([])
  const [searched, setSearched] = useState(false)

  const filtered = searched
    ? filterOpportunities(opportunities, name, country, types)
    : opportunities

  function handleSearch(n: string, c: string, t: string[]) {
    setName(n)
    setCountry(c)
    setTypes(t)
    setSearched(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OpportunitySearch onSearch={handleSearch} />
      <main>
        <OppPage opportunities={filtered} />
      </main>
    </div>
  )
}