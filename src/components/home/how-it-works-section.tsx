import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Brain, BarChart3 } from "lucide-react"
import { CARDS } from "@/utils/classes"

const steps = [
  {
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    title: "Descarga y Regístrate",
    description: "Crea tu cuenta en segundos y configura tu perfil fitness personalizado",
  },
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: "Crea tu Rutina",
    description: "Usa nuestro asistente IA o elige entre rutinas prediseñadas por expertos",
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-primary" />,
    title: "Entrena y Progresa",
    description: "Registra tus entrenamientos y observa tu evolución en tiempo real",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-muted/30" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tres simples pasos para transformar tu entrenamiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className={`text-center p-6 h-full ${CARDS.hover}`}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8">
            Comenzar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
