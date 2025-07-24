import { Navigation } from "@/components/home/navigation"
import { Footer } from "@/components/common/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Política de Privacidad</h1>
            <p className="text-xl text-muted-foreground">Última actualización: 15 de enero de 2024</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                En FitApp, recopilamos información para brindarte la mejor experiencia de fitness personalizada:
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Información Personal</h4>
                  <p className="text-sm text-muted-foreground">
                    Nombre, email, edad, peso, altura y objetivos de fitness que proporcionas al registrarte.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Datos de Entrenamiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Rutinas, ejercicios realizados, pesos levantados, repeticiones y progreso de entrenamientos.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Información de Uso</h4>
                  <p className="text-sm text-muted-foreground">
                    Cómo interactúas con la aplicación, frecuencia de uso y preferencias de entrenamiento.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>Cómo Usamos tu Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Utilizamos tu información para:</p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personalizar tus rutinas de entrenamiento y recomendaciones
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Hacer seguimiento de tu progreso y estadísticas de fitness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mejorar nuestro asistente de IA para brindarte mejor soporte
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enviarte notificaciones relevantes sobre tu entrenamiento
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Procesar pagos y gestionar tu suscripción
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>Compartir Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                No vendemos ni alquilamos tu información personal. Solo compartimos datos en estas situaciones:
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Proveedores de Servicios</h4>
                  <p className="text-sm text-muted-foreground">
                    Con empresas que nos ayudan a operar la aplicación (hosting, análisis, pagos).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Requerimientos Legales</h4>
                  <p className="text-sm text-muted-foreground">
                    Cuando sea requerido por ley o para proteger nuestros derechos legales.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Con tu Consentimiento</h4>
                  <p className="text-sm text-muted-foreground">
                    En cualquier otra situación con tu autorización explícita.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>Seguridad de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información:
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Encriptación de datos en tránsito y en reposo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Acceso restringido a información personal
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monitoreo regular de sistemas de seguridad
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Auditorías de seguridad periódicas
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Tienes derecho a:</p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Acceder a tu información personal que tenemos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Corregir información inexacta o incompleta
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Solicitar la eliminación de tu cuenta y datos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Exportar tus datos en formato portable
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Optar por no recibir comunicaciones de marketing
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Si tienes preguntas sobre esta política de privacidad o quieres ejercer tus derechos, contáctanos:
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> privacidad@fitapp.com
                </p>
                <p>
                  <strong>Dirección:</strong> Calle Fitness 123, Ciudad, País
                </p>
                <p>
                  <strong>Teléfono:</strong> +1 (555) 123-4567
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
