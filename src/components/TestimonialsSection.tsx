import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Спектакль перевернул меня. Я ждала рассказа об ужасах лагерей — а получила урок о том, что такое настоящая свобода. Вышла другим человеком.",
    name: "Ольга С.",
    role: "Зритель, Красногорск",
  },
  {
    quote:
      "Режиссёр нашёл точный язык: не назидание, не слёзы — а тихое, глубокое присутствие. Арсений со сцены смотрит прямо в тебя.",
    name: "Дмитрий В.",
    role: "Театральный критик",
  },
  {
    quote:
      "Привела детей — подростков. Они не отрывались от сцены. После спектакля долго молчали, а потом начали задавать вопросы, которые я сама боялась задать.",
    name: "Марина К.",
    role: "Мать троих детей",
  },
  {
    quote:
      "Книгу «Отец Арсений» читала ещё в самиздате. Думала — разочаруюсь. Но спектакль оказался достоин оригинала. Это редкость.",
    name: "Татьяна И.",
    role: "Читатель книги, Москва",
  },
  {
    quote:
      "Это не просто театр — это молитва в другом формате. Выходишь и хочешь жить иначе.",
    name: "Протоиерей Андрей",
    role: "Священнослужитель",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/b6046400-93d7-43ab-9df1-e61831ce04e4.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят зрители
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Спектакль уже увидели первые зрители — и он не оставил никого равнодушным.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}