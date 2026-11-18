export type ArticleBlock =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export type ArticleFaq = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  perex: string;
  date: string;
  lead: ArticleBlock[];
  faqs: ArticleFaq[];
  closing: ArticleBlock[];
};

export const articles: Article[] = [
  {
    "slug": "smrk-kvh-a-bsh-hranoly",
    "title": "Smrkové hranoly KVH a BSH | DRAXOR",
    "description": "Co jsou smrkové hranoly KVH a BSH, čím se liší a kde je používáme u dřevostaveb, A-frame chat a altánů. Vysvětlení z Brna od DRAXOR.",
    "h1": "Smrkové hranoly KVH a BSH – základ dřevěných konstrukcí",
    "perex": "Smrk je u dřevěných staveb základní konstrukční dřevina. V podobě hranolů KVH a lepených nosníků BSH z něj připravujeme nosné rámy, krokve i pohledové trámy, které mají být přesné, stálé v rozměrech a připravené na dlouhou službu.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti smrku, KVH a BSH"
      },
      {
        "t": "p",
        "text": "Smrk je světlé, poměrně lehké dřevo s dobrým poměrem pevnosti a hmotnosti. Dobře se opracovává i spojuje a v interiéru má klidný vzhled, který sluší přiznaným trámům. Právě proto je v Česku i v severských zemích nejčastější volbou pro nosné dřevěné konstrukce. U staveb DRAXOR pracujeme především se severským smrkem."
      },
      {
        "t": "p",
        "text": "Běžné stavební řezivo může mít nestejnou vlhkost, větší sklon k prasklinám a méně předvídatelné chování. Proto u konstrukcí, na kterých stavba stojí, používáme sušené a tříděné hranoly. Dva základní typy jsou KVH a BSH."
      },
      {
        "t": "p",
        "text": "**KVH** (z německého Konstruktionsvollholz, tedy konstrukční masivní dřevo) je masivní hranol, často nastavovaný zubovitým spojem z kratších, pečlivě vybraných kusů. Dřevo je vysušené na nízkou a rovnoměrnou vlhkost a tříděné podle pevnosti. Díky tomu je stabilnější než běžné nesušené řezivo a hodí se i na pohledové trámy, pokud zvolíte odpovídající pohledovou kvalitu."
      },
      {
        "t": "p",
        "text": "**BSH** (Brettschichtholz, česky lepené lamelové dřevo) vzniká slepením několika vysušených lamel do jednoho nosníku. Lepení umožňuje větší průřezy a delší nosníky, než jaké jsou běžně dostupné z jednoho kmene. BSH je rozměrově velmi stálé a hodí se tam, kde potřebujete delší rozpětí nebo klidný pohledový trám s menším rizikem kroucení."
      },
      {
        "t": "p",
        "text": "Oba typy hranolů se dají přesně řezat a opracovávat, včetně CNC. To je důležité u spojů, které mají sedět na milimetry: u krokví A-frame chaty, u panelů dřevostavby i u tesařské konstrukce altánu."
      },
      {
        "t": "p",
        "text": "V exteriéru má smrk nižší přirozenou odolnost vůči houbám a povětrnosti než třeba modřín nebo jádrové dubové dřevo. Konstrukci je proto nutné správně navrhnout, odvětrat a tam, kde je dřevo vystavené dešti a slunci, ho chránit nátěrem nebo zakrytím."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Hlavní výhody smrkových hranolů KVH a BSH jsou konstrukční. Jsou lehčí než ocel nebo beton, ale při správném navržení unesou střechu, stěny i přiznané rámy. Mají stálou vlhkost, takže se méně kroutí a méně praskají než mokré řezivo. Dají se použít jako pohledový prvek, konstrukce tedy může zůstat viditelná a stát se součástí interiéru."
      },
      {
        "t": "p",
        "text": "Nevýhody je potřeba říct stejně otevřeně. Smrk je měkčí dřevina, takže se snáz protlačí nebo poškrábe než dub. V exteriéru bez ochrany rychleji šedne, může začít modrat a bez správného detailu a nátěru má kratší životnost než odolnější dřeviny. I u tříděného KVH a BSH se mohou objevit suky nebo smůla, i když výběr a třídění jejich výskyt omezují. BSH je navíc lepený materiál: spoje lamel jsou dnes běžně velmi kvalitní, ale nosník není jeden kus kmene."
      },
      {
        "t": "p",
        "text": "KVH i BSH také potřebují správné skladování a včasné zapravení do stavby. Když vysušený hranol necháte dlouho ležet na dešti nebo na zemi, zbytečně mu vrátíte vlhkost, které jste se sušením zbavili."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "Smrkové KVH a BSH jsou u nás především konstrukční materiál, ne obklad."
      },
      {
        "t": "p",
        "text": "U [moderních dřevostaveb](/drevostavby) tvoří hranoly nosný skelet stěn, stropů a krovu. Stěnové panely připravujeme předem a na pozemku je usazujeme jeřábem. Právě proto potřebujeme dřevo se stálými rozměry: panely do sebe musí zapadnout a spoje musí sedět."
      },
      {
        "t": "p",
        "text": "U [A-frame chaty](/a-frame-chata) je konstrukce zároveň architektonickým prvkem. Strmá střecha stojí na masivních trámech, které zůstávají v interiéru přiznané. Tady dává smysl kvalitní KVH nebo BSH právě proto, že trám je vidět z obýváku i z podkroví a má zůstat rovný."
      },
      {
        "t": "p",
        "text": "U [dřevěných altánů](/altany) používáme smrkové hranoly na tesařskou konstrukci, sloupy a krovy. Pohledové dřevo můžeme kartáčovat a ošetřit olejem. Tam, kde je altán víc vystavený dešti, se na některé venkovní části může hodit spíš modřín, na nosný krov často zůstává smrk."
      },
      {
        "t": "p",
        "text": "U [srubu](/srub) je situace jiná. Srub Harmonie stavíme z masivní severské kulatiny, ne z hranolů KVH. Hranoly ale mohou doplnit navazující konstrukce, například zázemí nebo nosnou část terasy. Konkrétní skladbu vždy navrhujeme podle projektu."
      },
      {
        "t": "p",
        "text": "Na fasády a terasy častěji doporučujeme odolnější materiály, jako je modřín, thermowood nebo WPC. Smrk necháváme tam, kde vyniknou jeho silné stránky: v konstrukci a v přiznaných trámech."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "V interiéru je údržba smrkové konstrukce jednoduchá. Přiznané trámy stačí občas oprášit. Pokud jsou ošetřené olejem, voskem nebo lakem, při předání vysvětlíme, jak povrch obnovovat. Konstrukce schovaná ve stěně dřevostavby běžnou údržbu nepotřebuje."
      },
      {
        "t": "p",
        "text": "Venku je péče důležitější. Smrk chraňte především dobrým návrhem: okapem, přesahy, odvětráním a tím, že dřevo nestojí ve vodě. Jednou ročně konstrukci prohlédněte, hlavně čela trámů a strany vystavené slunci a dešti, a podle potřeby obnovte nátěr olejem nebo lazurou."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti běžnému nesušenému řezivu jsou KVH a BSH stálé, tříděné a předvídatelnější. Proto je u nosných konstrukcí preferujeme."
      },
      {
        "t": "p",
        "text": "Oproti modřínu je smrk měkčí a v exteriéru méně odolný, zato se s ním dobře pracuje a hodí se na skelet i na pohledové trámy v interiéru. Modřín častěji volíme na fasády, terasy a venkovní obklady."
      },
      {
        "t": "p",
        "text": "Oproti dubu je smrk světlejší, lehčí a měkčí. Dub patří spíš do interiéru na pohledové a otěruvzdornější plochy, například na [akustické panely](/akusticke-panely), ne do nosného skeletu dřevostavby."
      },
      {
        "t": "p",
        "text": "Oproti oceli je dřevěný hranol teplejší na pohled i na dotek a u dřevostaveb i chat zůstává součástí architektury. Kov dává smysl u jiných prvků, třeba u [bioklimatických pergol](/bioklimaticke-pergoly), kde používáme hliník."
      }
    ],
    "faqs": [
      {
        "q": "Jaký je rozdíl mezi KVH a BSH?",
        "a": "KVH je masivní konstrukční hranol, často nastavovaný zubovitým spojem. BSH je lepený lamelový nosník složený z několika prken. BSH obvykle umožní větší průřezy a delší rozpětí a bývá rozměrově ještě stálější. Který typ se hodí k vaší stavbě, navrhujeme podle zatížení, rozpětí a toho, zda má být trám pohledový."
      },
      {
        "q": "Hodí se smrk do exteriéru?",
        "a": "Hodí se, ale ne bez ochrany a správného detailu. V dešti a na slunci má smrk nižší přirozenou odolnost než modřín. Venkovní konstrukci proto navrhujeme tak, aby mohla vysychat, a povrch chráníme nátěrem."
      },
      {
        "q": "Používáte KVH a BSH i na pohledové trámy?",
        "a": "Ano, pokud zvolíme vhodnou pohledovou kvalitu. Právě u A-frame chat a altánů je konstrukce často vidět, takže záleží na kresbě i na povrchové úpravě."
      },
      {
        "q": "Sesychají tyto hranoly po stavbě?",
        "a": "KVH a BSH se dodávají vysušené na nízkou vlhkost, proto se hýbou výrazně méně než masivní kulatina nebo mokré řezivo. Určitý pohyb dřeva je ale přirozený, hlavně při velkých změnách vlhkosti v interiéru. U srubu z kulatiny je potřeba počítat se sesedáním, jak popisujeme na stránce [srubu](/srub)."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Pojďme vybrat správnou konstrukci"
      },
      {
        "t": "p",
        "text": "Pokud plánujete dřevostavbu, A-frame chatu nebo altán v Brně nebo na jižní Moravě, rádi s vámi probereme, kde dává smysl KVH, kde BSH a kde je lepší jiná dřevina. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  },
  {
    "slug": "modrin-a-sibirsky-modrin",
    "title": "Modřín a sibiřský modřín | DRAXOR",
    "description": "Jak se chová evropský a sibiřský modřín na fasádě, terase i altánu, čím se liší a jak o něj pečovat. Praktický přehled z Brna od DRAXOR.",
    "h1": "Modřín a sibiřský modřín na fasády, terasy a altány",
    "perex": "Modřín patří k nejoblíbenějším dřevinám do exteriéru: je hustší než smrk, přirozeně odolnější vůči vlhkosti a hezky stárne. Pracujeme s evropským i sibiřským modřínem a vybíráme ho tam, kde má dřevo zvládnout slunce, déšť i střídání teplot na jižní Moravě.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti modřínu"
      },
      {
        "t": "p",
        "text": "Modřín je jehličnan s výraznější kresbou, teplejší barvou a vyšší hustotou, než jakou má běžný konstrukční smrk. V jádru obsahuje více pryskyřice, díky které lépe odolává vlhkosti a dřevokazným organismům. Hodí se proto na fasádní palubky, terasová prkna i pohledové části altánů."
      },
      {
        "t": "p",
        "text": "Evropský modřín a sibiřský modřín jsou příbuzné dřeviny, ale nerostou ve stejném klimatu. Sibiřský modřín obvykle roste pomaleji, mívá hustší letokruhy a často i vyšší objemovou hustotu. Proto se mu přisuzuje o něco lepší rozměrová stálost a odolnost v exteriéru. Neplatí to ale automaticky pro každý kus. O chování prkna rozhoduje i výběr, sušení, podíl běle a jádra a to, jak je dřevo uložené ve stavbě. Kvalitní evropský modřín může posloužit výborně, zatímco špatně vybraný sibiřský modřín zklame. Proto dřevinu i třídu kvality volíme podle konkrétního použití, ne podle názvu na etiketě."
      },
      {
        "t": "p",
        "text": "Čerstvý modřín má medovou až načervenalou barvu. Pokud ho necháte bez pigmentovaného nátěru, slunce a déšť ho postupně změní ve stříbřitě šedou patinu. Není to poškození, ale přirozené stárnutí povrchu. Kdo chce zachovat původní teplý odstín, musí povrch pravidelně olejovat."
      },
      {
        "t": "p",
        "text": "Modřín je tvrdší a pryskyřičnatější než smrk, takže se o něco hůř opracovává a v teple může ze suků ještě uvolňovat smůlu. Při kotvení je potřeba volit vhodné spojovací prvky, aby na povrchu nevznikaly skvrny od kovu."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Hlavní výhodou modřínu je přirozená odolnost v exteriéru bez chemické impregnace. Hodí se na fasády i terasy, hezky vypadá nový i ostříbřený a k dřevostavbám, chatám i zahradním stavbám přirozeně patří. Dobře snáší střídání počasí, pokud může vysychat a pokud je správně navržená spodní konstrukce nebo odvětraná mezera za fasádou."
      },
      {
        "t": "p",
        "text": "Nevýhody souvisejí se stejným charakterem dřeva. Modřín pracuje: sesychá, může se kroutit nebo lehce prohýbat, hlavně u širších prken a při výkyvech vlhkosti. Na terase je proto důležitá správná šířka prken, dilatační spáry a odvětrání zespodu. Smůla může občas vyhřeznout i po montáži, zejména na jižní, silně prohřívané straně. Povrch bez údržby zešedne, což jednomu vyhovuje a druhému ne. A i když je modřín odolnější než smrk, není bezúdržbový ani nezničitelný: stojatá voda, uzavřené detaily a zanedbaný podklad dokážou pokazit i dobré dřevo."
      },
      {
        "t": "p",
        "text": "Sibiřský modřín bývá nákladnější než evropský a rozdíly mezi dodávkami umí být větší, než by člověk čekal. Proto se díváme na kvalitu konkrétního materiálu, ne jen na označení původu."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "Modřín je u nás typická volba tam, kde má dřevo být vidět a zároveň zvládat počasí."
      },
      {
        "t": "p",
        "text": "U [moderních dřevostaveb](/drevostavby) často navrhujeme modřínovou fasádu, někdy v kombinaci s falcovanou plechovou střechou. Palubky můžeme kartáčovat a ošetřit přírodními oleji, aby vynikla textura dřeva. Za obkladem necháváme odvětranou mezeru, aby fasáda mohla vysychat."
      },
      {
        "t": "p",
        "text": "U [A-frame chaty](/a-frame-chata) se modřín hodí na fasádní palubky a na dřevěné prvky vystavené povětrnosti. Přiznané konstrukční trámy v interiéru bývají spíš ze smrkových hranolů KVH nebo BSH, zatímco vnější plášť má zvládnout déšť a slunce."
      },
      {
        "t": "p",
        "text": "Na [dřevěné terasy](/terasy) patří modřín k nejoblíbenějším volbám. Je přirozeně odolný vůči vlhkosti a má krásnou teplou barvu. Životnost terasy ale nestojí jen na dřevině: stejně důležité jsou spodní konstrukce, spád, odvětrání a správné kotvení prken."
      },
      {
        "t": "p",
        "text": "U [dřevěných altánů](/altany) používáme modřín na pohledové a víc namáhané venkovní části. Nosná tesařská konstrukce může být ze smrku, z modřínu, nebo z kombinace obojího podle návrhu a místa."
      },
      {
        "t": "p",
        "text": "K [srubu](/srub) i k chatě se modřín hodí na terasu, obklady nebo navazující zahradní stavby, které mají s masivním dřevem ladit."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "O modřín se dá pečovat dvěma způsoby a oba jsou v pořádku, pokud o nich víte předem."
      },
      {
        "t": "p",
        "text": "Pokud vám vyhovuje přirozená šedá patina, povrch nemusíte olejovat. I tehdy ale terasu nebo fasádu jednou ročně prohlédněte, zamette, podle potřeby umyjte a zkontrolujte, jestli někde nestojí voda, nepřekáží nečistoty ve spárách a jestli drží kotvení."
      },
      {
        "t": "p",
        "text": "Pokud chcete zachovat původní medovou barvu, je potřeba povrch pravidelně ošetřovat olejem. Na jižní Moravě, kde je hodně slunce, to platí zvlášť pro strany vystavené jihu a západu. Olej se obvykle obnovuje na jaře. Při předání vám ukážeme, jak o konkrétní povrch pečovat."
      },
      {
        "t": "p",
        "text": "Terasu chraňte i v běžném provozu: pod květináče dávejte podložky, ať pod nimi nestojí voda, a vysokotlakou myčku zblízka raději nepoužívejte."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti smrku je modřín do exteriéru odolnější a obvykle i hustší. Smrk proto necháváme hlavně v konstrukci, modřín na plášti, terase a pohledových venkovních částech."
      },
      {
        "t": "p",
        "text": "Oproti thermowoodu je modřín neošetřené přírodní dřevo. Thermowood bývá rozměrově stálější, protože má nižší rovnovážnou vlhkost. Modřín zase zachovává klasický vzhled a charakter jehličnatého dřeva bez tepelné úpravy. Která volba je lepší, záleží na místě, vzhledu a na tom, kolik údržby chcete přijmout."
      },
      {
        "t": "p",
        "text": "Oproti WPC kompozitu nabízí modřín přírodní kresbu, vůni a stárnutí, které u dřevěné stavby většinou chcete. WPC na oplátku obvykle vyžaduje méně péče o povrch a nešedne stejným způsobem. Na terasách obě možnosti s klientem porovnáme."
      },
      {
        "t": "p",
        "text": "Oproti dubu je modřín v exteriéru praktičtější volbou na velké plochy, jako je fasáda nebo terasa. Dub necháváme spíš do interiéru."
      }
    ],
    "faqs": [
      {
        "q": "Jaký je rozdíl mezi evropským a sibiřským modřínem?",
        "a": "Sibiřský modřín mívá hustší letokruhy a často i vyšší hustotu, proto se od něj čeká o něco lepší odolnost a stálost. Evropský modřín je osvědčená dřevina na fasády i terasy a při dobrém výběru poslouží stejně dobře. Rozhoduje kvalita konkrétního řeziva, sušení a správná montáž, ne jen označení původu."
      },
      {
        "q": "Musí se modřínová terasa olejovat?",
        "a": "Nemusí. Bez oleje postupně zešedne a získá stříbřitou patinu. Olej je potřeba tehdy, když chcete udržet původní teplou barvu a kresbu dřeva. I neošetřenou terasu je ale dobré udržovat v čistotě a jednou za čas ji prohlédnout."
      },
      {
        "q": "Proč modřín na fasádě šedne?",
        "a": "Za šednutí může hlavně sluneční záření a déšť, které mění povrchovou vrstvu dřeva. Je to přirozený proces. Pokud šednutí nechcete, pomůže pigmentovaný olej nebo lazura a jeho občasné obnovení."
      },
      {
        "q": "Hodí se modřín i na nosnou konstrukci?",
        "a": "Modřín se dá použít i konstrukčně, častěji ho ale dáváme tam, kde je vystavený počasí a má být pohledový. Na skelet dřevostavby, krokve a delší pohledové trámy obvykle používáme smrkové hranoly KVH nebo BSH."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Chcete fasádu nebo terasu z modřínu?"
      },
      {
        "t": "p",
        "text": "Pokud uvažujete o modřínové fasádě, terase nebo altánu v Brně nebo na jižní Moravě, rádi s vámi vybereme evropský nebo sibiřský modřín podle místa a toho, jak má dřevo stárnout. Pošlete nám fotku domu nebo zahrady a připravíme vám návrh na míru. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  },
  {
    "slug": "thermowood-tepelne-upravene-drevo",
    "title": "Thermowood, tepelně upravené dřevo | DRAXOR",
    "description": "Co je thermowood z tepelně upravené borovice, jak úprava mění dřevo a kdy ho volíme na terasy a fasády. Přehled z Brna od DRAXOR.",
    "h1": "Thermowood – tepelně upravená borovice do exteriéru",
    "perex": "Thermowood je dřevo upravené vysokou teplotou, ne chemickou impregnací. Úprava ho tmavší v celém průřezu, sníží jeho schopnost přijímat vlhkost a zlepší rozměrovou stálost. U staveb DRAXOR používáme tepelně upravenou borovici na terasy, fasády a další venkovní prvky, kde chcete přírodní materiál s klidnějším chováním.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti tepelně upraveného dřeva"
      },
      {
        "t": "p",
        "text": "Při výrobě se dřevo zahřívá na vysokou teplotu v řízeném prostředí s omezeným přístupem kyslíku, obvykle za přítomnosti vodní páry. Přidávané chemické konzervanty součástí tohoto procesu nejsou. Teplo změní složení dřeva, především méně stálé složky buněčných stěn. Výsledkem je materiál, který přijímá méně vzdušné vlhkosti, méně bobtná a méně sesychá než stejná dřevina bez úpravy."
      },
      {
        "t": "p",
        "text": "U staveb DRAXOR pracujeme s tepelně upravenou borovicí, jednou z nejčastějších dřevin pro tuto úpravu. Barva se mění v celém průřezu, ne jen na povrchu, takže hnědý odstín zůstane i po přebroušení nebo drobném oděru, a typická borovicová kresba i suky zůstanou vidět. Během úpravy se také výrazně sníží obsah pryskyřice, proto dřevo obvykle neuvolňuje smůlu jako neošetřená borovice. Intenzita zabarvení závisí na stupni úpravy: mírnější se hodí spíš do interiéru, intenzivnější do exteriéru, kde záleží víc na odolnosti vůči houbám."
      },
      {
        "t": "p",
        "text": "Tepelná úprava má i druhou stranu. Dřevo je po ní obvykle křehčí a jeho ohybová pevnost je nižší než u neošetřeného materiálu stejného průřezu. Proto thermowood nepoužíváme jako hlavní nosný prvek stavby. Patří na obklad, terasu, pohledové lišty nebo jiné prvky, které nejsou primární konstrukcí domu."
      },
      {
        "t": "p",
        "text": "Na slunci povrch časem stejně jako u jiného dřeva šedne, pokud ho nechráníte olejem s pigmentem. Hnědá barva z úpravy zůstává v hmotě, ale viditelná vrstva bez péče stříbřitě zestárne."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Hlavní výhodou thermowoodu je rozměrová stálost. Prkna se méně kroutí a méně pracují, což oceníte na terase i na fasádě. Lepší odolnost vůči dřevokazným houbám získává dřevo samotnou úpravou, bez tlakové impregnace. Vzhled je klidný a stejnoměrný, barevně sjednocený, a přitom zůstává poznat, že jde o dřevo, ne o imitaci."
      },
      {
        "t": "p",
        "text": "Dá se brousit, olejovat a sladit s ostatním dřevem na stavbě. Na jižní Moravě, kde jsou léta teplá a slunečné fasády hodně pracují, může nižší pohyb dřeva zjednodušit detaily."
      },
      {
        "t": "p",
        "text": "Nevýhody je potřeba brát vážně. Thermowood je křehčí, proto se při nešetrném kotvení, páčení nebo nárazu snáz štípe. Na terase to znamená pečlivé vrtání, správné spoje a rozumnou tloušťku prken. Nehodí se na nosné trámy, krokve ani na skelet dřevostavby. Tmavší povrch na plném slunci víc sálá teplo, podobně jako jiné tmavé materiály. A i když dřevo lépe odolává vlhkosti, pořád potřebuje odvětrání, spád a suchý podklad. Špatně navržená terasa z thermowoodu nevydrží líp než špatně navržená terasa z modřínu."
      },
      {
        "t": "p",
        "text": "Úprava nic nemění na tom, že dřevo je přírodní materiál. Mohou se v něm objevit suky, jemné trhliny nebo rozdíly v kresbě. Kdo hledá úplně pravidelný, téměř bezúdržbový povrch, může být spokojenější s WPC."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "Thermowood dáváme tam, kde má být dřevo venku, na očích a přitom rozměrově klidné."
      },
      {
        "t": "p",
        "text": "Na [terasách](/terasy) je to alternativa k modřínu. Hodí se k rodinnému domu, k chatě i kolem zahradního posezení, hlavně tam, kde klient ocení menší pohyb prken a sjednocenou barvu. Spodní konstrukci, spád a odvětrání řešíme stejně pečlivě jako u dřevěné terasy z neošetřeného dřeva, protože právě ony rozhodují o životnosti."
      },
      {
        "t": "p",
        "text": "Na fasádě [dřevostavby](/drevostavby) nebo [A-frame chaty](/a-frame-chata) může tepelně upravené dřevo nahradit nebo doplnit klasický modřínový obklad. Využijete u něj odvětranou mezeru, přesné kotvení a povrch, který lze nechat zešednout, nebo olejovat do teplejšího odstínu."
      },
      {
        "t": "p",
        "text": "U [altánů](/altany) se thermowood hodí na pohledové obklady, podhledy nebo podlahu pod střechou. Nosnou tesařskou konstrukci necháváme z KVH, BSH, nebo z modřínu, podle návrhu."
      },
      {
        "t": "p",
        "text": "K [bioklimatické pergole](/bioklimaticke-pergoly) se tepelně upravené dřevo hodí na podlahu terasy: hliníková konstrukce je téměř bezúdržbová a prkna z thermowoodu pod ní méně pracují."
      },
      {
        "t": "p",
        "text": "Do interiéru, například na obklad v chatě, se thermowood také použít dá. Na [akustické panely](/akusticke-panely) ale častěji volíme dub, který je tvrdší."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "Thermowood není bezúdržbový, ale péče je srozumitelná. Povrch pravidelně zametejte a podle potřeby umyjte vlažnou vodou. Jednou ročně ho prohlédněte, zkontrolujte spáry, kotvení a místa, kde by mohla stát voda."
      },
      {
        "t": "p",
        "text": "Pokud chcete zachovat hnědý odstín z tepelné úpravy, obnovujte olej s pigmentem podle toho, jak je plocha vystavená slunci. Na jižní a západní straně to bývá častěji. Pokud vám nevadí stříbřitá patina, olejovat nemusíte. I tehdy platí, že čistota, odvětrání a včasná oprava drobného poškození rozhodují víc než nátěr na špatně uloženém prkně."
      },
      {
        "t": "p",
        "text": "Vysokotlakou myčku používejte jen velmi opatrně, nebo raději vůbec zblízka. Tepelně upravené dřevo je křehčí a agresivní proud vody mu může poškodit povrch. Při předání vám ukážeme, jak o konkrétní plochu pečovat."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti modřínu je thermowood obvykle stálější a méně náchylný k velkému pohybu. Modřín zase zůstává neošetřeným přírodním dřevem s typickou kresbou jehličnanu a často i s živějším charakterem. Obě dřeviny v exteriéru šednou, pokud je neolejujete."
      },
      {
        "t": "p",
        "text": "Oproti smrku nebo neošetřené borovici je tepelně upravená borovice do venkovního prostředí odolnější a klidnější. Smrkové hranoly KVH a BSH proto necháváme v konstrukci, thermowood na plášti a pochozích plochách."
      },
      {
        "t": "p",
        "text": "Oproti tlakově impregnovanému dřevu vzniká odolnost thermowoodu tepelnou úpravou, ne vpravením chemických konzervantů do hmoty. Thermowood má sjednocenou hnědou barvu v celém průřezu, zatímco impregnaci často poznáte podle zbarvení jen na povrchu."
      },
      {
        "t": "p",
        "text": "Oproti WPC jde pořád o dřevo. WPC obvykle žádá méně péče o povrch, ale nemá stejný dotek, kresbu ani způsob stárnutí. Výběr mezi thermowoodem a kompozitem je proto často otázkou vkusu a toho, kolik údržby chcete terase věnovat."
      }
    ],
    "faqs": [
      {
        "q": "Je thermowood chemicky ošetřené dřevo?",
        "a": "Ne. Tepelná úprava probíhá vysokou teplotou v řízeném prostředí, bez přidávání chemických konzervantů. Mění se struktura dřeva samotného. Povrchový olej nebo jiná dokončovací vrstva je už samostatná ochrana, kterou volíte podle vzhledu a údržby."
      },
      {
        "q": "Hodí se thermowood na nosnou konstrukci?",
        "a": "Běžně ne. Úprava snižuje ohybovou pevnost a dřevo je křehčí, proto ho nepoužíváme na skelet dřevostavby, krokve ani hlavní trámy. Na ty patří konstrukční hranoly KVH a BSH. Thermowood necháváme na terasy, fasády a pohledové obklady."
      },
      {
        "q": "Šedne thermowood na slunci?",
        "a": "Ano, povrch bez ochrany postupně stříbřitě šedne, podobně jako jiné dřevo. Chcete-li hnědý odstín udržet, je potřeba povrch olejovat."
      },
      {
        "q": "Jak se thermowood liší od obyčejného opáleného dřeva?",
        "a": "Nejde o povrchové opálení hořákem. Thermowood se upravuje v celé tloušťce řízeným zahříváním, proto se mění vlastnosti materiálu, nejen vzhled líce. Opalované obklady, které znáte spíš jako dekorativní techniku, fungují jinak a nelze je s tepelnou úpravou zaměňovat."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Chcete terasu nebo fasádu z thermowoodu?"
      },
      {
        "t": "p",
        "text": "Pokud zvažujete tepelně upravenou borovici na terasu, fasádu nebo altán v Brně nebo na jižní Moravě, rádi s vámi porovnáme thermowood s modřínem i s WPC. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  },
  {
    "slug": "dubove-drevo-v-interieru",
    "title": "Dubové dřevo v interiéru | DRAXOR",
    "description": "Jak pracujeme s dubem v interiéru dřevostaveb a chat a na dřevěných akustických panelech. Vlastnosti, údržba a srovnání z Brna od DRAXOR.",
    "h1": "Dubové dřevo v interiéru, na detaily i akustické panely",
    "perex": "Dub je tvrdé, výrazné a v interiéru osvědčené dřevo. Používáme ho tam, kde má povrch vydržet na dotek i na pohled: na lamely akustických panelů a na atypické interiérové prvky v dřevostavbách a chatách.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti dubu"
      },
      {
        "t": "p",
        "text": "Evropský dub patří k našim nejtvrdším a nejtrvanlivějším listnatým dřevinám. Má výraznou kresbu, od jemných paprsků až po živější fládr, a barvu od světle medové po zlatavě hnědou. Časem v interiéru typicky tmavne a zraje do teplejšího odstínu, zvlášť pokud na něj svítí slunce."
      },
      {
        "t": "p",
        "text": "Jádrové dubové dřevo je husté a vůči dřevokazným organismům přirozeně odolnější než smrk nebo borovice. Právě proto se dub po staletí používal na konstrukce, dveře, schody i nábytek. Zároveň je těžký a při změnách vlhkosti pracuje, takže v interiéru potřebuje dobře vysušený materiál a správně vyřešené spáry i kotvení."
      },
      {
        "t": "p",
        "text": "Charakteristickou vlastností dubu jsou třísloviny. Ve spojení s vodou a železným kovem umí zanechat tmavé skvrny. Proto u dubových prvků volíme vhodné spojovací materiály a povrch nenecháváme zbytečně moknout. V interiéru to při běžném užívání nebývá problém, je ale dobré o tom vědět třeba u květináčů, mokrých hadrů nebo u kovových nohou nábytku na dubovém povrchu."
      },
      {
        "t": "p",
        "text": "Dub se dá kartáčovat, olejovat, mořit i lakovat. Kartáčování zvýrazní kresbu, olej nechá vyniknout přirozený vzhled a lak vytvoří uzavřenější, snáz omyvatelný povrch. Konkrétní úpravu vybíráme podle místnosti, světla a toho, jak má prvek působit."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Výhody dubu jsou zřejmé na první dotek. Je tvrdý, odolný vůči běžnému otěru a působí ušlechtile, aniž by musel být zdobný. V interiéru dřevostavby nebo chaty dokáže vyvážit světlé smrkové trámy a dát prostoru hloubku. Na akustických panelech tvoří pohledovou vrstvu, která je hezká a zároveň dostatečně pevná."
      },
      {
        "t": "p",
        "text": "Dub také dobře stárne. Nejde o materiál, který má vypadat jen první sezonu. Při rozumné péči si zachovává charakter desítky let a drobné známky užívání k němu patří spíš jako patina než jako poškození."
      },
      {
        "t": "p",
        "text": "Nevýhody souvisejí s tou samou hutností. Dub je těžší a hůř se opracovává než smrk. Je nákladnější, proto ho obvykle nedáváme na velké konstrukční celky, ale na místa, kde se jeho vlastnosti opravdu využijí. V nevhodném prostředí může praskat nebo se kroutit, hlavně pokud je dřevo špatně vysušené nebo pokud v místnosti výrazně kolísá vlhkost. Třísloviny mohou zabarvit okolní materiály, pokud se k dubu dostane voda a kov."
      },
      {
        "t": "p",
        "text": "Do exteriéru se jádrový dub použít dá, ale na terasy a fasády ho jako první volbu nedáváme. Je těžký, nákladný a třísloviny v dešti víc pracují. Venkovní plochy obvykle řešíme modřínem, thermowoodem nebo WPC."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "Nejčastěji se s dubem setkáte u našich [dřevěných akustických panelů](/akusticke-panely). Pohledovou vrstvu tvoří dřevěné lamely a dub je typická volba právě proto, že je tvrdý, má krásnou kresbu a v obývacím pokoji, pracovně nebo ložnici působí přirozeně. Dřevinu, povrch i odstín ale vždy vybíráme podle interiéru a světla v místnosti. Panely řeší dozvuk a ozvěnu uvnitř prostoru, ne hluk od sousedů."
      },
      {
        "t": "p",
        "text": "V [dřevostavbách](/drevostavby), [A-frame chatách](/a-frame-chata) i ve [srubech](/srub) používáme dub na interiérové detaily, které mají být na dotek odolnější nebo výraznější než konstrukční smrk: například na obklady, atypické prvky, ostění nebo jiné pohledové plochy podle projektu. Nosná konstrukce zůstává ze smrkových hranolů KVH a BSH, u srubu z kulatiny. Dub je v tomto spojení spíš šperk než kostra stavby."
      },
      {
        "t": "p",
        "text": "U [altánů](/altany) a venkovních staveb dub běžně jako hlavní materiál nepoužíváme. Pokud má altán navazovat na interiér domu a klient chce dubový prvek třeba na desce stolu nebo na jiném detailu pod střechou, posoudíme to individuálně."
      },
      {
        "t": "p",
        "text": "Na [terasách](/terasy) dáváme přednost jiným materiálům. Dub by venku zvládl hodně, ale na pochozí plochy v zahradě je praktičtější modřín, thermowood nebo WPC kompozit."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "V interiéru je péče o dub jednoduchá. Povrch stačí oprášit, případně vytřít mírně vlhkým, dobře vyždímaným hadříkem a hned osušit. Na olejovaný dub nepatří agresivní čisticí prostředky ani přemíra vody. Pokud je povrch naolejovaný, občas ho podle zátěže obnovíte olejem; lakovaný povrch se spíš jen čistí a opravuje v místě poškození."
      },
      {
        "t": "p",
        "text": "U akustických panelů obvykle stačí občasné opatrné očištění nebo vysátí s měkkým kartáčovým nástavcem. Při předání vám vysvětlíme, jak pečovat o konkrétní povrch."
      },
      {
        "t": "p",
        "text": "Dejte pozor na dlouhodobě postavené vlhké předměty, květináče bez podmisky a na běžný železný kov v kombinaci s vodou. Tmavé skvrny od tříslovin se odstraňují hůř než běžná špína. Přímému sálavému teplu, například od krbu, by dubový prvek také neměl být vystavený zbytečně zblízka, aby nevysychal nerovnoměrně."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti smrku je dub výrazně tvrdší, těžší a v interiéru odolnější vůči otěru. Smrk necháváme v konstrukci a u přiznaných trámů, dub na plochy, které chcete mít hezké zblízka a odolné při užívání."
      },
      {
        "t": "p",
        "text": "Oproti modřínu má dub v interiéru ušlechtilejší, listnatou kresbu a vyšší tvrdost. Modřín je naopak praktičtější venku na fasádě a terase."
      },
      {
        "t": "p",
        "text": "Oproti thermowoodu jde u dubu o neošetřené, jen vysušené a povrchově dokončené dřevo. Thermowood má smysl hlavně v exteriéru, kde chcete nižší pohyb prken. V obývacím pokoji nebo na akustických panelech dáváme přednost dubu."
      },
      {
        "t": "p",
        "text": "Oproti lakovaným deskám nebo imitacím dřeva nabízí dub živou kresbu a možnost povrch časem obnovit. Vyžaduje ale respekt k materiálu: není to plast, který přetrpí všechno."
      }
    ],
    "faqs": [
      {
        "q": "Z jakého dřeva jsou akustické panely?",
        "a": "Pohledovou vrstvu tvoří dřevěné lamely a jednou z nabízených dřevin je právě dub. Povrch, odstín i kresbu vybereme podle interiéru. Panely zlepšují akustiku v místnosti, tedy zkracují dozvuk, a zároveň působí jako dřevěný obklad."
      },
      {
        "q": "Hodí se dub i ven?",
        "a": "Jádrový dub je přirozeně odolný a v exteriéru se historicky používal. Na terasy a fasády ho ale jako běžnou první volbu nedáváme: je těžký, nákladný a v dešti z něj mohou třísloviny víc vystupovat. Venkovní plochy obvykle řešíme jinými materiály."
      },
      {
        "q": "Pracujete s evropským, nebo s jiným dubem?",
        "a": "V interiéru počítáme především s evropským dubem, který má známé vlastnosti, typickou kresbu a hodí se k našim stavbám. Jinou dřevinu nebo konkrétní vzhled můžeme navrhnout podle projektu, vždy ale tak, aby materiál odpovídal použití."
      },
      {
        "q": "Jak se o dubový povrch starat?",
        "a": "Stačí ho pravidelně oprášit a otřít mírně vlhkým hadříkem, bez agresivní chemie a bez mokrého mytí. Olejovaný povrch občas obnovíte olejem, lakovaný spíš jen čistíte. U akustických panelů stačí šetrné vysátí nebo očištění. Přesný postup vám ukážeme při předání."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Chcete dub v interiéru nebo na panelech?"
      },
      {
        "t": "p",
        "text": "Pokud plánujete akustické panely, dřevostavbu nebo chatu a chcete v interiéru dub, rádi vám navrhneme, kde se uplatní nejlépe. Sídlíme v Brně a pracujeme hlavně na jižní Moravě. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  },
  {
    "slug": "hlinik-u-bioklimatickych-pergol",
    "title": "Hliník u bioklimatických pergol | DRAXOR",
    "description": "Proč u bioklimatických pergol používáme hliník, jaké má vlastnosti, výhody i limity a jak se o pergolu starat. Přehled z Brna od DRAXOR.",
    "h1": "Hliník u bioklimatických pergol – odolnost a minimální údržba",
    "perex": "Bioklimatická pergola má střechu z natáčecích lamel, které umí pustit světlo, vytvořit stín i uzavřít prostor při dešti. Konstrukci i lamely stavíme z hliníku, protože je lehký, odolný vůči počasí a nepotřebuje nátěry jako dřevo.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti hliníku v pergole"
      },
      {
        "t": "p",
        "text": "Hliník je lehký kov s přirozenou odolností vůči korozi. Na vzduchu se pokryje tenkou oxidační vrstvou, která povrch chrání. U pergol se k tomu přidává povrchová úprava, nejčastěji práškové lakování, díky které lze zvolit barevný odstín a lépe odolat slunci, dešti i mrazu. Barvu i provedení navrhujeme tak, aby pergola ladila s domem, terasou nebo fasádou."
      },
      {
        "t": "p",
        "text": "Na rozdíl od dřeva hliník téměř nemění rozměry vlivem vlhkosti a nepraská. Má ale tepelnou roztažnost: v horkém dni se kov o něco málo natáhne a v noci zase stáhne. Dobře navržená pergola s tím počítá ve spojích i v uložení lamel. Právě proto nepřenášíme na hliníkovou konstrukci postupy, které fungují u dřevěného krovu."
      },
      {
        "t": "p",
        "text": "Bioklimatická střecha využívá tvarové přesnosti hliníkových profilů. Lamely se otáčejí tak, aby pod pergolu proudil vzduch a světlo, nebo naopak vytvořily stín. Po zavření odvádějí dešťovou vodu mimo pobytovou plochu. Odvod vody řešíme u každé pergoly podle místa, kde bude stát. Výbavu, ovládání, barvu i boční stínění domlouváme individuálně."
      },
      {
        "t": "p",
        "text": "Hliník je také dostatečně tuhý na to, aby z něj šla postavit štíhlá konstrukce s čistými liniemi. To se hodí u moderních domů, dřevostaveb i chat, kde má pergola působit lehce a přitom chránit terasu po většinu roku."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Největší výhodou hliníkové bioklimatické pergoly je spojení odolnosti a malé údržby. Konstrukce nepotřebuje každoroční nátěr, nesešedne jako dřevo a dobře snáší slunce, déšť i mráz. Lamely dávají kontrolu nad stínem a větráním, kterou plátěná markýza ani pevná střecha stejným způsobem nenabídnou. Po zavření vás pergola ochrání i před přeháňkou, takže terasa slouží od jara do pozdního podzimu."
      },
      {
        "t": "p",
        "text": "Další výhodou je vzhled a přizpůsobitelnost. Hliník lze lakovat do odstínu, který sedí k oknům nebo fasádě. Pergola může stát samostatně, nebo navazovat na dům. A protože pracujeme se dřevem i kovem, umíme ji sladit s dřevěnou terasou, altánem i dřevostavbou."
      },
      {
        "t": "p",
        "text": "Nevýhody je fér zmínit. Hliník nemá teplo a kresbu dřeva; kdo chce výhradně tesařskou konstrukci, bude spokojenější s [dřevěným altánem](/altany). Tmavě lakovaný povrch se na přímém slunci může zahřát na dotek, podobně jako jiné tmavé kovy a obklady. Při dešti nebo v chladném počasí se na kovu někdy sráží vlhkost. Povrchová úprava je odolná, ale není nezničitelná: oděr od žebříku, odhozeného nářadí nebo agresivního čištění může lak poškodit a oprava už není tak jednoduchá jako přetření dřevěného trámu."
      },
      {
        "t": "p",
        "text": "Hliníková pergola také není „jednou postavit a už nikdy se o nic nestarat“. Lamely a odtoky je potřeba občas zkontrolovat, hlavně na podzim, kdy je zanáší listí. Konstrukci navrhujeme podle konkrétního místa, rozměrů a podmínek, včetně větru a sněhu."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "Hliník u nás patří především k [bioklimatickým pergolám](/bioklimaticke-pergoly). Navrhujeme a montujeme je k rodinným domům, k [dřevostavbám](/drevostavby), k [A-frame chatám](/a-frame-chata) i ke [srubům](/srub), všude tam, kde má terasa nebo zahrada sloužit jako další obývací pokoj."
      },
      {
        "t": "p",
        "text": "Nejvíc dává pergola smysl na terasách orientovaných na jih a západ, kde je v létě bez stínu těžké vydržet. Hodí se k bazénu, ke kryté venkovní jídelně i k posezení u chaty. Často ji spojujeme s [dřevěnou terasou](/terasy): dole přírodní podlaha, nad ní hliníková střecha, kterou ovládáte podle počasí. Pokud je stávající terasa dostatečně únosná, lze pergolu kotvit do ní; jinak navrhneme patky nebo jiný pevný podklad."
      },
      {
        "t": "p",
        "text": "Pergola může doplnit i [dřevěný altán](/altany), ale každý z těchto prvků umí něco jiného. Altán je tesařská stavba, obvykle s pevnou střechou. Bioklimatická pergola je o stínu, větrání a proměnlivé střeše z lamel. Při konzultaci s vámi vybereme, co se k vaší zahradě hodí."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "Hliníková konstrukce nepotřebuje nátěry. Základní péče spočívá v občasném opláchnutí rámu a lamel vodou a v kontrole, že odtok vody není ucpaný listím, pylem nebo usazeninami. Na jižní Moravě to bývá nejdůležitější na podzim a po bouřkách."
      },
      {
        "t": "p",
        "text": "K čištění stačí voda a šetrný prostředek, bez abrazivních houbek a agresivní chemie, které by mohly poškodit lak. Sníh a led z lamel neshazujte násilím. Jednou za čas zkontrolujte kotvení a pohyblivé části. Při předání vám ukážeme, na co se u konkrétní pergoly dívat."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti dřevěné pergole nebo altánu je hliník výrazně méně náročný na údržbu a rozměrově stálý. Dřevo zase nabízí teplo materiálu a tesařský charakter, který k chatě nebo zahradě může patřit víc. Proto dřevo neopouštíme: používáme ho na terasy, altány a stavby, hliník tam, kde má smysl bioklimatická střecha."
      },
      {
        "t": "p",
        "text": "Oproti markýze nebo plátěné plachtě má hliníková lamelová střecha tu výhodu, že po zavření chrání i před deštěm a zároveň umožňuje větrat."
      },
      {
        "t": "p",
        "text": "Oproti pevné střeše z plechu, skla nebo polykarbonátu dává bioklimatická pergola víc možností během dne: otevřete lamely a máte světlo i průvan, zavřete je a máte stín nebo ochranu před deštěm. Pevná střecha je jednoduchá, ale světlo a větrání pod ní už tak dobře neřídíte."
      },
      {
        "t": "p",
        "text": "Oproti oceli je hliník lehčí a v běžném venkovním prostředí odolnější vůči korozi. Proto je u tohoto typu pergol obvyklou a praktickou volbou."
      }
    ],
    "faqs": [
      {
        "q": "Proč u bioklimatické pergoly zrovna hliník, ne dřevo?",
        "a": "Natáčecí lamely, odvod vody a přesné spoje potřebují stálý, tvarově přesný materiál, který venku nepracuje jako dřevo. Hliník to splňuje a zároveň nepotřebuje nátěry. Dřevo používáme tam, kde má jinou roli: na terase pod pergolou, na altánu nebo na stavbě, ke které pergola patří."
      },
      {
        "q": "Potřebuje hliníková pergola nátěry?",
        "a": "Ne. Povrch je obvykle lakovaný už z výroby a pravidelné natírání odpadá. Stačí občas opláchnout konstrukci a hlídat, aby odtoky nebyly ucpané. Poškozený lak je lepší řešit včas, ne ho přetírat běžnou venkovní barvou naslepo."
      },
      {
        "q": "Vydrží pergola déšť, sníh a vítr?",
        "a": "Při zavřených lamelách pergola chrání před deštěm a vodu odvádí mimo plochu. Odolnost vůči větru a sněhu ale závisí na rozměrech, umístění a návrhu konkrétní konstrukce. Navrhujeme ji individuálně podle místa a projektu a podrobnosti s vámi probereme při konzultaci."
      },
      {
        "q": "Zahřívá se hliník v létě?",
        "a": "Na přímém slunci, zvlášť v tmavém odstínu, může být povrch na dotek teplý. Právě natáčecí lamely ale pomáhají řídit stín a proudění vzduchu pod pergolou, takže pobytová plocha nemusí být rozpálená jako terasa bez střechy. Při návrhu můžeme pracovat i se světlejším odstínem, pokud je to pro vás důležité."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Chcete bioklimatickou pergolu k domu nebo k chatě?"
      },
      {
        "t": "p",
        "text": "Pošlete nám fotku terasy nebo místa, kam pergolu chcete, a připravíme vám vizualizaci na míru. Montujeme v Brně a po celém Jihomoravském kraji, jinde po domluvě. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  },
  {
    "slug": "wpc-kompozit-na-terasy",
    "title": "WPC kompozit na terasy | DRAXOR",
    "description": "Co je WPC kompozit na terasy, jaké má výhody i limity oproti dřevu a kdy ho dává smysl zvolit. Praktický přehled z Brna od DRAXOR.",
    "h1": "WPC kompozit na terasy – alternativa k dřevu",
    "perex": "WPC je kompozit ze dřevní složky a plastu, ze kterého se vyrábějí terasová prkna se stálým tvarem a menšími nároky na údržbu než u dřeva. Nabízíme ho jako jednu z možností pro terasy k domu, chatě i pergole, vždy s pečlivou spodní konstrukcí a otevřeným srovnáním s dřevěnou alternativou.",
    "date": "2026-11-18",
    "lead": [
      {
        "t": "h2",
        "text": "Vlastnosti WPC"
      },
      {
        "t": "p",
        "text": "Zkratka WPC označuje dřevoplastový kompozit: směs dřevních vláken nebo moučky, plastu a přísad, které ovlivňují barvu, odolnost vůči UV záření a zpracování. Z této směsi se lisují prkna, často s drážkami pro skryté kotvení a s povrchem, který má připomínat kresbu dřeva. Některé typy mají ještě ochrannou nášlapnou vrstvu, jiné jsou kompozitem v celém průřezu. Prkna mohou být dutá, nebo plná. Rozdíly mezi jednotlivými výrobky jsou velké, proto materiál nevybíráme jen podle toho, že je „WPC“, ale podle konkrétního typu, použití a místa."
      },
      {
        "t": "p",
        "text": "WPC nenasákává vodu jako neošetřené dřevo a není potravou pro dřevokazné houby a hmyz stejným způsobem jako masiv. Barva je daná už z výroby a nešedne do stříbřité patiny jako modřín. Na slunci ale může postupně zesvětlat nebo ztratit sytost, zvlášť u slabších výrobků. Materiál také mění délku s teplotou, proto patří k základu montáže správné dilatační spáry a volný pohyb konců prken."
      },
      {
        "t": "p",
        "text": "Kompozit nemá typické třísky masivního dřeva a povrch bývá pravidelnější. Není to ale dřevo: na dotek i na pohled ho většina lidí od masivu odliší. Kdo chce kresbu a stárnutí opravdového dřeva, bude spokojenější s modřínem nebo thermowoodem."
      },
      {
        "t": "p",
        "text": "Důležité je i to, co pod prkny není vidět. WPC samo o sobě terasu neunese. Potřebuje rovnou, únosnou a odvětranou spodní konstrukci, spád a odtok vody, stejně jako dřevěná terasa. Podklad může být z impregnovaného dřeva, z kompozitních nosníků, nebo z hliníkových profilů, podle situace. Špatný rošt pokazí i dobrá prkna."
      },
      {
        "t": "h2",
        "text": "Výhody a nevýhody"
      },
      {
        "t": "p",
        "text": "Hlavní výhodou WPC je nižší nárok na péči o povrch. Odpadá každoroční olejování, kterým se u dřeva udržuje barva. Prkna se pravidelně zametají a myjí, povrch je barevně sjednocený už od položení a kompozit se méně kroutí vlivem vlhkosti. Pro někoho, kdo nechce terasu ošetřovat jako dřevěnou podlahu, to může být rozhodující."
      },
      {
        "t": "p",
        "text": "WPC je praktické i v denním provozu: nemá typické třísky a prkna lze často kotvit skrytě. K [bioklimatické pergole](/bioklimaticke-pergoly) se hodí tam, kde má být venkovní zázemí co nejméně náročné na údržbu."
      },
      {
        "t": "p",
        "text": "Nevýhody vycházejí ze stejných vlastností. Na ostrém slunci, typickém i pro jižní Moravu, umí být tmavé WPC na dotek výrazně teplé, někdy teplejší než světlé dřevo. Za mokra může být povrch kluzký, záleží na rytině a znečištění. Prkna se dají poškrábat a oprava jednoho kusu není vždy tak jednoduchá jako přebroušení dřevěného prkna. Kvalita na trhu hodně kolísá: slabší desky mohou víc blednout, drhnout, vrzat, nebo špatně snášet teplo. Dutá prkna potřebují správně zakončit a nesmí v nich zbytečně držet voda."
      },
      {
        "t": "p",
        "text": "WPC také není bezúdržbové v tom smyslu, že byste se o terasu nemuseli starat vůbec. Listí, pyl, mastnota z grilu i prach ve spárách na ní zůstanou, pokud je neuklidíte. Je to jiný materiál, ne imitace k nerozeznání od masivu."
      },
      {
        "t": "h2",
        "text": "Kde ho používáme u staveb DRAXOR"
      },
      {
        "t": "p",
        "text": "WPC používáme na [terasy](/terasy) k rodinným domům, k [dřevostavbám](/drevostavby), k [A-frame chatám](/a-frame-chata) i ke [srubům](/srub), stejně jako k [bioklimatickým pergolám](/bioklimaticke-pergoly) a [altánům](/altany). Hodí se k novostavbě i ke staršímu domu, na posezení u zahrady nebo k bazénu, pokud je podklad správně připravený."
      },
      {
        "t": "p",
        "text": "Na [terasách](/terasy) nabízíme dřevěnou i kompozitovou variantu. Dřevo, typicky modřín, k našim stavbám přirozeně patří. WPC je možnost vedle něj: hodí se, když chcete méně olejování, pravidelnější vzhled, nebo když místo dřevu zrovna nesvědčí. Obě cesty s vámi porovnáme."
      },
      {
        "t": "p",
        "text": "U dřevostaveb a chat dáváme pozor i na soulad s fasádou. Kompozitová terasa může k modřínovému obkladu sedět, ale nemusí. Tyto detaily řešíme ve vizualizaci ještě před stavbou."
      },
      {
        "t": "h2",
        "text": "Údržba"
      },
      {
        "t": "p",
        "text": "Základní údržba WPC terasy je jednoduchá: pravidelně ji zametejte, zbavujte spáry listí a nečistot a podle potřeby ji umyjte vodou, případně šetrným prostředkem doporučeným pro kompozit. Mastné skvrny je lepší řešit co nejdřív. Jednou za čas zkontrolujte, že pod terasou může proudit vzduch, že voda má kam odtéct a že spoje i dilatační mezery zůstaly volné."
      },
      {
        "t": "p",
        "text": "Vyhněte se ostrým kovovým škrabkám a agresivní chemii, která by mohla poškodit povrch. Vysokotlakou myčku, pokud ji vůbec použijete, držte v rozumné vzdálenosti. Pod květináče, gril i nábytek patří podložky, aby se povrch netlačil a nestála pod nimi voda."
      },
      {
        "t": "p",
        "text": "Olejování, jaké znáte z dřevěné terasy, u WPC obvykle není potřeba a u některých povrchů není ani vhodné. Při předání vám řekneme, jak pečovat o konkrétní typ prken."
      },
      {
        "t": "h2",
        "text": "Srovnání s alternativami"
      },
      {
        "t": "p",
        "text": "Oproti modřínu nabízí WPC méně práce s olejem a pravidelnější vzhled. Modřín na oplátku dává přírodní kresbu, vůni a možnost nechat dřevo zestárnout do šedé patiny, nebo ho olejováním udržet medové. K dřevostavbě a srubu často vizuálně padne víc právě dřevo."
      },
      {
        "t": "p",
        "text": "Oproti thermowoodu je WPC ještě vzdálenější masivnímu dřevu a obvykle žádá méně péče o povrch. Thermowood zůstává dřevem: hezky vypadá, ale na slunci šedne a ocení olej, pokud chcete držet hnědý odstín. Je to kompromis mezi přírodním materiálem a klidnějším chováním."
      },
      {
        "t": "p",
        "text": "Oproti smrku je WPC do exteriéru na pochozí plochu jednoznačně vhodnější. Smrk patří do konstrukce, ne na nášlap terasy bez výrazné ochrany."
      },
      {
        "t": "p",
        "text": "Oproti kameni nebo keramické dlažbě je WPC měkčí na dotek a příjemnější na boso, ale jinak se chová v teple a potřebuje jiný podklad. Výběr záleží na domě i na tom, kam má plocha navazovat."
      }
    ],
    "faqs": [
      {
        "q": "Je WPC terasa úplně bezúdržbová?",
        "a": "Ne úplně. Odpadá typické olejování dřeva, ale terasu je potřeba zametat, mýt a kontrolovat odvětrání, odtok vody i spoje. Bezúdržbová v doslovném smyslu není žádná venkovní podlaha."
      },
      {
        "q": "Je lepší WPC, nebo dřevěná terasa?",
        "a": "Záleží na tom, co od terasy chcete. Dřevo, typicky modřín nebo thermowood, vynikne kresbou a přirozeným stárnutím, žádá ale péči o povrch. WPC je pravidelnější a méně náročné na olejování, zato to není masiv. Rádi vám obě cesty ukážeme a doporučíme podle místa i vzhledu domu."
      },
      {
        "q": "Zahřívá se WPC na slunci?",
        "a": "Ano, zvlášť tmavé odstíny umí být na přímém slunci na dotek teplé. Na jižně a západně orientovaných terasách to řešíme výběrem světlejšího dekoru, stíněním, například bioklimatickou pergolou, a tím, že klientovi tuto vlastnost řekneme předem."
      },
      {
        "q": "Na čem WPC terasa stojí?",
        "a": "Na stabilní, odvětrané spodní konstrukci se spádem, stejně jako terasa dřevěná. Rošt navrhujeme podle podkladu a zatížení. Důležité je, aby pod prkny mohl proudit vzduch a voda měla kam odtéct. Konkrétní řešení doporučíme po prohlídce místa."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Chcete porovnat WPC a dřevěnou terasu?"
      },
      {
        "t": "p",
        "text": "Pokud plánujete terasu v Brně nebo na jižní Moravě, rádi s vámi porovnáme WPC, modřín i thermowood a navrhneme skladbu včetně spodní konstrukce. Zavolejte na **+420 732 527 871** nebo vyplňte [poptávkový formulář](/#poptavka)."
      }
    ]
  }
];

function articleText(article: Article): string {
  const chunks = [article.perex];
  for (const block of [...article.lead, ...article.closing]) {
    if (block.t === "p" || block.t === "h2") chunks.push(block.text);
    else chunks.push(...block.items);
  }
  for (const faq of article.faqs) chunks.push(faq.q, faq.a);
  return chunks.join("\n");
}

/** Články, které odkazují na danou produktovou stránku. */
export function articlesForProduct(path: string): Article[] {
  const needle = `](${path})`;
  return articles.filter((article) => articleText(article).includes(needle));
}
