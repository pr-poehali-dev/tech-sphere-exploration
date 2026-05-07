import { Card, CardContent } from "@/components/ui/card"

const gallery = [
  {
    title: "До войны",
    category: "Пролог",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/d967a820-cd63-46c9-b392-f6d871f1b562.JPG",
    description:
      "Мирная жизнь до репрессий. Молодость, любовь, надежды — всё то, что будет отнято, но не забыто.",
    tags: ["Пролог", "До войны", "Молодость"],
  },
  {
    title: "Война пришла",
    category: "Акт первый",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/03f6299b-57eb-4b7e-8232-b9b8eff350fa.JPG",
    description:
      "На фоне взрывов и обломков эпохи — двое. Книга в руках как единственная опора. Мир рушится, но человек стоит.",
    tags: ["Война", "1941", "Испытание"],
  },
  {
    title: "Лагерь особого режима",
    category: "Акт второй",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/b420535b-d989-4a62-bfcb-76936078d11b.JPG",
    description:
      "Заключённые под свинцовым небом. Руки сжимают верёвки — удержаться, выжить, не сломаться. Братство рождается в невыносимых условиях.",
    tags: ["Лагерь", "Братство", "Выживание"],
  },
  {
    title: "Советская система",
    category: "Ключевая сцена",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/19892b25-59c6-47d1-b7aa-68e4f3142e35.JPG",
    description:
      "Пионеры, портреты вождей, лозунги. Машина идеологии работает исправно — но вера живёт вопреки.",
    tags: ["СССР", "Идеология", "Противостояние"],
  },
  {
    title: "Отец Арсений",
    category: "Центральный образ",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/2b56b40f-0f7f-40f6-8244-56b8a1bccf74.JPG",
    description:
      "Священник с номером на груди стоит прямо, пока вокруг всё согнуто. Это и есть главный ответ спектакля — на вопрос о том, что значит быть человеком.",
    tags: ["Арсений", "Достоинство", "Вера"],
  },
  {
    title: "Братство",
    category: "Сцена в лагере",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/21be62a8-24d4-42f6-84fd-47527adb863f.JPG",
    description:
      "Четверо в серых шинелях. Люди, сломанные системой, но не сломленные внутри. Взгляды, в которых — вопрос и ответ одновременно.",
    tags: ["Братство", "Заключённые", "Лагерь"],
  },
  {
    title: "Прощание",
    category: "Лирическая сцена",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/5ca81d1d-adc3-4d22-a2ba-fee74e587b28.JPG",
    description:
      "Окно в комнате напротив. Двое близких — и невидимая стена между мирами. Сцена о разлуке и надежде.",
    tags: ["Разлука", "Надежда", "Дом"],
  },
  {
    title: "Встреча в лесу",
    category: "Поворотная сцена",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/a3e53fb4-d3e1-4763-8b25-1a7c9450aca9.JPG",
    description:
      "На фоне тёмного леса — объятия. Те, кого разлучили годы и страдания, снова вместе. Арсений стоит рядом — молча.",
    tags: ["Встреча", "Семья", "Возвращение"],
  },
  {
    title: "Путь к кресту",
    category: "Финал",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/ebc9a21b-8fc1-4d8a-8492-4e57034b4a7a.JPG",
    description:
      "Все персонажи идут к свету — к кресту на фоне рассветного неба. Финальная сцена о преодолении и вечной надежде.",
    tags: ["Финал", "Крест", "Свет"],
  },
  {
    title: "Крест над миром",
    category: "Символ спектакля",
    image: "https://cdn.poehali.dev/projects/38bd8748-7863-4338-8fb5-afab16e20535/bucket/b6046400-93d7-43ab-9df1-e61831ce04e4.JPG",
    description:
      "Православный крест на фоне золотого рассвета — главный образ постановки. Сила веры, пережившей всё.",
    tags: ["Символ", "Вера", "Крест"],
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
              className={`group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 ${index === 4 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden bg-muted ${index === 4 ? "aspect-[21/9]" : "aspect-video"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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