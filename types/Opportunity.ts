export type Opportunity = {
    id: string

    title: string
    organization: string

    type:
    | "Internship"
    | "Volunteering"
    | "Competition"
    | "Conference"
    | "Fellowship"

    country: string

    deadline: string // ISO Date

    funding:
    | "Fully Funded"
    | "Partially Funded"
    | "Self Funded"

    status:
    | "Open"
    | "Closing Soon"
    | "Closed"

    image: string

    description?: string
    applicationUrl?: string
}