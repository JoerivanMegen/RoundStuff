//category images
import fruitType from './assets/productimages/download.jpeg';
import ballType from './assets/productimages/balls.jpeg';
import donutType from './assets/productimages/donuts.png';

//fruit images
import apples from './assets/productimages/skynews-apples-istock_4867989.jpeg';
import strawberries from './assets/productimages/Make-Strawberry-Season-Last-All-Year.jpeg';
import mango from './assets/productimages/mango.jpeg';
import blueberries from './assets/productimages/blueberries-1200x628-facebook-1200x628.jpeg';
import bananas from './assets/productimages/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpeg';
import watermelon from './assets/productimages/watermelon.jpeg';
import peaches from './assets/productimages/peaches-in-baskets-on-a-wooden-table.jpeg';

//ball images
import tennisBall from './assets/productimages/tennis-ball.jpeg';
import football from './assets/productimages/football.jpeg';
import baseball from './assets/productimages/baseball.jpeg';
import basketball from './assets/productimages/basketball.jpeg';
import bowlingBall from './assets/productimages/bowling.jpeg';

//donut images
import veganChoc from './assets/productimages/vegan-chocolate.png';
import unicorn from './assets/productimages/unicorn.png';
import redVelvet from './assets/productimages/red-velvet.png';
import biscoff from './assets/productimages/caramel-biscoff.png';
import bueno from './assets/productimages/bueno.png';

const data = {
    types: [
        {
            type_name: 'Fruits',
            type_image: fruitType,
            type_id: '1',
            type_info: 'At RoundStuff, we are extremely devoted to bringing the roundest stuff on our planet (which is also round) to you! We also want our customers a healthy life, therefore we decided to add beautiful round fruits to improve your wellbeing!',
            products: [
                {
                    name: 'Apples',
                    description: 'Claaaaaaassic. An apple a day... so make sure you get plenty! And get them NOW!!',
                    image: apples,
                    price_show: '€1.49/500g',
                    price_number: 1.99,
                    id: '11',
                },
                {
                    name: 'Elite Fruit',
                    description: 'This fruit is elite and one could argue about its roundness. We think it being elite compensates for its potential lack of roundness, so,  just go ahead and buy a couple kilos. You can have this for breakfast, lunch and dinner. ',
                    image: strawberries,
                    price_show: '€0.70/100g',
                    price_number: 3.99,
                    id: '12',
                },
                {
                    name: 'Mango',
                    description: 'This fruit kinda fire, 8/10 would like.',
                    image: mango,
                    price_show: '€0.89/pc',
                    price_number: 0.89,
                    id: '13',
                },
                {
                    name: 'Blueberries',
                    description: 'Nice little berry. Much like memberberries, they will make you feel better. What are you waiting for? Order them now!',
                    image: blueberries,
                    price_show: '€0.54/100g',
                    price_number: 2.99,
                    id: '14',
                },
                {
                    name: 'Bananas',
                    description: 'Aaaaye classic. This is the only NON-round item on RoundStuff. This fruit is so convenient that its taste and texture (and shape) does not even matter. Kinda nice as well.',
                    image: bananas,
                    price_show: '€0.40/each',
                    price_number: 0.40,
                    id: '15',
                },
                {
                    name: 'Watermelon',
                    description: 'Oooof, watermelon in summer is just unreal. Seedless watermelon. It has never been this easy to eat! Get ready for summer with RoundStuff.',
                    image: watermelon,
                    price_show: '€3.49',
                    price_number: 3.49,
                    id: '16',
                },
                {
                    name: 'Peaches',
                    description: 'Watch out for the seed in the middle! Other than that, hella nice fruit. Versatile af as well. ',
                    image: peaches,
                    price_show: '€0.49/100g',
                    price_number: 0.49,
                    id: '17',
                }
            ],
        },
        {
            type_name: 'Balls',
            type_image: ballType,
            type_id: '2',
            type_info: 'At RoundStuff, we are extremely devoted to bringing the roundest stuff on our planet (which is also round) to you! Of course, we could not miss out on bringing you balls.',
            products: [
                {
                    name: 'Tennis ball',
                    description: 'Come and get your green, hairy balls at RoundStuff! We have the roundest ones!',
                    image: tennisBall,
                    price_show: '€1.99',
                    price_number: 1.99,
                    id: '21', 
                },
                {
                    name: 'Football',
                    description: 'Yes, ACTUAL footballs are round. For our American visitors: this is what a football looks like! Get yours now at RoundStuff!',
                    image: football,
                    price_show: '€8.99',
                    price_number: 8.99,
                    id: '22', 
                },
                {
                    name: 'Baseball',
                    description: 'Get yourself a nice baseball at RoundStuff. Use it to play catch or even just as a small decoration on your desk. You will have to fill your hours anyway, might as well do something!',
                    image: baseball,
                    price_show: '€4.99',
                    price_number: 4.99,
                    id: '23', 
                },
                {
                    name: 'Basketball',
                    description: 'The heaviest of our balls. Great for a good old game of basketball. Bounce this one straight into your basket!',
                    image: basketball,
                    price_show: '€12.99',
                    price_number: 12.99,
                    id: '24', 
                },
                {
                    name: 'Bowling ball',
                    description: 'First of all, the holes are for your fingers! Pick it up and topple some pins. Roll this bad boy straight into your basket now!',
                    image: bowlingBall,
                    price_show: '€17.99',
                    price_number: 17.99,
                    id: '25', 
                }
            ],
        },
        {
            type_name: 'Donuts',
            type_image: donutType,
            type_id: '3',
            type_info: 'At RoundStuff, we are extremely devoted to bringing the roundest stuff on our planet (which is also round) to you! Besides healthy lifestyle-related items/foods, we are not all bad. We also want you to be able to reward yourself! This is the reason we are offering the roundest snack in the world: donuts! Browse our donut selection below.',
            products: [
                {
                    name: 'Bueno',
                    description: 'Are we speaking Spanish or are we referring to the Kinder chocolate bar? Both! This donut is based on the famous hazelnut filled bar and extremely tasty.',
                    image: bueno,
                    price_show: '€2.29',
                    price_number: 2.29,
                    id: '31', 
                },
                {
                    name: 'Lotus Roll',
                    description: 'This Biscoff-Caramel donut is made with the tasty Biscoff biscuits. Great with a cup of coffee. A cup of tea is also fine...',
                    image: biscoff,
                    price_show: '€2.29',
                    price_number: 2.29,
                    id: '32', 
                },
                {
                    name: 'Red Velvet',
                    description: 'No need to try and pun this name, since it is already beautiful! This red velvet donuts has a cream filling that will fill you up nicely. Try it out now!',
                    image: redVelvet,
                    price_show: '€2.29',
                    price_number: 2.29,
                    id: '33', 
                },
                {
                    name: 'Unicorny',
                    description: 'We know our names are corny and we are not afraid to admit it. This donut, however, is sweet like a fairytale, but 100% real. Try our famous unicorn donut now!',
                    image: unicorn,
                    price_show: '€2.29',
                    price_number: 2.29,
                    id: '34', 
                },
                {
                    name: 'Chocolate Cookie (Vegan)',
                    description: 'While excluding other than round-shaped things on our platform, we are all for inclusion in terms of our community. Therefore, we have added a vegan option to our selection, especially for our world savers! Give it go and add this to your basket.',
                    image: veganChoc,
                    price_show: '€2.29',
                    price_number: 2.29,
                    id: '35', 
                },
            ],
        }
    ]

}


export default data;