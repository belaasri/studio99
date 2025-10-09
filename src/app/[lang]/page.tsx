import { ThumbnailDownloader } from '@/components/vid-sync-portal';
import { type Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default async function Home({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
  const dictionary = await getDictionary(lang);
  const content = dictionary.home;

  return (
      <main className="flex flex-1 flex-col items-center p-4 text-center md:p-6">
        <section className="w-full max-w-4xl pt-12 pb-6 md:pt-20">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl" dangerouslySetInnerHTML={{ __html: content.title }} />
          <h2 className="mx-auto mt-4 max-w-3xl text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: content.subtitle }} />
          <p className="mx-auto mt-4 max-w-3xl text-gray-600" dangerouslySetInnerHTML={{ __html: content.description }} />
          <ThumbnailDownloader />
        </section>

        <div className='w-full max-w-5xl py-6 text-left space-y-12'>

            <section>
                <h2 className="text-3xl font-bold tracking-tight text-center">{content.whatIs.title}</h2>
                <p className="mt-4 text-gray-600 text-center max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: content.whatIs.p1 }} />
                <p className="mt-2 text-gray-600 text-center max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: content.whatIs.p2 }} />
            </section>
            
            <section>
                <h2 className="text-3xl font-bold tracking-tight text-center">{content.howTo.title}</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-semibold">{content.howTo.step1.title}</h3>
                        <p className="mt-2 text-gray-600" dangerouslySetInnerHTML={{ __html: content.howTo.step1.description }} />
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-semibold">{content.howTo.step2.title}</h3>
                        <p className="mt-2 text-gray-600">{content.howTo.step2.description}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-semibold">{content.howTo.step3.title}</h3>
                        <p className="mt-2 text-gray-600">{content.howTo.step3.description}</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold tracking-tight text-center">{content.resolutions.title}</h2>
                <div className="mt-8 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{content.resolutions.quality}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{content.resolutions.resolution}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{content.resolutions.filename}</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{content.resolutions.bestFor}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {content.resolutions.sizes.map((size: any, index: number) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: size.quality }} />
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.resolution}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.filename}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{size.bestFor}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                <p className="mt-4 text-sm text-gray-500 text-center">{content.resolutions.note}</p>
            </section>

            <section>
                <h2 className="text-3xl font-bold tracking-tight text-center">{content.whyChoose.title}</h2>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.whyChoose.features.map((feature: any, index: number) => (
                        <div key={index}>
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-bold tracking-tight text-center">{content.faq.title}</h2>
                <Accordion type="single" collapsible className="w-full mt-8">
                    {content.faq.questions.map((item: any, index: number) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>{item.q}</AccordionTrigger>
                            <AccordionContent>
                                <p dangerouslySetInnerHTML={{ __html: item.a }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>

      </main>
  );
}
