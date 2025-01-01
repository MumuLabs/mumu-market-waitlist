import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/data";

// ANCHOR: FAQ Section is Currently Not Used.
export function Faq() {
	return (
		<section id="faq" className="w-full">
			<div className="w-full py-12 md:py-24 lg:py-32">
				<div className="text-center space-y-4 py-6">
					<h2 className="text-[15px] text-primary font-bold tracking-tight var(--font-golos-text) text-white">
						FAQ
					</h2>
					<h4 className="text-[42px] font-medium mb-2 text-balance mx-auto tracking-tighter var(--font-golos-text) text-white max-w-[90%] lg:max-w-3xl">
						Frequently Asked Questions
					</h4>
				</div>
				<div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="rounded-xl border border-slate-200 shadow-sm transition-all hover:border-slate-500 data-[state=open]:border-slate-500 mb-4"
							>
								<AccordionTrigger className="px-4 py-4 text-base sm:text-lg font-medium text-left text-white">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="px-4 pb-4 text-sm sm:text-base text-white">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
