import type { Opportunity } from "../types/Opportunity";

const images = [
  "https://picsum.photos/seed/opp1/400/250",
  "https://picsum.photos/seed/opp2/400/250",
  "https://picsum.photos/seed/opp3/400/250",
  "https://picsum.photos/seed/opp4/400/250",
  "https://picsum.photos/seed/opp5/400/250",
  "https://picsum.photos/seed/opp6/400/250",
  "https://picsum.photos/seed/opp7/400/250",
  "https://picsum.photos/seed/opp8/400/250",
  "https://picsum.photos/seed/opp9/400/250",
  "https://picsum.photos/seed/opp10/400/250",
]

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "تدريب صيفي في جوجل",
    organization: "جوجل",
    type: "Internship",
    country: "ألمانيا",
    deadline: "2026-08-15",
    funding: "Fully Funded",
    status: "Open",
    image: images[0],
  },
  {
    id: "2",
    title: "برنامج متطوعي الشباب في الأمم المتحدة",
    organization: "الأمم المتحدة",
    type: "Volunteering",
    country: "تركيا",
    deadline: "2026-07-10",
    funding: "Partially Funded",
    status: "Open",
    image: images[1],
  },
  {
    id: "3",
    title: "تحدي الابتكار العالمي",
    organization: "البنك الدولي",
    type: "Competition",
    country: "الولايات المتحدة الأمريكية",
    deadline: "2026-09-01",
    funding: "Fully Funded",
    status: "Open",
    image: images[2],
  },
  {
    id: "4",
    title: "مؤتمر القادة المستقبليين",
    organization: "مركز الشباب",
    type: "Conference",
    country: "اليابان",
    deadline: "2026-08-30",
    funding: "Partially Funded",
    status: "Closing Soon",
    image: images[3],
  },
  {
    id: "5",
    title: "زمالة بحثية 2026",
    organization: "دااد",
    type: "Fellowship",
    country: "ألمانيا",
    deadline: "2026-10-20",
    funding: "Fully Funded",
    status: "Open",
    image: images[4],
  },
  {
    id: "6",
    title: "معسكر الشركات الناشئة",
    organization: "تكستارز",
    type: "Competition",
    country: "هولندا",
    deadline: "2026-07-05",
    funding: "Self Funded",
    status: "Closing Soon",
    image: images[5],
  },
  {
    id: "7",
    title: "تدريب بحثي في الذكاء الاصطناعي",
    organization: "مايكروسوفت",
    type: "Internship",
    country: "الولايات المتحدة الأمريكية",
    deadline: "2026-09-15",
    funding: "Fully Funded",
    status: "Open",
    image: images[6],
  },
  {
    id: "8",
    title: "مهمة الصليب الأحمر الإنسانية",
    organization: "الصليب الأحمر",
    type: "Volunteering",
    country: "كينيا",
    deadline: "2026-08-01",
    funding: "Partially Funded",
    status: "Open",
    image: images[7],
  },
  {
    id: "9",
    title: "تحدي تطبيقات الفضاء لناسا",
    organization: "ناسا",
    type: "Competition",
    country: "الولايات المتحدة الأمريكية",
    deadline: "2026-10-01",
    funding: "Fully Funded",
    status: "Open",
    image: images[8],
  },
  {
    id: "10",
    title: "قمة المنتدى الاقتصادي العالمي",
    organization: "المنتدى الاقتصادي العالمي",
    type: "Conference",
    country: "سويسرا",
    deadline: "2026-11-20",
    funding: "Partially Funded",
    status: "Open",
    image: images[9],
  },
];



const typeLabels: Record<string, string> = {
  Internship: "فرصة تدريب",
  Volunteering: "فرصة تطوع",
  Competition: "مسابقة",
  Conference: "مؤتمر",
  Fellowship: "زمالة",
}

export const fundingLabels: Record<string, string> = {
  "Fully Funded": "ممول بالكامل",
  "Partially Funded": "ممول جزئياً",
  "Self Funded": "تمويل ذاتي",
}

export const fundingColors: Record<string, string> = {
  "Fully Funded": "bg-primary-green/10 text-primary-green border-primary-green/30",
  "Partially Funded": "bg-secondary-blue/10 text-secondary-blue border-secondary-blue/30",
  "Self Funded": "bg-gray-100 text-gray-600 border-gray-300",
}

export const statusColors: Record<string, string> = {
  Open: "bg-primary-green/10 text-primary-green",
  "Closing Soon": "bg-primary-orange/10 text-primary-orange",
  Closed: "bg-red-50 text-red-500",
}