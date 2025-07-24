"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  content: string
  isBot: boolean
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: 1,
    content: "¡Hola! Soy tu asistente de fitness con IA. ¿En qué puedo ayudarte hoy?",
    isBot: true,
    timestamp: new Date(),
  },
]

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        content: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("rutina") || input.includes("ejercicio")) {
      return "Te puedo ayudar a crear rutinas personalizadas. ¿Qué músculos quieres entrenar hoy? ¿Pecho, espalda, piernas?"
    }
    if (input.includes("peso") || input.includes("carga")) {
      return "Para determinar el peso adecuado, considera usar el 70-80% de tu 1RM para fuerza, o 60-70% para hipertrofia. ¿Cuál es tu objetivo?"
    }
    if (input.includes("descanso")) {
      return "Para fuerza: 3-5 minutos entre series. Para hipertrofia: 1-3 minutos. Para resistencia: 30-90 segundos."
    }
    return "Interesante pregunta. Te puedo ayudar con rutinas, ejercicios, pesos, descansos y técnica. ¿Sobre qué te gustaría saber más?"
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">Chatbot IA</h1>
          <p className="text-muted-foreground">Tu asistente personal de fitness disponible 24/7</p>
        </div>

        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-primary" />
              Asistente de Fitness
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${message.isBot ? "" : "flex-row-reverse space-x-reverse"}`}
                  >
                    <div
                      className={`p-2 rounded-full ${
                        message.isBot ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("es-ES", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex space-x-2 mt-4">
              <Input
                placeholder="Pregúntame sobre rutinas, ejercicios, técnica..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Preguntas Frecuentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              onClick={() => setInputValue("¿Cómo crear una rutina de pecho?")}
            >
              ¿Cómo crear una rutina de pecho?
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              onClick={() => setInputValue("¿Cuánto peso debo usar?")}
            >
              ¿Cuánto peso debo usar?
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              onClick={() => setInputValue("¿Cuánto descanso entre series?")}
            >
              ¿Cuánto descanso entre series?
            </Button>
            <Button
              variant="outline"
              className="justify-start bg-transparent"
              onClick={() => setInputValue("Rutina para principiantes")}
            >
              Rutina para principiantes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
