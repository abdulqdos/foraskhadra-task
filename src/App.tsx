import { useState } from 'react'
import { HiOutlineMenu, HiOutlineGlobeAlt } from 'react-icons/hi'
import './App.css'
import  greenLogo  from './assets/logo/green.png'  


function App() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name))
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  return (
    <>
      <header className="navbar-header">
        <div className="top-banner">
          <button
            className="mobile-menu-btn"
            type="button"
            onClick={closeDropdown}
            aria-label="menu"
          >
            <HiOutlineMenu size={24} />
          </button>

          <div className="logo">
            <img src={greenLogo} alt="شعار المنصة" />
          </div>

          <div className="auth-section d-flex gap-2 align-items-center">
            <div className="custom-dropdown">
              <button
                className="nav-btn"
                type="button"
                onClick={() => toggleDropdown('loginMenu')}
              >
                تسجيل الدخول
              </button>

              {openDropdown === 'loginMenu' && (
                <div className="dropdown-list">
                  <a
                    style={{ justifyContent: 'center' }}
                    href="/Account/Login"
                    onClick={closeDropdown}
                  >
                    للفرد
                  </a>
                  <a
                    style={{ justifyContent: 'center' }}
                    href="/Organization/Login"
                    onClick={closeDropdown}
                  >
                    للمنظمة
                  </a>
                </div>
              )}
            </div>

            <div className="custom-dropdown">
              <button
                className="nav-btn nav-btn--yellow"
                type="button"
                onClick={() => toggleDropdown('registerMenu')}
              >
                إنشاء حساب
              </button>

              {openDropdown === 'registerMenu' && (
                <div className="dropdown-list">
                  <a href="/Account/RegisterUser" onClick={closeDropdown}>
                    للفرد
                  </a>
                  <a href="/Organization/Register" onClick={closeDropdown}>
                    للمنظمة
                  </a>
                </div>
              )}
            </div>

            <div className="custom-dropdown" style={{ background: 'none' }}>
              <button
                className="nav-btn nav-btn--icon"
                type="button"
                onClick={() => toggleDropdown('langMenu')}
                aria-label="Languages"
              >
                <HiOutlineGlobeAlt size={26} />
              </button>

              {openDropdown === 'langMenu' && (
                <div className="dropdown-list">
                  <a
                    href="/Language/Change?culture=ar&returnUrl=%2FHome%2FAllOpportunities"
                    onClick={closeDropdown}
                  >
                    <HiOutlineGlobeAlt size={22} />
                    <span>Arabic</span>
                  </a>

                  <a
                    href="/Language/Change?culture=en&returnUrl=%2FHome%2FAllOpportunities"
                    onClick={closeDropdown}
                  >
                    <HiOutlineGlobeAlt size={22} />
                    <span>English</span>
                  </a>

                  <a
                    href="/Language/Change?culture=fr&returnUrl=%2FHome%2FAllOpportunities"
                    onClick={closeDropdown}
                  >
                    <HiOutlineGlobeAlt size={22} />
                    <span>French</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="nav-content" id="navContent">            
           

            <div className="menu-items">
              <a onClick={closeDropdown} href="/">
                الرئيسية
              </a>

              <a onClick={closeDropdown} href="/Home/Articles">
                المقالات
              </a>

              <a onClick={closeDropdown} href="/Home/News">
                نشاطاتنا
              </a>

              <div className="custom-dropdown">
                <button
                  className="nav-btn"
                  style={{
                    backgroundColor: 'var(--primary-1)',
                    color: '#fff',
                  }}
                  type="button"
                  onClick={() => toggleDropdown('opportunitiesDropdown')}
                >
                  الفرص
                </button>

                {openDropdown === 'opportunitiesDropdown' && (
                  <div className="dropdown-list">
                    <a href="/Home/AllOpportunities" onClick={closeDropdown}>
                      كل الفرص
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Competitions"
                      onClick={closeDropdown}
                    >
                      المسابقات
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Conferences"
                      onClick={closeDropdown}
                    >
                      المؤتمرات
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Volunteering"
                      onClick={closeDropdown}
                    >
                      فرص التطوع
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Jobs"
                      onClick={closeDropdown}
                    >
                      الوظائف
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Scholarships"
                      onClick={closeDropdown}
                    >
                      المنح
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Fellowships"
                      onClick={closeDropdown}
                    >
                      الزمالات
                    </a>

                    <a
                      href="/Home/AllOpportunities?type=Internships"
                      onClick={closeDropdown}
                    >
                      فرص التدريب
                    </a>
                  </div>
                )}
              </div>

              <a onClick={closeDropdown} href="/Home/OrganizationsMap">
                شبكة المنظمات
              </a>

              <a onClick={closeDropdown} href="/Home/AboutUs">
                من نحن
              </a>

              <a onClick={closeDropdown} href="/Contact">
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App