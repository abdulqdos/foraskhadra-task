"use client"

import { useState, useRef, useEffect } from "react"
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiGlobe,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi"
import whiteLogo from "@/assets/logo/green.png";
import type { DropdownItem } from "@/../types/DropdownItem";
import { navLinks } from "@/../data/navLinks"
import { authItems } from "@/../data/navLinks"
import { languages } from "@/../data/language"

function useClickOutside(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [onClose])
  return ref
}

function DesktopDropdown({
  label,
  items,
  icon,
  variant = "link",
  withArrow = true,
}: {
  label: string
  items: DropdownItem[]
  icon?: React.ReactNode
  variant?: "link" | "outline" | "solid"
  withArrow?: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside(() => setOpen(false))

  const triggerClasses =
    variant === "solid"
      ? "bg-primary-orange text-white hover:brightness-105 shadow-sm"
      : variant === "outline"
        ? "border border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
        : "text-primary-black hover:bg-secondary-green/40 hover:text-primary-green"

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 ${triggerClasses}`}
      >
        {icon}
        <span>{label}</span>
        {withArrow && (
          <FiChevronDown
            className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </button>
      <div
        role="menu"
        className={`absolute start-0 z-50 mt-2 min-w-44 origin-top rounded-2xl border border-border bg-card p-1.5 shadow-lg transition-all duration-200 ${open
          ? "visible translate-y-0 scale-100 opacity-100"
          : "invisible -translate-y-1 scale-95 opacity-0"
          }`}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href ?? "#"}
            role="menuitem"
            className="flex items-center gap-4 rounded-xl px-3 py-2 text-sm text-primary-black transition-colors duration-150 hover:bg-secondary-green/40 hover:text-primary-green"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  const toggleSection = (key: string) =>
    setMobileSection((cur) => (cur === key ? null : key))

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-border bg-card/95 px-4 shadow-md backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left cluster: hamburger (desktop) + auth + language */}
          <div className="flex items-center gap-2">
            {/* Desktop hamburger for consistency */}

            <div className="hidden items-center gap-1.5 lg:flex">
              <DesktopDropdown
                label=""
                items={languages}
                icon={<FiGlobe className="size-4" />}
                variant="link"
                withArrow={false}
              />

              <DesktopDropdown
                label="دخول"
                items={authItems}
                icon={<FiLogIn className="size-4" />}
                variant="outline"
              />

              <DesktopDropdown
                label="تسجيل"
                items={authItems}
                icon={<FiUserPlus className="size-4" />}
                variant="solid"
              />

            </div>

            {/* Mobile logo (left) */}
            <div className="lg:hidden">
              <img src={whiteLogo} alt="Logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Center: nav links (desktop) */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DesktopDropdown
                  key={link.label}
                  label={link.label}
                  items={link.dropdown}
                  withArrow={true}
                />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-xl px-3.5 py-2 text-xs font-medium transition-all duration-200 ${link.active
                    ? "bg-primary-green text-white shadow-sm"
                    : "text-primary-black hover:bg-secondary-green/40 hover:text-primary-green"
                    }`}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          {/* Right: logo (desktop) + mobile hamburger */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <img src={whiteLogo} alt="Logo" className="h-8 w-auto" />
            </div>
            <button
              type="button"
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-xl p-2 text-primary-black transition-colors hover:bg-secondary-green/40 hover:text-primary-green lg:hidden"
            >
              {mobileOpen ? (
                <FiX className="size-6" />
              ) : (
                <FiMenu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="space-y-1 border-t border-border py-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col items-center">

                  <button
                    type="button"
                    onClick={() => toggleSection(link.label)}
                    aria-expanded={mobileSection === link.label}
                    className="flex w-full items-center justify-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-primary-black transition-colors hover:bg-secondary-green/40 hover:text-primary-green"                  >
                    <span>{link.label}</span>
                    <FiChevronDown
                      className={`size-4 transition-transform duration-200 ${mobileSection === link.label ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileSection === link.label
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="space-y-0.5 ps-4 pt-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href ?? "#"}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-primary-black transition-colors hover:bg-secondary-green/40 hover:text-primary-green"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${link.active
                    ? "bg-primary-green text-white"
                    : "text-primary-black hover:bg-secondary-green/40 hover:text-primary-green"
                    }`}
                >
                  {link.label}
                </a>
              ),
            )}

            {/* Mobile auth + language */}
            <div className="mt-2 space-y-3 border-t border-border pt-3">
              <MobileGroup
                title="دخول"
                icon={<FiLogIn className="size-4" />}
                items={authItems}
                onSelect={() => setMobileOpen(false)}
              />
              <MobileGroup
                title="تسجيل"
                icon={<FiUserPlus className="size-4" />}
                items={authItems}
                onSelect={() => setMobileOpen(false)}
              />
              <MobileGroup
                title="اللغة"
                icon={<FiGlobe className="size-4" />}
                items={languages}
                onSelect={() => setMobileOpen(false)}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


function MobileGroup({
  title,
  icon,
  items,
  onSelect,
}: {
  title: string
  icon: React.ReactNode
  items: DropdownItem[]
  onSelect: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-primary-black transition-colors hover:bg-secondary-green/40 hover:text-primary-green"
      >
        <span className="flex items-center gap-2">
          {icon}
          {title}
        </span>

        <FiChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-1 ps-4 pt-1">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href ?? "#"}
              onClick={onSelect}
              className="block rounded-lg px-3 py-2 text-sm text-primary-black transition-colors hover:bg-secondary-green/40 hover:text-primary-green"
            >
              {item.icon && <span className="me-2">{item.icon}</span>}
              {item.label}

            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
