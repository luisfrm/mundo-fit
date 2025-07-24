import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Calendar, Target, Crown, Edit } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mi Perfil</h1>
          <p className="text-muted-foreground">Gestiona tu información personal y preferencias</p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Editar Perfil
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
            <CardDescription>Actualiza tu información básica</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Avatar" />
                <AvatarFallback className="text-lg">JP</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">Juan Pérez</h3>
                <p className="text-muted-foreground">Miembro desde Enero 2024</p>
                <Badge className="mt-1">
                  <Crown className="mr-1 h-3 w-3" />
                  Plan Premium
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" value="Juan Pérez" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value="juan@ejemplo.com" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Edad</Label>
                <Input id="age" value="28 años" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Peso</Label>
                <Input id="weight" value="75 kg" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Altura</Label>
                <Input id="height" value="1.78 m" readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Objetivo</Label>
                <Input id="goal" value="Ganar masa muscular" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats & Achievements */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Estadísticas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Entrenamientos totales</span>
                <span className="font-semibold">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Racha máxima</span>
                <span className="font-semibold">18 días</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tiempo total</span>
                <span className="font-semibold">32.5 horas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Peso levantado</span>
                <span className="font-semibold">2,847 kg</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plan Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <Badge className="text-sm px-3 py-1">
                  <Crown className="mr-1 h-3 w-3" />
                  Premium
                </Badge>
                <p className="text-2xl font-bold">$6/mes</p>
                <p className="text-sm text-muted-foreground">Renovación: 15 Feb 2024</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Gestionar Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start bg-transparent">
              <User className="mr-2 h-4 w-4" />
              Cambiar Contraseña
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Mail className="mr-2 h-4 w-4" />
              Preferencias de Email
            </Button>
            <Button variant="outline" className="justify-start bg-transparent">
              <Calendar className="mr-2 h-4 w-4" />
              Configurar Recordatorios
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
