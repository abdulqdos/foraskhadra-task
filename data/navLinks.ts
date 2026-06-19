import type { DropdownItem } from "@/../types/DropdownItem";

export const navLinks = [
  { label: "الرئيسية", href: "#", active: true },
  { label: "المقالات", href: "#" },
  { label: "نشاطاتنا", href: "#" },
  {
    label: "الفرص",
    href: "#",
    dropdown: [
      { label: "كل الفرص" },
      { label: "المسابقات" },
      { label: "المؤتمرات" },
      { label: "فرص التطوع" },
      { label: "الوظائف" },
      { label: "المنح" },
      { label: "الزمالات" },
      { label: "فرص التدريب" },
    ] as DropdownItem[],
  },
  { label: "شبكة المنظمات", href: "#" },
  { label: "من نحن", href: "#" },
  { label: "تواصل معنا", href: "#" },
]

export const authItems: DropdownItem[] = [{ label: "للفرد" }, { label: "للمنظمة" }]