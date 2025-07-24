import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, MessageCircle, TrendingUp, Calendar } from "lucide-react"
import { CARDS } from "@/utils/classes"

const features = [
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Rutinas Personalizadas",
    description:
      "Crea rutinas con nuestra biblioteca de más de 500 ejercicios predefinidos. Personaliza series, repeticiones y descansos.",
    badge: "Nuevo",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Asistente IA",
    description:
      "Nuestro chatbot inteligente te ayuda a crear rutinas, resolver dudas y optimizar tu entrenamiento 24/7.",
    badge: "IA",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Seguimiento de Progreso",
    description:
      "Registra tus pesos, repeticiones y tiempos. Visualiza tu evolución con gráficos detallados y estadísticas.",
    badge: "Pro",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Contador de Racha",
    description:
      "Mantén tu motivación alta con nuestro sistema de rachas. Compite contigo mismo y alcanza nuevos récords.",
    badge: "Motivación",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas para <span className="text-primary">entrenar mejor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas avanzadas diseñadas para llevarte al siguiente nivel en tu fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className={`relative overflow-hidden ${CARDS.hover}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {feature.icon}
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
