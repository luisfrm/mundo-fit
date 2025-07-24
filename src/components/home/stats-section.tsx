import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "50K+",
    label: "Usuarios Activos",
    description: "Entrenan diariamente",
  },
  {
    number: "2M+",
    label: "Entrenamientos",
    description: "Completados exitosamente",
  },
  {
    number: "500+",
    label: "Ejercicios",
    description: "En nuestra biblioteca",
  },
  {
    number: "98%",
    label: "Satisfacción",
    description: "De nuestros usuarios",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-primary/5" id="stats">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Números que hablan por sí solos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Únete a miles de personas que ya están transformando su vida
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-transparent">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
