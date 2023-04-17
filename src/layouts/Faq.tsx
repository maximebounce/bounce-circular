import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Comment faut-il faire une demande de collecte?',
    answer:
      "Depuis votre espace club, cliquez sur le bouton 'Programmer une collecte' et remplissez le formulaire. Vous recevrez un email de confirmation.",
  },
  {
    question:
      'Est-il possible de changer la date de la prochaine collecte programmée?',
    answer:
      "Non, une fois une collecte programmée, il n'est plus possible de changer celle-ci.",
  },
  {
    question: 'Concrètement que deviennent ces balles?',
    answer:
      "A l'heure actuelle, nous broyons les balles afin d'en extraire le caoutchcouc. Ce résidu broyé sert ensuite de matière première pour des sols de surfaces de sport à destination de bonnes oeuvres.",
    description:
      "Bounce étudie également d'autres options afin de revaloriser au mieux le caoutchouc et la feutrine. Plus d'informations sur ce sujet, prochainement.",
  },
  {
    question: "L'opération totale est-elle neutre en carbone?",
    answer:
      "Oui, Bounce compense toutes les émissions de CO2 liées à l'opération afin de la rendre 100% neutre en carbone.",
  },

  // More questions...
];

export default function FaqComponent() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-6 py-20 sm:py-24 lg:py-28 lg:px-8">
        <div className="mx-auto  divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            FAQ
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                      {faq.description ? (
                        <p className="text-base leading-7 text-gray-600">
                          {faq.description}
                        </p>
                      ) : (
                        ''
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
