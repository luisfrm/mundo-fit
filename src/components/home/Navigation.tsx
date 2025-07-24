"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/common/Logo"

const navigationItems = [
  { name: "Inicio", href: "#" },
  { name: "Productos", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Sobre Nosotros", href: "#" },
  { name: "Contacto", href: "#" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky py-2 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm border-b-2 border-b-transparent hover:border-b-primary font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="default" size="sm">
                Registrarse
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6 px-4">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">MF</span>
                    </div>
                    <span className="font-bold text-xl text-foreground">MundoFit</span>
                  </div>

                  <nav className="flex flex-col space-y-3">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button variant="ghost" className="justify-start" onClick={() => setIsOpen(false)}>
                      Iniciar Sesión
                    </Button>
                    <Button className="justify-start" onClick={() => setIsOpen(false)}>
                      Registrarse
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
