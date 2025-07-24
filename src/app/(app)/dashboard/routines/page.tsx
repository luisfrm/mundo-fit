import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, Target, CheckCircle } from "lucide-react"

const routines = [
  {
    id: 1,
    name: "Push - Pecho y Tríceps",
    description: "Rutina enfocada en músculos de empuje",
    exercises: 6,
    duration: "45-60 min",
    isActive: true,
  },
  {
    id: 2,
    name: "Pull - Espalda y Bíceps",
    description: "Rutina enfocada en músculos de tracción",
    exercises: 5,
    duration: "40-50 min",
    isActive: false,
  },
  {
    id: 3,
    name: "Legs - Piernas Completas",
    description: "Rutina completa de tren inferior",
    exercises: 7,
    duration: "50-70 min",
    isActive: false,
  },
]

export default function RoutinesPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mis Rutinas</h1>
          <p className="text-muted-foreground">Gestiona y organiza tus rutinas de entrenamiento</p>
        </div>
        <Button size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Nueva Rutina
        </Button>
      </div>

      {/* Active Routine */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Rutina Activa</h2>
        {routines
          .filter((routine) => routine.isActive)
          .map((routine) => (
            <Card key={routine.id} className="border-primary bg-primary/5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                      {routine.name}
                    </CardTitle>
                    <CardDescription>{routine.description}</CardDescription>
                  </div>
                  <Badge className="bg-primary">Activa</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Target className="mr-1 h-4 w-4" />
                    {routine.exercises} ejercicios
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {routine.duration}
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Button>Entrenar Ahora</Button>
                  <Button variant="outline" className="bg-transparent">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Other Routines */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Otras Rutinas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routines
            .filter((routine) => !routine.isActive)
            .map((routine) => (
              <Card key={routine.id}>
                <CardHeader>
                  <CardTitle>{routine.name}</CardTitle>
                  <CardDescription>{routine.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Target className="mr-1 h-4 w-4" />
                      {routine.exercises} ejercicios
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {routine.duration}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Activar Rutina
                    </Button>
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
