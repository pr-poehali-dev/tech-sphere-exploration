import { Card, CardContent } from "@/components/ui/card"

const gallery = [
  {
    title: "Арест",
    category: "Акт первый",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/files/faa11a98-8e51-4c83-b931-1dc51eef8c4c.jpg",
    description:
      "1937 год. Священника Арсения арестовывают. Начинается путь через допросы, этапы и пересыльные лагеря. Но внутри него — тишина.",
    tags: ["1937", "Арест", "Начало пути"],
  },
  {
    title: "Лагерь особого режима",
    category: "Акт второй",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/files/c049df10-adcc-4aca-a57d-458fd57c9fca.jpg",
    description:
      "Барак, холод, голод. Арсений становится для заключённых не только священником, но и человеком, рядом с которым можно оставаться собой.",
    tags: ["Лагерь", "Вера", "Братство"],
  },
  {
    title: "Ночная исповедь",
    category: "Ключевая сцена",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/files/c049df10-adcc-4aca-a57d-458fd57c9fca.jpg",
    description:
      "Одна из самых пронзительных сцен спектакля — ночная исповедь в бараке. Слова, которые нельзя произносить вслух, но которые всё равно звучат.",
    tags: ["Исповедь", "Ночь", "Тайна"],
  },
  {
    title: "Возвращение",
    category: "Финал",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/files/a7b0f0ea-ebb5-48ad-a37d-693b92e96846.jpg",
    description:
      "После многих лет лагерей — выход на свободу. Но что значит свобода для человека, который сохранил себя даже в заключении?",
    tags: ["Свобода", "Возвращение", "Итог"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Галерея спектакля</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Ключевые сцены и образы постановки — путь отца Арсения от ареста до возвращения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-white/80 text-sm font-medium">{item.category}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}