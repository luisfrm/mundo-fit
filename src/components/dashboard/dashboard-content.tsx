import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Flame, Target, Zap, Dumbbell, MessageCircle, User } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">¡Hola, Juan! 👋</h1>
          <p className="text-muted-foreground">Listo para otro gran entrenamiento</p>
        </div>
        <Button size="lg">
          <Zap className="mr-2 h-4 w-4" />
          Comenzar Entrenamiento
        </Button>
      </div>

      {/* Stats Cards - Simplified for MVP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Racha Actual</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 días</div>
            <p className="text-xs text-muted-foreground">¡Sigue así!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Entrenamientos</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Próximo</CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Hoy</div>
            <p className="text-xs text-muted-foreground">Pecho y Tríceps</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content - MVP Version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Start */}
        <Card>
          <CardHeader>
            <CardTitle>Comenzar Entrenamiento</CardTitle>
            <CardDescription>Inicia tu rutina de hoy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="font-medium mb-2">Rutina de Pecho y Tríceps</h3>
              <p className="text-sm text-muted-foreground mb-4">6 ejercicios • ~45 min</p>
              <Button variant="default" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Comenzar Ahora
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Herramientas principales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <Dumbbell className="mr-2 h-4 w-4" />
              Ver Mis Rutinas
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chatbot IA
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent">
              <User className="mr-2 h-4 w-4" />
              Mi Perfil
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
