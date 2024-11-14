const FEYN = [
    {
      id: "1",
      name: "Aquatique",
      level: 14,
      category: "Exploration",
      time: "10 minutes",
      duration: "none",
      componentCost: 850,
      marketPrice: 2000,
      keySkill: "Arcanes ou Nature",
      description: "Les cibles de ce rituel sont en mesure d'explorer les profondeurs de l'océan. Jusqu'à huit créatures (vous y compris si vous le souhaitez) ont désormais le pouvoir de respirer sous l'eau. En outre, les cibles sont capables de parler tout à fait normalement et gagnent une VD à la nage égale à leur VD terrestre. Enfin, les sujets ne sont affectés ni par le froid ni par la pression.\n\nCe rituel n'annule pas la capacité de respirer à l'air libre et de se déplacer sur la terre ferme. Équipement et biens, comme les livres et les parchemins, d'une créature affectée par le rituel ne subissent aucun dégât sous l'eau.",
      needTable: true,
      table: {
        headCells: ["Résultat du test", "Durée"],
        data: [
          ["19 ou moins", "4 heures"],
          ["20-29", "8 heures"],
          ["30-39", "16 heures"],
          ["40 ou plus", "2 jours"],
        ],
      },
    },
    {
      id: "23",
      name: "Changement de plan  [Pending]",
      level: 18,
      category: "Voyage",
      time: "10 minutes",
      duration: "Instantanée",
      componentCost: `1000 po et un véhicule ayant un focus de navigation`,
      marketPrice: 17000,
      keySkill: "Arcanes",
      description: "Vous déplacez un véhicule (dont son pilote, son équipage et sa cargaison) ayant le trait focus de navigation d'un à un autre.\n\nAu terme du rituel, vous nommez un lieu dans lequel vous vous êtes déjà rendu. Il doit s'agir d'un lieu fixe, qui doit se situer au même endroit que la dernière fois où vous y êtes allé. Une fois le lieu nommé, effectuez un test d'Arcanes pour déterminer la distance qui sépare votre véhicule du lieu au moment où vous arrivez sur le plan.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Arrivée"],
        data: [
          ["19 ou moins", "150 kilomètres de la destination"],
          ["20-29", "75 kilomètres de la destination"],
          ["30-39", "15 kilomètres de la destination"],
          ["40 ou plus", "Arrivée à destination"],
        ],
      },
    },
    {
      id: "2",
      name: "Communication avec la nature",
      level: 5,
      category: "Divination",
      time: "10 minutes",
      duration: "10 minutes",
      componentCost: 80,
      marketPrice: 250,
      keySkill: "Nature",
      description: "Pour la durée du rituel, vous pouvez communiquer avec les bêtes naturelles et les plantes normales (mais pas les créatures plantes). Le rituel ne rend pas les animaux amicaux, et les animaux et les plantes ont des connaissances limitées par leurs perceptions et leur mobilité. Par exemple, une plante ne connaît que ses alentours immédiats, et un poisson ne peut décrire que ce qu'il a vu ou senti sous l'eau.\n\n Le résultat de votre test de Nature détermine le nombre de questions que vous pouvez poser",
      needTable: true,
      table: {
        headCells: ["Résultat du test", "Nombre de questions"],
        data: [
          ["9 ou moins", "Aucune"],
          ["10-19", "Une"],
          ["20-29", "Deux"],
          ["30 ou plus", "Trois"],
        ],
      },
    },
    {
      id: "3",
      name: "Communication avec les plantes",
      level: 8,
      category: "Divination",
      time: "5 minutes",
      duration: "10 minutes",
      componentCost: 135,
      marketPrice: 680,
      keySkill: "Nature",
      description: "Pour la durée du rituel les plantes (y compris les créatures plantes) présentes dans la zone d'effet peuvent communiquer avec vous. Le rituel ne rend pas les plantes amicales et elles ont des connaissances limitées par leurs perceptions et leurs environnements. Par exemple, une plante ne connaît que ses alentours immédiats. De plus, les plantes peuvent, si elles le souhaitent, réaliser des tâches diverses pour vous, à la discrétion du MD. Le rituel ne permet pas aux plantes de se déraciner pour se déplacer, mais elles peuvent bouger librement leurs branches, vrilles et tiges.\n\nLe résultat du test de Nature détermine la taille de la zone d'effet, pour qu'une plante soit affectée par le rituel, la zone doit la recouvrir entièrement.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Zone d'effet"],
        data: [
          ["9 ou moins", "Aucune"],
          ["10-19", "Décharge 3"],
          ["20-29", "Décharge 5"],
          ["30-39", "Décharge 7"],
          ["40 ou plus", "Décharge 9"],
        ],
      },
    },
    {
      id: "4",
      name: "Communication avec les bêtes",
      level: 10,
      category: "Divination",
      time: "5 minutes",
      duration: "10 minutes",
      componentCost: 200,
      marketPrice: 1000,
      keySkill: "Nature",
      description: "Pour la durée du rituel vous pouvez communiquer avec les bêtes. Le rituel ne rend pas les bêtes amicales et la connaissance et la conscience de nombreuses bêtes est limitée par leur intelligence, mais au minimum, elles peuvent vous donner des informations sur les lieux et les monstres à proximité, y compris tout ce qu'elles ont pu avoir perçu au cours de la journée précédente. De plus, les bêtes peuvent, si elles le souhaitent, réaliser des tâches diverses pour vous, à la discrétion du MD.",
      needTable: false,
      table: {},
    },
    {
      id: "5",
      name: "Compréhension des langues",
      level: 1,
      category: "Voyage",
      time: "10 minutes",
      duration: "24 heures",
      componentCost: 10,
      marketPrice: 50,
      keySkill: "Arcanes ou Nature",
      description: "En commençant le rituel, choisissez l'une des langues que vous avez entendue ou l'une des écritures que vous avez eues sous les yeux au cours des dernières 24 heures.\n\nUtilisé sur une langue que vous avez entendue, ce rituel vous permet de la comprendre pendant 24 heures. De plus, si le résultat de votre test d'Arcanes est supérieur ou égal à 35, vous la parlez couramment pendant toute cette période.",
      needTable: false,
      table: {},
    },
    {
      id: "22",
      name: "Création de cercle de téléportation",
      level: 15,
      category: "Voyage",
      time: "4 heures",
      duration: "24 heures (spéciale)",
      componentCost: `1 000po/case et 5 récupérations`,
      marketPrice: `10 000`,
      keySkill: "Arcanes (aucun test)",
      description: "Vous créez un cercle de téléportation accompagnée d'une séquence précise de sceaux magiques, que vous-même et d'autres lanceurs de rituels pouvez utiliser en qualité de marqueur de lieu pour les rituels comme Portail jumeau ou Portail planaire.\n\nLe cercle de téléportation ne transporte pas des créatures à proprement parler; il permet simplement d'activer d'autres rituels de voyage. Le lanceur choisit la taille du cercle de téléportation, qui affecte le coût des composantes du rituel : 1 cases, 4 cases (aire 2 cases sur 2), 9 cases (aire 3 cases sur 3) ou 16 cases (aire 4 cases sur 4)?\n\nLe cercle de téléportation reste en place pendant 24 heures, mais son créature peut en allonger la durée en dépensant une récuprération toutes les 24 heures pour le maintenir. Le lanceur n'est pas obligé de le voir ni même d'être dans le même plan pour maintenir l'effet. Si l'effet du rituel est maintenu pendant un an et un jour sans interruption, le cercle de téléportation devient permanent.",
      needTable: false,
      table: {},
    },
    {
      id: "6",
      name: "Créer un campement",
      level: 1,
      category: "Exploration",
      time: "10 minutes",
      duration: "8 heures",
      componentCost: 15,
      marketPrice: 50,
      keySkill: "Nature",
      description: "Vous invoquez des centaines de minuscules esprits de la nature pour monter un campement ou réaliser une tâche basique du quotidien dans un rayon de 5 cases autour de vous. Les esprits nettoient la zone, montent les tentes, déroulent les lits, vont chercher de l'eau et préparent un repas nourrissant. ils dissimulent aussi le campement : le résultat de votre test de nature devient devient le DD des tests de Perception pour détecter votre camp. Les esprits utilisent votre matériel et celui de vos alliés pour monter le campement. Si ni vous ni vos alliés ne possédez le matériel approprié, les esprits rassemblent des matériaux dans les environs.\n\nA la fin de la durée du rituel, les esprits démontent le campement, rangent votre matériel et remettent le site dans son état d'origine, supprimant toute trace de votre présence et celle de vos alliées",
      needTable: false,
      table: {},
    },
    {
      id: "7",
      name: "Dégagement du terrain",
      level: 6,
      category: "Exploration",
      time: "30 minutes",
      duration: "permanente",
      componentCost: 70,
      marketPrice: 150,
      keySkill: "Nature (aucun test)",
      description: "Vous produisez une explosion de zone 3 à 10 cases ou moins. Les débris, décombres et autres détritus s'aplatissent, s'écartent ou cessent tout simplement de constituer des obstacles. Ce rituel n'affecte pas la terre et la roche ; il permet de se débarrasser des décombres d'un tunnel effondré, mais certainement pas de créer un passage là où il n'en existe pas. Le plus souvent, il permet d'aplanir une zone pour éliminer le terrain difficile. Toutefois, il n'affecte pas les murs, sols ou plafonds d'origine artificielle, pas plus que les pièges et barrières magiques",
      needTable: false,
      table: {},
    },
    {
      id: "8",
      name: "Destrier fantôme",
      level: 6,
      category: "Exploration",
      time: "10 minutes",
      duration: "12 heures",
      componentCost: 70,
      marketPrice: 360,
      keySkill: "Arcanes ou Nature",
      description: "Ce rituel invoque jusqu'à 8 créatures ressemblant à des chevaux. Elles sont de taille G et peuvent être montées par vous-même ou par tout autre personnage désigné lors du rituel.\n\nC'est le résultat de votre test d'Arcanes qui détermine la vitesse de déplacement des destriers que vous avez invoqués, ainsi que leurs éventuelles capacités de déplacement spéciales. Les destriers ont les capacités de déplacement spéciales correspondant au résultat de votre test, mais également celles qui correspondent aux résultats inférieurs.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "VD", "Déplacement spécial"],
        data: [
          ["19 ou moins", 10, "Aucune"],
          ["20-29", 12, "Ignore les terrains difficiles"],
          ["30-39", 15, "Se déplace sur l'eau comme si c'était une surface solide"],
          ["40 ou plus", 20, "Vol (jusqu'à 10 cases au-dessus du sol)"],
        ],
      },
    },
    // TODO: Add "Ferbois"
    {
      id: "9",
      name: "Feu d'explorateur",
      level: 1,
      category: "Exploration",
      time: "10 minutes",
      duration: "8 heures",
      componentCost: 10,
      marketPrice: 50,
      keySkill: "Arcanes ou Nature (aucun test)",
      description: "Vous modifiez un feu de bonne taille ou plus petit à moins de 5 cases de vous. La lumière projetée par le feu ne peut pas être vue depuis plus de 5 cases. La lumière du feu est inchangée dans ce rayon et le rituel ne diminue ni ne contient la chaleur ou les sons du feu.",
      needTable: false,
      table: {},
    },
    {
      id: "10",
      name: "Histoire révélée",
      level: 11,
      category: "Divination",
      time: "10 minutes",
      duration: "5 minutes",
      componentCost: 600,
      marketPrice: 2900,
      keySkill: "Arcanes",
      description: "Lorsque vous achevez le rituel, vous touchez une créature volontaire ou sans défense et voyez les moments les plus importants de la vie de cette créature.\n\nLes images apparaissent dans l'ordre, de plus important au moins important. Votre test d'Arcanes détermine le nombre de scènes passées que vous voyez. Ces scènes sont les plus cruciales de l'histoire de la créature et il n'est pas possible de choisir leur ordre d'apparition.\n\nAccomplir ce rituel plus d'une fois sur la même créature montre invariablement les mêmes scènes à moins que la créature n'ait fait l'expérience de moments marquant depuis la dernière fois que vous avez accompli le rituel",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Nb de scènes"],
        data: [
          ["9 ou moins", "1 scène"],
          ["10-19", "2 scènes"],
          ["20-29", "3 scènes"],
          ["30-39", "4 scènes"],
          ["40 ou plus", "5 scènes"],
        ],
      },
    },
    {
      id: "21",
      name: "Lumière noire",
      level: 4,
      category: "Exploration",
      time: "1 minute",
      duration: "1 jour",
      componentCost: 30,
      marketPrice: 150,
      keySkill: "Arcanes (aucun test)",
      description: "Vous créez une source de lumière faible qui vous permet (ainsi que ceux qui vous entourent) de voir sans être vu malgré votre source de lumière.\n\nCe rituel crée une boule d'ombre qui flotte près de vous lorsque vous marchez et produit une lumière faible sur un rayon de 6 cases.\n\nAu sein de ce périmètre, vous distinguez tout clairement. Du reste, seules les créatures qui s'y trouvent voient la boule et la zone de lumière qu'elle dégage. En son sein, tout est en noir et blanc, les couleurs prenant la forme de nuances grises.",
      needTable: false,
      table: {
      headCells: [],
        data: [],
      },
    },
    {
      id: "11",
      name: "Messager animal",
      level: 1,
      category: "Exploration",
      time: "10 minutes",
      duration: "Spéciale",
      componentCost: 10,
      marketPrice: 50,
      keySkill: "Nature",
      description: "Vous prenez pour cible un animal non hostile de taille TP, comme un moineau, une corneille, un renard ou une carpe qui devra rester dans un rayon de 5 cases de vous durant tout le temps nécessaire pour exécuter ce rituel. Une fois ce dernier achevé, vous murmurez à l'animal un message d'un maximum de 25 mots et lui indiquez le nom du destinataire, ainsi que l'endroit où il se trouve. L'animal part aussitôt à sa recherche, en tâchant de se tenir à l'écart de tout danger. Une fois le destinataire trouvé, il s'en approche jusqu'à lui être adjacent et votre message sort de sa bouche dans un chuchotement. Dès qu'il a délivré son message ou que les effets du rituel prennent fin. L'animal se soustrait à votre influence et retrouve un comportement normal.\n\n Votre test de Nature détermine le temps durant lequel l'animal demeure sous l'effet du rituel.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Durée"],
        data: [
          ["19 ou moins", "6 heures"],
          ["20-29", "12 heures"],
          ["30-39", "18 heures"],
          ["40 ou plus", "24 heures"],
        ],
      },
    },
    {
      id: "12",
      name: "Piège",
      level: 4,
      category: "Protection",
      time: "10 minutes",
      duration: "none",
      componentCost: 25,
      marketPrice: 150,
      keySkill: "Nature",
      description: "Vous créez un piège magique dans une zone de 2 cases sur 2 cases qui vous est adjacente. Quand vous achevez le rituel, effectuez un test de Nature. Le résultat du test détermine la durée du rituel, le DD du test de Perception nécessaire pour détecter le piège et celui du test de Larcin pour le désamorcer. Au cours du rituel, vous pouvez nommer des créatures pouvant passer librement dans la zone du piège et vous déterminer des conditions permettant à une créature d'esquiver le piège. Toute autre créature qui entre dans la zone du piège subit une attaque égale à votre niveau +4 contre les Réflexes. Si cette attaque touche, la cible est immobilisée (sauvegarde annule).\n\nQuand le piège est déclenché, vous prenez conscience qu'il a été déclenché quelque soit la distance qui vous en sépare. Le rituel prend alors fin.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Durée"],
        data: [
          ["14 ou moins", "8 heures"],
          ["15-24", "1 jour"],
          ["25-34", "3 jours"],
          ["35 ou plus", "1 mois"],
        ],
      },
    },
    {
      id: "13",
      name: "Pont d'ombre",
      level: 8,
      category: "Exploration",
      time: "5 minutes",
      duration: "10 minutes",
      componentCost: 135,
      marketPrice: 600,
      keySkill: "Arcanes",
      description: "Vous invoquez un pont constitué d'ombres matérielles, dont les deux extrémités doivent être reliées à une surface solide. Le résultat du test d'Arcanes détermine la longueur et la largeur maximales de l'ouvrage.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Taille"],
        data: [
          ["19 ou moins", "1 x 10 cases"],
          ["20-29", "2 x 20 cases"],
          ["30-39", "3 x 30 cases"],
          ["40 ou plus", "4 x 40 cases"],
        ],
      },
    },
    {
      id: "14",
      name: "Portail jumeau",
      level: 8,
      category: "Voyage",
      time: "10 minutes",
      duration: "Spéciale",
      componentCost: 135,
      marketPrice: 680,
      keySkill: "Arcanes ou Nature",
      description: `Vous créez un raccourci dans la trame de l'univers. L'endroit où vous vous trouvez est relié à un cercle de téléportation permanent situé quelque part sur le même plan. D'un pas, vous pouvez passer d'un cercle à l'autre. Lors de l'exécution du rituel, vous devez tracer à l'aide de craies et d'encres rares un cercle de 3 mètres de diamètre. Ce cercle de téléportation temporaire doit correspondre parfaitement au cercle de téléportation permanent qui constitue votre destination. Il disparaît lorsque le portail se referme.\n\n La durée pendant laquelle le portail reste ouvert dépend du résultat du test d'Arcanes que vous effectuez en fin de rituel.\n\nVous pouvez aussi utiliser un cercle de téléportation permanent comme point d'origine, ce qui modifie très légèrement les conditions du rituel. Vous réduisez ainsi le coût de vos réactifs alchimiques à 50 po et vous bénéficiez d'un bonus de +5 au test d'Arcanes. Tant que le portail reste ouvert, toute créature qui pénètre dans le cercle du point d'origine réapparaît instantanément au point d'arrivée, avec tout ce qu'elle tient ou transporte. Elle peut même terminer son action de mouvement. Le nombre et la catégorie de taille des créatures pouvant passer à travers le portail ne sont pas limités, mais il faut qu'elles aient matériellement le temps de franchir le cercle avant que celui-ci ne disparaisse.\n\nToute personne qui se trouve à proximité de l'une ou l'autre extrémité du portail discerne une image floue du cercle de téléportation se trouvant à l'autre bout, et de son environnement dans un rayon de 18 mètres. Tout ce qui se trouve dans cette zone bénéficie d'un camouflage, le reste étant totalement embrumé (naturellement, plus un portail dure et plus vous aurez le temps d'étudier minutieusement votre destination avant de pénétrer dans le cercle). Les effets environnementaux d'une extrémité de la connexion n'ont aucune influence sur celles de l'autre extrémité.\n\nLa plupart des grands temples, des sièges des principales guildes de magiciens et des villes de taille disposent de cercles de téléportation permanents tracés au moyen de sceaux magiques bien particuliers gravés dans le sol. L'ordre et la nature des sceaux sont primordiaux, car vous devez reproduire fidèlement votre cercle de destination pour ouvrir un portail. Les sceaux ne sont pas plus difficiles à retenir qu'une liste de lettres et de chiffres. Ce rituel peut vous transporter vers n'importe quel cercle de téléportation permanent dont vous connaissez la séquence de symboles. Lorsque vous apprenez le rituel, votre MD vous communique au moins deux séquences de ce type. Nul doute que vous en découvrirez d'autres au cours de vos voyages ou de vos recherches.\n\nCe rituel peut vous amener à n'importe quel endroit du monde, mais pas sur d'autres plans. Une magie de protection suffisamment puissante, comme Interdiction, peut bloquer votre téléportation. \n\nVous savez dès le début du rituel si votre destination fait l'objet d'une telle mesure de protection. Vous pouvez donc choisir de l'interrompre, sans perdre aucune de vos composantes.`,
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Durée"],
        data: [
          ["19 ou moins", "1 round"],
          ["20-39", "2 rounds"],
          ["40 ou plus", "5 rounds"],
        ],
      },
    },
    {
      id: "15",
      name: "Préservation des morts",
      level: 1,
      category: "Restauration",
      time: "1 heure",
      duration: "Spéciale",
      componentCost: 10,
      marketPrice: 50,
      keySkill: "Soins (aucun test)",
      description: "Ce rituel est accompli près d'une dépouille adjacente. Il multiplie par cinq le temps dont dispose un cadavre pour bénéficier de Rappel à la vie ou d'un rituel similaire. Il empêche également le cadavre d'être transformé en mort-vivant pendant 150 jours.",
      needTable: false,
      table: {
      headCells: [],
        data: [],
      },
    },
    {
      id: "16",
      name: "Rémissions",
      level: 8,
      category: "Restauration",
      time: "1 heure",
      duration: "Instantanée",
      componentCost: 250,
      marketPrice: 600,
      keySkill: "Soins",
      description: "Rémissions libère le sujet d'un effet durable l'affectant.\n\nCe rituel peut annuler les malédictions, les effets de charme ou de domination, mais aussi les effets de terreur, confusion, aliénation mentale, métamorphose et pétrification.\n\nToutes les malédictions et les effets précités prennent immédiatement fin.\n\nCe rituel est très éprouvant physiquement pour celui qui en bénéficie. Il peut même être fatal s'il est exécuté sur un personnage blessé. Une fois le rituel terminé, effectuez un test de Soins appliquant comme malus le niveau de l'effet que vous tentez d'éliminer (ou le niveau de la créature qui est à l'origine de cet effet). \n\nLe résultat indique la quantité de dégâts subis par le personnage. Si ce dernier survit, les dégâts en question peuvent être soignés normalement.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Effets sur la cible"],
        data: [
          ["0 ou moins", "Mort"],
          ["10-19", "Dégâts égaux aux points de vie maximums de la cible"],
          ["20-29", "Dégâts égaux à la moitié des points de vie maximums de la cible"],
          ["30 ou plus", "Pas de dégât"],
        ],
      },
    },
    {
      id: "17",
      name: "Réparation",
      level: 1,
      category: "Exploration",
      time: "10 minutes",
      duration: "Permanent",
      componentCost: "Spéciale",
      marketPrice: 50,
      keySkill: "Arcanes ou Nature (aucun test)",
      description: "Un objet susceptible de rentrer dans un cube de 3 mètres d'arête est totalement réparé.\n\nLes composantes coûtent 20% de la valeur de l'objet. Si son prix ne figure sur aucune liste, c'est au MD de le fixer.",
      needTable: false,
      table: {
      headCells: [],
        data: [],
      },
    },
    {
      id: "18",
      name: "Résistance aux éléments",
      level: 2,
      category: "Exploration",
      time: "10 minutes",
      duration: "24 heures",
      componentCost: 20,
      marketPrice: 100,
      keySkill: "Arcanes ou Nature (aucun test)",
      description: "Grâce à ce rituel, cinq personnes de votre choix (vous compris) ne tiennent aucun compte des malus associés aux conditions extrêmes d'un climat non magique.\n\nLes créatures qui ont participé au rituel supportent sans aucune conséquence fâcheuse des températures comprises entre -45° et +60°C. Leur équipement est également protégé des dégâts éventuels que pourraient provoquer la chaleur, le froid et les précipitations.",
      needTable: false,
      table: {
      headCells: [],
        data: [],
      },
    },
    {
      id: "19",
      name: "Respiration aquatique",
      level: 8,
      category: "Exploration",
      time: "10 minutes",
      duration: "Spéciale",
      componentCost: 135,
      marketPrice: 680,
      keySkill: "Arcanes ou Nature",
      description: "Lors de l'exécution de ce rituel, vous désignez jusqu'à huit participants (y compris vous-même si vous le souhaitez) désormais capables de respirer sous l'eau aussi facilement qu'à l'air libre et qui peuvent également parler tout à fait normalement sous l'eau.\n\nLe rituel Respiration aquatique ne modifie pas votre capacité à respirer de l'air, pas plus qu'il ne vous confère une plus grande VD à la nage ou la capacité de combattre sous l'eau sans malus. En revanche, il protège votre équipement et celui de tous les participants (parchemins et livres en particulier) des dégâts de l'eau.\n\nLes effets du rituel se prolongent en fonction du résultat de votre test.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Durée"],
        data: [
          ["14 ou moins", "1 heure"],
          ["15-19", "2 heures"],
          ["20-24", "4 heures"],
          ["25-29", "8 heures"],
          ["30 ou plus", "24 heures"],
        ],
      },
    },
    {
      id: "20",
      name: "Tenue de camouflage du voyageur",
      level: 1,
      category: "Tromperie",
      time: "10 minutes",
      duration: "10 heures",
      componentCost: 10,
      marketPrice: 50,
      keySkill: "Nature",
      description: "Vous vous drapez ainsi que vos alliés présents pour le rituel dans un linceul qui vous camoufle. Les sujets de ce rituel bénéficient d'un bonus aux tests de Discrétion en voyageant, et les autres créatures subissent un malus lorsqu'elles utilisent Perception pour trouver votre trace.\n\nVotre test de Nature détermine le bonus dont vous bénéficiez et le malus subi par les autres.",
      needTable: true,
      table: {
      headCells: ["Résultat du test", "Bonus à la Discrétion", "Malus au pistage"],
        data: [
          ["19 ou moins", "+2", "-2"],
          ["20-29", "+5", "-5"],
          ["30 ou plus", "+10", "-10"],
        ],
      },
    },
  ];
  
  const OTHER = [];
  
  export const DEFAULT_RITUAL = {
    id: "0",
    name: "default_ritual",
    level: 0,
    category: "none",
    time: "none",
    duration: "none",
    componentCost: 0,
    marketPrice: 0,
    keySkill: "None",
    description: "",
    needTable: false,
    table: {
      headCells: [],
      data: [],
    },
  };
  
  export const dnd4Rituals = {
    FEYN,
    OTHER,
  };