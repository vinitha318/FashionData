import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 800,
        height: 850,
        overflowY: 'auto',
    },
};

const tilesData = [
    {

        "designer": "MAC",
        "name": "Snow Ball Face Bag Collection",
        "url": "https://shop.nordstrom.com/s/mac-snow-ball-face-bag-collection-nordstrom-exclusive-85-value/4734445?origin=category-personalizedsort",
        "price": "$49.50",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/19/_101849119.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A collection of products that work together to make you the queen of showstopping luminosity.Who it's for: All skin types.What it does: Snowflake-embossed Extra Dimension Skinfinish glazes your cheeks and décolletage, brightens eyes and gleams in all the right place, while a rose gold-handled brush and sequined stunner of a bag complete your kit.Gold collection includes:- Extra Dimension Skinfinish in Whisper of Gilt (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagPeach collection includes:- Extra Dimension Skinfinish in Show Gold (0.31 oz.)- 140 SES Synthetic Full Fan Brush- BagDermatologist tested; ophthalmologist testedNonacnegenicItem #5438794Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "description": ""
    },
    {

        "designer": "MAC",
        "name": "Snow Ball Lipstick",
        "url": "https://shop.nordstrom.com/s/mac-snow-ball-lipstick/4781130?origin=category-personalizedsort",
        "price": "$17.50",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/15/_101847775.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Holiday Crush",
            "I'm Glistening",
            "Warm Ice"
        ],
        "details": "Details & Care What it is: A beautifully packaged lipstick featuring the same formula that made M·A·C famous.What it does: These hues come in three high-fashion textures—Frost, Matte and Amplified. The special packaging features a cool crushed champagne metallic design.Finishes:- A: Amplified Creme. An ultra-creamy, quietly shiny finish that is high-impact and high-res.- F: Frost. Excellent color payoff with medium-to-high frosted shimmer-and-shine finish.- M: Matte. Pigment-rich with intense color payoff and a no-shine, all matte finish.How to use: Apply directly to lips.0.1 oz.Item #5486449Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "description": ""
    },
    {

        "designer": "MAC",
        "name": "Snow Ball Classics Mini Lipstick Kit",
        "url": "https://shop.nordstrom.com/s/mac-snow-ball-classics-mini-lipstick-kit-120-value/4781500?origin=category-personalizedsort",
        "price": "$69.50",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/0/_101859860.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition kit filled with tiny lipstick darlings.What it does: This Lipstick is the formula that made M·A·C famous. It's formulated to shade, showcase and define the lips.Shades include:- Diva (intense reddish-burgundy matte)- Ruby Woo (very matte vivid blue-red matte)- Mangrove (hot, bright red matte)- Little Darling (clean light nude matte)- Velvet Teddy (deeptone beige matte)- Whirl (dirty rose matte)- Stone (muted greyish taupe brown matte)- Rebel (midtone cream plum satin)- Flat Out Fab (bright plum matte)- Good Kisser (midtone fuchsia matte)- Please Me (muted rosy tinted pink matte)0.06 oz. eachItem #5486776Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "description": ""
    },
    {

        "designer": "MAC",
        "name": "Snow Ball Impalpable Glare Powder",
        "url": "https://shop.nordstrom.com/s/mac-snow-ball-impalpable-glare-powder/4781131?origin=category-personalizedsort",
        "price": "$34.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/0/_101849120.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Happy Go Dazzlingly",
            "Here Comes Joy"
        ],
        "details": "Details & Care What it is: An opalescent face powder that transforms cheeks into pearly orbs that light up the night.Who it's for: All skin types.What it does: It adds the perfect high-impact shimmering glow to skin and has excellent color payoff plus a rich and creamy texture. It blends effortlessly on your cheeks and features a snowflake-embossed design and cool crushed champagne metallic packaging.How to use: Apply to face using a brush as desired.0.35 oz.Dermatologist tested; ophthalmologist testedNonacnegenicItem #5486448Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "description": ""
    },
    {

        "designer": "ESTÉE LAUDER",
        "name": "Detox + Glow Collection",
        "url": "https://shop.nordstrom.com/s/estee-lauder-detox-glow-collection-42-value/4780527?origin=category-personalizedsort",
        "price": "$35.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/9/_101823749.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition discovery set featuring targeted experts to reveal skin's healthy, vibrant look.Collection includes:- Deluxe travel-size Nutritious Vitality8™ Radiance Energy Lotion Intense Moist (1 oz.): an exquisitely luxe lotion that infuses your skin with comforting moisture and energy for a look of radiant vitality.- Deluxe travel-size Advanced Night Repair Synchronized Recovery Complex II (0.24 oz.): a nightly serum that dramatically reduces the look of all key signs of aging.- Deluxe travel-size Nutritious Vitality8™ Radiant Moisture Crème (0.5 oz.): a hydrating formula that helps neutralize environmental aggressors with lasting antioxidant power so your skin looks and feels radiant.Item #5485839Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "SAINT LAURENT",
        "name": "Yves Saint Laurent Tatouage Couture Lip Trio",
        "url": "https://shop.nordstrom.com/s/yves-saint-laurent-tatouage-couture-lip-trio-nordstrom-exclusive-108-value/4756922?origin=category-personalizedsort",
        "price": "$80.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/1/_101630961.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition set featuring three must-have shades of Yves Saint Laurent's new liquid matte lip stain, Tatouage Couture.What it does: This lip stain offers a high-impact, ultra-matte color with a lightweight, naked feel. Think ink. Tatouage Couture gives your lips matte, tattoo-like color that is lightweight and nondrying, making the formula ultra-comfortable to wear. Its high-pigment color dries instantly, stays fresh and moves with your lips for eight hours of wear. Its exclusive liner-like applicator allows you to precisely outline your lips as well as fill them in with color for perfect definition every time. It never feathers or spills over the lip line.Shades include:- 5 Rosewood Gang- 7 Nu Interdit- 8 Black Red CodeHow to use: Use the high point of the applicator tip to line your lips with a thin layer of Tatouage Couture, just like you would a pencil. Then, turn it on its side to brush the ultra-thin matte formula onto your lips.0.2 oz.Item #5447601Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "LANCÔME",
        "name": "Le Parisian Holiday Color Collection",
        "url": "https://shop.nordstrom.com/s/lancome-le-parisian-holiday-color-collection-purchase-with-any-lancome-purchase/4778080?origin=category-personalizedsort",
        "price": "$63.50",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/9/_101769769.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Glam",
            "Glow"
        ],
        "details": "Details & Care What it is: A collection of best-sellers to help you create a picture-perfect makeup look for just $63.50 with any Lancôme purchase. A $350 value.Each collection includes:- Bi-Facil Eye Makeup Remover (4.2 oz.)- Cils Booster XL Mascara Base (0.18 oz.)- Advanced Genifique Youth Activating Concentrate (0.67 oz.)- La Vie Est Belle Eau de Parfum (0.13 oz.)- Train CaseGlow also includes:- 2 Color Design Eyeshadow & Blush Subtil Palettes in Warm Day & Warm Night (0.18 oz. each)- 2 Color Design Lipcolors in 329 Love It & 126 Natural Beauty (0.14 oz. each)- Definicils Mascara (0.21 oz.)- 2 Juicy Tubes Lip Glosses in Shimmer & Magic Spell (0.5 oz. each)Glam also includes:- 2 Color Design Eyeshadow & Blush Subtil Palette in Cool Day and Cool Night (0.18 oz. each)- 2 Color Design Lipcolor in 340 All Done Up and 357 Wannabe (0.14 oz. each)- Monsieur Big Mascara (0.27 oz.)- 2 Juicy Tube Lip Gloss in Tickled Pink and 95 Electro Marshmallow (0.5 oz. each)Item #5483952Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "ESTÉE LAUDER",
        "name": "Repair + Renew Set",
        "url": "https://shop.nordstrom.com/s/estee-lauder-repair-renew-set-54-value/4780524?origin=category-personalizedsort",
        "price": "$35.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_101823732.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition targeted collection of expert products that work together to significantly improve skin's radiant, youthful appearance.Set includes:- Deluxe travel-size Micro Essence Skin Activating Treatment Lotion (1 oz.): a groundbreaking essence-in-lotion that activates and strengthens skin's foundation to reveal its youthful, angelic glow.- Deluxe travel-size Advanced Night Repair Synchronized Recovery Complex II (0.24 oz.): a nightly serum that dramatically reduces the look of all key signs of aging.- Deluxe travel-size Advanced Night Repair Eye Synchronized Complex II (0.17 oz.): an anti-aging eye cream with a rich, silky, gel texture proven to reduce the look of every key visible sign of eye aging, including fine lines, wrinkles, puffiness, dark circles, dryness and uneven skin tone.Item #5485838Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "NARS",
        "name": "Man Ray Impassioned Love Triangle Set",
        "url": "https://shop.nordstrom.com/s/nars-man-ray-impassioned-love-triangle-set-35-value/4778357?origin=category-personalizedsort",
        "price": "$24.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/2/_101822742.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition set featuring two award-winning formulas.What it does: NARS Blush delivers healthy-looking color that immediately enlivens the complexion and provides a natural-looking flush that flatters any skin tone. Audacious Lipstick is a soft, matte-finish lipstick that provides dramatic depth and unstoppable character. The ultra-saturated color feels hydrating and stays put without bleeding or feathering.Set includes:- Mini Audacious Lipstick in Anna (dusty mauve) (0.08 oz.)- Mini Blush in Impassioned (pink orchid) (0.08 oz.)Item #5484165Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {
        "designer": "BALENCIAGA",
        "name": "Speed Mid Sneaker",
        "url": "https://shop.nordstrom.com/s/balenciaga-speed-mid-sneaker-women/4701503?origin=category-personalizedsort",
        "price": "$695.00",
        "description": "A sock-like fit and bold white sole define Balenciaga's elastic knit sneaker that can power you to conquer the track or errands with sleek, sporty style.",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/15/_101873855.jpg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=704&h=1080"
        ],
        "color": [
            "Black",
            "White"
        ],
        "details": "Size Info Runs small; order next size up.Details & Care A sock-like fit and bold white sole define Balenciaga's elastic knit sneaker that can power you to conquer the track or errands with sleek, sporty style.Pull-on styleTextile upper and lining/synthetic soleMade in ItalySalon ShoesItem #5423041Helpful info: Shoe Fit Fundamentals (video)Free Shipping & Returns See moreGift Options Select a size and color to see if gift options are available for this item. Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.877.543.7463",
        "size": [
            "5US / 35EU",
            "6US / 36EU",
            "7US / 37EU",
            "8US / 38EU",
            "9US / 39EU",
            "10US / 40EU",
            "11US / 41EU",
            "12US / 42EU"
        ]
    },
    {

        "designer": "NARS",
        "name": "Les Amoureux Audacious Lipstick Coffret",
        "url": "https://shop.nordstrom.com/s/nars-les-amoureux-audacious-lipstick-coffret-nordstrom-exclusive-75-value/4778373?origin=category-personalizedsort&fashioncolor=WHITE",
        "price": "$55.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_101813874.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition coffret featuring four ravishing mini lipstick neutrals to make your day look.What it does: Audacious Lipstick is an award-winning formula provides dramatic depth and unstoppable character. The bold, ultra-saturated color feels hydrating and stays put without bleeding or feathering and is enriched with ingredients that smooth and nourish lips. This coffret features two new, limited-edition shades.Shades include:- Ady (dusty coral)- Arden (burnt coral)- Barbara (tan rose)- Jane (terracotta rose)0.08 oz. eachMade in the USAItem #5484179Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "CANADA GOOSE",
        "name": "'Mystique' Regular Fit Down Parka with Genuine Coyote Fur Trim",
        "url": "https://shop.nordstrom.com/s/canada-goose-mystique-regular-fit-down-parka-with-genuine-coyote-fur-trim/3383166?origin=category-personalizedsort",
        "price": "$995.00",
        "description": "",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_101957332.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Admiral Blue",
            "Black",
            "Black/ Grey",
            "Graphite",
            "Military Green",
            "Navy"
        ],
        "details": "Size Info The Regular fit from Canada Goose is cut with a little extra room through the chest and body; ideal for layering.XS=2, S=4-6, M=8-10, L=12-14, XL=16-18, XXL=20.Details & Care A full-length down parka was designed specially for exceptional warmth and a sleek, flattering fit, while the genuine coyote fur ruff helps keep the cold away from your face.49\" length (size Medium).Two-way front-zip closure.Insulated wind guard behind zipper.Removable hood with detachable coyote fur trim.Long sleeves with internal knit cuffs.Fleece-lined hand pockets; interior pockets.Rated for temperatures to -22 F (-30 C).Fully lined, with 625-fill power duck-down insulation.85% polyester, 15% cotton with genuine coyote fur (Canada).Dry clean.By Canada Goose; made in Canada.Women's Active & Swim.Canada Goose product number: 3035L.Item #613259Free Shipping & Returns See moreGift Options Select a size and color to see if gift options are available for this item. Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "size": [
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large"
        ]
    },
    {

        "designer": "CHARLOTTE TILBURY",
        "name": "Charlotte's Beauty Icons Collection",
        "url": "https://shop.nordstrom.com/s/charlotte-tilbury-charlottes-beauty-icons-collection/4786354?origin=category-personalizedsort&fashioncolor=BLACK%2F%20GREY",
        "price": "$75.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/3/_101859803.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: An award-winning lineup of Charlotte's most-loved products.Collection includes:- Charlotte's Magic Cream Treat & Transform Moisturizer (0.51 oz.): a cream that contains Charlotte Tilbury’s secret mix of patented anti-aging, hydrating and youth-promoting ingredients that lift and transform tired skin in an instant.- Mini Full Fat Lashes 5 Star Mascara (0.1 oz.): a luxurious multitasker that curls, separates, lengthens and dramatizes lashes in a single stroke.- Mini Wonderglow Instant Soft-Focus Beauty Flash (0.51 oz.): a visionary new hybrid primer that combines an anti-aging elixir and complexion-enhancing light diffusers to turn dull, dehydrated skin around in a flash.- Mini K.I.S.S.I.N.G Lipstick in Penelope Pink (0.03 oz.): a lipstick enriched with the antioxidant Lipstick Tree, a breakthrough, secret ingredient that naturally protects lips from UV damage, leaving them cashmere-soft and irresistible.- Mini Lip Cheat Re-Size & Re-Shape Lip Liner in Pillow Talk (0.04 oz.): a rich, velvety liner with the power to re-shape, re-size and balance your lips.Item #5447439Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "NARS",
        "name": "Man Ray The Veil Cheek Palette",
        "url": "https://shop.nordstrom.com/s/nars-man-ray-the-veil-cheek-palette-155-68-value/4778361?origin=category-personalizedsort&fashioncolor=BLACK%2F%20GREY",
        "price": "$49.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/16/_101837496.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A limited-edition palette of buildable hues that contour, highlight and pop with natural-looking dimension.What it does: This palette features Sun Wash Diffusing Bronzer in the iconic shade Laguna, plus new, limited-edition shades of Blush and Highlighter.Palette includes:- Bronzer in Laguna (diffused brown powder with golden shimmer) (0.14 oz.)- Limited-edition Blush in Lovesick (satin watermelon) (0.12 oz.)- Limited-edition Highlighter in Surreal (glistening bronze rose) (0.12 oz.)Made in ItalyItem #5484177Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "MADEWELL",
        "name": "Atlas Cocoon Coat",
        "url": "https://shop.nordstrom.com/s/madewell-atlas-cocoon-coat/4757476?origin=category-personalizedsort&fashioncolor=BLACK%2F%20GREY",
        "price": "$298.00",
        "description": "",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_101826332.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Avalon Pink",
            "Burnished Cedar"
        ],
        "details": "Size Info True to size.Details & Care Italian melton wool-blend stops the cold in its tracks—yet lets every compliment come through—in this wear-all-season coat cut roomy enough to layer over your coziest sweaters.42 1/2\" length (size 8)Single button closurePeaked lapelsLong sleevesAngled welt pocketsLinedAvalon Pink is 40% virgin wool, 30% mohair, 30% polyamide; all other colors are 70% virgin wool, 30% polyamideDry cleanImportedt.b.d.Item #5468480Free Shipping & Returns See moreGift Options Select a size and color to see if gift options are available for this item. Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "size": [
            "0",
            "2",
            "4",
            "6",
            "8",
            "10"
        ]
    },
    {

        "designer": "NARS",
        "name": "Man Ray Photogloss Lip Color",
        "url": "https://shop.nordstrom.com/s/nars-man-ray-photogloss-lip-color-limited-edition/4778359?origin=category-personalizedsort&fashioncolor=AVALON%20PINK",
        "price": "$26.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/2/_101837602.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "color": [
            "Kiki",
            "Limits",
            "Muse",
            "Zambeze"
        ],
        "details": "Details & Care What it is: A limited-edition selection of Photogloss hues to celebrate the season.What it does: This lip color glistens up your lips in saturated hues steeped in superior high shine.0.08 oz.Made in CanadaItem #5484164Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "DIOR",
        "name": "Bijou Edition Rouge Dior Couture Lipstick Refill Set",
        "url": "https://shop.nordstrom.com/s/dior-bijou-edition-rouge-dior-couture-lipstick-refill-set-210-value/4761210?origin=category-personalizedsort&fashioncolor=AVALON%20PINK",
        "price": "$160.00",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/14/_101696694.jpg?crop=pad&pad_color=FFF&format=jpeg&w=704&h=1080"
        ],
        "details": "Details & Care What it is: A set inspired by the catwalk featuring gorgeous shades of lipstick, plus one decorative bullet sized to fit all the lipstick refills in this set.What it does: The voluptuous Rouge Dior formula provides 16 hours of comfort without drying or color streaking, in both matte and satin finishes. It includes a unique combination of lip care ingredients that target optimal comfort and lasting hold. The formula is enriched with natural hydrating mango butter. The decorative bullet comes filled with Bijou Edition Rouge Dior in 999 Matte.Shades include:- 999 Matte- 772 Classic Matte- 810 Distinct Matte- 414 Saint-Germain- 976 Daisy Plum- 897 Mysterious MatteHow to use: For flawlessly even results, apply lipstick with a lip brush, working from the center of the lips outward. For more intense color, apply the lipstick directly on lips.Made in FranceItem #5447606Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.Have Questions? Chat with us or call 1.800.723.2889",
        "description": ""
    },
    {

        "designer": "STEVE MADDEN",
        "name": "Landen Ankle Strap Sandal",
        "url": "https://shop.nordstrom.com/s/steve-madden-landen-ankle-strap-sandal-women/4510343?origin=category-personalizedsort&fashioncolor=AVALON%20PINK",
        "price": "$89.95",
        "description": "A slim ankle strap lends a dash of on-trend elegance to a barely there sandal lofted by a stiletto heel.",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/12/_101910992.jpg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=704&h=1080"
        ],
        "width": [
            "M (Medium)"
        ],
        "details": "Size Info True to size.Details & Care A slim ankle strap lends a dash of on-trend elegance to a barely there sandal lofted by a stiletto heel.Toe Style:open toe4 1/2\" heel (size 8.5)Adjustable ankle strap with buckle closureLeather or synthetic upper/synthetic lining and soleImportedBP. ShoesItem #5284872Helpful info: Shoe Fit Fundamentals (video), How to Measure Heel HeightsFree Shipping & Returns See moreGift Options Select a size and color to see if gift options are available for this item. Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "color": [
            "Black Nubuck Leather",
            "Blush Patent Leather",
            "Citron",
            "Dark Blue",
            "Light Grey",
            "Mauve",
            "Pink Patent Leather",
            "Red Nubuck Leather",
            "Rose",
            "Rose Gold",
            "Silver",
            "Tan Nubuck",
            "White Leather",
            "Yellow Patent Leather"
        ],
        "size": [
            "5",
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "8.5",
            "9",
            "9.5",
            "10",
            "11"
        ]
    },
    {

        "designer": "ADIDAS",
        "name": "'Adilette' Slide Sandal",
        "url": "https://shop.nordstrom.com/s/adidas-adilette-slide-sandal-women/3637123?origin=category-personalizedsort&fashioncolor=YELLOW%20PATENT%20LEATHER",
        "price": "$44.95",
        "description": "An everyday slide sandal features a wide single strap and a well-cushioned footbed.",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/4/_101908304.jpg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=704&h=1080"
        ],
        "width": [
            "M (Medium)"
        ],
        "details": "Size Info Runs large; order one whole size down.Unisex: Built on a unisex shoe construction; signature full fit.Sizes shown are Women's shoe sizes.Packaging reflects men's shoe sizes.Details & Care An everyday slide sandal features a wide single strap and a well-cushioned footbed.Toe Style:open toeSynthetic upper/textile and synthetic lining/synthetic sole.By adidas; imported.BP. Shoes.Item #992874Helpful info: Shoe Fit Fundamentals (video)Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "color": [
            "Blue/ Blue/ Blue",
            "Coral/ Coral/ Coral",
            "Green/ Green/ Green",
            "Raw Pink/ Raw Pink"
        ],
        "size": [
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
        ]
    },
    {
        "designer": "NIKE",
        "name": "Air Max Thea Sneaker",
        "url": "https://shop.nordstrom.com/s/nike-air-max-thea-sneaker-women/3459081?origin=category-personalizedsort&fashioncolor=RAW%20PINK%2F%20RAW%20PINK",
        "price": "$95.00",
        "description": "A sporty low-profile sneaker features breathable mesh panels and a lightweight, cushioned sole for all-day comfort.",
        "image_urls": [
            "https://n.nordstrommedia.com/ImageGallery/store/product/Zoom/18/_101875498.jpg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=704&h=1080"
        ],
        "width": [
            "M (Medium)",
            "Light Bone/ Sail/ White"
        ],
        "details": "Size Info Previous version ran small; order true to size.Details & Care A sporty low-profile sneaker features breathable mesh panels and a lightweight, cushioned sole for all-day comfort.Lace-up styleTextile, synthetic and leather upper/textile lining/ rubber soleImportedBP. ShoesItem #664260Helpful info: Shoe Fit Fundamentals (video)Free Shipping & Returns See moreGift Options See available gift options for this item.Same-day Delivery  Same-Day Delivery isn't currently available to your default shipping address, but other expedited shipping methods are available at Checkout. Show eligible zip codes and details.",
        "size": [
            "5.5",
            "6",
            "6.5",
            "7",
            "7.5",
            "8",
            "8.5",
            "9",
            "9.5",
            "10",
            "11"
        ]
    }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            <Subheader>December</Subheader>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.image_urls}
                    title={tile.name}
                    subtitle={<span>price <b>{tile.price}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                >
                    <img src={tile.image_urls} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;