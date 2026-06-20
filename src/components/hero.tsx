import bg from "@/assets/background.jpg"

export function Hero() {
  return (
    <section
      className="relative flex min-h-[30vh] items-center justify-center bg-cover bg-center border border-gray-300 rounded-xl mx-10 my-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-3xl px-4 text-center text-white">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          منصة فراس الخضراء
        </h1>
        <p className="mt-6 text-lg md:text-2xl">
          منصة عربية متخصصة في الاستثمار الزراعي المستدام، نربط بين المستثمرين
          والفرص الواعدة في القطاع الزراعي
        </p>
      </div>
    </section>
  )
}
