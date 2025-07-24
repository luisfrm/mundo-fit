import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import AuthButton from '../common/AuthButton';

export async function LoginForm() {
	const supabase = await createSupabaseServerClient();

	const { data } = await supabase.from('posts').select('*');

	return (
		<Card className="w-full max-w-md">
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
				<CardDescription className="text-center">Ingresa tus credenciales para acceder a tu cuenta</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="tu@ejemplo.com" className="w-full" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="password">Contraseña</Label>
					<Input id="password" type="password" placeholder="••••••••" className="w-full" />
				</div>
				<Button className="w-full" size="lg">
					Iniciar Sesión
				</Button>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<Separator className="w-full" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 py-1 rounded-md text-muted-foreground">O continúa con</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<AuthButton provider="discord" />
					<AuthButton provider="github" />
					<AuthButton provider="google" />
					<AuthButton />
				</div>

				<div className="text-center text-sm">
					<span className="text-muted-foreground">¿No tienes una cuenta? </span>
					<Button variant="link" className="p-0 h-auto font-normal" asChild>
						<Link href="/register">Regístrate</Link>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
