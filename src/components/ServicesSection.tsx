import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const themes = [
  {
    icon: "Heart",
    title: "Вера под давлением",
    description:
      "Что происходит с верой человека, когда система пытается её уничтожить? Арсений не отрекается — и это становится источником силы для всех, кто рядом с ним в лагере.",
  },
  {
    icon: "Users",
    title: "Человек среди людей",
    description:
      "Священник в лагере — не жертва и не герой. Он просто живёт по-человечески: помогает, утешает, не предаёт. В этом и есть его подвиг.",
  },
  {
    icon: "Flame",
    title: "Свет во тьме",
    description:
      "Спектакль говорит о том, как один человек может стать источником тепла и надежды в нечеловеческих условиях. Не словами — жизнью.",
  },
  {
    icon: "BookOpen",
    title: "Документальная основа",
    description:
      "В основе — реальная книга, составленная из свидетельств людей, знавших отца Арсения. Это не художественный вымысел, а живая память.",
  },
  {
    icon: "Shield",
    title: "Достоинство и стойкость",
    description:
      "Как сохранить себя, когда всё вокруг создано для унижения? Арсений отвечает на этот вопрос не словами, а каждым своим поступком.",
  },
  {
    icon: "Star",
    title: "Примирение с прошлым",
    description:
      "Спектакль — возможность взглянуть на трагедию XX века изнутри человеческой судьбы. Не осудить — понять. Не забыть — принять.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/21be62a8-24d4-42f6-84fd-47527adb863f.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Главные темы
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          О чём этот <span className="text-primary">спектакль</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          «Отец Арсений» — это не история о репрессиях. Это история о том, что остаётся в человеке, когда у него отнято всё остальное.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={theme.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{theme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{theme.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}