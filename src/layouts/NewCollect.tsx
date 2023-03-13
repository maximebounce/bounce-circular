/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function NewCollect() {
  return (
    <>
      <div className="relative isolate bg-white py-16 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Demande de collecte de balles dans votre club
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            <i>
              Rendons ensemble le tennis & le padel plus éco-responsable balle
              après balle.
            </i>
          </p>
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre de cartons à collecter
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="location"
                      name="location"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      defaultValue="Canada"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Budget
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Website
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="url"
                      name="website"
                      id="website"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-bounce-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enregistrer
                </button>
              </div>
              {/* <p className="mt-4 text-sm leading-6 text-gray-500">
                By submitting this form, I agree to the{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </p> */}
            </form>
            <div className="lg:mt-6 lg:w-80 lg:flex-none">
              <img
                className="h-24 w-auto"
                src="/assets/images/logo-clubs-100/LaRaquette.png"
                alt=""
              />
              <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                  <p>
                    “Le programme Bounce Circular est une évidence pour notre
                    club. Tous les clubs devraient y songer.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <img
                    src="/assets/images/avatar/seb_lecloux.png"
                    alt=""
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="text-base font-semibold text-gray-900">
                      Sebastion Lecloux
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      Coach & Gérant TC La Raquette de Wavre
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
