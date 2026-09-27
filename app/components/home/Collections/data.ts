// =====================================================
// WILDCORE — COLLECTION DATA
// =====================================================

export interface Product {
  id: string;
  name: string;
  images: string[];

  lifestyleImages?: string[];

  video?: string;

  price?: number;

  description?: string;

  sizes?: string[];

  sizeGuide?: string;

  // ===================================================
  // SHOPIFY INTEGRATION
  // ===================================================

  /**
   * Handle real del producto dentro de Shopify.
   *
   * Ejemplo:
   * "jersey-flamas"
   */
  shopifyHandle?: string;

  /**
   * Color que esta tarjeta representa dentro
   * de las variantes del producto de Shopify.
   *
   * Ejemplo:
   * "NEGRO"
   */
  shopifyColor?: string;

  /**
   * Indica si este producto local ya está
   * conectado con un producto real de Shopify.
   */
  shopifyEnabled?: boolean;
}

export interface ProductCategory {
  title: string;
  items: Product[];
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  accent: string;

  sizeGuide?: string;

  categories: ProductCategory[];
}
// =====================================================
// SIZE GUIDES
// =====================================================

const BAGGY_SIZE_GUIDE =
  "/images/collections/new-drop/size-guides/size-guide-baggy-anime.png";

const RAGE_SIZE_GUIDE =
  "/images/collections/new-drop/size-guides/size-guide-rage-system.png";

const DEMON_SLAYER_SIZE_GUIDE =
  "/images/size-guides/anime-archives/demon-slayer-size-guide.png";

const DRAGON_BALL_SIZE_GUIDE =
  "/images/size-guides/anime-archives/dragon-ball-size-guide.png";

const JUJUTSU_KAISEN_SIZE_GUIDE =
  "/images/size-guides/anime-archives/jujutsu-kaisen-size-guide.png";

const WILDCORE_WOLVES_SIZE_GUIDE =
  "/images/size-guides/anime-archives/tank-dark-size-guide.png";

const OVERSIZED_LONG_SLEEVE_SIZE_GUIDE =
  "/images/size-guides/graphic-series/oversized-long-sleeve-size-guide.png";

const BAGGY_REPEL_SIZE_GUIDE =
  "/images/products/repel/baggy/baggy-repel-size-guide.png";

const JOGGER_REPEL_SIZE_GUIDE =
  "/images/products/repel/jogger/jogger-repel-size-guide.png";

const VINTAGE_HOODIE_SIZE_GUIDE =
  "/images/products/vintage/hoodie/vintage-zip-hoodie-size-guide.png";

const VINTAGE_SHORTS_SIZE_GUIDE =
  "/images/products/vintage/shorts/vintage-shorts-size-guide.png";

const CROP_TOP_WOMAN_SIZE_GUIDE =
  "/images/products/women/crop-tops/crop-top-woman-size-guide.png";
// =====================================================
// COLLECTIONS
// =====================================================

