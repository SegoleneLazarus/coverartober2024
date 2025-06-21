import image1 from '../assets/les_soirs_de_fin_d_ete.png';
import image2 from '../assets/moonlight_drive.png';
import image3 from '../assets/far_away.png';
import image4 from '../assets/cheerleaders.png';
import image5 from '../assets/all_over_the_place.png';
import image6 from '../assets/cherry_star.png';
import image7 from '../assets/Media_Naranja.png';
import image8 from '../assets/jtm_encore_1.png';
import image8_2 from '../assets/jtm_encore_2.png';
import image9 from '../assets/lostwave.png';
import image10 from '../assets/cobalt.png';
import image11 from '../assets/BUT_MAKE_IT_FASHION.png';
import image12 from '../assets/where_is_the_light.png';
import image12_2 from '../assets/where_is_the_light2.png';
import image13 from '../assets/VHS_elixir.png';
import image14 from '../assets/miaou.png';
import image15 from '../assets/songbird_interlude.png';
import image16 from '../assets/IDGAFAY.png';
import image17 from '../assets/Rave_Ready_Romance.png';
import image18 from '../assets/La_Lune.png';
import image19 from '../assets/Home.png';
import image20 from '../assets/hikikomori.png';
import image21 from '../assets/GLOW.png';
import image22 from '../assets/c_pas_comme_ca.png';
import image23 from '../assets/Dop_AF_Since.png';
import image24 from '../assets/Special.png';
import image25 from '../assets/Sous_leau.png';
import image26 from '../assets/retro_reverie_not_my_time.png';
import image27 from '../assets/U_U1.png';
import image27_2 from '../assets/U_U2.png';
import image28 from '../assets/mas_vale_pajaro.png';
import image29 from '../assets/Paranoia.png';
import image30 from '../assets/100_kittens.png';
import image31 from '../assets/Lights_off.png';
import image31_2 from '../assets/Lights_off_2.png';

import manuMort from '../assets/musiques/Manu_est_mort_version_longue.mp3';

import playlist3 from '../assets/musiques/Watermelon_Man.mp3';

import musique1 from '../assets/musiques/edm.mp3';
import musique2 from '../assets/musiques/thrash.mp3';
import musique3 from '../assets/musiques/Watermelon_Man.mp3';
import musique4 from '../assets/musiques/triphop.mp3';
import musique5 from '../assets/musiques/synthwave.mp3';
import musique6 from '../assets/musiques/calypso.mp3';
import musique7 from '../assets/musiques/mathrock.mp3';
import musique8 from '../assets/musiques/dreamcore.mp3';
import musique9 from '../assets/musiques/cumbia.mp3';
import musique10 from '../assets/musiques/bossanova.mp3';
import musique11 from '../assets/musiques/dubstep.mp3';
import musique12 from '../assets/musiques/afrobeat.mp3';
import musique13 from '../assets/musiques/vaporwave.mp3';
import musique14 from '../assets/musiques/Tango.mp3';
import musique15 from '../assets/musiques/grime.mp3';
import musique16 from '../assets/musiques/psytrance.mp3';
import musique17 from '../assets/musiques/gamelan.mp3';
import musique18 from '../assets/musiques/fado.mp3';
import musique19 from '../assets/musiques/bluegrass.mp3';
import musique20 from '../assets/musiques/klezmer.mp3';
import musique21 from '../assets/musiques/morna.mp3';
import musique22 from '../assets/musiques/juke.mp3';
import musique23 from '../assets/musiques/enka.mp3';
import musique24 from '../assets/musiques/hirondelle.mp3';
import musique25 from '../assets/musiques/rai.mp3';
import musique26 from '../assets/musiques/polska.mp3';
import musique27 from '../assets/musiques/mongolie.mp3';
import musique28 from '../assets/musiques/weirdcore.mp3';
import musique29 from '../assets/musiques/swing.mp3';
import musique30 from '../assets/musiques/rocknroll.mp3';
import musique31 from '../assets/musiques/darkwave.mp3';



// import chanson from 'https://segolenelazarus.github.io/covertart-musics/Manu_est_mort_version_longue.mp3';

