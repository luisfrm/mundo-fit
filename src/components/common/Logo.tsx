import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 cursor-pointer">
      <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">MF</span>
      </div>
      <span className="font-bold text-xl text-foreground">MundoFit</span>
    </Link>
  )
}