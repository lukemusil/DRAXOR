/** Texty produktových stránek. Zdroj je content/drafts/, do webu se složka neservíruje. */
export type CopyBlock =
  | { t: "h2"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] };

export type ProductCopy = {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: CopyBlock[];
  faqs: { q: string; a: string }[];
  closing: CopyBlock[];
};

export const productCopy: ProductCopy[] = [
  {
    "path": "/a-frame-chata",
    "title": "A-frame chata na klíč 50 m² | Brno a jižní Morava | DRAXOR",
    "description": "Designová A-frame chata Alpin (~50 m²) na klíč z Brna. Štítové prosklení, obytné podkroví a masivní trámy. Stavíme po celé jižní Moravě.",
    "h1": "A-frame chata na klíč Alpin – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "A-frame chatu poznáte na první pohled: strmá sedlová střecha sahající téměř k zemi, prosklený štít a vzdušný interiér pod přiznanými trámy. S modelem Alpin stavíme A-frame chatu na klíč v Brně a po celém Jihomoravském kraji. Chceme, aby vaše chata byla krásná z dálky i zblízka, v každém spoji a v každém detailu."
      },
      {
        "t": "h2",
        "text": "Co nabízí A-frame chata Alpin"
      },
      {
        "t": "p",
        "text": "Alpin je ikonická architektura na kompaktní ploše kolem 50 m². Do malého půdorysu jsme vtěsnali všechno, co dělá z chaty místo, kam se chcete vracet:"
      },
      {
        "t": "ul",
        "items": [
          "**Štítové prosklení**, které do interiéru pustí světlo a z obýváku udělá vyhlídku do krajiny.",
          "**Obytné podkroví** pod vrcholem střechy, ideální na spaní nebo klidnou pracovnu.",
          "**Masivní dřevěné trámy** přiznané v interiéru, které dávají prostoru charakter.",
          "**Terasu**, kde začíná ranní káva i večery venku."
        ]
      },
      {
        "t": "p",
        "text": "Alpin se hodí jako rekreační chata na vlastním pozemku, jako zázemí pro moderní glamping i jako stylové ubytování k pronájmu. Dispozici, velikost terasy i vybavení navrhujeme individuálně podle vašich představ, ať chcete víc ložnic, větší kuchyň, nebo prostornou koupelnu."
      },
      {
        "t": "h2",
        "text": "Design a řemeslo na prvním místě"
      },
      {
        "t": "p",
        "text": "Dobrá chata není jen střecha nad hlavou. Má mít správné proporce, poctivé materiály a čisté detaily, které vydrží. Proto ke každé A-frame chatě připravujeme individuální 3D návrh podle vašich představ a konkrétního pozemku. Ještě před stavbou tak přesně uvidíte, jak bude chata vypadat, kam bude mířit prosklený štít a jak se usadí do terénu."
      },
      {
        "t": "p",
        "text": "Kombinujeme moderní technologie CNC s tradičními tesařskými a truhlářskými postupy. Díky tomu sedí spoje přesně a dřevo vynikne tak, jak má."
      },
      {
        "t": "h2",
        "text": "Materiály, které stojí za to"
      },
      {
        "t": "p",
        "text": "Stavíme z kvalitního severského dřeva: borovice, modřínu a severského smrku. Fasádní palubky a trámy můžeme kartáčovat a ošetřit přírodními oleji, aby vynikla přirozená 3D textura a kresba dřeva. Stejnou péči věnujeme i vrstvám, které po dokončení nejsou vidět: izolaci, membránám a jejich pečlivému přelepení. Právě tam se rozhoduje o tom, jak se v chatě bude žít za deset let. Skladbu stěn a střechy i typ krytiny volíme podle projektu a toho, jak budete chatu využívat."
      },
      {
        "t": "h2",
        "text": "Jak probíhá stavba A-frame chaty"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace:** probereme vaše představy, pozemek a to, jak chcete chatu využívat.",
          "**Vizualizace a návrh:** připravíme 3D návrh Alpinu upravený na míru.",
          "**Příprava a výroba:** díky prefabrikaci připravíme velkou část konstrukce předem. Co se týče projektové dokumentace a úřadů, domluvíme se, jak vám s nimi můžeme pomoct.",
          "**Stavba a předání:** sehraný tým postaví chatu a předá vám ji. Co přesně bude dodávka „na klíč“ zahrnovat, od základů po interiér, domluvíme individuálně podle vašeho projektu."
        ]
      },
      {
        "t": "h2",
        "text": "Kde stavíme"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a A-frame chaty stavíme hlavně v Brně a v celém Jihomoravském kraji: v okolí Brna, na Blanensku, Vyškovsku, Znojemsku, Břeclavsku i Hodonínsku. Jinde stavíme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Potřebuji na A-frame chatu stavební povolení?",
        "a": "Záleží na velikosti chaty, na tom, jak ji budete využívat, a na pravidlech pro váš pozemek (územní plán, ochranná pásma, chráněná území). Některé menší stavby stačí projednat jednodušším postupem, u jiných je potřeba povolení stavebního úřadu. Doporučujeme vždy začít konzultací. Rádi s vámi projdeme, co bude pro váš pozemek potřeba, a ověříme to s projektantem nebo stavebním úřadem."
      },
      {
        "q": "Na jakých základech chata stojí?",
        "a": "Chatu lze postavit na betonových patkách, zemních vrutech nebo základové desce. Volba závisí na terénu, podloží a velikosti stavby. Vhodné řešení doporučíme po prohlídce pozemku. Jak základy zajistíme, domluvíme podle projektu."
      },
      {
        "q": "Dá se v A-frame chatě bydlet celoročně?",
        "a": "To záleží na projektu. Podle toho, jestli chcete chatu na víkendy, nebo i na zimu, navrhneme izolaci, skladbu konstrukce a vytápění. Řekněte nám, jak chatu chcete využívat, a připravíme řešení na míru."
      },
      {
        "q": "Jak dlouho stavba trvá?",
        "a": "Doba stavby se odvíjí od projektu, velikosti a rozsahu dodávky. Díky prefabrikaci připravujeme velkou část konstrukce předem, takže práce na pozemku jde rychle. Konkrétní harmonogram s vámi probereme při konzultaci."
      },
      {
        "q": "Jakou údržbu dřevo potřebuje?",
        "a": "Dřevo na fasádě a terase je vystavené slunci a dešti. Doporučujeme jednou ročně zkontrolovat povrch a podle potřeby obnovit nátěr olejem nebo lazurou. Při předání vám vysvětlíme, jak o konkrétní povrch pečovat."
      },
      {
        "q": "Můžu si Alpin upravit podle sebe?",
        "a": "Ano. Alpin je výchozí model, který upravíme podle vašich představ i pozemku. Každá změna se nejdřív ukáže ve 3D návrhu, takže víte, do čeho jdete."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Pošlete nám pár slov o svém pozemku a o tom, jak si chatu představujete. Připravíme vám vizualizaci A-frame chaty Alpin na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  },
  {
    "path": "/srub",
    "title": "Srub na klíč Harmonie 50 m² | Brno a jižní Morava | DRAXOR",
    "description": "Moderní srub Harmonie (~50 m²) na klíč ze severské kulatiny. Panoramatické prosklení, krb a krytá terasa. Stavíme v Brně a na jižní Moravě.",
    "h1": "Moderní srub na klíč Harmonie – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "Srub je stavba, která voní dřevem, ještě než otevřete dveře. S modelem Harmonie spojujeme poctivou tradici srubů s moderní architekturou: masivní kulatinu, velká okna do krajiny a čisté, nadčasové tvary. Srub na klíč stavíme v Brně a po celém Jihomoravském kraji."
      },
      {
        "t": "h2",
        "text": "Srub Harmonie v kostce"
      },
      {
        "t": "p",
        "text": "Harmonie je kompaktní luxusní srub o výměře kolem 50 m². Na malé ploše nabízí všechno, co od srubu čekáte, a k tomu kus moderního komfortu:"
      },
      {
        "t": "ul",
        "items": [
          "**Severská kulatina**: poctivé masivní dřevo, které dává srubu typický vzhled i příjemné vnitřní klima.",
          "**Panoramatické prosklení**, které propojí interiér s krajinou kolem.",
          "**Krb** jako srdce obytného prostoru pro chladné večery.",
          "**Krytá vyhlídková terasa**, na které se dá sedět i za deště."
        ]
      },
      {
        "t": "p",
        "text": "Srub Harmonie je skvělý jako rekreační chata, víkendové útočiště i stylové ubytování pro hosty. Dispozici i vybavení navrhneme individuálně podle vašich představ."
      },
      {
        "t": "h2",
        "text": "Moderní srub, ne kulisa z pohádky"
      },
      {
        "t": "p",
        "text": "Srub nemusí vypadat jako z westernu. Harmonie ukazuje, že masivní dřevo může působit elegantně a současně. Klademe důraz na proporce, na to, jak srub sedí na pozemku, a na detaily, které poznáte až při bližším pohledu: přesné spoje, čisté napojení oken a pečlivě opracované povrchy."
      },
      {
        "t": "p",
        "text": "Ke každému srubu připravíme individuální 3D návrh podle vašich představ a pozemku. Moderní technologie CNC kombinujeme s tradičními tesařskými postupy, takže kulatina do sebe zapadá přesně."
      },
      {
        "t": "p",
        "text": "Srub Harmonie si také můžete upravit: změnit dispozici, velikost terasy nebo umístění oken tak, aby výhled mířil přesně tam, kam chcete. Každou úpravu nejdřív uvidíte ve vizualizaci."
      },
      {
        "t": "h2",
        "text": "Dřevo, které vybíráme pečlivě"
      },
      {
        "t": "p",
        "text": "Pracujeme s kvalitním severským dřevem. Každý kus suroviny vybíráme podle trvanlivosti, konstrukční pevnosti a vzhledu. Povrchy ošetřujeme přírodními oleji, aby vynikla kresba dřeva. Dřevinu, průměr kulatiny i krytinu volíme podle projektu a vašich představ."
      },
      {
        "t": "h2",
        "text": "Jak stavba srubu probíhá"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace:** probereme, jak chcete srub využívat a jaký máte pozemek.",
          "**3D návrh:** srub Harmonie upravíme na míru a ukážeme vám ho ve vizualizaci.",
          "**Příprava:** díky prefabrikaci připravíme konstrukci předem. Jak vám pomůžeme s projektovou dokumentací a úřady, domluvíme individuálně.",
          "**Stavba a předání:** sehraný tým postaví srub a předá vám ho. Rozsah dodávky „na klíč“ domluvíme podle vašeho projektu."
        ]
      },
      {
        "t": "h2",
        "text": "Kde stavíme sruby"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a sruby stavíme hlavně v Brně a v celém Jihomoravském kraji: v okolí Brna, na Blanensku, Vyškovsku, Znojemsku, Břeclavsku i Hodonínsku. Jinde stavíme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Potřebuji na srub stavební povolení?",
        "a": "To záleží na velikosti srubu, na jeho účelu (rekreace, nebo bydlení) a na pravidlech pro váš pozemek, jako je územní plán nebo ochranná pásma. Některé stavby lze projednat jednodušším postupem, jiné vyžadují povolení. Doporučujeme začít konzultací. Projdeme s vámi, co bude potřeba, a ověříme to s projektantem nebo stavebním úřadem."
      },
      {
        "q": "Sesedá srub z kulatiny?",
        "a": "Masivní dřevo po stavbě ještě dosychá, a proto srub v prvních letech mírně sesedá. Konstrukce s tím musí počítat od začátku, hlavně u oken, dveří a sloupů. Konkrétní řešení navrhujeme u každého srubu podle projektu a rádi vám ho vysvětlíme při konzultaci."
      },
      {
        "q": "Na jakých základech srub stojí?",
        "a": "Srub potřebuje pevný a rovný základ, obvykle základovou desku nebo pasy. Vhodné řešení doporučíme podle terénu a podloží. Jak základy zajistíme, domluvíme podle projektu."
      },
      {
        "q": "Dá se ve srubu bydlet celoročně?",
        "a": "Záleží na projektu. Podle toho, jak chcete srub využívat, navrhneme vytápění i další vybavení. Krb je skvělý základ a zbytek domluvíme podle vašich představ."
      },
      {
        "q": "Jak se o srub starat?",
        "a": "Venkovní dřevo je dobré jednou ročně prohlédnout a podle potřeby obnovit ochranný nátěr, nejvíc na straně vystavené slunci a dešti. Při předání vám ukážeme, jak o povrch pečovat."
      },
      {
        "q": "Jak dlouho stavba trvá?",
        "a": "Doba stavby se odvíjí od projektu a rozsahu dodávky. Konkrétní harmonogram s vámi probereme při konzultaci."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Máte pozemek, kde by srub vypadal skvěle? Napište nám pár slov o svých představách a připravíme vám vizualizaci srubu Harmonie na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  },
  {
    "path": "/drevostavby",
    "title": "Moderní dřevostavby na míru | Brno a jižní Morava | DRAXOR",
    "description": "Moderní dřevostavby na míru z Brna. Panelová technologie, dřevovláknitá izolace, pečlivě přelepené membrány a montáž jeřábem. Jižní Morava.",
    "h1": "Moderní dřevostavby na míru – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "Dřevostavba může být krásná, úsporná a postavená s precizností, kterou je vidět i cítit. Stavíme zakázkové nízkoenergetické dřevostavby s čistou architekturou: falcovanou střechou, modřínovou fasádou a velkoformátovým prosklením. Pro klienty v Brně a v celém Jihomoravském kraji."
      },
      {
        "t": "h2",
        "text": "Dřevostavba podle vás, ne z katalogu"
      },
      {
        "t": "p",
        "text": "Každou dřevostavbu navrhujeme na míru. Vytvoříme individuální 3D architektonický návrh podle vašich představ a pozemku, takže ještě před stavbou vidíte, jak bude dům vypadat zvenku i uvnitř. Ať jde o rodinný dům, celoroční chatu nebo menší stavbu na zahradě, hledáme tvar, který se k místu hodí a bude dobře vypadat i za dvacet let."
      },
      {
        "t": "h2",
        "text": "Panelová technologie: přesnost a rychlost"
      },
      {
        "t": "p",
        "text": "Dřevostavby stavíme panelovou technologií. Stěnové panely připravíme předem a na pozemku je jeřáb usadí na místo. Výhody:"
      },
      {
        "t": "ul",
        "items": [
          "**Přesnost:** panely vznikají v kontrolovaných podmínkách, ne v blátě a dešti.",
          "**Rychlost na stavbě:** připravené panely se na pozemku sestaví rychle.",
          "**Méně mokrých procesů:** stavba nemusí dlouho vysychat a na pozemku je méně nepořádku.",
          "**Sehraný tým:** výroba i montáž jsou v jedněch rukou."
        ]
      },
      {
        "t": "h2",
        "text": "Kvalita, která se schovává ve stěnách"
      },
      {
        "t": "p",
        "text": "O tom, jak se v dřevostavbě bude žít, nerozhoduje jen fasáda. Rozhodují vrstvy, které po dokončení nikdo neuvidí. Proto si na nich dáváme nejvíc záležet:"
      },
      {
        "t": "ul",
        "items": [
          "**OSB bednění** zpevňuje konstrukci stěn a střechy.",
          "**Dřevovláknitá izolace** je přírodní materiál, který dobře izoluje v zimě i v létě.",
          "**Membrána pečlivě přelepená páskami Tescon** v každém spoji a rohu. Právě tady vzniká vzduchotěsnost, na které stojí úspornost i zdravé vnitřní prostředí."
        ]
      },
      {
        "t": "p",
        "text": "Na fotkách z našich staveb uvidíte, jak tyto detaily vypadají v praxi. Energetickou náročnost domu navrhujeme individuálně podle projektu a vašich požadavků."
      },
      {
        "t": "h2",
        "text": "Materiály a vzhled"
      },
      {
        "t": "p",
        "text": "Konstrukce stavíme z kvalitního severského dřeva: borovice, modřínu a smrku. Venku často kombinujeme modřínovou fasádu s falcovanou plechovou střechou, která je odolná a nadčasová. Fasádní palubky můžeme kartáčovat a ošetřit přírodními oleji, aby vynikla textura dřeva."
      },
      {
        "t": "h2",
        "text": "Jak spolupráce probíhá"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace** vašich představ, pozemku a rozpočtu.",
          "**3D návrh** dřevostavby na míru.",
          "**Projekt a příprava** výroby panelů. Jak vám pomůžeme s dokumentací a povolením, domluvíme individuálně.",
          "**Montáž** panelů jeřábem, střecha a dokončení. Rozsah dodávky, od hrubé stavby po dokončení, domluvíme podle vašich představ."
        ]
      },
      {
        "t": "h2",
        "text": "Kde stavíme"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a dřevostavby stavíme hlavně v Brně a v celém Jihomoravském kraji. Jinde stavíme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Potřebuji na dřevostavbu stavební povolení?",
        "a": "U rodinného domu a podobných staveb počítejte s projektovou dokumentací a s povolením stavebního úřadu. Přesný postup závisí na velikosti stavby, účelu a pravidlech pro váš pozemek. Doporučujeme začít konzultací a postup ověřit s projektantem."
      },
      {
        "q": "Jaký je rozdíl mezi panelovou a klasickou dřevostavbou?",
        "a": "U panelové dřevostavby se stěny připravují předem a na pozemku se jen sestaví. Stavba je díky tomu rychlejší, přesnější a méně závislá na počasí. U dřevostavby stavěné přímo na místě vzniká celá konstrukce až na pozemku."
      },
      {
        "q": "Proč dřevovláknitá izolace?",
        "a": "Je to přírodní materiál ze dřeva, který dobře izoluje v zimě a pomáhá chránit dům před přehříváním v létě. Hodí se k dřevěné konstrukci a ke zdravému vnitřnímu prostředí."
      },
      {
        "q": "Na jakých základech dřevostavba stojí?",
        "a": "Nejčastěji na základové desce, kterou je potřeba připravit před montáží panelů. Řešení doporučíme podle podloží a projektu. Jak základy zajistíme, domluvíme podle projektu."
      },
      {
        "q": "Jak dlouho stavba trvá?",
        "a": "Doba stavby závisí na velikosti domu a rozsahu dokončení. Díky panelům připraveným předem jde montáž na pozemku rychle. Konkrétní harmonogram s vámi probereme podle projektu."
      },
      {
        "q": "Jak se o dřevostavbu starat?",
        "a": "Konstrukce schovaná ve stěnách údržbu nepotřebuje. Dřevěnou fasádu doporučujeme jednou ročně prohlédnout a podle potřeby obnovit nátěr. Falcovaná plechová střecha je nenáročná."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Přemýšlíte o dřevostavbě? Napište nám, co plánujete a kde, a připravíme vám vizualizaci na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  },
  {
    "path": "/bioklimaticke-pergoly",
    "title": "Bioklimatické pergoly na míru | Brno a jižní Morava | DRAXOR",
    "description": "Hliníkové bioklimatické pergoly s natáčecími lamelami a stíněním na míru. Odolné, nenáročné na údržbu. Montáž v Brně a na jižní Moravě.",
    "h1": "Bioklimatické pergoly na míru – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "Terasa nebo zahrada se s dobrou pergolou promění v další obývák, kde se dá posedět v létě ve stínu i při přeháňce. Navrhujeme a stavíme moderní hliníkové bioklimatické pergoly se stíněním pro domy, chaty i dřevostavby v Brně a po celém Jihomoravském kraji."
      },
      {
        "t": "h2",
        "text": "Co je bioklimatická pergola"
      },
      {
        "t": "p",
        "text": "Střechu bioklimatické pergoly tvoří natáčecí hliníkové lamely. Když je otevřete, pod pergolu proudí vzduch a světlo. Když je natočíte, vytvoří stín a pod pergolou zůstane příjemně i v horkém odpoledni. Po zavření lamel vás pergola ochrání i před deštěm. Na rozdíl od markýzy nebo plátěné plachty tak máte pod kontrolou světlo, stín i větrání během celého roku."
      },
      {
        "t": "h2",
        "text": "Proč hliníková pergola od DRAXOR"
      },
      {
        "t": "ul",
        "items": [
          "**Odolnost vůči počasí:** hliník a kovové prvky snesou slunce, déšť i mráz.",
          "**Minimální údržba:** pergola nepotřebuje nátěry ani pravidelné ošetřování.",
          "**Design na míru:** rozměry, umístění i provedení navrhneme podle vašeho domu a terasy.",
          "**Stínění:** pergolu můžeme doplnit o stínění, aby chránila i z boku."
        ]
      },
      {
        "t": "p",
        "text": "Výbavu, ovládání, barvu i doplňky domluvíme individuálně podle vašich představ. Při konzultaci vám ukážeme, co dává smysl právě u vašeho domu."
      },
      {
        "t": "h2",
        "text": "Pro koho se pergola hodí"
      },
      {
        "t": "p",
        "text": "Bioklimatická pergola dává smysl všude, kde chcete trávit čas venku bez ohledu na počasí: na terase rodinného domu, u bazénu, u chaty nebo jako krytá venkovní jídelna. Oceníte ji hlavně na terasách orientovaných na jih a západ, kde v létě bez stínu není k vydržení. Pergola tak prodlouží venkovní sezónu od jara do pozdního podzimu."
      },
      {
        "t": "h2",
        "text": "Pergola, která ladí s domem"
      },
      {
        "t": "p",
        "text": "Pergola je na první pohled vidět, a proto by měla k domu patřit, ne působit jako dodatečně přidaný kus. Ke každé pergole připravíme vizualizaci, ve které uvidíte, jak bude vypadat u vašeho domu: jaké rozměry dávají smysl, kam umístit sloupy a jak navázat na terasu. Pracujeme se dřevem i kovem, takže pergolu umíme sladit s dřevěnou terasou, fasádou nebo celou dřevostavbou."
      },
      {
        "t": "h2",
        "text": "Jak to probíhá"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace a zaměření:** probereme vaše představy a změříme místo.",
          "**Vizualizace:** ukážeme vám pergolu na vašem domě ještě před objednávkou.",
          "**Výroba:** pergolu připravíme podle schváleného návrhu. Harmonogram domluvíme podle projektu.",
          "**Montáž:** postavíme pergolu a předáme vám ji připravenou k užívání."
        ]
      },
      {
        "t": "h2",
        "text": "Kde montujeme"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a pergoly montujeme hlavně v Brně a v celém Jihomoravském kraji: v Brně a okolí, na Blanensku, Vyškovsku, Znojemsku, Břeclavsku i Hodonínsku. Jinde montujeme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Potřebuji na pergolu stavební povolení?",
        "a": "U menších pergol u rodinného domu často stačí jednodušší postup nebo povolení není potřeba vůbec. Záleží ale na rozměrech, umístění (například vzdálenosti od hranice pozemku), na tom, zda je pergola připevněná k domu, a na místních pravidlech, jako je památková zóna. Doporučujeme to ověřit předem. Rádi vám s tím poradíme."
      },
      {
        "q": "Kam odtéká voda ze zavřených lamel?",
        "a": "Odvod vody řešíme u každé pergoly podle projektu a místa, kde bude stát. Při zaměření s vámi probereme, kam má voda odtékat."
      },
      {
        "q": "Musí být pergola připevněná k domu?",
        "a": "Nemusí. Jestli bude pergola stát samostatně, nebo navazovat na dům, navrhneme individuálně podle místa a vašich představ."
      },
      {
        "q": "Na čem pergola stojí?",
        "a": "Sloupy pergoly se kotví do pevného podkladu, například do betonových patek nebo stávající terasy, pokud je dost únosná. Vhodné řešení posoudíme při zaměření."
      },
      {
        "q": "Jakou údržbu pergola potřebuje?",
        "a": "Hliníková konstrukce nepotřebuje nátěry. Stačí občas lamely a rám opláchnout vodou a zkontrolovat, že odtok vody není ucpaný listím."
      },
      {
        "q": "Vydrží pergola sníh a vítr?",
        "a": "Konstrukci navrhujeme individuálně podle místa, rozměrů a projektu, aby odpovídala podmínkám, kde bude pergola stát. Podrobnosti s vámi rádi probereme při konzultaci."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Pošlete nám fotku terasy nebo místa, kam pergolu chcete, a připravíme vám vizualizaci bioklimatické pergoly na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  },
  {
    "path": "/altany",
    "title": "Dřevěné altány na míru | Brno a jižní Morava | DRAXOR",
    "description": "Dřevěné altány na míru z Brna. Poctivá tesařská práce, severské dřevo a design, který ladí se zahradou. Stavíme na jižní Moravě.",
    "h1": "Dřevěné altány na míru – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "Altán je místo, kde se na zahradě odehrává život: grilování s přáteli, rodinné oslavy, ranní káva i letní večery, kdy se nechce domů. Navrhujeme a stavíme dřevěné altány na míru, poctivou tesařskou prací a s důrazem na design. Pro zahrady v Brně a po celém Jihomoravském kraji."
      },
      {
        "t": "h2",
        "text": "Altán, který se hodí k vaší zahradě"
      },
      {
        "t": "p",
        "text": "Nestavíme altány z krabice. Každý navrhujeme podle vaší zahrady, domu a toho, jak chcete altán využívat. Někdo potřebuje stín nad posezením pro šest lidí, jiný kryté zázemí pro venkovní kuchyni nebo místo u bazénu. Ještě před stavbou vám připravíme vizualizaci, ve které uvidíte tvar, velikost i umístění altánu přímo na vašem pozemku."
      },
      {
        "t": "p",
        "text": "Velikost, tvar i typ střechy navrhujeme individuálně podle vaší zahrady a toho, k čemu má altán sloužit."
      },
      {
        "t": "h2",
        "text": "Tesařské řemeslo a poctivé dřevo"
      },
      {
        "t": "p",
        "text": "Altán stojí na tesařské konstrukci a právě v ní je vidět rozdíl mezi stavbou na pár sezón a stavbou na dlouhá léta. Krovy a nosné tesařské konstrukce jsou naší každodenní prací. Spoje navrhujeme a zpracováváme přesně, pomocí moderních technologií CNC i tradičních tesařských postupů."
      },
      {
        "t": "p",
        "text": "Stavíme z kvalitního severského dřeva: borovice, modřínu a severského smrku. Trámy a palubky můžeme kartáčovat a ošetřit přírodními oleji. Kartáčování zvýrazní přirozenou texturu a kresbu dřeva, takže altán působí ušlechtile a živě."
      },
      {
        "t": "h2",
        "text": "Střecha a detaily"
      },
      {
        "t": "p",
        "text": "Střecha rozhoduje o tom, jak bude altán vypadat i jak dlouho vydrží. Altán můžeme zastřešit například moderní falcovanou plechovou krytinou, která je odolná a k dřevu se skvěle hodí. Krytinu ale vždy vybíráme podle projektu a vašich představ. Stejnou péči věnujeme i detailům, jako je kotvení sloupů, okapy nebo napojení na terasu."
      },
      {
        "t": "h2",
        "text": "Altán, terasa a pergola v jednom návrhu"
      },
      {
        "t": "p",
        "text": "Altán často dává největší smysl spolu s dřevěnou terasou nebo jako doplněk ke chatě. Protože stavíme chaty, terasy i pergoly, můžeme vám navrhnout celé venkovní zázemí tak, aby k sobě všechno ladilo."
      },
      {
        "t": "h2",
        "text": "Jak to probíhá"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace:** probereme vaše představy a prohlédneme místo.",
          "**Vizualizace:** ukážeme vám altán na vaší zahradě.",
          "**Příprava a výroba** konstrukce podle schváleného návrhu.",
          "**Stavba:** postavíme altán podle schváleného návrhu. Harmonogram domluvíme podle projektu."
        ]
      },
      {
        "t": "h2",
        "text": "Kde stavíme"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a altány stavíme hlavně v Brně a v celém Jihomoravském kraji. Jinde stavíme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Potřebuji na altán stavební povolení?",
        "a": "Menší zahradní altány často nevyžadují povolení nebo stačí jednodušší postup. Rozhoduje ale velikost, výška, vzdálenost od hranice pozemku a místní pravidla, například územní plán nebo památková zóna. Doporučujeme si to předem ověřit na stavebním úřadě. Rádi vám s tím pomůžeme."
      },
      {
        "q": "Na čem altán stojí?",
        "a": "Nejčastěji na betonových patkách nebo zemních vrutech, u větších altánů i na základové desce. Vhodné řešení doporučíme podle terénu a velikosti stavby. Jak základy zajistíme, domluvíme podle projektu."
      },
      {
        "q": "Jaké dřevo je na altán nejlepší?",
        "a": "Používáme borovici, modřín a severský smrk. Modřín je přirozeně odolný vůči vlhkosti a hodí se do exteriéru. Konkrétní dřevinu doporučíme podle návrhu a místa."
      },
      {
        "q": "Jak se o dřevěný altán starat?",
        "a": "Jednou ročně altán prohlédněte, hlavně části vystavené dešti a slunci, a podle potřeby obnovte ochranný nátěr olejem nebo lazurou. Při předání vám vysvětlíme, jak o konkrétní povrch pečovat."
      },
      {
        "q": "Dá se altán doplnit o boční stěny nebo osvětlení?",
        "a": "Výbavu altánu domluvíme individuálně podle vašich představ. Napište nám, co si přejete, a ukážeme vám to ve vizualizaci."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Pošlete nám fotku zahrady a pár slov o tom, jak si altán představujete. Připravíme vám vizualizaci dřevěného altánu na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  },
  {
    "path": "/terasy",
    "title": "Dřevěné terasy na míru | Brno a jižní Morava | DRAXOR",
    "description": "Dřevěné terasy na míru z Brna. Pečlivá spodní konstrukce, kvalitní dřevo a čisté detaily. K domu, chatě i pergole. Stavíme na jižní Moravě.",
    "h1": "Dřevěné terasy na míru – Brno a jižní Morava",
    "lead": [
      {
        "t": "p",
        "text": "Dřevěná terasa propojí dům se zahradou a z obyčejného kousku trávníku udělá místo, kde budete trávit většinu léta. Navrhujeme a stavíme dřevěné terasy na míru k rodinným domům, chatám i dřevostavbám v Brně a po celém Jihomoravském kraji."
      },
      {
        "t": "h2",
        "text": "Terasa, která vydrží"
      },
      {
        "t": "p",
        "text": "Hezká terasa po první sezóně je jedna věc. Terasa, která vypadá dobře i za deset let, je druhá. Rozdíl je hlavně v tom, co není vidět: ve spodní konstrukci, v odvětrání, ve spádu a v tom, jak je dřevo uložené a kotvené. Na těchto detailech si dáváme záležet, protože právě ony rozhodují o životnosti celé terasy."
      },
      {
        "t": "p",
        "text": "Spodní konstrukci i způsob uchycení prken navrhujeme individuálně podle místa a vašich představ."
      },
      {
        "t": "h2",
        "text": "Dřevo, které vybíráme pečlivě"
      },
      {
        "t": "p",
        "text": "Pracujeme s kvalitním severským dřevem. Na terasy se výborně hodí modřín, který je přirozeně odolný vůči vlhkosti a má krásnou teplou barvu. Povrch můžeme ošetřit přírodními oleji, aby vynikla kresba dřeva a terasa lépe odolávala počasí."
      },
      {
        "t": "p",
        "text": "Materiál terasy ale vždy domluvíme podle projektu a vašich představ."
      },
      {
        "t": "h2",
        "text": "Pro koho stavíme terasy"
      },
      {
        "t": "p",
        "text": "Dřevěnou terasu stavíme k novým i starším rodinným domům, k chatám na jižní Moravě, kolem bazénů i jako samostatné posezení v zahradě. Ať potřebujete malou terasu před vchodem, nebo velkou plochu pro venkovní jídelnu a lehátka, navrhneme ji tak, aby odpovídala tomu, jak ji budete opravdu používat."
      },
      {
        "t": "h2",
        "text": "Navrženo na míru vašemu domu"
      },
      {
        "t": "p",
        "text": "Každá terasa je jiná. Navrhneme tvar, velikost a směr prken tak, aby terasa ladila s domem a dobře se na ní žilo. Vyřešíme i schody, napojení na dům a místa pro osvětlení nebo květináče. Ještě před stavbou vám ukážeme vizualizaci, abyste přesně věděli, jak bude terasa vypadat."
      },
      {
        "t": "h2",
        "text": "Terasa s pergolou, altánem nebo chatou"
      },
      {
        "t": "p",
        "text": "Dřevěná terasa se skvěle doplňuje s bioklimatickou pergolou nebo dřevěným altánem. A k našim A-frame chatám i srubům terasa patří samozřejmě. Protože stavíme všechno z jedné ruky, celé venkovní zázemí může být navržené jako jeden celek."
      },
      {
        "t": "h2",
        "text": "Jak to probíhá"
      },
      {
        "t": "ol",
        "items": [
          "**Konzultace a zaměření** místa, kde má terasa vzniknout.",
          "**Vizualizace a výběr dřeva.**",
          "**Příprava podkladu a spodní konstrukce.**",
          "**Pokládka a povrchová úprava** podle schváleného návrhu."
        ]
      },
      {
        "t": "h2",
        "text": "Kde stavíme"
      },
      {
        "t": "p",
        "text": "Sídlíme v Brně a terasy stavíme hlavně v Brně a v celém Jihomoravském kraji. Jinde stavíme po domluvě, stačí se nám ozvat."
      }
    ],
    "faqs": [
      {
        "q": "Jaké dřevo je na terasu nejlepší?",
        "a": "Modřín patří k nejoblíbenějším domácím volbám, protože je přirozeně odolný a hezky stárne. Konkrétní materiál doporučíme podle toho, jak bude terasa vystavená slunci a vlhkosti."
      },
      {
        "q": "Proč dřevo na terase šedne?",
        "a": "Neošetřené dřevo vlivem slunce přirozeně šedne a získá stříbřitou patinu. Pokud chcete zachovat původní barvu, je potřeba povrch pravidelně olejovat."
      },
      {
        "q": "Jak se o dřevěnou terasu starat?",
        "a": "Terasu stačí pravidelně zametat a jednou za čas umýt. Olej doporučujeme obnovovat podle toho, jak moc je terasa vystavená slunci a dešti, obvykle na jaře. Při předání vám ukážeme, jak na to."
      },
      {
        "q": "Na čem terasa stojí?",
        "a": "Spodní konstrukce se ukládá na stabilní podklad, například na betonové patky, zemní vruty nebo zpevněný a odvodněný terén. Důležité je, aby pod terasou mohl proudit vzduch a voda měla kam odtéct. Řešení doporučíme po prohlídce místa."
      },
      {
        "q": "Potřebuji na terasu povolení?",
        "a": "Terasa položená na terénu u rodinného domu obvykle povolení nepotřebuje. U vyvýšených teras, teras na střeše nebo v památkové zóně to ale může být jinak. Doporučujeme si to ověřit předem. Rádi vám poradíme."
      }
    ],
    "closing": [
      {
        "t": "h2",
        "text": "Napište nám, připravíme vám vizualizaci"
      },
      {
        "t": "p",
        "text": "Pošlete nám fotku místa, kde chcete terasu, a připravíme vám vizualizaci dřevěné terasy na míru. Zavolejte na **+420 732 527 871** nebo vyplňte poptávkový formulář."
      }
    ]
  }
];