const albumsData = [
    {
      title:  "Les soirs de fin d'été",
      cover: image1,
    // cover2
      playlist: [
        { title: 'Monster Paradise', artiste:"Naeleck & Bombs Away", url:musique1, yt:'https://www.youtube.com/watch?v=37iUeA2tvTs&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=1&pp=gAQBiAQB8AUB' },
        // { title: 'Manu est mort', artiste:"sukaichae", url:playlist1, yt:''  },
      ],
      vers: `« Le souffle encore chaud du vent,    \nemporte ton dernier souvenir »`,
      style: "EDM",
      historique:"L'electronic dance music (EDM), ou dance, définit différents genres de musique électronique entièrement composés pour danser.",
      credits: [{pseudo:"Florian", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F7d%2F47%2F287d476e21403c4a0459102c404cc361.jpg&f=1&nofb=1&ipt=c07964b3e3b42b8d7e476885268a941a36ccebda01925975843084ba5c14df5c"}],
      reco:"blibloublap",
      commentaire:"/"

    },
    {
      title: 'Moonlight Drive',
      cover: image2,
      playlist: [
        { title: 'Weirdo Man', artiste:"Uncle Sam", url:musique2, yt:'https://www.youtube.com/watch?v=yfZz9ExDn9E&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=2&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Quant à la lune, elle ne m'indique plus le chemin »`,
      style: "Thrash Metal",
      historique:"Le thrash metal est un style de metal apparu au début des années 1980. Issu du heavy metal, il se développe surtout aux États-Unis, en Allemagne et au Royaume-Uni. Les groupes de thrash metal s'opposent à l'imagerie et au succès du glam metal qui domine les ondes radio grand public du début des années 1980, créant une musique rapide et violente, caractérisée par des pickings agressifs, l'utilisation extensive d'une double grosse caisse, dépourvue de synthétiseurs, et des paroles qui abordent les problèmes sociaux et politiques.",
      credits: [{pseudo:"Costia Schillaci", reseau:"https://www.linkedin.com/in/costia-schillaci-b653851b8/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Far away',
      cover: image3,
      playlist: [
        { title: 'Watermelon Man', artiste:"Herbie Hancock", url:musique3, yt:'https://www.youtube.com/watch?v=ppJQKfqhFfE&pp=ygUOd2F0ZXJtZWxvbiBtYW4%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:playlist3, yt:''  },
        // Autres chansons
      ],
      vers: `« Curieuse séparation, pense-je \ndans le creux de ton cou »`,
      style: "Jazz Fusion",
      historique:"Le jazz fusion (ou jazz-rock), aussi stylisé jazz-fusion et parfois simplement dénommé fusion, est un genre de jazz ayant émergé vers la fin des années 1960 aux États-Unis, mêlant des éléments extraits du jazz avec d'autres courants musicaux comme le rock et le rap.",
      credits: [{pseudo:"Zozo", reseau:"https://www.instagram.com/maxi.mr.zozo/"}],
      reco:"blibloublap",
      commentaire:"/"
    },
    {
      title: 'Cheerleader',
      cover: image4,
      playlist: [
        { title: 'The Truth', artiste:"Handsome Boy Modeling School", url:musique4, yt:'https://www.youtube.com/watch?v=-HW7nj-GUZY&pp=ygUmdGhlIHRydXRoIGhhbmRzb21lIGJveSBtb2RlbGluZyBzY2hvb2zSBwkJvgkBhyohjO8%3D'  },
        // { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Tes derniers encouragements ont effrayé les glaïeuls,    \nDans ma poche, une jonquille »`,
      style: "Trip Hop",
      historique:"Le trip hop est un genre musical ayant émergé au début des années 1990, dans la région de Bristol, au Royaume-Uni. Dérivé de la « post »-acid house, le terme est utilisé par la presse spécialisée britannique et les médias pour décrire une variante plus expérimentale du breakbeat inspirée de la soul, du funk et du jazz. Le trip-hop mélange divers styles et présente de nombreux points communs avec d'autres genres ; il possède des qualités similaires à celles de la musique ambient et ses breakdowns orientés breakbeat partagent les caractéristiques du hip-hop. Il contient également des éléments d'acid jazz, de dub, de soul, et de musique expérimentale. Le trip-hop est donc de nature très expérimentale. ",
      credits: [{pseudo:"Manifestants", reseau:"https://macron.fun/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'aLL OvER thE PLacE',
      cover: image5,
      playlist: [
        { title: 'Tokyo Burnout', artiste:"TOKYO ROSE", url:musique5, yt:'https://www.youtube.com/watch?v=pTMqGnypD9s&pp=ygUYdG9reW8gYnVybm91dCB0b2t5byByb3Nl'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Cigarettes, gingembre, musc,     \nEsprit embrumé de tes sens, \nJ'attends que le vent les emporte »`,
      style: "Synthwave",
      historique:"La synthwave, également appelée retrowave, est un genre musical et artistique rétro-futuriste ayant émergé au début des années 2010. Influencé par la musique et les films des années 1980, le genre naît d'un mouvement de nostalgie de ladite décennie en proposant les mêmes sonorités, accords et mélodies mais avec une production plus moderne, un rendu plus ambiant et une utilisation plus rare du chant. La synthwave est souvent associée à la culture geek, aux jeux vidéo et à l'esthétique rétro-futuriste des années 1980.",
      credits: [{pseudo:"Florian", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F7d%2F47%2F287d476e21403c4a0459102c404cc361.jpg&f=1&nofb=1&ipt=c07964b3e3b42b8d7e476885268a941a36ccebda01925975843084ba5c14df5c"},{pseudo:"Marion", reseau:"https://www.instagram.com/marmottion/"},{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Cherry Star',
      cover: image6,
      playlist: [
        { title: 'Coconut Water', artiste:"Robert Mitchum", url:musique6, yt:'https://www.youtube.com/watch?v=saE16lOjE9E&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=3&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Ô ma belle étoile ! Astre majestueux, \nm'accompagneras-tu encore \nlors de mon voyage aux Enfers ? »`,
      style: "Calypso",
      historique:"Le calypso, également appelé kaiso, est un genre musical étroitement associé au carnaval, ayant émergé à Trinité-et-Tobago et qui s’est répandu dans le reste des Antilles et au Venezuela. Le terme désigne à la fois une chanson à texte et un rythme caractéristique. ",
      credits: [{pseudo:"nyan", reseau:"https://www.instagram.com/nyan.raw/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Media Naranja',
      cover: image7,
      playlist: [
        { title: 'Hornet Vision', artiste:"nevraska", url:musique7, yt:'https://www.youtube.com/watch?v=Z5MCDCaOt0s&pp=ygUWaG9ybmV0IHZpc2lvbiBuZXZyYXNrYQ%3D%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Il n'existe plus qu'une coquille, un corps vide. \nAme solitaire, pourquoi l'as-tu laissé s'échapper ? »`,
      style: "Math Rock",
      historique:"Le math rock est un genre musical de rock expérimental et de rock indépendant caractérisé par une complexité rythmique et un enchaînement de riffs et mélodies, souvent dissonants ayant émergé à la fin des années 1980. Il se caractérise par des signatures rythmiques atypiques, une composition en contrepoint et l'utilisation d'accord augmentés. ",
      credits: [{pseudo:"Adieu ma concubine - Chen Kaige", reseau:"https://fr.wikipedia.org/wiki/Adieu_ma_concubine_(film)"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'jtm encore',
      cover: image8,
      cover2: image8_2,
      playlist: [
        { title: 'Nice Boys', artiste:"TEMPOREX", url:musique8, yt:'https://www.youtube.com/watch?v=1xL-GRBUNCw&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=4&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Si tu prononçais maintenant     \nCes mots quand j'ai tant attendu \nTu me condamnerais »`,
      style: "Dreamcore",
      historique:"Le dreamcore est une esthétique surréaliste qui utilise des motifs généralement associés aux rêves, aux rêveries ou aux cauchemars, représentés à travers des supports tels que des images, des vidéos et, parfois, de la musique. Ces images expriment des sentiments de familiarité, d'anémoïa, de nostalgie et de confusion.",
      credits: [{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"},{pseudo:"Baudelaire", reseau:"https://www.poesie-francaise.fr/charles-baudelaire/poeme-l-amour-du-mensonge.php"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Lost Wave',
      cover: image9,
      playlist: [
        { title: 'Nunca Es Suficiente', artiste:"Los Àngeles Azules", url:musique9, yt:'https://www.youtube.com/watch?v=rJAZtuQqerE&pp=ygUsbnVuY2EgZXMgc3VmaWNpZW50ZSBsb3MgYW5nZWxlcyBhenVsZXMgbGV0cmE%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
      ],
      vers: `« J'ai glissé à la mer mes plus grands secrets, \nQui sait si on les retrouvera »`,
      style: "Cumbia",
      historique:"La cumbia est un genre musical et une danse traditionnelle folklorique ayant émergé au XVIIe siècle au Chili. D'abord connue sous le nom de cumba, la cumbia s'est ensuite répandue en Amérique latine, particulièrement en Bolivie, au Pérou et en Argentine, où elle s'est mélangée aux musiques locales. À l'origine, les tambours des esclaves servaient à accompagner les veilles funéraires. Les peuples amérindiens des Antilles ont ensuite ajouté à ces rythmes des ocarinas, des flûtes de roseau, et des gaïtas (sorte de longues flûtes amérindiennes) aux mélodies, aux paroles et à la danse importées par les colons espagnols. ",
      credits: [{pseudo:"Marion", reseau:"https://www.instagram.com/marmottion/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'cobalt',
      cover: image10,
      playlist: [
        { title: 'Desafinado', artiste:"João Gilberto, Tom Jobim, Stan Getz", url:musique10, yt:'https://www.youtube.com/watch?v=tCMhuN3053o&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=5&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
      ],
      vers: `«  Comme me manque    \nDe sentir contre ta peau \nTes bijoux de cobalt »`,
      style: "Bossa Nova",
      historique:"La bossa nova, aussi stylisé bossanova, ou bossa-nova, familièrement la « bossa », est un genre musical ayant émergé à la fin des années 1950 à Rio de Janeiro, au Brésil. Elle prend ses racines dans la samba, le cool jazz et la musique classique. La bossa nova devient l'un des styles musicaux brésiliens les plus connus dans le monde, se popularisant significativement à partir du début des années 1960, d'abord aux États-Unis puis en Europe et au Japon.",
      credits: [{pseudo:"AD", reseau:"https://www.instagram.com/wapsad/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'BUT MAKE IT FASHION',
      cover: image11,
      playlist: [
        { title: "It's all over", artiste:"SHOCKONE", url:musique11, yt:'https://www.youtube.com/watch?v=rVBOKKOVgII&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=6&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Dans mes draps de soie \nJ'attends le salut »`,
      style: "Dubstep",
      historique:"Le dubstep est un genre de musique électronique, originaire pour sa plus grande partie du sud de Londres, à Croydon. La musique se caractérise par un rythme syncopé et une ligne de percussions accompagnée de basses, dites en anglais bassline. Les premières compositions dubstep datent de 1994, et le genre se nommait 'Proto-Dubstep', souvent présentées sur la face B des albums 2-step garage. Ces musiques empruntent un thème sombre, une construction musicale plus expérimentale et minimaliste, moins focalisée sur les voix, accompagnés d'éléments sonores en provenance du breakbeat et du drum and bass en 2-step. ",
      credits: [{pseudo:"Zozo", reseau:"https://www.instagram.com/maxi.mr.zozo/"}],
      reco:"blibloublap",
      commentaire:"horrible genre musical"
    },
    {
      title: "魚 (where is the light)",
      cover: image12,
      cover2: image12_2,
      playlist: [
        { title: 'Water get no enemy', artiste:"Fela Kuti", url:musique12, yt:'https://www.youtube.com/watch?v=IQBC5URoF0s&pp=ygUSd2F0ZXIgbm8gZ2V0IGVuZW15'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Cupide comme tu es \nTu n'as plus besoin de tes yeux »`,
      style: "Afrobeat",
      historique:"L'afrobeat est un genre musical issu d'un mélange de musique traditionnelle nigériane, de jazz, du highlife ghanéen, de funk et de chant, accompagné de percussions et de styles vocaux, popularisé en Afrique dans les années 1970. Le genre est fondé par le multi-instrumentiste et leader nigérian Fela Kuti, qui lui attribue le nom. ",
      credits: [{pseudo:"Bleach - Tite Kubo", reseau:"https://fr.wikipedia.org/wiki/Bleach_(manga)"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'VHS Elixir',
      cover: image13,
      playlist: [
        { title: 'Resonance', artiste:"HOME Odyssey", url:musique13, yt:'https://www.youtube.com/watch?v=8GW6sLrK40k&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=7&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« J'ai demandé à Dieu ce qu'était l'amour   \nIl m'a dit d'écouter cette cassette. \nSont-ce les cloches du Paradis ? »`,
      style: "Vaporwave",
      historique:"La ｖａｐｏｒｗａｖｅ est un genre musical et mouvement artistique ayant émergé sur internet dans les années 2010 des scènes dance indépendantes comme le seapunk, la bounce house, la witch house, et le chillwave. La vaporwave est caractérisée par sa nostalgie et sa fascination pour la culture rétro, la technologie, et les pubs des années 1980 et 1990. Bien que son attitude et son message soient divergents et ambigus, la vaporwave sert à la fois de critique et de parodie de la société de consommation, du système capitaliste, de la propagande, de la culture yuppie des années 1980, et de la musique new age.  ",
      credits: [{pseudo:"", reseau:""}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'miaou',
      cover: image14,
      playlist: [
        { title: 'Tango', artiste:"Athens Symphony Orchestra", url:musique14, yt:'https://www.youtube.com/watch?v=JjNLrm46grM&pp=ygUfdGFuZ28gYXRoZW5zIHN5bXBob255IG9yY2hlc3RyYQ%3D%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Accorde moi cette danse    \nUne première puis une infinité \nQue nos corps jamais ne se séparent. »`,
      style: "Tango",
      historique:"Le tango est un genre musical et une danse de salon argentine et uruguayenne, plus précisément du Río de la Plata, née à la fin du XIXe siècle. Comme forme rythmique, il désigne le plus souvent une mesure à deux ou quatre temps plutôt marquée, mais avec un vaste éventail de tempos et de styles rythmiques très différents selon les époques et les orchestres. Le tango comme genre musical englobe trois formes musicales rioplatense sur lesquelles se dansent traditionnellement les pas du tango : tangos, milongas et valses. Ainsi, la majorité des orchestres et compositeurs cités dans cet article comme des grandes figures du « tango » sont également des compositeurs et interprètes de milongas et de valses. Le bandonéon, intégré au sein des orchestres de tango, composés majoritairement d'instruments à cordes, est traditionnellement l'instrument phare du tango. ",
      credits: [{pseudo:"Florian", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F7d%2F47%2F287d476e21403c4a0459102c404cc361.jpg&f=1&nofb=1&ipt=c07964b3e3b42b8d7e476885268a941a36ccebda01925975843084ba5c14df5c"},{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'songbird interlude',
      cover: image15,
      playlist: [
        { title: 'Hype Boys', artiste:"Sway ft. Mr. Bigz", url:musique15, yt:'https://www.youtube.com/watch?v=jF27U4gHAGk&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=8&pp=gAQBiAQB8AUB0gcJCb4JAYcqIYzv'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Lorsqu'on t'a enterré   \nUn oiseau chantait. J'aimerais l'entendre encore. »`,
      style: "Grime",
      historique:"Le grime est un genre musical ayant émergé à Londres au début des années 2000, dans le quartier de Bow. Il se développe à partir du genre dance britannique UK garage, et tire ses influences, pour les productions, de la jungle, de la drum and bass, du 2-step et d'autres genres de musiques tirés du continuum hardcore théorisé par le critique musical Simon Reynolds. Pour ce qui est du flow, le grime tire son influence du dancehall et du hip-hop. Le style est caractérisé par des breakbeats rapides et syncopés, généralement autour de 140 BPM, et présente souvent un son électronique agressif ou fragmenté. Comme dans le hip-hop, le emceeing est un élément important du style, et les paroles tournent fréquemment autour de descriptions grinçantes et sombres de la vie urbaine. ",
      credits: [{pseudo:"kukurio", reseau:"https://www.youtube.com/watch?v=PXsPEk3ETcU&pp=ygUPc3VyaWNhdGUgYW5pbWFs"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: "Don't tell me what I can't do (IDGAFAY)",
      cover: image16,
      playlist: [
        { title: 'Music is the Answer', artiste:"Vini Vici, Avalon, Tristan", url:musique16, yt:'https://www.youtube.com/watch?v=5wKUIw-o86c&pp=ygUdbXVzaWMgaXMgdGhlIGFuc3dlciB2aW5pIHZpY2k%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Tu m'as demandé de ne pas t'oublier ; \nQui es-tu ? »`,
      style: "Trance psychédélique",
      historique:"La trance psychédélique, également appelée psytrance, est un genre de musique électronique caractérisé par un rythme soutenu et des mélodies créées par des riffs rapides. Le genre tire ses origines de la trance Goa, cette dernière continuant en parallèle à se développer parmi les sous-genres de la trance psychédélique. Le genre varie en termes d'humeur, de tempo, et de style. Certains courants incluent la full-on, la forest, la hi-tech, la dark psytrance, la progressive, le suomisaundi (en) et le psybreaks. Bien que le genre soit incrusté dans la scène trance Goa, il se popularise rapidement en Europe, en Israël, en Amérique du Nord, en Australie, au Japon et en Amérique du Sud. ",
      credits: [{pseudo:"Akira - Kastuhiro Otomo", reseau:"https://fr.wikipedia.org/wiki/Akira_(manga)"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Rave. Ready. Romance.',
      cover: image17,
      playlist: [
        { title: 'Ditampik', artiste:"Ujang Suryana", url:musique17, yt:'https://www.youtube.com/watch?v=_VpIlvdYA34&pp=ygUOZGl0YW1waWsgdWphbmc%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« En dansant, essaies-tu d'éveiller     \nMon désir, ma passion ? \nJe ne ressens que jalousie. »`,
      style: "Gamelan",
      historique:"Le gamelan est un ensemble instrumental traditionnel indonésien caractéristique des musiques javanaise, sundanaise et balinaise. Par extension, on utilise également le mot pour désigner l'orchestre balinais, qu'on appelle en fait gong . Le gamelan est composé essentiellement de percussions auxquels peuvent s'ajouter des instruments à cordes, soit frottées comme le rebab (une vièle à pique), soit pincées comme le kacapi (sorte de cithare), et à vent comme la flûte suling et le chant — féminin et masculin. Ici l'apprentissage se fait en commun et dès le plus jeune âge. La musique de gamelan est cyclique, un cycle complet commence et se termine par le gong ageng, instrument fondamental de cette musique. ",
      credits: [{pseudo:"Barong", reseau:"https://fr.wikipedia.org/wiki/Barong_(mythologie)"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'La Lune',
      cover: image18,
      playlist: [
        { title: 'Coimbra tem mais encanto', artiste:"Beatriz Rosário", url:musique18, yt:'https://www.youtube.com/watch?v=gyAzE6EO1Lk&pp=ygUoY29pbWJyYSB0ZW0gbWFpcyBlbmNhbnRvIGJlYXRyaXogcm9zYXJpbw%3D%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Je pensais qu'elle ne me parlait plus     \nJe ne voulais simplement pas voir \nLe nouveau chemin qu'elle m'offrait »`,
      style: "Fado",
      historique:"Le fado est un genre musical portugais, constitué de chants populaires au thème mélancolique accompagné d'instruments à cordes pincées. Le chanteur de fado ou fadiste (fadista) exploite en général des thèmes récurrents : la saudade, l’amour inaccompli, la jalousie, la nostalgie des morts et du passé, la difficulté à vivre, le chagrin, l’exil… Ce chant fut d'abord chanté dans les quartiers populaires avant d'atteindre la bourgeoisie. Le fado fut le chant national du Portugal à l'époque du dictateur Salazar. ",
      credits: [{pseudo:"sukai", reseau:"https://www.instagram.com/sukai909/"},{pseudo:"Smooshie", reseau:"https://www.instagram.com/maureen_gdd/"},{pseudo:"Zozo", reseau:"https://www.instagram.com/maxi.mr.zozo/"},{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Home',
      cover: image19,
      playlist: [
        { title: 'Foggy Mountain Breackdown', artiste:"Joe Maphis", url:musique19, yt:'https://www.youtube.com/watch?v=7MIUZCm2NNY&pp=ygUjam9lIG1hcGhpcyBmb2dneSBtb3VudGFpbiBicmVha2Rvd24%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
      ],
      vers: `« Ton erreur a été d'accepter mon invitation \nCar de mon cœur jamais tu ne partiras »`,
      style: "Bluegrass",
      historique:"Le bluegrass est un genre musical, ayant émergé aux États-Unis, qui constitue une branche de la musique country. Son fondateur, Bill Monroe, originaire de la communauté de Rosine (dans la région du Bluegrass, au Kentucky), entreprend dès les années 1940 de codifier et d'adapter aux publics modernes l'old-time music qui puise sa source dans les massifs montagneux des Appalaches, musique qui est elle-même à la croisée de diverses traditions, américaine (blues) et européenne (anglo-irlandaise). ",
      credits: [{pseudo:"Costia Schillaci", reseau:"https://www.linkedin.com/in/costia-schillaci-b653851b8/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: '引き篭もり?',
      cover: image20,
      playlist: [
        { title: 'Wie Bist Die Gewesen Vor Prohibition?', artiste:"Oysland Klezmer Band", url:musique20, yt:'https://www.youtube.com/watch?v=W8N-9E46YBA&pp=ygU6V2llIEJpc3QgRGllIEdld2VzZW4gVm9yIFByb2hpYml0aW9uPyBPeXNsYW5kIEtsZXptZXIgQmFuZA%3D%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Je te prie de m'excuser, \nje n'ai pas pu venir à ton enterrement. »`,
      style: "Klezmer",
      historique:"Le klezmer (d’Europe centrale et de l’Est) est une tradition musicale instrumentale des Juifs ashkénazes. Elle s’est développée à partir du XVe siècle et ses origines – dépourvues de sources documentaires d’époque mais vraisemblables — seraient les musiques du Moyen-Orient, d’Europe centrale, d’Europe de l'Est (Slaves et Tziganes). Le mot klezmer vient de l'association des mots hébreux kley « véhicule, instrument (de musique) » et zemer, « chant, mélodie », objets liturgiques utilisés dans le Temple de Jérusalem. Même si les interprètes sont depuis toujours appelés les klezmorim, c'est seulement à partir de la seconde partie du XXe siècle que le mot « klezmer » a été utilisé pour décrire la musique jouée.En raison de ses origines, la musique klezmer est associée avec le yiddish (une langue d'origine germanique proche de l'allemand, avec un apport de vocabulaire hébreu et slave). ",
      credits: [{pseudo:"Cimetière juif de Nagasaki", reseau:"https://commons.wikimedia.org/wiki/File:Sakamoto_international_Cemetery_Jewish_area_02_2017.jpg"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Glow',
      cover: image21,
      playlist: [
        { title: 'Mãe Querida', artiste:"Os Tubarões", url:musique21, yt:'https://www.youtube.com/watch?v=9kj76hUQpys&pp=ygUXbWFlIHF1ZXJpZGEgb3MgdHViYXJvZXM%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `«  Ce soleil, si aveuglant, et pourtant si beau, \nC'est avec vous que j'aimerais le revoir »`,
      style: "Morna",
      historique:"La morna est un genre musical originaire du Cap-Vert. Elle est souvent comparée à la musique brésilienne bossa nova, car elle est mélancolique et lente. La morna est généralement chantée en créole capverdien, mais elle peut aussi être interprétée en portugais. Elle est souvent accompagnée de guitare, de cavaquinho (une petite guitare à quatre cordes), de violon et de percussions. ",
      credits: [{pseudo:"nyan", reseau:"https://www.instagram.com/nyan.raw/"},{pseudo:"AD", reseau:"https://www.instagram.com/wapsad/"},{pseudo:"Florian", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F28%2F7d%2F47%2F287d476e21403c4a0459102c404cc361.jpg&f=1&nofb=1&ipt=c07964b3e3b42b8d7e476885268a941a36ccebda01925975843084ba5c14df5c"},{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"},{pseudo:"Zozo", reseau:"https://www.instagram.com/maxi.mr.zozo/"},{pseudo:"Marion", reseau:"https://www.instagram.com/marmottion/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: "c pas comme ça qu'on fait",
      cover: image22,
      playlist: [
        { title: 'Narcissus', artiste:"Xyla", url:musique22, yt:'https://www.youtube.com/watch?v=wQ6g1gW9B8g&pp=ygUObmFyY2lzc3VzIHh5bGE%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Cerveau malade qui tente de diriger mon cœur \nN'as-tu pas compris que c'était vain ? »`,
      style: "Juke/Footwork",
      historique:"Le footwork est un genre de musique électronique ainsi qu'une street dance, ayant émergé à Chicago, aux États-Unis. Le juke se construit autour de 160BPM, entre 150 et 165BPM, comme une version accélérée de la ghetto house. Ces caractéristique sonores se rapprochent du footwork (des claps, des toms, une basse), mais repose sur une rythmique 4x4, tirée de la house.",
      credits: [{pseudo:"Zozo", reseau:"https://www.instagram.com/maxi.mr.zozo/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: "Dop AF Since '01",
      cover: image23,
      playlist: [
        { title: 'そして、神戸', artiste:"Kiyoshi Maekawa", url:musique23, yt:'https://www.youtube.com/watch?v=EfZuUr9Uz0I&pp=ygUi44Gd44GX44Gm44CB56We5oi4IEtpeW9zaGkgTWFla2F3YQ%3D%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Cruelles saisons qui défilent \nSans jamais m'apporter le printemps »`,
      style: "Enka",
      historique:"L'enka (演歌) est un genre musical japonais rassemblant toutes les origines stylistiques de la musique japonaise. L'enka moderne, cependant, est une forme musicale relativement récente lancée dans le contexte de l'après-guerre, adoptant un style musical plus traditionnel dans son vocalisme que la musique ryūkōka, popularisée avant la Seconde Guerre mondiale. L'enka moderne, comme développé pendant l'après-guerre, est une forme de ballade musicale sentimentale. ",
      credits: [{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: "Special (don't leave me now)",
      cover: image24,
      playlist: [
        { title: "L'hirondelle du faubourg", artiste:"Anny Flore", url:musique24, yt:'https://www.youtube.com/watch?v=ahOhflFK3Rk&pp=ygUdbCdoaXJvbmRlbGxlIGR1IGZhdWJvdXJnIGFubnk%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Petit oiseau, si j'ouvre la porte de ta cage \nViendras-tu me voir ? »`,
      style: "Chanson réaliste",
      historique:"La chanson réaliste est un genre musical apparu en France au milieu du XIXe siècle. Elle connaît un premier âge d'or dans les années 1880-1910 dans le sillage du succès de la chanson montmartroise et un second âge d'or pendant l'entre-deux-guerres, grâce au succès d'interprètes principalement féminines comme Fréhel, Damia puis Édith Piaf. La « chanson réaliste » synthétise différentes influences musicales antérieures, tout en développant un imaginaire singulier autour des marges sociales qui fascinent alors la société de la IIIe République. Héritière des complaintes d'Ancien Régime, de la chanson populaire et révolutionnaire du XIXe siècle, le genre « réaliste » se distingue du reste de la musique légère produite à la même époque (opérette et chanson comique de café-concert) par des textes inspirés de l'univers de la rue parisienne et de ses bas-fonds. Les thèmes récurrents de ces chansons traitent de sujets dramatiques empreints d'une noirceur certaine. Leurs personnages sont généralement prisonniers de leur misère, de leur condition sociale (basse), de leur passion amoureuse...  ",
      credits: [{pseudo:"Pascale", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fphotos-premium%2Fmignon-petit-chaton-britannique-bleu-gris-dormant-enveloppe-dans-couverture-carreaux-blanche-concept-adorables-animaux-compagnie_106368-4291.jpg%3Fw%3D2000&f=1&nofb=1&ipt=d343d07416d5783286c3bd2063ac45285deed71320ce972024cb2c1b0980b6cf"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: "Sous l'eau",
      cover: image25,
      playlist: [
        { title: 'Sbard ou tal adabi', artiste:"Cheb Hasni", url:musique25, yt:'https://www.youtube.com/watch?v=ru3JbhXW3AY&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=9&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Impression malsaine de vivre en constante apnée \nApprends-moi à respirer sous l'eau »`,
      style: "Raï",
      historique:"Le Raï (الراي) est un genre musical algérien, né dans sa forme traditionnelle au début du XXe siècle dans la région de l'Oranie (Oran, Sidi-bel-Abbès et Aïn Témouchent). Cette musique s'est ensuite modernisée dans les années 1970, puis internationalisée depuis les années 1990. En 2022, le raï, est inscrit sur la liste représentative du patrimoine culturel immatériel de l'humanité en tant que chant populaire d'Algérie. ",
      credits: [{pseudo:"Eliès ", reseau:"https://www.instagram.com/bricktendo/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'retro reverie (not my time)',
      cover: image26,
      playlist: [
        { title: 'Hökpers Vals', artiste:"Per Gudmundson", url:musique26, yt:'https://www.youtube.com/watch?v=XMJmD3455fc&pp=ygUdaMO2a3BlcnMgdmFscyBwZXIgZ3VkbXVuZHNzb24%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Et je rêve rêve rêve     \nEncore encore encore \nDe ma vie passé présente future \nAvec elle lui et toi »`,
      style: "Polska suédoise",
      historique:"La polska est une danse folklorique suédoise, qui se danse en couple, et qui est généralement dansée sur un rythme à trois temps. Elle est souvent associée à la musique folk suédoise, mais elle peut également être dansée sur d'autres genres musicaux. La polska est une danse populaire en Suède depuis le XIXe siècle, et elle est souvent dansée lors de fêtes et de célébrations. ",
      credits: [{pseudo:"Paysages suédois", reseau:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.birkavikingastaden.se%2Fwp-content%2Fuploads%2F2016%2F04%2Fansgarmonumentet-768x512.jpg&f=1&nofb=1&ipt=7fac1f2d5a45ee19edf3827d06b7503838f1c7b0c771c33a4539d3aa80554fa2"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'UNSTOPPABLE & UNAPOLOGETIC',
      cover: image27,
      cover2: image27_2,
      playlist: [
        { title: 'Jangar', artiste:"Anda Union", url:musique27, yt:'https://www.youtube.com/watch?v=zfhK4HWKq9A&pp=ygURamFuZ2FyIGFuZGEgdW5pb24%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Vagabond des steppes    \nApprends-moi la liberté »`,
      style: "Ard ulsyn duu & Urtiin Duu",
      historique:"Le Ard ulsyn duu (chansons folkloriques) sont des chansons populaires qui racontent des histoires de la vie quotidienne, des légendes et des traditions mongoles. l'Urtiin Duu (chansons longues) sont des chansons traditionnelles mongoles qui sont généralement chantées en solo et qui peuvent durer plusieurs minutes. Elles sont souvent accompagnées d'instruments traditionnels tels que le morin khuur (violon à tête de cheval) et le tovshuur (luth mongol). Ces chansons sont souvent chantées lors de cérémonies et de festivals, et elles sont considérées comme un élément important de la culture mongole. ",
      credits: [{pseudo:"Photo prise par Théophile", reseau:"https://fr.wikipedia.org/wiki/Mongolie"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'más vale pájaro en mano que cien volando',
      cover: image28,
      playlist: [
        { title: 'My Party', artiste:"Kero Kero Bonito", url:musique28, yt:'https://www.youtube.com/watch?v=vQz8oB5YSd4&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=10&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« Alors j'arrête de réfléchir    \nEt je prends enfin cette décision  \nCelle de mourir le sourire aux lèvres »`,
      style: "Indie Weirdcore",
      historique:"L'indie weirdcore est un sous-genre de la musique indie qui se caractérise par des sonorités expérimentales et des influences variées, allant de l'électronique à la musique folk. Ce genre est souvent associé à une esthétique visuelle particulière, avec des clips et des pochettes d'album qui reflètent une ambiance étrange et surréaliste. Les artistes de ce genre cherchent à repousser les limites de la musique indie traditionnelle en incorporant des éléments sonores inattendus et en jouant avec les conventions musicales.",
      credits: [{pseudo:"sukai", reseau:"https://www.instagram.com/sukai909/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Paranoia',
      cover: image29,
      playlist: [
        { title: 'Bunga Book', artiste:"Tape Five", url:musique29, yt:'https://www.youtube.com/watch?v=3fB5QTlyW5I&pp=ygUUYnVuZ2EgYm9vayB0YXBlIGZpdmXSBwkJvgkBhyohjO8%3D'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
        // Autres chansons
      ],
      vers: `« J'avais vu tous les signes     \nLes signes de la fin \nAvant même que tu le saches toi-même »`,
      style: "Electro-swing",
      historique:"L'electro swing est un sous-genre de la house qui est dérivé du swing et du jazz manouche. Il mélange des sonorités des années 1920 à 1940 avec différents styles de musiques électroniques. Le genre est notamment représenté par des artistes comme Bart&Baker, Caravan Palace et Parov Stelar. ",
      credits: [{pseudo:"Smooshie", reseau:"https://www.instagram.com/maureen_gdd/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: '100 KITTENS ON THE FLOOR!!',
      cover: image30,
      playlist: [
       { title: 'Tutti Frutti', artiste:"Little Richard", url:musique30, yt:'https://www.youtube.com/watch?v=F13JNjpNW6c&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=11&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
      ],
      vers: `« Dansons avec frénésie    \nCe rock'n'roll sauvage \nPour tout oublier \nEt revivre à l'infini cet instant »`,
      style: "Rock'n'roll",
      historique:"Le rock 'n' roll (rock and roll, rock & roll, rock'n'roll ou rock'n roll) est un genre musical populaire apparu aux États-Unis à la fin des années 1940. Il découle directement de styles musicaux tels que le gospel, le blues, le jazz, le boogie woogie, le jump blues, le rhythm and blues et la musique country. Alors que des éléments musicaux de ce qui allait devenir le rock'n'roll peuvent être entendus dans les disques de blues des années 1920 et dans les disques de country des années 1930, le genre n'a acquis son nom qu'en 1954. ",
      credits: [{pseudo:"Zegnar", reseau:"https://www.instagram.com/zegnar0/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    {
      title: 'Lights off',
      cover: image31,
      cover2: image31_2,
      playlist: [
        { title: 'Nightcall', artiste:"Kavinsky, Angèle, Phoenix", url:musique31, yt:'https://www.youtube.com/watch?v=CzT3UFjL8G4&list=PLtLquDR_-gW1o1Wsx1KZeNg922TSa0Rq2&index=12&pp=gAQBiAQB8AUB'  },
        { title: 'Manu est mort', artiste:"sukaichae", url:manuMort, yt:''  },
      ],
      vers: `« Cette fois c'est la bonne     \nJ'ai accompli ce que je pensais impossible \nIl est temps pour moi \nD'éteindre les lumières »`,
      style: "Darkwave",
      historique:"La dark wave, ou darkwave , est un genre musical, apparenté au mouvement gothique, ayant émergé dans les années 1970, en parallèle au pic de popularité de la new wave et au post-punk. Construit à partir de simples bases musicales, la dark wave contient des paroles sombres et introspectives accompagnées d'une dose de sehnsucht dans certains groupes. Dans les années 1980, les adeptes de dark wave se nomment « wavers » ou « dark wavers ». ",
      credits: [{pseudo:"Khandro", reseau:"https://www.instagram.com/tr0l0catladybug/"}],
      reco:"blibloublap",
      commentaire:"zoing"
    },
    
]

export default albumsData;