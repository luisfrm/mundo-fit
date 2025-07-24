import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Transforma tu <span className="text-primary">fitness journey</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          La app definitiva para crear rutinas personalizadas, seguir tu progreso y mantener la motivación. Con IA
          integrada y seguimiento inteligente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Comenzar Entrenamiento
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            Ver Funciones
          </Button>
        </div>
      </div>
    </section>
  )
}
