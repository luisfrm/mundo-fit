import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown } from 'lucide-react';
import { PARAGRAPHS, TITLES } from '@/utils/classes';

const plans = [
	{
		name: 'Básico',
		price: '$3',
		period: '/mes',
		description: 'Perfecto para comenzar tu journey fitness',
		icon: <Check className="h-5 w-5" />,
		features: ['Rutinas básicas predefinidas', 'Seguimiento de ejercicios', 'Contador de racha', 'Soporte por email'],
		popular: false,
		cta: 'Comenzar Gratis',
	},
	{
		name: 'Premium',
		price: '$6',
		period: '/mes',
		description: 'La opción más popular para fitness enthusiasts',
		icon: <Star className="h-5 w-5" />,
		features: [
			'Todo del plan Básico',
			'Asistente IA ilimitado',
			'Rutinas personalizadas avanzadas',
			'Análisis detallado de progreso',
			'Biblioteca completa de ejercicios',
			'Soporte prioritario',
		],
		popular: true,
		cta: 'Prueba 7 días gratis',
	},
	{
		name: 'Elite',
		price: '$25',
		period: '/mes',
		description: 'Experiencia premium con entrenamiento personal',
		icon: <Crown className="h-5 w-5" />,
		features: [
			'Todo del plan Premium',
			'Entrenamiento personal presencial',
			'Consultas nutricionales',
			'Plan de alimentación personalizado',
			'Sesiones 1-a-1 semanales',
			'Soporte 24/7 dedicado',
		],
		popular: false,
		cta: 'Contactar Entrenador',
	},
];

export function PricingSection() {
	return (
		<section className="py-20 px-4" id="pricing">
			<div className="container mx-auto">
				<div className="text-center mb-16">
					<h2 className={TITLES.h2}>
						Planes que se adaptan a <span className="text-primary">tus objetivos</span>
					</h2>
					<p className={PARAGRAPHS.p}>
						Elige el plan perfecto para tu nivel de entrenamiento y compromiso
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan, index) => (
						<PlanCard key={index} plan={plan} />
					))}
				</div>

				<div className="text-center mt-12">
					<p className={PARAGRAPHS.subtitle}>
						Todos los planes incluyen 30 días de garantía de devolución del dinero
					</p>
				</div>
			</div>
		</section>
	);
}

const PlanCard = ({ plan }: { plan: (typeof plans)[0] }) => {
	return (
		<Card
			className={`lg:hover:scale-[103%] transition-all duration-300 relative overflow-hidden ${
				plan.popular ? 'border-primary shadow-lg scale-105 lg:hover:scale-110' : 'hover:shadow-lg'
			} transition-all duration-300`}
		>
			{plan.popular && (
				<div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
					Más Popular
				</div>
			)}

			<CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
				<div className="flex justify-center mb-4">
					<div className={`p-3 rounded-full ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
						{plan.icon}
					</div>
				</div>

				<CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
				<CardDescription className="text-sm">{plan.description}</CardDescription>

				<div className="flex items-baseline justify-center mt-4">
					<span className="text-4xl font-bold text-foreground">{plan.price}</span>
					<span className="text-muted-foreground ml-1">{plan.period}</span>
				</div>
			</CardHeader>

			<CardContent className="pt-0">
				<ul className="space-y-3 mb-8">
					{plan.features.map((feature, featureIndex) => (
						<li key={featureIndex} className="flex items-start">
							<Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
							<span className="text-sm text-muted-foreground">{feature}</span>
						</li>
					))}
				</ul>

				<Button
					className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
					variant={plan.popular ? 'default' : 'outline'}
					size="lg"
				>
					{plan.cta}
				</Button>
			</CardContent>
		</Card>
	);
};
