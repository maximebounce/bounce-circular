export default function Loader() {
  return (
    <div>
      <section className="bg-bounce-100 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="256.000000pt"
              height="256.000000pt"
              viewBox="0 0 256.000000 256.000000"
              preserveAspectRatio="xMidYMid meet"
              className="mr-2 h-20 w-20 animate-bounce fill-blue-600 text-bounce-200 dark:text-gray-600"
            >
              <g
                transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1151 2029 c-255 -45 -478 -227 -576 -467 -109 -268 -50 -586 147
-797 155 -166 336 -244 564 -245 330 0 619 211 721 528 35 106 43 277 19 388
-59 273 -271 499 -538 574 -85 24 -256 34 -337 19z m44 -276 c-13 -75 -74
-182 -139 -248 -67 -66 -177 -128 -250 -141 l-39 -7 6 38 c12 74 73 183 140
250 75 75 199 142 266 144 22 1 23 -2 16 -36z m345 -21 c91 -52 185 -159 224
-254 l15 -36 -75 -17 c-93 -21 -229 -88 -309 -152 -121 -98 -227 -267 -260
-417 l-17 -75 -36 15 c-124 52 -262 193 -287 294 -6 25 -3 26 67 43 92 21 236
92 308 151 121 100 220 259 256 410 17 75 19 77 43 71 15 -4 46 -18 71 -33z
m256 -549 c-3 -10 -8 -31 -12 -48 -10 -45 -51 -124 -95 -182 -61 -82 -198
-168 -296 -186 -39 -8 -39 -8 -13 75 48 157 179 288 338 339 73 23 85 23 78 2z"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
