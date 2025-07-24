import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 px-4" id="hero">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Bienvenido a <span className="text-primary">MundoFit</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          La plataforma perfecta para gestionar tus proyectos de manera eficiente y colaborativa. Únete a miles de
          usuarios que ya confían en nosotros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Comenzar Gratis
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            Ver Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
