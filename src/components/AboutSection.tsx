import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"

const values = [
  { title: "Реальная история", description: "Спектакль основан на документальной книге — свидетельствах реальных людей, знавших отца Арсения" },
  { title: "Духовная глубина", description: "Фокус не на страданиях, а на внутренней жизни человека — вере, любви, стойкости духа" },
  { title: "Сильный режиссёр", description: "Постановка Алексея Свиридова — вдумчивый разговор о смысле жизни через живой театр" },
  { title: "Для широкой аудитории", description: "Спектакль понятен и верующим, и светской публике — это история о человеческом достоинстве" },
  { title: "Премьера в Пасху", description: "Первый показ прошёл 19 апреля 2026 года в рамках Епархиального Пасхального концерта-спектакля" },
  { title: "Живое переживание", description: "Театр как пространство встречи — с историей, с собой, с тем, что важно" },
]

const stats = [
  { number: "1937–53", label: "Годы репрессий" },
  { number: "19 апр", label: "Премьера 2026" },
  { number: "100%", label: "Реальные события" },
  { number: "∞", label: "Сила духа" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            О спектакле
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            История, которая{" "}
            <span className="text-primary relative">
              не отпускает
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Священник Арсений прошёл аресты, ссылки и лагеря особого режима. Книга и спектакль — о том, что происходит внутри человека, когда снаружи ад. О вере, которая не гаснет.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
