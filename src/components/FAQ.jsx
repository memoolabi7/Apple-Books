import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { faq } from "./FAQdata";

export function FAQ() {
    return (
        <section className="text-gray-900 dark:bg-gray-900 dark:text-white mt-[-80px]">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-10 lg:py-20">
                <h1 className="mb-4 pb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                    Questions? Answers.
                </h1>
                <Accordion collapseAll className="border-none">
                    {
                        faq.map((item, index) => (
                            <AccordionPanel key={index}>
                                <AccordionTitle>{item.question}</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400 text-left">
                                        {item.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    );
}
