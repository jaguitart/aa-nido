'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        imageTitle: 'Andean Condor',
        imageUrl: 'https://images.unsplash.com/photo-1615935878018-e5fb62c82c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'King penguin',
        imageUrl: 'https://images.unsplash.com/photo-1595792559652-dabdbffd5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 1,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Toco Toucan',
        imageUrl: 'https://images.unsplash.com/photo-1552761047-68f241b7aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        locationId: 3,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 1,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Red-and-green Macaw',
        imageUrl: 'https://images.unsplash.com/photo-1626647772816-35c634699fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        locationId: 3,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 3,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Chilean Flamingo',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116077001/1800',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 3,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Marvelous Spatuletail',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/228591861/1800',
        locationId: 8,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Long-whiskered Owlet',
        imageUrl: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/210538181/1800',
        locationId: 8,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 1,
        albumId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Humboldt Penguin',
        imageUrl: 'https://i.natgeofe.com/k/90d21d78-3239-4792-8ac7-b211880c2ee4/Humboldt-Penguin-Line.jpg',
        locationId: 4,
        imageBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue, lacus a semper viverra, justo elit pretium purus, vitae tempor quam est id sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi urna, maximus ut condimentum non, gravida quis lectus. Ut imperdiet arcu non nunc dapibus aliquet. Morbi scelerisque vestibulum tortor, gravida fringilla dolor ullamcorper ut. Suspendisse laoreet in orci a tristique. Vestibulum eget posuere turpis. Nam volutpat vulputate enim in malesuada.",
        userId: 2,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imageTitle: 'Andean Flicker', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4hummerswoodpeckers/Andeanflicker018.jpg', locationId: 8, imageBody: 'Andean flickers are similar in size and many behaviors to the northern flicker familiar to many North American birders.   Unlike the forest-dwelling northern flicker, the Andean flicker is a bird of open areas and is usually seen above treeline in the Andes.  These were photographed near Cusco, Peru and at Abra Malaga Pass to the northwest.   They commonly feed on the ground (walking instead of hopping) and nest in holes dug into steep dirt embankments.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Spectacled Parrotlet', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4/spectacledparrotlet027.jpg', locationId: 5, imageBody: 'According to range maps, these birds (photographed in Cali, Colombia) are spectacled parrotlets, but they are very similar to blue-winged parrotlets (which are not supposed to occur in this region).   Regardless of the precise species, these are very small, green, highly social, and surprisingly hard to see when feeding in foliage.   Males (or adults?) have blue highlights while females (juveniles?) appear all-green.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Austral Parakeet', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4/australparakeet001.jpg', locationId: 4, imageBody: "Austral parakeets are among the world's southernmost parrots, occuring in South America all the way into Tierra del Fuego.They are usually found in forests, especially the southern beech Nothofagus, where some of the birds in these photos are perched.Austral parakeets are not brightly colored as parrots go, but are attractively marked in green and red.Like most parrots, they travel in small, noisly flocks and feed on plant material(some of these were avidly eating dandilion leaves from a small grassy patch).The photos were taken in Parque Nacional Torres del Paine in southern Chile.", userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Andean Lapwing', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds2ploversPhalaropes/Andeanlapwing006.jpg', locationId: 8, imageBody: 'Like the European lapwing, the southern lapwing of lowland Latin America, and to some extent like the North American kildeer, Andean lapwings are large dryland plovers with loud calls and a somewhat prissy attitude towards intruders like humans.   They are found in fields and grasslands at high altitudes in the Andes range; these were photographed near Cusco, Peru on a cloudy day.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Buff-tailed Coronet', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4hummerswoodpeckers/bufftailedcoronet.jpg', locationId: 5, imageBody: 'Buff-tailed coronets are very aggressive hummingbirds; I photographed these mainly at Rio Blanco Lodge near Manizales, Colombia.   There were several other hummingbirds attending the feeders, including long-tailed sylphs and tourmaline sunangels, but the buff-tailed coronets drove them all away almost as soon as they arrived.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Torrent Tyrannulet ', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4passerines/torrenttyrannulet016.jpg', locationId: 5, imageBody: 'Torrent tyrannulets are well-named little flycatchers that inhabit the margins and rocks of fast-flowing streams in the Neotropics.   They share this habitat with the white-capped dipper but unlike that species, torrent tyrannulets do not enter the water.   These were photographed at Otun Quimbaya, in the Central Andes of Colombia.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Golden Tanager', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/goldentanager030.jpg', locationId: 8, imageBody: 'Golden tanagers, although not as insanely bright as some of their close relatives, are lovely birds from medium-altitude cloud forests on the eastern slope of the Andes.   Most of these were coming to a small fruiting tree in San Pedro, at about 1500 m altitude on the Manu Road in southeastern Peru.   Other species feeding on these fruits included a number of other tanagers (palm, silver-beaked, orange-eared, paradise, golden-eared, golden-naped, spotted, beryl-spangled, bay-headed, blue-necked, saffron-crowned, and common bush-tanager), and in addition to the tanagers, versicolored barbets, blue-naped chlorophonias and orange-bellied euphonias.', userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Three-striped Warbler', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/threestripedwarbler019.jpg', locationId: 8, imageBody: "Three-striped warblers are active little warblers from neotropical forests, one of several 'striped/ banded' warbler species.   In these images, the species' bright black - and - white facial pattern is visible.I photographed these birds in thick cloudforest vegetation along the Manu road on the eastern slope of the Andes in Peru, and in the Western Andes above Cali, Colombia.", userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Striated Antbird', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds5/striatedantbird005b.jpg', locationId: 8, imageBody: 'This is one of the large family of antbirds (and antwrens, antshrikes, antthrushes, antpittas….) in South America, and is one of the few that is willing to come into the open, at least briefly. .   These (brightly plumaged male and more subdued female) were photographed in a bamboo thicket near Pantiacolla Lodge in the Peruvian Amazon.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Thorn-tailed Rayadito', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds5/rayadito002b.jpg', locationId: 4, imageBody: 'The small, hperactive, noisy, and charming thorn-tailed rayadito is a characteristic bird of much of Chile.   It is a member of the South American Funarid family.   These were photographed in Parque Nacional Torres del Paine in south Chile.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Red-legged Cormorant', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds1/RLcormorant043.jpg', locationId: 4, imageBody: 'If any cormorant can be called beautiful, this is the one.   It is a common bird on the Chilean coast, where I photographed these near the southern city of Valdivia.   Unfortunately, they were a long way away on a cliffside, in very bad light, so these images are not the best -- but I hope they convey an impression of the striking plumage of this species.', userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Burrowing Owl', imageUrl: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/01/1024px-athene_cunicularia_20110524_02.jpg', locationId: 3, imageBody: 'This small owl lives in burrows that it has either dug out itself or taken over from tortoises or ground squirrels. One of their most notable behavior patterns is to decorate the outside of their burrows with bottle tops, pieces of scrap paper, metal foil, cigarette butts or other rubbish, which experts believe is a way of showing that their burrows are occupied. They can be found in the south of Brazil and there is a family of wild burrowing owls that live in the Olympic golf course in Rio de Janeiro.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Hyacinth Macaw', imageUrl: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/01/1024px-hyacinth_macaw_rwd2.jpg', locationId: 3, imageBody: 'The largest parrot in the world, the hyacinth macaw is also one of the most striking with its deep blue plumage, yellow orbital ring and yellow stripe at the base of the lower mandible. It eats fruits from a select number of palm trees which are concentrated in the north and south central of Brazil, most notably in the Pantanal. The hyacinth macaw is classified as endangered due to the cage bird trade and habitat loss.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Southern Screamer', imageUrl: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/01/1024px-southern_screamer_rwd2.jpg', locationId: 3, imageBody: 'Found in the south of Brazil, the southern screamer earned its name from the sounds it makes to attract a partner during the mating season; loud calls from both sexes can be heard up to two miles away. One of the most interesting facts about the southern screamer is that once it finds a mate, it remains in a monogamous relationship for its lifetime, which is estimated up to 15 years.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Bare-faced Curassow', imageUrl: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/01/bare-faced_curassow_crax_fasciolata_male_close-up_---_27586936813.jpg', locationId: 3, imageBody: 'This gorgeous bird occupies the eastern-central and southern parts of Brazil as well as the Pantanal and the southeastern region of the Amazon basin. Despite this broad habitat, the species is classified as vulnerable due to hunting and habitat destruction reducing the total population. The bare-faced curassow has a notable crest on its head that looks like a curly mohawk and distinguishes between the sexes – the males have black crests while the females have a white crest.', userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Capuchinbird', imageUrl: 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/08/capuchonvogel-1.jpg', locationId: 11, imageBody: "Definately the must unusual singing Birds in South America; the Capuchinbird. Ever heard a bird moo for a female’s attention? Well, spot a Capuchinbird in the dense forests of Venezuela and you will! The Capuchinbird boasts one of the most unusual mating calls in the bird world and its alternative name, the calfbird, hints at its rather bizarre vocal gift. The unique vocalization – often described as a cross between a cow mooing and a chainsaw – is only one distinctive feature of the Capuchinbird. Its head is almost completely devoid of feathers, and its puffed plumage resembles a hunchbacked Capuchin Monk's habit.", userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Magellanic Penguins', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds1RatitesPenguins/penguins008.jpg', locationId: 4, imageBody: 'Magellanic penguins are found around the southern coast of South America and the Falkland Islands, where they breed in burrows in colonies that may be huge (as in the famous colonies at Punta Tombo in Argentina).   Although they are abundant, Magellanics are of some concern to conservation biologists because of potential vulnerability to oil spills, overfishing of prey stocks, etc.   These were photographed in a smallish colony (roughly 4000 pairs) on Seno Ottway (Ottway Sound), near the small city of Punta Arenas, in south Chile.  Here the penguins dig their breeding burrows in open shrubland next to the coast; human visitors are restricted to well-marked paths that do not unduly disrupt the breeding birds.  When my partner Jana and I drove out to the site in January 2009, adults were busy commuting between burrows and their feeding areas out in Seno Ottway, and large, nearly-fledged young could be seen at their burrows and on the beach, ready to go to sea for the first time.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Summer Tanager', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/summertanager076.jpg', locationId: 5, imageBody: 'Male summer tanagers are deep red and generally rather shy; females are olive-green to reddish (and are also shy).  As their name implies, summer tanagers are summer breeders in the US.   Most of these were photographed at Big Morongo Reserve in southeastern California and in southeastern Arizona.   One image was taken in Manhattan, Kansas; for unknown reasons this bird has a much yellower bill than the ones from California.  One was taken of a wintering bird in Tatama National Park, Colombia.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Epaulet Oriole', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/epauletoriole001.jpg', locationId: 8, imageBody: "Epaulet orioles are an exception to the general 'rule' that tropical species are more brightly colored than higher-latitude congeners.   This species -- black with a yellow shoulder -- is pretty dull compared to North American orioles such as Scott's, Bullock's, or hooded orioles.   I photographed this one at Pantiacolla Lodge in the Peruvian Amazon.", userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Rusty Flowerpiercer', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/rustyflowerpiercer006b.jpg', locationId: 5, imageBody: "Rusty flowerpiercers are common small birds around flowers in a wide range across Latin America.   All flowerpiercers are nectar-feeders like hummingbirds but 'cheat' the flowers they visit by piercing the base of the blossom and stealing nectar without transferring pollen (you can see them doing that in a couple of these images).   These were photographed in the Western Andes above Cali, Colombia.", userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Russet-backed Oropendola', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/russetbackedoropendola003.jpg', locationId: 8, imageBody: 'Latin America is home to a number of oropendola species.   They are large, social, noisy relatives of blackbirds and orioles that weave long, hanging basket-nests in loose colonies in tall trees.   This is the widely-distributed russet-backed oropendola, one of the biggest of the group.   They were photographed near San Pedro, at about 1500 m elevation on the east slope of the Andes in southern Peru.   The one below is displaying.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Golden-hooded Tanager', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds7warbTanIct/goldenhood.jpg', locationId: 6, imageBody: 'Blue-gray tanagers are one of the commonest -- and among the least colorful -- of the diverse group of tanagers in Central and South America.   I photographed this one in a strip of forest along the Panama Canal near Gamboa.   Other common species in Gamboa included white-shouldered, plain-colored, blue-gray, crimson-backed, palm, and gray-headed tanagers.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Rusty-margined Flycatcher', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4passerines/rustymarginedflycatcher1.jpg', locationId: 9, imageBody: "Rusty-margined flycatchers are one several 'kiskadee- like' species that share yellow bellies and black-and-white facial masks (others include the great and and lesser kiskadee, boat-billed flycatcher, and social flycatcher). Rusty-margined flycatchers look a lot like social flycatchers, but have dark eyes, black instead of dark gray masks, and tend to live close to water.   This one was photographed in Soberania National Park near Gamboa, Panama", userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Greenish Puffleg ', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4hummerswoodpeckers/greenishpuffleg001b.jpg', locationId: 5, imageBody: "Pufflegs, as their name suggests, have fluffy feathers around their short legs, much like the booted racket-tail.   I photographed this male near a feeder at about 2000 m elevation in the Western Andes above Cali, Colombia.  Other pufflegs in Colombia include the black-thighed puffleg and the golden-breasted puffleg.", userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Rainbow-bearded Thornbill', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds4hummerswoodpeckers/rainbowbeardedthornbill054.jpg', locationId: 5, imageBody: "The rainbow-bearded thornbill is a spectacular little hummingbird from high altitudes in the Central Andes of Colombia.   Males have the 'beard' and a short crest; females have a neat rust-red cap.   The photos were taken near feeders at a hot-spring resort below Los Nevados National Park near the city of Manizales.", userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Chimango Caracara', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds8falcons/chimango048.jpg', locationId: 4, imageBody: 'The chimango caracara is one of several caracara species found in South America.   Caracaras are a rather adaptable group the the chimango is particularly adept at living with humans, often being nearly as ubiquitous in city parks and neighborhoods as pigeons.   As caracaras go, it is a small bird, barely crow-sized.   These were photographed in open grasslands in southern Chile, near the village of Cerro Castillo.', userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Least Seedsnipe', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds2ploversPhalaropes/leastseedsnipe005.jpg', locationId: 4, imageBody: 'Seedsnipes are a small group of shorebird relatives from South America.   They live in open areas and are herbivorous; apparently they do not feed extensively on seeds, despite their name.   The least seedsnipe was fairly common in open grasslands and rocky areas in Parque Nacional Torres del Paine in southern chile.   Adult males have a striking black, gray, and white pattern on the underside but unfortunately I could get only one rather heat-wave blurred image of this (upper right).   Their backs are highly cryptic, affording good protection for these ground-dwelling birds.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Gray-breasted woodwren', imageUrl: 'https://faculty.ucr.edu/~chappell/INW/birds5/graybreastedwoodwren011.jpg', locationId: 5, imageBody: 'South America has lots of wrens, and at mid-altitudes in Andean forests this is one of the most common -- and noticeable.   It as a lovely song that seems incredibly loud for such a small bird.   These were photographed in the Western Andes above Cali, Colombia.', userId: 2, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Ciconia Maguari', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Ciconia_maguari_IMG_8588_Palmitos_Park_gran_canaria.JPG', locationId: 1, imageBody: 'The maguari stork is a large species of stork that inhabits seasonal wetlands over much of South America, and is very similar in appearance to the white stork; albeit slightly larger.', userId: 1, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
      {
        imageTitle: 'Saffron toucanet', imageUrl: 'https://mapio.net/images-p/8014434.jpg', locationId: 7, imageBody: 'The saffron toucanet is a species of bird in the family Ramphastidae found in the Atlantic Forest in far north-eastern Argentina, south-eastern Brazil, and eastern Paraguay.', userId: 3, albumId: 1, createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
