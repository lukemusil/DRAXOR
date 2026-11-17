import { ConfigValue } from "../components/ConfigValue";
import { isPlaceholder, retentionWording, routes, siteConfig } from "../site.config";

export function PrivacyPolicy() {
  return (
    <article className="pt-36 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">DRAXOR</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline uppercase text-[#fbf8f5] mb-6">
          Zásady ochrany osobních údajů
        </h1>
        <p className="text-[#b8aea2] text-base md:text-lg font-light leading-relaxed mb-12">
          Tyto zásady popisují, jak web {siteConfig.siteUrl} zpracovává osobní údaje lidí, kteří pošlou poptávku
          nebo si zobrazí vloženou mapu. Nejde o souhlas se zpracováním pro marketing. Údaje z formuláře slouží jen
          k odpovědi na poptávku.
        </p>

        <div className="space-y-12 text-[#d6cec3] text-sm md:text-base leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">
              Správce osobních údajů
            </h2>
            <p>Správcem údajů z tohoto webu je:</p>
            <ul className="space-y-2 text-[#b8aea2]">
              <li>
                Obchodní jméno: <ConfigValue value={siteConfig.businessName} />
              </li>
              <li>
                IČO: <ConfigValue value={siteConfig.ico} />
              </li>
              <li>
                Sídlo: <ConfigValue value={siteConfig.address} />
              </li>
              <li>
                E-mail:{" "}
                <a className="text-[#d8a876] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                Telefon:{" "}
                <a className="text-[#d8a876] underline underline-offset-4" href={`tel:${siteConfig.phoneTel}`}>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
            {(isPlaceholder(siteConfig.businessName) ||
              isPlaceholder(siteConfig.ico) ||
              isPlaceholder(siteConfig.address)) && (
              <p className="text-[#8f8274] text-sm">
                Položky v hranatých závorkách ještě nejsou doplněné. Až budou známé, nahradí se v souboru{" "}
                <span className="text-[#ecd7be]">src/site.config.ts</span>.
              </p>
            )}
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">
              Jaké údaje zpracováváme
            </h2>
            <p>Z poptávkového formuláře zpracováváme údaje, které sami vyplníte:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#b8aea2]">
              <li>jméno a příjmení,</li>
              <li>e-mail,</li>
              <li>telefon, pokud ho uvedete,</li>
              <li>text zprávy o projektu.</li>
            </ul>
            <p>
              Jiné údaje formulář nevyžaduje. Při běžném načtení stránky může poskytovatel hostingu zpracovat
              technické údaje spojení, zejména IP adresu a čas požadavku, ve svých serverových záznamech.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">
              Účel a právní základ
            </h2>
            <p>
              Údaje z formuláře používáme výhradně k vyřízení vaší poptávky a k navazující komunikaci o možném
              provedení stavby nebo dodávky. Právním základem je čl. 6 odst. 1 písm. b) nařízení GDPR — opatření
              přijatá před uzavřením smlouvy na vaši žádost — a čl. 6 odst. 1 písm. f) GDPR, tedy oprávněný zájem
              odpovědět na zprávu, kterou jste nám poslali.
            </p>
            <p>Údaje nepoužíváme k rozesílání newsletteru ani k reklamnímu profilování.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">
              Doba uchování
            </h2>
            <p>
              {isPlaceholder(siteConfig.dataRetention) ? (
                <>
                  Poptávku uchováváme {retentionWording()}. Potom údaje smažeme, pokud delší uložení neukládá právní
                  předpis nebo pokud je nepotřebujeme k ochraně právních nároků.
                </>
              ) : (
                <>
                  Poptávku uchováváme po dobu potřebnou k jejímu vyřízení a k navazující komunikaci, nejdéle po dobu:{" "}
                  {siteConfig.dataRetention}. Potom údaje smažeme, pokud delší uložení neukládá právní předpis nebo
                  pokud je nepotřebujeme k ochraně právních nároků.
                </>
              )}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">
              Příjemci a třetí strany
            </h2>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#fbf8f5]">Formulář (Formspree)</h3>
              <p>
                Jméno, e-mail, telefon a text zprávy z poptávkového formuláře odesílá prohlížeč službě Formspree
                (formspree.io). Formspree je zpracovatelem těchto údajů a zprávu doručí správci na{" "}
                <a className="text-[#d8a876] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#fbf8f5]">Hosting</h3>
              <p>
                Web je zveřejněný přes GitHub Pages (GitHub, Inc.). Při načtení stránky může GitHub zpracovat
                technické údaje spojení ve svých provozních záznamech.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#fbf8f5]">Mapa Google</h3>
              <p>
                Mapa Brna se ze služby Google Maps nenačítá sama. Iframe společnosti Google LLC se stáhne až ve
                chvíli, kdy klepnete na „Zobrazit mapu“. Do té doby se z této stránky Googlu nic neposílá. Po
                klepnutí Google dostane technické údaje spojení, zejména IP adresu, a může uložit cookies podle
                zásad Google.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#fbf8f5]">Písma</h3>
              <p>
                Písma Inter a Outfit jsou uložená přímo na tomto webu. Při jejich načtení se údaje nepředávají
                službě Google Fonts ani jinému externímu poskytovateli písem. Dřívější napojení na servery Google
                pro stažení písem se nepoužívá.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">Vaše práva</h2>
            <p>V rozsahu daném GDPR můžete žádat:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#b8aea2]">
              <li>přístup k údajům a jejich opravu,</li>
              <li>výmaz nebo omezení zpracování,</li>
              <li>námitku proti zpracování založenému na oprávněném zájmu,</li>
              <li>přenositelnost údajů, které jste sami poskytli a které se zpracovávají automatizovaně.</li>
            </ul>
            <p>
              Žádost pošlete na{" "}
              <a className="text-[#d8a876] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              . Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů,{" "}
              <a
                className="text-[#d8a876] underline underline-offset-4"
                href="https://www.uoou.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.uoou.cz
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">Cookies</h2>
            <p>
              Samotný web DRAXOR neukládá analytické ani reklamní cookies. Cookies mohou vzniknout až po načtení
              mapy Google. Při odeslání formuláře je může uložit také Formspree, zpracovatel údajů z poptávky.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]">Změny zásad</h2>
            <p>Aktuální znění je vždy na této stránce. Podstatnou změnu zpracování z formuláře popíšeme zde.</p>
            <p>
              <a href={routes.home} className="text-[#d8a876] underline underline-offset-4 font-semibold">
                Zpět na úvod
              </a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
