import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { OpportunitySearch } from "./components/opportunity-search";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OpportunitySearch />
      <main className="mx-auto max-w-7xl px-6 py-20">
        {/* Opportunity to add your content here. */}
        
      </main>
    </div>
  )
}