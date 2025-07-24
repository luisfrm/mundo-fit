import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, Weight, RotateCcw, Plus } from "lucide-react"

const workoutSessions = [
  {
    id: 1,
    date: "2024-01-15",
    routineName: "Push - Pecho y Tríceps",
    exercises: [
      {
        name: "Press de Banca",
        sets: [
          { weight: 80, reps: 10 },
          { weight: 85, reps: 8 },
          { weight: 85, reps: 8 },
          { weight: 80, reps: 10 },
        ],
        avgWeight: 82.5,
      },
      {
        name: "Press Inclinado",
        sets: [
          { weight: 60, reps: 12 },
          { weight: 65, reps: 10 },
          { weight: 65, reps: 10 },
        ],
        avgWeight: 63.3,
      },
    ],
  },
  {
    id: 2,
    date: "2024-01-13",
    routineName: "Pull - Espalda y Bíceps",
    exercises: [
      {
        name: "Dominadas",
        sets: [
          { weight: 0, reps: 12 },
          { weight: 0, reps: 10 },
          { weight: 0, reps: 8 },
        ],
        avgWeight: 0,
      },
      {
        name: "Remo con Barra",
        sets: [
          { weight: 70, reps: 10 },
          { weight: 75, reps: 8 },
          { weight: 75, reps: 8 },
          { weight: 70, reps: 10 },
        ],
        avgWeight: 72.5,
      },
    ],
  },
]

export default function WorkoutsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mis Entrenamientos</h1>
          <p className="text-muted-foreground">Historial y seguimiento de tus sesiones de entrenamiento</p>
        </div>
        <Button size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Entrenamiento
        </Button>
      </div>

      {/* Workout Sessions */}
      <div className="space-y-6">
        {workoutSessions.map((session) => (
          <Card key={session.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    {new Date(session.date).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardTitle>
                  <CardDescription>{session.routineName}</CardDescription>
                </div>
                <Badge variant="secondary">{session.exercises.length} ejercicios</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {session.exercises.map((exercise, exerciseIndex) => (
                  <div key={exerciseIndex} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold">{exercise.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Weight className="mr-1 h-4 w-4" />
                        Promedio: {exercise.avgWeight}kg
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {exercise.sets.map((set, setIndex) => (
                        <div key={setIndex} className="bg-muted/50 rounded-lg p-3">
                          <div className="text-xs text-muted-foreground mb-2">Serie {setIndex + 1}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1">
                              <label className="text-xs text-muted-foreground">Peso (kg)</label>
                              <Input type="number" value={set.weight} className="h-8 text-sm" readOnly />
                            </div>
                            <div className="flex-1">
                              <label className="text-xs text-muted-foreground">Reps</label>
                              <Input type="number" value={set.reps} className="h-8 text-sm" readOnly />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm" className="bg-transparent">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Repetir Entrenamiento
                </Button>
                <Button variant="ghost" size="sm">
                  Ver Detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