export const collections: Collection[] = [
 // ===================================================
// 01 — VINTAGE SPORT
// ===================================================
{
  id: "vintage",

  title: "Vintage Sport",

  subtitle: "Performance meets street culture.",

  description:
    "Engineered for movement. Designed for everyday wear.",

  heroImage:
    "/images/collections/red-hoodie.png",

  accent: "#E31B23",

  categories: [
    // -------------------------------------------------
    // HOODIES
    // Shopify: CHAMARRA VINTAGE SPORT
    // -------------------------------------------------
    {
      title: "Hoodies",

      items: [
        {
          id: "hoodie-red",

          name: "Red Hoodie",

          price: 499,

          images: [
            "/images/products/hoodies/hoodie-red.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "chamarra-vintage-sport",
          shopifyColor: "ROJO",
          shopifyEnabled: true,
        },

        {
          id: "hoodie-navy",

          name: "Navy Hoodie",

          price: 499,

          images: [
            "/images/products/hoodies/hoodie-navy.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "chamarra-vintage-sport",
          shopifyColor: "MARINO",
          shopifyEnabled: true,
        },

        {
          id: "hoodie-sky",

          name: "Sky Hoodie",

          price: 499,

          images: [
            "/images/products/hoodies/hoodie-sky.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "chamarra-vintage-sport",
          shopifyColor: "CIELO",
          shopifyEnabled: true,
        },

        {
          id: "hoodie-pink",

          name: "Pink Hoodie",

          price: 499,

          images: [
            "/images/products/hoodies/hoodie-pink.png",
          ],

          sizes: ["S-M"],
        

          shopifyHandle: "hoodie-pink",
          shopifyEnabled: true,
        },

        {
          id: "hoodie-lilac",

          name: "Lilac Hoodie",

          price: 499,

          images: [
            "/images/products/hoodies/hoodie-lilac.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "chamarra-vintage-sport",
          shopifyColor: "LILA",
          shopifyEnabled: true,
        },
      ],
    },

    // -------------------------------------------------
    // JERSEYS
    // Shopify: JERSEY FLAMAS
    // -------------------------------------------------
    {
      title: "Jerseys",

      items: [
        {
          id: "jersey-black",

          name: "Black Jersey",

          price: 589,

          images: [
            "/images/products/jerseys/jersey-black.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "jersey-flamas",
          shopifyColor: "NEGRO",
          shopifyEnabled: true,
        },

        {
          id: "jersey-grey",

          name: "Grey Jersey",

          price: 589,

          images: [
            "/images/products/jerseys/jersey-grey.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "jersey-flamas",
          shopifyColor: "GRIS",
          shopifyEnabled: true,
        },

        {
          id: "jersey-red",

          name: "Red Jersey",

          price: 589,

          images: [
            "/images/products/jerseys/jersey-red.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "jersey-flamas",
          shopifyColor: "ROJO",
          shopifyEnabled: true,
        },

        {
          id: "jersey-blue",

          name: "Blue Jersey",

          price: 589,

          images: [
            "/images/products/jerseys/jersey-blue.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "jersey-flamas",
          shopifyColor: "AZUL",
          shopifyEnabled: true,
        },
      ],
    },

    // -------------------------------------------------
    // JOGGERS
    // Shopify: PANS VINTAGE SPORT
    // -------------------------------------------------
    {
      title: "Joggers",

      items: [
        {
          id: "jogger-black",

          name: "Black Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-black.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "NEGRO",
          shopifyEnabled: true,
        },

        {
          id: "jogger-navy",

          name: "Navy Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-navy.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "MARINO",
          shopifyEnabled: true,
        },

        {
          id: "jogger-red",

          name: "Red Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-red.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "ROJO",
          shopifyEnabled: true,
        },

        {
          id: "jogger-blue",

          name: "Blue Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-blue.png",
          ],

          sizes: ["S", "M", "L"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "ELECTRICO",
          shopifyEnabled: true,
        },

        {
          id: "jogger-sky",

          name: "Sky Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-sky.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "CIELO",
          shopifyEnabled: true,
        },

        {
          id: "jogger-lilac",

          name: "Lilac Jogger",

          price: 550,

          images: [
            "/images/products/joggers/jogger-lilac.png",
          ],

          sizes: ["S-M"],

          shopifyHandle: "pans-vintage-sport",
          shopifyColor: "LILA",
          shopifyEnabled: true,
        },
      ],
    },
  ],
},

 // ===================================================
// 02 — GRAPHIC SERIES
// ===================================================
{
  id: "graphic",

  title: "Graphic Series",

subtitle: "Every graphic tells a story.",

description:
  "Limited graphics inspired by instinct, discipline and the visual language of WILDCORE.",

heroImage:
  "/images/products/long-sleeves/royal-crest-long-sleeve.png",

accent: "#8B5CF6",

categories: [
  // =================================================
  // GRAPHIC TEES
  // =================================================
  {
    title: "Graphic Tees",

    items: [
      {
        id: "panther",

        name: "Wild Panther",

        price: 299,

        images: [
          "/images/products/graphic-tees/panther.png",
        ],

        sizes: ["S", "M-L", "XL"],

        shopifyHandle: "oversize-black-panther",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },

      {
        id: "black-wolf",

        name: "Black Wolf",

        price: 299,

        images: [
          "/images/products/graphic-tees/black-wolf.png",
        ],

        sizes: ["S", "M-L", "XL"],

        shopifyHandle: "oversize-black-wolf",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },

      {
        id: "snake",

        name: "Wild Snake",

        price: 299,

        images: [
          "/images/products/graphic-tees/snake.png",
        ],

        sizes: ["S", "M-L", "XL"],

        shopifyHandle: "oversize-black-snake",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },

      {
        id: "black-gothic",

        name: "Black Gothic",

        price: 299,

        images: [
          "/images/products/graphic-tees/black-gothic-front.png",
          "/images/products/graphic-tees/black-gothic-back.png",
        ],

        sizes: ["S", "M", "L"],

        shopifyHandle: "oversize-black-gothic",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },

      {
        id: "black-thunder",

        name: "Black Thunder",

        price: 299,

        images: [
          "/images/products/graphic-tees/black-thunder-front.png",
          "/images/products/graphic-tees/black-thunder-back.png",
        ],

        sizes: ["S", "M", "L"],

        shopifyHandle: "oversize-black-thunder",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },

      {
        id: "black-blood",

        name: "Black Blood",

        price: 299,

        images: [
          "/images/products/graphic-tees/black-blood-front.png",
          "/images/products/graphic-tees/black-blood-back.png",
        ],

        sizes: ["S", "M", "L"],

        shopifyHandle: "oversize-black-blood",
        shopifyColor: "NEGRO",
        shopifyEnabled: true,
      },
    ],
  },

       // =================================================
    // OVERSIZED LONG SLEEVES
    // =================================================
    {
      title: "Oversized Long Sleeves",

      items: [
        {
          id: "royal-crest-long-sleeve",

          name: "Royal Crest Long Sleeve",

            price: 599,

          images: [
            "/images/products/long-sleeves/royal-crest-long-sleeve.png",
          ],

          sizes: ["S", "M", "L"],

          sizeGuide:
            OVERSIZED_LONG_SLEEVE_SIZE_GUIDE,

          description:
            "An oversized WILDCORE long sleeve with mineral wash finish, built around a royal crest, twin wolves and the symbolism of strength, loyalty and ambition. 260 GSM, 100% combed cotton.",
        

          shopifyHandle: "royal-crest-long-sleeve",
          shopifyEnabled: true,
        },

        {
          id: "canis-lupus-long-sleeve",

          name: "Canis Lupus Long Sleeve",

            price: 599,

          images: [
            "/images/products/long-sleeves/canis-lupus-long-sleeve.png",
          ],

          sizes: ["S", "M", "L"],

          sizeGuide:
            OVERSIZED_LONG_SLEEVE_SIZE_GUIDE,

          description:
            "Vintage-inspired oversized WILDCORE long sleeve with mineral wash finish and Canis Lupus graphics. Built around pack mentality, identity and inner strength. 260 GSM, 100% combed cotton.",
        

          shopifyHandle: "canis-lupus-long-sleeve",
          shopifyEnabled: true,
        },

        {
          id: "varsity-core-long-sleeve",

          name: "Varsity Core Long Sleeve",

            price: 599,

          images: [
            "/images/products/long-sleeves/varsity-core-long-sleeve.png",
          ],

          sizes: ["S", "M", "L"],

          sizeGuide:
            OVERSIZED_LONG_SLEEVE_SIZE_GUIDE,

          description:
            "A collegiate-inspired oversized long sleeve combining varsity graphics, mineral wash texture and the aggressive identity of WILDCORE. 260 GSM, 100% combed cotton.",
        

          shopifyHandle: "varsity-core-long-sleeve",
          shopifyEnabled: true,
        },

        {
          id: "society-script-long-sleeve",

          name: "Society Script Long Sleeve",

            price: 599,

          images: [
            "/images/products/long-sleeves/society-script-long-sleeve.png",
          ],

          sizes: ["S", "M", "L"],

          sizeGuide:
            OVERSIZED_LONG_SLEEVE_SIZE_GUIDE,

          description:
            "A mineral wash oversized long sleeve carrying the WILDCORE Society identity through distressed white graphics and signature red script. 260 GSM, 100% combed cotton.",
        

          shopifyHandle: "society-script-long-sleeve",
          shopifyEnabled: true,
        },
      ],
    },
  ],
},


  // ===================================================
  // 03 — BAGGY ANIME
  // ===================================================
  {
    id: "baggy-anime",

    title: "Baggy Anime",

    subtitle:
      "Anime culture. Wildcore attitude.",

    description:
      "Vintage washed baggy pants built around iconic anime graphics, oversized silhouettes and streetwear identity.",

    heroImage:
      "/images/collections/new-drop/baggy-anime/baggy-jujutsu-kaisen.png",

    accent: "#A855F7",

    sizeGuide: BAGGY_SIZE_GUIDE,

    categories: [
      {
        title: "Baggy Pants",

        items: [
          {
            id: "baggy-vintage-black",

            name: "Baggy Vintage Black",

            price: 599,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-vintage-black-front.png",
              "/images/collections/new-drop/baggy-anime/baggy-vintage-black-back.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,

            description:
              "Vintage washed baggy pants built around oversized proportions and the underground identity of WILDCORE.",
          

          shopifyHandle: "baggy-vintage-black",
          shopifyEnabled: true,
        },

          {
            id: "baggy-jujutsu-kaisen",

            name: "Jujutsu Kaisen Baggy",

            price: 789,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-jujutsu-kaisen.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,

            description:
              "Anime-inspired baggy pants combining oversized streetwear proportions with the aggressive identity of WILDCORE.",
          

          shopifyHandle: "baggy-jujutsu-kaisen",
          shopifyEnabled: true,
        },

          {
            id: "baggy-demon-slayer-inosuke",

            name: "Inosuke Baggy",

            price: 789,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-demon-slayer-inosuke.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,
          

          shopifyHandle: "baggy-demon-slayer-inosuke",
          shopifyEnabled: true,
        },

          {
            id: "baggy-demon-slayer-zenitsu",

            name: "Zenitsu Baggy",

            price: 789,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-demon-slayer-zenitsu.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,
          

          shopifyHandle: "baggy-demon-slayer-zenitsu",
          shopifyEnabled: true,
        },

          {
            id: "baggy-demon-slayer-tanjiro",

            name: "Tanjiro Baggy",

            price: 789,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-demon-slayer-tanjiro.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,
          

          shopifyHandle: "baggy-demon-slayer-tanjiro",
          shopifyEnabled: true,
        },

          {
            id: "baggy-genetic-of-chaos",

            name: "Genetic of Chaos Baggy",

            price: 789,

            images: [
              "/images/collections/new-drop/baggy-anime/baggy-genetic-of-chaos.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_SIZE_GUIDE,
          

         shopifyHandle: "baggy-genetic-of-chaos",
shopifyEnabled: true,
        },
        ],
      },
    ],
  },

  // ===================================================
  // 04 — RAGE SYSTEM
  // ===================================================
  {
    id: "rage-system",

    title: "Rage System",

    subtitle:
      "Engineered for intensity.",

    description:
      "Performance compression built for high-intensity training. Athletic fits, technical fabrics and the aggressive identity of WILDCORE.",

    heroImage:
      "/images/collections/new-drop/rage-system/compression-gothic-red.png",

    accent: "#E31B23",

    sizeGuide:
      RAGE_SIZE_GUIDE,

    categories: [
      // -------------------------------------------------
      // COMPRESSION TEES
      // -------------------------------------------------
      {
        title: "Compression Tees",

        items: [
          {
            id: "compression-gothic-blue",

            name:
              "Gothic Compression Blue",

            price: 589,

            images: [
              "/images/collections/new-drop/rage-system/compression-gothic-blue.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-gothic-blue",
          shopifyEnabled: true,
        },

          {
            id: "compression-gothic-red",

            name:
              "Gothic Compression Red",

            price: 589,

            images: [
              "/images/collections/new-drop/rage-system/compression-gothic-red.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-gothic-red",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // LONG SLEEVE
      // -------------------------------------------------
      {
        title:
          "Long Sleeve Compression",

        items: [
          {
            id: "compression-long-beige",

            name:
              "Long Sleeve Compression Beige",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-long-beige.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-long-beige",
          shopifyEnabled: true,
        },

          {
            id: "compression-long-grey",

            name:
              "Long Sleeve Compression Grey",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-long-grey.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-long-grey",
          shopifyEnabled: true,
        },

          {
            id: "compression-long-navy",

            name:
              "Long Sleeve Compression Navy",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-long-navy.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-long-navy",
          shopifyEnabled: true,
        },

          {
            id: "compression-long-black",

            name:
              "Long Sleeve Compression Black",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-long-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-long-black",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // HOODED
      // -------------------------------------------------
      {
        title:
          "Hooded Compression",

        items: [
          {
            id: "compression-hooded-beige",

            name:
              "Hooded Compression Beige",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-hooded-beige.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-hooded-beige",
          shopifyEnabled: true,
        },

          {
            id: "compression-hooded-grey",

            name:
              "Hooded Compression Grey",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-hooded-grey.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-hooded-grey",
          shopifyEnabled: true,
        },

          {
            id: "compression-hooded-black",

            name:
              "Hooded Compression Black",

            price: 500,

            images: [
              "/images/collections/new-drop/rage-system/compression-hooded-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              RAGE_SIZE_GUIDE,
          

          shopifyHandle: "compression-hooded-black",
          shopifyEnabled: true,
        },
        ],
      },
    ],
  },

  // ===================================================
  // 05 — ANIME ARCHIVES
  // ===================================================
  {
    id: "anime-archives",

    title: "Anime Archives",

    subtitle:
      "Icons reborn through WILDCORE.",

    description:
      "Anime-inspired graphics reinterpreted through the aggressive identity, oversized silhouettes and underground aesthetic of WILDCORE.",

    heroImage:
      "/images/products/anime-archives/demon-slayer/tanjiro-flame-back.png",

    accent: "#F5B301",

    categories: [
      // =================================================
      // DEMON SLAYER
      // =================================================
      {
        title: "Demon Slayer",

        items: [
          {
            id: "tanjiro-flame",

            name: "Tanjiro Flame",

            price: 589,

            images: [
              "/images/products/anime-archives/demon-slayer/tanjiro-flame-front.png",
              "/images/products/anime-archives/demon-slayer/tanjiro-flame-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DEMON_SLAYER_SIZE_GUIDE,

            description:
              "Limited WILDCORE oversized piece inspired by Tanjiro and the discipline required to keep moving forward.",
          

          shopifyHandle: "tanjiro-flame",
          shopifyEnabled: true,
        },

          {
            id: "zenitsu-thunder",

            name: "Zenitsu Thunder",

            price: 589,

            images: [
              "/images/products/anime-archives/demon-slayer/zenitsu-thunder-front.png",
              "/images/products/anime-archives/demon-slayer/zenitsu-thunder-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DEMON_SLAYER_SIZE_GUIDE,

            description:
              "Explosive energy translated into WILDCORE streetwear. Inspired by speed, instinct and Zenitsu's thunder.",
          

          shopifyHandle: "zenitsu-thunder",
          shopifyEnabled: true,
        },

          {
            id: "inosuke-moon",

            name: "Inosuke Moon",

            price: 589,

            images: [
              "/images/products/anime-archives/demon-slayer/inosuke-moon-front.png",
              "/images/products/anime-archives/demon-slayer/inosuke-moon-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DEMON_SLAYER_SIZE_GUIDE,

            description:
              "Raw instinct meets oversized streetwear in a WILDCORE piece inspired by the untamed strength of Inosuke.",
          

          shopifyHandle: "inosuke-moon",
          shopifyEnabled: true,
        },
        ],
      },

      // =================================================
      // DRAGON BALL
      // =================================================
      {
        title: "Dragon Ball",

        items: [
          {
            id: "broly-rage",

            name: "Broly Rage",

            price: 589,

            images: [
              "/images/products/anime-archives/dragon-ball/broly-rage-front.png",
              "/images/products/anime-archives/dragon-ball/broly-rage-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DRAGON_BALL_SIZE_GUIDE,

            description:
              "Uncontrolled power translated into WILDCORE streetwear. Built around the overwhelming presence and strength of Broly.",
          

          shopifyHandle: "broly-rage",
          shopifyEnabled: true,
        },

          {
            id: "gohan-legacy",

            name: "Gohan Legacy",

            price: 589,

            images: [
              "/images/products/anime-archives/dragon-ball/gohan-legacy-front.png",
              "/images/products/anime-archives/dragon-ball/gohan-legacy-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DRAGON_BALL_SIZE_GUIDE,

            description:
              "A WILDCORE oversized piece inspired by Gohan and the strength revealed when limits disappear.",
          

          shopifyHandle: "gohan-legacy",
          shopifyEnabled: true,
        },

          {
            id: "goku-legacy",

            name: "Goku Legacy",

            price: 589,

            images: [
              "/images/products/anime-archives/dragon-ball/goku-legacy-front.png",
              "/images/products/anime-archives/dragon-ball/goku-legacy-back.png",
              "/images/products/anime-archives/dragon-ball/goku-legacy-back-02.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DRAGON_BALL_SIZE_GUIDE,

            description:
              "Limited WILDCORE piece inspired by the relentless pursuit of strength. Built around oversized streetwear, graphic identity and the mindset of constant evolution.",
          

          shopifyHandle: "goku-legacy",
          shopifyEnabled: true,
        },

          {
            id: "vegeta-prince",

            name: "Vegeta Prince",

            price: 589,

            images: [
              "/images/products/anime-archives/dragon-ball/vegeta-prince-front.png",
              "/images/products/anime-archives/dragon-ball/vegeta-prince-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              DRAGON_BALL_SIZE_GUIDE,

            description:
              "Pride, discipline and relentless evolution. A WILDCORE oversized piece inspired by the Saiyan Prince.",
          

          shopifyHandle: "vegeta-prince",
          shopifyEnabled: true,
        },
        ],
      },

      // =================================================
      // JUJUTSU KAISEN
      // =================================================
      {
        title: "Jujutsu Kaisen",

        items: [
          {
            id: "sukuna-curse",

            name: "Sukuna Curse",

            price: 589,

            images: [
              "/images/products/anime-archives/jujutsu-kaisen/sukuna-curse-front.png",
              "/images/products/anime-archives/jujutsu-kaisen/sukuna-curse-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              JUJUTSU_KAISEN_SIZE_GUIDE,

            description:
              "Curse energy translated into WILDCORE identity. An oversized statement piece inspired by Sukuna.",
          

          shopifyHandle: "sukuna-curse",
          shopifyEnabled: true,
        },

          {
            id: "toji-assassin",

            name: "Toji Assassin",

            price: 589,

            images: [
              "/images/products/anime-archives/jujutsu-kaisen/toji-assassin-front.png",
              "/images/products/anime-archives/jujutsu-kaisen/toji-assassin-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              JUJUTSU_KAISEN_SIZE_GUIDE,

            description:
              "Precision, strength and presence. A WILDCORE oversized piece inspired by Toji Fushiguro.",
          

          shopifyHandle: "toji-assassin",
          shopifyEnabled: true,
        },
        ],
      },

      // =================================================
      // WILDCORE WOLVES
      // TANK DARK — 260 GSM — 100% COTTON
      // =================================================
      {
        title: "Wildcore Wolves",

        items: [
          {
            id: "wolf-society-blue",

            name:
              "Wolf Society Blue",

            price: 450,

            images: [
              "/images/products/anime-archives/wildcore-wolves/wolf-society-blue-front.png",
              "/images/products/anime-archives/wildcore-wolves/wolf-society-blue-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              WILDCORE_WOLVES_SIZE_GUIDE,

            description:
              "A sleeveless WILDCORE Society piece built around loyalty, discipline and the mentality of the pack.",
          

          shopifyHandle: "wolf-society-blue",
          shopifyEnabled: true,
        },

          {
            id: "wolf-society-purple",

            name:
              "Wolf Society Purple",

            price: 450,

            images: [
              "/images/products/anime-archives/wildcore-wolves/wolf-society-purple-front.png",
              "/images/products/anime-archives/wildcore-wolves/wolf-society-purple-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              WILDCORE_WOLVES_SIZE_GUIDE,

            description:
              "A darker sleeveless interpretation of the WILDCORE Society identity. Built around inner strength and presence.",
          

          shopifyHandle: "wolf-society-purple",
          shopifyEnabled: true,
        },

          {
            id: "wolf-society-red",

            name:
              "Wolf Society Red",

            price: 450,

            images: [
              "/images/products/anime-archives/wildcore-wolves/wolf-society-red-front.png",
              "/images/products/anime-archives/wildcore-wolves/wolf-society-red-back.png",
            ],

            sizes: [
              "S",
              "M",
              "L",
              "XL",
            ],

            sizeGuide:
              WILDCORE_WOLVES_SIZE_GUIDE,

            description:
              "Aggressive WILDCORE Society graphics translated into a sleeveless silhouette built around strength, loyalty and discipline.",
          

          shopifyHandle: "wolf-society-red",
          shopifyEnabled: true,
        },
        ],
      },
    ],
  },

  // ===================================================
  // 06 — CORE ESSENTIALS
  // ===================================================
  {
    id: "core-essentials",

    title: "Core Essentials",

    subtitle: "Built for movement. Defined by WILDCORE.",

    description:
      "Technical repel fabrics, relaxed silhouettes and mineral wash essentials designed around everyday movement and the identity of WILDCORE.",

    heroImage:
      "/images/products/repel/baggy/baggy-repel-red.png",

    accent: "#E31B23",

    categories: [
      // -------------------------------------------------
      // BAGGY REPEL
      // -------------------------------------------------
      {
        title: "Baggy Repel",

        items: [
          {
            id: "baggy-repel-red",

            name: "Baggy Repel Red",

            price: 550,

            images: [
              "/images/products/repel/baggy/baggy-repel-red.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_REPEL_SIZE_GUIDE,

            description:
              "Wide-leg WILDCORE Baggy Repel in red. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "baggy-repel-red",
          shopifyEnabled: true,
        },

          {
            id: "baggy-repel-navy",

            name: "Baggy Repel Navy",

            price: 550,

            images: [
              "/images/products/repel/baggy/baggy-repel-navy.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_REPEL_SIZE_GUIDE,

            description:
              "Wide-leg WILDCORE Baggy Repel in navy. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "baggy-repel-navy",
          shopifyEnabled: true,
        },

          {
            id: "baggy-repel-black",

            name: "Baggy Repel Black",

            price: 550,

            images: [
              "/images/products/repel/baggy/baggy-repel-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              BAGGY_REPEL_SIZE_GUIDE,

            description:
              "Wide-leg WILDCORE Baggy Repel in black. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "baggy-repel-black",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // JOGGER REPEL
      // -------------------------------------------------
      {
        title: "Jogger Repel",

        items: [
          {
            id: "jogger-repel-red",

            name: "Jogger Repel Red",

            price: 550,

            images: [
              "/images/products/repel/jogger/jogger-repel-red.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              JOGGER_REPEL_SIZE_GUIDE,

            description:
              "Relaxed WILDCORE Jogger Repel in red with elastic cuffs. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "jogger-repel-red",
          shopifyEnabled: true,
        },

          {
            id: "jogger-repel-navy",

            name: "Jogger Repel Navy",

            price: 550,

            images: [
              "/images/products/repel/jogger/jogger-repel-navy.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              JOGGER_REPEL_SIZE_GUIDE,

            description:
              "Relaxed WILDCORE Jogger Repel in navy with elastic cuffs. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "jogger-repel-navy",
          shopifyEnabled: true,
        },

          {
            id: "jogger-repel-black",

            name: "Jogger Repel Black",

            price: 550,

            images: [
              "/images/products/repel/jogger/jogger-repel-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              JOGGER_REPEL_SIZE_GUIDE,

            description:
              "Relaxed WILDCORE Jogger Repel in black with elastic cuffs. Built with 94% polyester and 6% spandex, bi-stretch technology, water-repellent performance, quick-dry construction and UV protection.",
          

          shopifyHandle: "jogger-repel-black",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // VINTAGE MINERAL WASH
      // -------------------------------------------------
      {
        title: "Vintage Mineral Wash",

        items: [
          {
            id: "vintage-zip-hoodie-mineral-black",

            name: "Vintage Zip Hoodie — Mineral Black",

            price: 699,

            images: [
              "/images/products/vintage/hoodie/vintage-zip-hoodie-mineral-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              VINTAGE_HOODIE_SIZE_GUIDE,

            description:
              "Heavyweight WILDCORE zip hoodie in mineral black. 420 GSM cotton fleece, 100% cotton, laser-destruction detailing, artisanal mineral wash and premium metal zipper.",
          

          shopifyHandle: "vintage-zip-hoodie-mineral-black",
          shopifyEnabled: true,
        },

          {
            id: "vintage-shorts-mineral-black",

            name: "Vintage Shorts — Mineral Black",

            price: 399,

            images: [
              "/images/products/vintage/shorts/vintage-shorts-mineral-black.png",
            ],

            sizes: ["S", "M", "L"],

            sizeGuide:
              VINTAGE_SHORTS_SIZE_GUIDE,

            description:
              "Relaxed WILDCORE vintage shorts in mineral black with an elastic waist, washed finish and understated WDCE branding.",
          

          shopifyHandle: "vintage-shorts-mineral-black",
          shopifyEnabled: true,
        },
        ],
      },
    ],
  },

  // ===================================================
  // 07 — WOMEN'S ARCHIVE
  // ===================================================
  {
    id: "womens-archive",

    title: "Women's Archive",

    subtitle: "WILDCORE energy. Recut for her.",

    description:
      "Cropped WILDCORE silhouettes built around anime graphics, wolf iconography and signature Society artwork. 280 GSM, 100% cotton and DTG print.",

    heroImage:
      "/images/products/women/crop-tops/wolf-red-crop-top.png",

    accent: "#E31B23",

    sizeGuide:
      CROP_TOP_WOMAN_SIZE_GUIDE,

    categories: [
      // -------------------------------------------------
      // ANIME CROP TOPS
      // -------------------------------------------------
      {
        title: "Anime Crop Tops",

        items: [
          {
            id: "mewtwo-chaos-crop-top",

            name: "Mewtwo Chaos Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/mewtwo-chaos-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top featuring Mewtwo-inspired Genetics of Chaos artwork. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "mewtwo-chaos-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "inosuke-moon-crop-top",

            name: "Inosuke Moon Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/inosuke-moon-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top featuring Inosuke artwork under a blue moon aesthetic. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "inosuke-moon-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "zenitsu-thunder-crop-top",

            name: "Zenitsu Thunder Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/zenitsu-thunder-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top inspired by Zenitsu and lightning-fast intensity. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "zenitsu-thunder-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "tanjiro-flame-crop-top",

            name: "Tanjiro Flame Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/tanjiro-flame-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top inspired by Tanjiro and the discipline behind constant growth. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "tanjiro-flame-crop-top",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // WOLF SERIES
      // -------------------------------------------------
      {
        title: "Wolf Series",

        items: [
          {
            id: "wolf-blue-crop-top",

            name: "Wolf Blue Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/wolf-blue-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top with electric blue wolf artwork and Inner Strength identity. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "wolf-blue-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "wolf-purple-crop-top",

            name: "Wolf Purple Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/wolf-purple-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE Society women's crop top with purple wolf artwork, red accents and Inner Strength identity. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "wolf-purple-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "wolf-red-crop-top",

            name: "Wolf Red Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/wolf-red-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "WILDCORE women's crop top with aggressive red wolf artwork and Inner Strength identity. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "wolf-red-crop-top",
          shopifyEnabled: true,
        },
        ],
      },

      // -------------------------------------------------
      // SOCIETY / CORE
      // -------------------------------------------------
      {
        title: "Society & Core",

        items: [
          {
            id: "society-script-crop-top",

            name: "Society Script Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/society-script-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "Minimal WILDCORE Society crop top with distressed white typography and signature red script. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "society-script-crop-top",
          shopifyEnabled: true,
        },

          {
            id: "varsity-core-crop-top",

            name: "Varsity Core Crop Top",

            price: 399,

            images: [
              "/images/products/women/crop-tops/varsity-core-crop-top.png",
            ],

            sizes: ["CH", "M", "G"],

            sizeGuide:
              CROP_TOP_WOMAN_SIZE_GUIDE,

            description:
              "Collegiate WILDCORE crop top with limited-edition varsity graphics and Inner Strength detailing. 280 GSM, 100% cotton with DTG print.",
          

          shopifyHandle: "varsity-core-crop-top",
          shopifyEnabled: true,
        },
        ],
      },
    ],
  },

];

