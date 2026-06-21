import { FiClock, FiMapPin } from "react-icons/fi"
import type { Opportunity } from "@/../types/Opportunity"
import { fundingLabels, fundingColors, statusColors } from "../../data/opportunity"
import {
  CardEvent,
  CardEventTitle,
  CardEventContent,
  CardEventFooter,
} from "@/components/ui/card-event"
import { cn } from "@/lib/utils"

const typeLabels: Record<string, string> = {
  Internship: "فرصة تدريب",
  Volunteering: "فرصة تطوع",
  Competition: "مسابقة",
  Conference: "مؤتمر",
  Fellowship: "زمالة",
}

function formatDate(iso: string): string {
  const date = new Date(iso)
  return date.toLocaleDateString("ar-SA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <CardEvent className="group overflow-hidden text-right z-1">
      <div className="relative aspect-[8/5] overflow-hidden">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute right-3 top-3 rounded-full border px-2.5 py-0.5 text-xs font-medium",
            fundingColors[opportunity.funding]
          )}
        >
          {fundingLabels[opportunity.funding]}
        </span>
      </div>

      <CardEventContent className="space-y-1 pt-3">
        <span className="inline-block rounded bg-secondary-green/20 px-2 py-0.5 text-xs font-medium text-primary-green">
          {typeLabels[opportunity.type]}
        </span>

        <CardEventTitle className="line-clamp-2 text-base leading-snug">
          {opportunity.title}
        </CardEventTitle>

        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <FiMapPin className="size-3.5 shrink-0" />
          <span>{opportunity.organization}</span>
          <span className="mx-1 text-gray-300">|</span>
          <FiMapPin className="size-3.5 shrink-0" />
          <span>{opportunity.country}</span>
        </div>
      </CardEventContent>

      <CardEventFooter className="flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <FiClock className="size-3.5 shrink-0" />
          <span>{formatDate(opportunity.deadline)}</span>
        </div>
        <span
          className={cn(
            "rounded-full px-2.5 py-0.5 text-xs font-medium",
            statusColors[opportunity.status]
          )}
        >
          {opportunity.status === "Open"
            ? "مفتوح"
            : opportunity.status === "Closing Soon"
              ? "يغلق قريباً"
              : "مغلق"}
        </span>
      </CardEventFooter>
    </CardEvent>
  )
}
