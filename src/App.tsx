import { useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import "tailwindcss";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [opportunitiesOpen, setOpportunitiesOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Mobile Menu */}
        <button
          className="lg:hidden"
          aria-label="Menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Logo */}
        <div>
          <img
            src="/images/logo.png"
            alt="شعار المنصة"
            className="h-12"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">

          <a href="/" className="hover:text-green-700">
            الرئيسية
          </a>

          <a href="/Home/Articles" className="hover:text-green-700">
            المقالات
          </a>

          <a href="/Home/News" className="hover:text-green-700">
            نشاطاتنا
          </a>

          {/* Opportunities Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpportunitiesOpen(!opportunitiesOpen)}
              className="flex items-center gap-1 rounded bg-green-700 px-4 py-2 text-white"
            >
              الفرص
              <ChevronDownIcon className="h-4 w-4" />
            </button>

            {opportunitiesOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow-lg">
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities">
                  كل الفرص
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Competitions">
                  المسابقات
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Conferences">
                  المؤتمرات
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Volunteering">
                  فرص التطوع
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Jobs">
                  الوظائف
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Scholarships">
                  المنح
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Fellowships">
                  الزمالات
                </a>
                <a className="block px-4 py-2 hover:bg-gray-100" href="/Home/AllOpportunities?type=Internships">
                  فرص التدريب
                </a>
              </div>
            )}
          </div>

          <a href="/Home/OrganizationsMap" className="hover:text-green-700">
            شبكة المنظمات
          </a>

          <a href="/Home/AboutUs" className="hover:text-green-700">
            من نحن
          </a>

          <a href="/Contact" className="hover:text-green-700">
            تواصل معنا
          </a>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-3">

          {/* Login */}
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="rounded border px-4 py-2"
            >
              تسجيل الدخول
            </button>

            {loginOpen && (
              <div className="absolute left-0 mt-2 w-40 rounded-lg border bg-white shadow-lg">
                <a
                  href="/Account/Login"
                  className="block px-4 py-2 text-center hover:bg-gray-100"
                >
                  للفرد
                </a>

                <a
                  href="/Organization/Login"
                  className="block px-4 py-2 text-center hover:bg-gray-100"
                >
                  للمنظمة
                </a>
              </div>
            )}
          </div>

          {/* Register */}
          <div className="relative">
            <button
              onClick={() => setRegisterOpen(!registerOpen)}
              className="rounded bg-yellow-400 px-4 py-2 font-medium"
            >
              إنشاء حساب
            </button>

            {registerOpen && (
              <div className="absolute left-0 mt-2 w-40 rounded-lg border bg-white shadow-lg">
                <a
                  href="/Account/RegisterUser"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  للفرد
                </a>

                <a
                  href="/Organization/Register"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  للمنظمة
                </a>
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="rounded p-2 hover:bg-gray-100"
            >
              🇵🇸
            </button>

            {langOpen && (
              <div className="absolute left-0 mt-2 w-44 rounded-lg border bg-white shadow-lg">
                <a
                  href="/Language/Change?culture=ar"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  🇵🇸 Arabic
                </a>

                <a
                  href="/Language/Change?culture=en"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  🇺🇸 English
                </a>

                <a
                  href="/Language/Change?culture=fr"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                >
                  🇫🇷 French
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}

export default App;