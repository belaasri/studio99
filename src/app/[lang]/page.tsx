
import { ThumbnailDownloader } from '@/components/vid-sync-portal';
import { type Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

export default async function Home({
    params: { lang },
  }: {
    params: { lang: Locale };
  }) {
  const dictionary = await getDictionary(lang);
  return (
      <main className="flex flex-1 flex-col items-center p-4 text-center md:p-6">
        <section className="w-full max-w-4xl pt-12 pb-6 md:pt-20">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            {dictionary.home.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600" dangerouslySetInnerHTML={{ __html: dictionary.home.description }} />
          <ThumbnailDownloader />
        </section>

        <section className="w-full max-w-5xl py-6 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">
            {dictionary.home.whyChoose.title}
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{dictionary.home.whyChoose.feature}</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">{dictionary.home.whyChoose.benefit}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dictionary.home.whyChoose.features.instant.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dictionary.home.whyChoose.features.instant.benefit}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dictionary.home.whyChoose.features.multiple.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dictionary.home.whyChoose.features.multiple.benefit}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dictionary.home.whyChoose.features.free.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dictionary.home.whyChoose.features.free.benefit}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dictionary.home.whyChoose.features.allDevices.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dictionary.home.whyChoose.features.allDevices.benefit}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dictionary.home.whyChoose.features.safe.feature}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dictionary.home.whyChoose.features.safe.benefit}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="w-full max-w-4xl py-6 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-center">{dictionary.home.howTo.title}</h2>
          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">{dictionary.home.howTo.method1.title}</h3>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-gray-600">
                <li>{dictionary.home.howTo.method1.step1}</li>
                <li>{dictionary.home.howTo.method1.step2}</li>
                <li>{dictionary.home.howTo.method1.step3}</li>
                <li>{dictionary.home.howTo.method1.step4}</li>
                <li>{dictionary.home.howTo.method1.step5}</li>
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{dictionary.home.howTo.method2.title}</h3>
              <p className="mt-2 text-gray-600">{dictionary.home.howTo.method2.description}</p>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-600">
                <li>{dictionary.home.howTo.method2.step1}</li>
                <li>{dictionary.home.howTo.method2.step2}</li>
                <li>{dictionary.home.howTo.method2.step3}</li>
                <li>{dictionary.home.howTo.method2.step4}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
  );
}
