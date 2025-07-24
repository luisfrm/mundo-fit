import { Navigation } from "@/components/home/navigation"
import { Footer } from "@/components/common/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Términos y Condiciones</h1>
            <p className="text-xl text-muted-foreground">Última actualización: 15 de enero de 2024</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>1. Aceptación de Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Al acceder y usar FitApp, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo
                con alguna parte de estos términos, no debes usar nuestra aplicación.
              </p>

              <p className="text-muted-foreground">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                vigor inmediatamente después de su publicación en la aplicación.
              </p>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">FitApp es una aplicación de fitness que proporciona:</p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rutinas de entrenamiento personalizadas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Seguimiento de progreso y estadísticas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Asistente de inteligencia artificial para fitness
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Biblioteca de ejercicios y técnicas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Entrenamiento personal presencial (plan Elite)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>3. Registro y Cuenta de Usuario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Elegibilidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Debes tener al menos 16 años para usar FitApp. Los menores de 18 años necesitan consentimiento
                    parental.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Información Precisa</h4>
                  <p className="text-sm text-muted-foreground">
                    Debes proporcionar información precisa y actualizada durante el registro y mantenerla actualizada.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Seguridad de la Cuenta</h4>
                  <p className="text-sm text-muted-foreground">
                    Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades en tu
                    cuenta.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>4. Planes y Pagos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Planes Disponibles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Plan Básico: $3/mes</li>
                    <li>• Plan Premium: $6/mes</li>
                    <li>• Plan Elite: $25/mes (incluye entrenamiento presencial)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Facturación</h4>
                  <p className="text-sm text-muted-foreground">
                    Los pagos se procesan mensualmente. La renovación es automática hasta que canceles tu suscripción.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Reembolsos</h4>
                  <p className="text-sm text-muted-foreground">
                    Ofrecemos reembolso completo dentro de los primeros 30 días de tu primera suscripción.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>5. Uso Aceptable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Al usar FitApp, te comprometes a NO:</p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Usar la aplicación para actividades ilegales o no autorizadas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Compartir tu cuenta con otras personas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Intentar acceder a sistemas o datos no autorizados
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interferir con el funcionamiento de la aplicación
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-destructive rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Usar la aplicación de manera que pueda dañar o sobrecargar nuestros servidores
                </li>
              </ul>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>6. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Asesoramiento Médico</h4>
                  <p className="text-sm text-muted-foreground">
                    FitApp no proporciona asesoramiento médico. Consulta con un profesional de la salud antes de
                    comenzar cualquier programa de ejercicios.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Uso bajo tu Riesgo</h4>
                  <p className="text-sm text-muted-foreground">
                    El uso de la aplicación y la participación en actividades de fitness es bajo tu propio riesgo. No
                    somos responsables por lesiones o daños.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">Disponibilidad del Servicio</h4>
                  <p className="text-sm text-muted-foreground">
                    No garantizamos que la aplicación esté disponible 24/7 sin interrupciones. Podemos realizar
                    mantenimiento programado.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>7. Terminación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Puedes cancelar tu cuenta en cualquier momento desde la configuración de la aplicación. Nos reservamos
                el derecho de suspender o terminar cuentas que violen estos términos.
              </p>

              <p className="text-muted-foreground">
                Al terminar tu cuenta, perderás acceso a todos los datos y contenido asociado con tu cuenta.
              </p>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle>8. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Si tienes preguntas sobre estos términos y condiciones, contáctanos:
              </p>

              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> legal@fitapp.com
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
