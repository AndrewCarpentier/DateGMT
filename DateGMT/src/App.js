import styles from "./App.module.scss";
import * as moment from 'moment-timezone';

function App() {
  moment.tz.setDefault('Etc/UTC');

  const hour = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
  ];

  function handleClick() {
    const input = document.querySelector("#date").value;
    const hour = document.querySelector("#hour").value;
    const gmt = document.querySelector("#gmt").value;
    if (input !== "") {
      const date = input + "T" + hour;
      const d = moment.tz(date, gmt);
      console.log(gmt);
      console.log({utc : d.format("LLLL")});
      fetch("http://localhost:8000/", {
        method: "POST",
        body: JSON.stringify({ date: d }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    }
  }

  function getLastDate() {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((json) => {
        console.log(moment.tz(json[0].date, 'Europe/Paris').format('LLLL'));
      }
      );
  }

  return (
    <div className={`${styles.appContainer}`}>
      <input id="date" type="date" />
      <select id="hour">
        {hour.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
      <select id="gmt">
        <option value="Pacific/Midway" data-spec="select-option">
          (GMT-1100) heure : Îles mineures éloignées des États-Unis (Midway)
        </option>
        <option value="Pacific/Niue" data-spec="select-option">
          (GMT-1100) heure : Niue
        </option>
        <option value="Pacific/Pago_Pago" data-spec="select-option">
          (GMT-1100) heure : Samoa américaines
        </option>
        <option value="Pacific/Honolulu" data-spec="select-option">
          (GMT-1000) heure : États-Unis (Honolulu)
        </option>
        <option value="Pacific/Rarotonga" data-spec="select-option">
          (GMT-1000) heure : Îles Cook
        </option>
        <option value="Pacific/Tahiti" data-spec="select-option">
          (GMT-1000) heure : Polynésie française
        </option>
        <option value="Pacific/Marquesas" data-spec="select-option">
          (GMT-0930) heure : Monde (Marquises)
        </option>
        <option value="America/Adak" data-spec="select-option">
          (GMT-0900) heure : Monde (Adak)
        </option>
        <option value="Pacific/Gambier" data-spec="select-option">
          (GMT-0900) heure : Monde (Gambier)
        </option>
        <option value="America/Anchorage" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Anchorage)
        </option>
        <option value="America/Juneau" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Juneau)
        </option>
        <option value="America/Metlakatla" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Metlakatla)
        </option>
        <option value="America/Nome" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Nome)
        </option>
        <option value="America/Sitka" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Sitka)
        </option>
        <option value="America/Yakutat" data-spec="select-option">
          (GMT-0800) heure : États-Unis (Yakutat)
        </option>
        <option value="Pacific/Pitcairn" data-spec="select-option">
          (GMT-0800) heure : Monde (Pitcairn)
        </option>
        <option value="America/Creston" data-spec="select-option">
          (GMT-0700) heure : Canada (Creston)
        </option>
        <option value="America/Dawson_Creek" data-spec="select-option">
          (GMT-0700) heure : Canada (Dawson Creek)
        </option>
        <option value="America/Dawson" data-spec="select-option">
          (GMT-0700) heure : Canada (Dawson)
        </option>
        <option value="America/Fort_Nelson" data-spec="select-option">
          (GMT-0700) heure : Canada (Fort Nelson)
        </option>
        <option value="America/Vancouver" data-spec="select-option">
          (GMT-0700) heure : Canada (Vancouver)
        </option>
        <option value="America/Whitehorse" data-spec="select-option">
          (GMT-0700) heure : Canada (Whitehorse)
        </option>
        <option value="America/Los_Angeles" data-spec="select-option">
          (GMT-0700) heure : États-Unis (Los Angeles)
        </option>
        <option value="America/Phoenix" data-spec="select-option">
          (GMT-0700) heure : États-Unis (Phoenix)
        </option>
        <option value="America/Hermosillo" data-spec="select-option">
          (GMT-0700) heure : Mexique (Hermosillo)
        </option>
        <option value="America/Santa_Isabel" data-spec="select-option">
          (GMT-0700) heure : Mexique (Santa Isabel)
        </option>
        <option value="America/Tijuana" data-spec="select-option">
          (GMT-0700) heure : Mexique (Tijuana)
        </option>
        <option value="America/Belize" data-spec="select-option">
          (GMT-0600) heure : Belize
        </option>
        <option value="America/Cambridge_Bay" data-spec="select-option">
          (GMT-0600) heure : Canada (Cambridge Bay)
        </option>
        <option value="America/Edmonton" data-spec="select-option">
          (GMT-0600) heure : Canada (Edmonton)
        </option>
        <option value="America/Inuvik" data-spec="select-option">
          (GMT-0600) heure : Canada (Inuvik)
        </option>
        <option value="America/Regina" data-spec="select-option">
          (GMT-0600) heure : Canada (Regina)
        </option>
        <option value="America/Swift_Current" data-spec="select-option">
          (GMT-0600) heure : Canada (Swift Current)
        </option>
        <option value="America/Yellowknife" data-spec="select-option">
          (GMT-0600) heure : Canada (Yellowknife)
        </option>
        <option value="Pacific/Easter" data-spec="select-option">
          (GMT-0600) heure : Chili (Île de Pâques)
        </option>
        <option value="America/Costa_Rica" data-spec="select-option">
          (GMT-0600) heure : Costa Rica
        </option>
        <option value="America/El_Salvador" data-spec="select-option">
          (GMT-0600) heure : El Salvador
        </option>
        <option value="Pacific/Galapagos" data-spec="select-option">
          (GMT-0600) heure : Équateur (Galápagos)
        </option>
        <option value="America/Boise" data-spec="select-option">
          (GMT-0600) heure : États-Unis (Boise)
        </option>
        <option value="America/Denver" data-spec="select-option">
          (GMT-0600) heure : États-Unis (Denver)
        </option>
        <option value="America/Guatemala" data-spec="select-option">
          (GMT-0600) heure : Guatemala
        </option>
        <option value="America/Tegucigalpa" data-spec="select-option">
          (GMT-0600) heure : Honduras
        </option>
        <option value="America/Chihuahua" data-spec="select-option">
          (GMT-0600) heure : Mexique (Chihuahua)
        </option>
        <option value="America/Mazatlan" data-spec="select-option">
          (GMT-0600) heure : Mexique (Mazatlán)
        </option>
        <option value="America/Ojinaga" data-spec="select-option">
          (GMT-0600) heure : Mexique (Ojinaga)
        </option>
        <option value="America/Managua" data-spec="select-option">
          (GMT-0600) heure : Nicaragua
        </option>
        <option value="America/Eirunepe" data-spec="select-option">
          (GMT-0500) heure : Brésil (Eirunepé)
        </option>
        <option value="America/Rio_Branco" data-spec="select-option">
          (GMT-0500) heure : Brésil (Rio Branco)
        </option>
        <option value="America/Atikokan" data-spec="select-option">
          (GMT-0500) heure : Canada (Atikokan)
        </option>
        <option value="America/Rainy_River" data-spec="select-option">
          (GMT-0500) heure : Canada (Rainy River)
        </option>
        <option value="America/Rankin_Inlet" data-spec="select-option">
          (GMT-0500) heure : Canada (Rankin Inlet)
        </option>
        <option value="America/Resolute" data-spec="select-option">
          (GMT-0500) heure : Canada (Resolute)
        </option>
        <option value="America/Winnipeg" data-spec="select-option">
          (GMT-0500) heure : Canada (Winnipeg)
        </option>
        <option value="America/Bogota" data-spec="select-option">
          (GMT-0500) heure : Colombie
        </option>
        <option value="America/Guayaquil" data-spec="select-option">
          (GMT-0500) heure : Équateur (Guayaquil)
        </option>
        <option value="America/North_Dakota/Beulah" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Beulah (Dakota du Nord))
        </option>
        <option value="America/North_Dakota/Center" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Center (Dakota du Nord))
        </option>
        <option value="America/Chicago" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Chicago)
        </option>
        <option value="America/Indiana/Knox" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Knox [Indiana])
        </option>
        <option value="America/Menominee" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Menominee)
        </option>
        <option
          value="America/North_Dakota/New_Salem"
          data-spec="select-option"
        >
          (GMT-0500) heure : États-Unis (New Salem (Dakota du Nord))
        </option>
        <option value="America/Indiana/Tell_City" data-spec="select-option">
          (GMT-0500) heure : États-Unis (Tell City [Indiana])
        </option>
        <option value="America/Cayman" data-spec="select-option">
          (GMT-0500) heure : Îles Caïmans
        </option>
        <option value="America/Jamaica" data-spec="select-option">
          (GMT-0500) heure : Jamaïque
        </option>
        <option value="America/Bahia_Banderas" data-spec="select-option">
          (GMT-0500) heure : Mexique (Bahia de Banderas)
        </option>
        <option value="America/Cancun" data-spec="select-option">
          (GMT-0500) heure : Mexique (Cancún)
        </option>
        <option value="America/Matamoros" data-spec="select-option">
          (GMT-0500) heure : Mexique (Matamoros)
        </option>
        <option value="America/Merida" data-spec="select-option">
          (GMT-0500) heure : Mexique (Mérida)
        </option>
        <option value="America/Mexico_City" data-spec="select-option">
          (GMT-0500) heure : Mexique (Mexico)
        </option>
        <option value="America/Monterrey" data-spec="select-option">
          (GMT-0500) heure : Mexique (Monterrey)
        </option>
        <option value="America/Panama" data-spec="select-option">
          (GMT-0500) heure : Panama
        </option>
        <option value="America/Lima" data-spec="select-option">
          (GMT-0500) heure : Pérou
        </option>
        <option value="America/Anguilla" data-spec="select-option">
          (GMT-0400) heure : Anguilla
        </option>
        <option value="America/Antigua" data-spec="select-option">
          (GMT-0400) heure : Antigua-et-Barbuda
        </option>
        <option value="America/Aruba" data-spec="select-option">
          (GMT-0400) heure : Aruba
        </option>
        <option value="America/Nassau" data-spec="select-option">
          (GMT-0400) heure : Bahamas
        </option>
        <option value="America/Barbados" data-spec="select-option">
          (GMT-0400) heure : Barbade
        </option>
        <option value="America/La_Paz" data-spec="select-option">
          (GMT-0400) heure : Bolivie
        </option>
        <option value="America/Boa_Vista" data-spec="select-option">
          (GMT-0400) heure : Brésil (Boa Vista)
        </option>
        <option value="America/Campo_Grande" data-spec="select-option">
          (GMT-0400) heure : Brésil (Campo Grande)
        </option>
        <option value="America/Cuiaba" data-spec="select-option">
          (GMT-0400) heure : Brésil (Cuiabá)
        </option>
        <option value="America/Manaus" data-spec="select-option">
          (GMT-0400) heure : Brésil (Manaos)
        </option>
        <option value="America/Porto_Velho" data-spec="select-option">
          (GMT-0400) heure : Brésil (Porto Velho)
        </option>
        <option value="America/Blanc-Sablon" data-spec="select-option">
          (GMT-0400) heure : Canada (Blanc-Sablon)
        </option>
        <option value="America/Iqaluit" data-spec="select-option">
          (GMT-0400) heure : Canada (Iqaluit)
        </option>
        <option value="America/Nipigon" data-spec="select-option">
          (GMT-0400) heure : Canada (Nipigon)
        </option>
        <option value="America/Pangnirtung" data-spec="select-option">
          (GMT-0400) heure : Canada (Pangnirtung)
        </option>
        <option value="America/Thunder_Bay" data-spec="select-option">
          (GMT-0400) heure : Canada (Thunder Bay)
        </option>
        <option value="America/Toronto" data-spec="select-option">
          (GMT-0400) heure : Canada (Toronto)
        </option>
        <option value="America/Santiago" data-spec="select-option">
          (GMT-0400) heure : Chili (Santiago)
        </option>
        <option value="America/Havana" data-spec="select-option">
          (GMT-0400) heure : Cuba
        </option>
        <option value="America/Curacao" data-spec="select-option">
          (GMT-0400) heure : Curaçao
        </option>
        <option value="America/Dominica" data-spec="select-option">
          (GMT-0400) heure : Dominique
        </option>
        <option value="America/Detroit" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Détroit)
        </option>
        <option value="America/Indiana/Indianapolis" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Indianapolis)
        </option>
        <option value="America/Kentucky/Louisville" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Louisville)
        </option>
        <option value="America/Indiana/Marengo" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Marengo [Indiana])
        </option>
        <option value="America/Kentucky/Monticello" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Monticello [Kentucky])
        </option>
        <option value="America/New_York" data-spec="select-option">
          (GMT-0400) heure : États-Unis (New York)
        </option>
        <option value="America/Indiana/Petersburg" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Petersburg [Indiana])
        </option>
        <option value="America/Indiana/Vevay" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Vevay [Indiana])
        </option>
        <option value="America/Indiana/Vincennes" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Vincennes [Indiana])
        </option>
        <option value="America/Indiana/Winamac" data-spec="select-option">
          (GMT-0400) heure : États-Unis (Winamac [Indiana])
        </option>
        <option value="America/Grenada" data-spec="select-option">
          (GMT-0400) heure : Grenade
        </option>
        <option value="America/Guadeloupe" data-spec="select-option">
          (GMT-0400) heure : Guadeloupe
        </option>
        <option value="America/Guyana" data-spec="select-option">
          (GMT-0400) heure : Guyana
        </option>
        <option value="America/Port-au-Prince" data-spec="select-option">
          (GMT-0400) heure : Haïti
        </option>
        <option value="America/Grand_Turk" data-spec="select-option">
          (GMT-0400) heure : Îles Turques-et-Caïques
        </option>
        <option value="America/Tortola" data-spec="select-option">
          (GMT-0400) heure : Îles Vierges britanniques
        </option>
        <option value="America/St_Thomas" data-spec="select-option">
          (GMT-0400) heure : Îles Vierges des États-Unis
        </option>
        <option value="America/Martinique" data-spec="select-option">
          (GMT-0400) heure : Martinique
        </option>
        <option value="America/Montserrat" data-spec="select-option">
          (GMT-0400) heure : Montserrat
        </option>
        <option value="America/Asuncion" data-spec="select-option">
          (GMT-0400) heure : Paraguay
        </option>
        <option value="America/Kralendijk" data-spec="select-option">
          (GMT-0400) heure : Pays-Bas caribéens
        </option>
        <option value="America/Puerto_Rico" data-spec="select-option">
          (GMT-0400) heure : Porto Rico
        </option>
        <option value="America/Santo_Domingo" data-spec="select-option">
          (GMT-0400) heure : République dominicaine
        </option>
        <option value="America/St_Barthelemy" data-spec="select-option">
          (GMT-0400) heure : Saint-Barthélemy
        </option>
        <option value="America/St_Kitts" data-spec="select-option">
          (GMT-0400) heure : Saint-Christophe-et-Niévès
        </option>
        <option value="America/Marigot" data-spec="select-option">
          (GMT-0400) heure : Saint-Martin
        </option>
        <option value="America/Lower_Princes" data-spec="select-option">
          (GMT-0400) heure : Saint-Martin (partie néerlandaise)
        </option>
        <option value="America/St_Vincent" data-spec="select-option">
          (GMT-0400) heure : Saint-Vincent-et-les-Grenadines
        </option>
        <option value="America/St_Lucia" data-spec="select-option">
          (GMT-0400) heure : Sainte-Lucie
        </option>
        <option value="America/Port_of_Spain" data-spec="select-option">
          (GMT-0400) heure : Trinité-et-Tobago
        </option>
        <option value="America/Caracas" data-spec="select-option">
          (GMT-0400) heure : Venezuela
        </option>
        <option value="Antarctica/Palmer" data-spec="select-option">
          (GMT-0300) heure : Antarctique (Palmer)
        </option>
        <option value="Antarctica/Rothera" data-spec="select-option">
          (GMT-0300) heure : Antarctique (Rothera)
        </option>
        <option
          value="America/Argentina/Buenos_Aires"
          data-spec="select-option"
        >
          (GMT-0300) heure : Argentine (Buenos Aires)
        </option>
        <option value="America/Argentina/Catamarca" data-spec="select-option">
          (GMT-0300) heure : Argentine (Catamarca)
        </option>
        <option value="America/Argentina/Cordoba" data-spec="select-option">
          (GMT-0300) heure : Argentine (Córdoba)
        </option>
        <option value="America/Argentina/Jujuy" data-spec="select-option">
          (GMT-0300) heure : Argentine (Jujuy)
        </option>
        <option value="America/Argentina/La_Rioja" data-spec="select-option">
          (GMT-0300) heure : Argentine (La Rioja)
        </option>
        <option value="America/Argentina/Mendoza" data-spec="select-option">
          (GMT-0300) heure : Argentine (Mendoza)
        </option>
        <option
          value="America/Argentina/Rio_Gallegos"
          data-spec="select-option"
        >
          (GMT-0300) heure : Argentine (Río Gallegos)
        </option>
        <option value="America/Argentina/Salta" data-spec="select-option">
          (GMT-0300) heure : Argentine (Salta)
        </option>
        <option value="America/Argentina/San_Juan" data-spec="select-option">
          (GMT-0300) heure : Argentine (San Juan)
        </option>
        <option value="America/Argentina/San_Luis" data-spec="select-option">
          (GMT-0300) heure : Argentine (San Luis)
        </option>
        <option value="America/Argentina/Tucuman" data-spec="select-option">
          (GMT-0300) heure : Argentine (Tucumán)
        </option>
        <option value="America/Argentina/Ushuaia" data-spec="select-option">
          (GMT-0300) heure : Argentine (Ushuaïa)
        </option>
        <option value="Atlantic/Bermuda" data-spec="select-option">
          (GMT-0300) heure : Bermudes
        </option>
        <option value="America/Araguaina" data-spec="select-option">
          (GMT-0300) heure : Brésil (Araguaína)
        </option>
        <option value="America/Bahia" data-spec="select-option">
          (GMT-0300) heure : Brésil (Bahia)
        </option>
        <option value="America/Belem" data-spec="select-option">
          (GMT-0300) heure : Brésil (Belém)
        </option>
        <option value="America/Fortaleza" data-spec="select-option">
          (GMT-0300) heure : Brésil (Fortaleza)
        </option>
        <option value="America/Maceio" data-spec="select-option">
          (GMT-0300) heure : Brésil (Maceió)
        </option>
        <option value="America/Recife" data-spec="select-option">
          (GMT-0300) heure : Brésil (Recife)
        </option>
        <option value="America/Santarem" data-spec="select-option">
          (GMT-0300) heure : Brésil (Santarém)
        </option>
        <option value="America/Sao_Paulo" data-spec="select-option">
          (GMT-0300) heure : Brésil (São Paulo)
        </option>
        <option value="America/Glace_Bay" data-spec="select-option">
          (GMT-0300) heure : Canada (Glace Bay)
        </option>
        <option value="America/Goose_Bay" data-spec="select-option">
          (GMT-0300) heure : Canada (Goose Bay)
        </option>
        <option value="America/Halifax" data-spec="select-option">
          (GMT-0300) heure : Canada (Halifax)
        </option>
        <option value="America/Moncton" data-spec="select-option">
          (GMT-0300) heure : Canada (Moncton)
        </option>
        <option value="America/Thule" data-spec="select-option">
          (GMT-0300) heure : Groenland (Thulé)
        </option>
        <option value="America/Cayenne" data-spec="select-option">
          (GMT-0300) heure : Guyane française
        </option>
        <option value="Atlantic/Stanley" data-spec="select-option">
          (GMT-0300) heure : Îles Malouines
        </option>
        <option value="America/Paramaribo" data-spec="select-option">
          (GMT-0300) heure : Suriname
        </option>
        <option value="America/Montevideo" data-spec="select-option">
          (GMT-0300) heure : Uruguay
        </option>
        <option value="America/Punta_Arenas" data-spec="select-option">
          (GMT-0300) heure : région indéterminée (Punta Arenas)
        </option>
        <option value="America/St_Johns" data-spec="select-option">
          (GMT-0230) heure : Canada (Saint-Jean de Terre-Neuve)
        </option>
        <option value="America/Noronha" data-spec="select-option">
          (GMT-0200) heure : Brésil (Noronha)
        </option>
        <option value="Atlantic/South_Georgia" data-spec="select-option">
          (GMT-0200) heure : Géorgie du Sud et îles Sandwich du Sud
        </option>
        <option value="America/Miquelon" data-spec="select-option">
          (GMT-0200) heure : Monde (Miquelon)
        </option>
        <option value="America/Nuuk" data-spec="select-option">
          (GMT-0200) heure : région indéterminée (Nuuk)
        </option>
        <option value="Atlantic/Cape_Verde" data-spec="select-option">
          (GMT-0100) heure : Cap-Vert
        </option>
        <option value="UTC" data-spec="select-option">
          UTC
        </option>
        <option value="Africa/Ouagadougou" data-spec="select-option">
          (GMT+0000) heure : Burkina Faso
        </option>
        <option value="Africa/Abidjan" data-spec="select-option">
          (GMT+0000) heure : Côte d’Ivoire
        </option>
        <option value="Africa/Banjul" data-spec="select-option">
          (GMT+0000) heure : Gambie
        </option>
        <option value="Africa/Accra" data-spec="select-option">
          (GMT+0000) heure : Ghana
        </option>
        <option value="America/Danmarkshavn" data-spec="select-option">
          (GMT+0000) heure : Groenland (Danmarkshavn)
        </option>
        <option value="America/Scoresbysund" data-spec="select-option">
          (GMT+0000) heure : Groenland (Ittoqqortoormiit)
        </option>
        <option value="Africa/Conakry" data-spec="select-option">
          (GMT+0000) heure : Guinée
        </option>
        <option value="Africa/Bissau" data-spec="select-option">
          (GMT+0000) heure : Guinée-Bissau
        </option>
        <option value="Atlantic/Reykjavik" data-spec="select-option">
          (GMT+0000) heure : Islande
        </option>
        <option value="Africa/Monrovia" data-spec="select-option">
          (GMT+0000) heure : Libéria
        </option>
        <option value="Africa/Bamako" data-spec="select-option">
          (GMT+0000) heure : Mali
        </option>
        <option value="Africa/Nouakchott" data-spec="select-option">
          (GMT+0000) heure : Mauritanie
        </option>
        <option value="Atlantic/Azores" data-spec="select-option">
          (GMT+0000) heure : Portugal (Açores)
        </option>
        <option value="Atlantic/St_Helena" data-spec="select-option">
          (GMT+0000) heure : Sainte-Hélène
        </option>
        <option value="Africa/Sao_Tome" data-spec="select-option">
          (GMT+0000) heure : Sao Tomé-et-Principe
        </option>
        <option value="Africa/Dakar" data-spec="select-option">
          (GMT+0000) heure : Sénégal
        </option>
        <option value="Africa/Freetown" data-spec="select-option">
          (GMT+0000) heure : Sierra Leone
        </option>
        <option value="Africa/Lome" data-spec="select-option">
          (GMT+0000) heure : Togo
        </option>
        <option value="Africa/Algiers" data-spec="select-option">
          (GMT+0100) heure : Algérie
        </option>
        <option value="Africa/Luanda" data-spec="select-option">
          (GMT+0100) heure : Angola
        </option>
        <option value="Africa/Porto-Novo" data-spec="select-option">
          (GMT+0100) heure : Bénin
        </option>
        <option value="Africa/Douala" data-spec="select-option">
          (GMT+0100) heure : Cameroun
        </option>
        <option value="Africa/Brazzaville" data-spec="select-option">
          (GMT+0100) heure : Congo-Brazzaville
        </option>
        <option value="Africa/Kinshasa" data-spec="select-option">
          (GMT+0100) heure : Congo-Kinshasa (Kinshasa)
        </option>
        <option value="Atlantic/Canary" data-spec="select-option">
          (GMT+0100) heure : Espagne (Îles Canaries)
        </option>
        <option value="Africa/Libreville" data-spec="select-option">
          (GMT+0100) heure : Gabon
        </option>
        <option value="Europe/Guernsey" data-spec="select-option">
          (GMT+0100) heure : Guernesey
        </option>
        <option value="Africa/Malabo" data-spec="select-option">
          (GMT+0100) heure : Guinée équatoriale
        </option>
        <option value="Europe/Isle_of_Man" data-spec="select-option">
          (GMT+0100) heure : Île de Man
        </option>
        <option value="Atlantic/Faroe" data-spec="select-option">
          (GMT+0100) heure : Îles Féroé
        </option>
        <option value="Europe/Dublin" data-spec="select-option">
          (GMT+0100) heure : Irlande
        </option>
        <option value="Europe/Jersey" data-spec="select-option">
          (GMT+0100) heure : Jersey
        </option>
        <option value="Africa/Casablanca" data-spec="select-option">
          (GMT+0100) heure : Maroc
        </option>
        <option value="Africa/Niamey" data-spec="select-option">
          (GMT+0100) heure : Niger
        </option>
        <option value="Africa/Lagos" data-spec="select-option">
          (GMT+0100) heure : Nigéria
        </option>
        <option value="Europe/Lisbon" data-spec="select-option">
          (GMT+0100) heure : Portugal (Lisbonne)
        </option>
        <option value="Atlantic/Madeira" data-spec="select-option">
          (GMT+0100) heure : Portugal (Madère)
        </option>
        <option value="Africa/Bangui" data-spec="select-option">
          (GMT+0100) heure : République centrafricaine
        </option>
        <option value="Europe/London" data-spec="select-option">
          (GMT+0100) heure : Royaume-Uni
        </option>
        <option value="Africa/El_Aaiun" data-spec="select-option">
          (GMT+0100) heure : Sahara occidental
        </option>
        <option value="Africa/Ndjamena" data-spec="select-option">
          (GMT+0100) heure : Tchad
        </option>
        <option value="Africa/Tunis" data-spec="select-option">
          (GMT+0100) heure : Tunisie
        </option>
        <option value="Africa/Johannesburg" data-spec="select-option">
          (GMT+0200) heure : Afrique du Sud
        </option>
        <option value="Europe/Tirane" data-spec="select-option">
          (GMT+0200) heure : Albanie
        </option>
        <option value="Europe/Berlin" data-spec="select-option">
          (GMT+0200) heure : Allemagne (Berlin)
        </option>
        <option value="Europe/Busingen" data-spec="select-option">
          (GMT+0200) heure : Allemagne (Büsingen)
        </option>
        <option value="Europe/Andorra" data-spec="select-option">
          (GMT+0200) heure : Andorre
        </option>
        <option value="Europe/Vienna" data-spec="select-option">
          (GMT+0200) heure : Autriche
        </option>
        <option value="Europe/Brussels" data-spec="select-option">
          (GMT+0200) heure : Belgique
        </option>
        <option value="Europe/Sarajevo" data-spec="select-option">
          (GMT+0200) heure : Bosnie-Herzégovine
        </option>
        <option value="Africa/Gaborone" data-spec="select-option">
          (GMT+0200) heure : Botswana
        </option>
        <option value="Africa/Bujumbura" data-spec="select-option">
          (GMT+0200) heure : Burundi
        </option>
        <option value="Africa/Lubumbashi" data-spec="select-option">
          (GMT+0200) heure : Congo-Kinshasa (Lubumbashi)
        </option>
        <option value="Europe/Zagreb" data-spec="select-option">
          (GMT+0200) heure : Croatie
        </option>
        <option value="Europe/Copenhagen" data-spec="select-option">
          (GMT+0200) heure : Danemark
        </option>
        <option value="Africa/Cairo" data-spec="select-option">
          (GMT+0200) heure : Égypte
        </option>
        <option value="Africa/Ceuta" data-spec="select-option">
          (GMT+0200) heure : Espagne (Ceuta)
        </option>
        <option value="Europe/Madrid" data-spec="select-option">
          (GMT+0200) heure : Espagne (Madrid)
        </option>
        <option value="Europe/Vatican" data-spec="select-option">
          (GMT+0200) heure : État de la Cité du Vatican
        </option>
        <option value="Europe/Paris" selected data-spec="select-option">
          (GMT+0200) heure : France
        </option>
        <option value="Europe/Gibraltar" data-spec="select-option">
          (GMT+0200) heure : Gibraltar
        </option>
        <option value="Europe/Budapest" data-spec="select-option">
          (GMT+0200) heure : Hongrie
        </option>
        <option value="Europe/Rome" data-spec="select-option">
          (GMT+0200) heure : Italie
        </option>
        <option value="Africa/Maseru" data-spec="select-option">
          (GMT+0200) heure : Lesotho
        </option>
        <option value="Africa/Tripoli" data-spec="select-option">
          (GMT+0200) heure : Libye
        </option>
        <option value="Europe/Vaduz" data-spec="select-option">
          (GMT+0200) heure : Liechtenstein
        </option>
        <option value="Europe/Luxembourg" data-spec="select-option">
          (GMT+0200) heure : Luxembourg
        </option>
        <option value="Europe/Skopje" data-spec="select-option">
          (GMT+0200) heure : Macédoine
        </option>
        <option value="Africa/Blantyre" data-spec="select-option">
          (GMT+0200) heure : Malawi
        </option>
        <option value="Europe/Malta" data-spec="select-option">
          (GMT+0200) heure : Malte
        </option>
        <option value="Europe/Monaco" data-spec="select-option">
          (GMT+0200) heure : Monaco
        </option>
        <option value="Antarctica/Troll" data-spec="select-option">
          (GMT+0200) heure : Monde (Troll)
        </option>
        <option value="Europe/Podgorica" data-spec="select-option">
          (GMT+0200) heure : Monténégro
        </option>
        <option value="Africa/Maputo" data-spec="select-option">
          (GMT+0200) heure : Mozambique
        </option>
        <option value="Africa/Windhoek" data-spec="select-option">
          (GMT+0200) heure : Namibie
        </option>
        <option value="Europe/Oslo" data-spec="select-option">
          (GMT+0200) heure : Norvège
        </option>
        <option value="Europe/Amsterdam" data-spec="select-option">
          (GMT+0200) heure : Pays-Bas
        </option>
        <option value="Europe/Warsaw" data-spec="select-option">
          (GMT+0200) heure : Pologne
        </option>
        <option value="Europe/Prague" data-spec="select-option">
          (GMT+0200) heure : République tchèque
        </option>
        <option value="Europe/Kaliningrad" data-spec="select-option">
          (GMT+0200) heure : Russie (Kaliningrad)
        </option>
        <option value="Africa/Kigali" data-spec="select-option">
          (GMT+0200) heure : Rwanda
        </option>
        <option value="Europe/San_Marino" data-spec="select-option">
          (GMT+0200) heure : Saint-Marin
        </option>
        <option value="Europe/Belgrade" data-spec="select-option">
          (GMT+0200) heure : Serbie
        </option>
        <option value="Europe/Bratislava" data-spec="select-option">
          (GMT+0200) heure : Slovaquie
        </option>
        <option value="Europe/Ljubljana" data-spec="select-option">
          (GMT+0200) heure : Slovénie
        </option>
        <option value="Africa/Khartoum" data-spec="select-option">
          (GMT+0200) heure : Soudan
        </option>
        <option value="Europe/Stockholm" data-spec="select-option">
          (GMT+0200) heure : Suède
        </option>
        <option value="Europe/Zurich" data-spec="select-option">
          (GMT+0200) heure : Suisse
        </option>
        <option value="Arctic/Longyearbyen" data-spec="select-option">
          (GMT+0200) heure : Svalbard et Jan Mayen
        </option>
        <option value="Africa/Mbabane" data-spec="select-option">
          (GMT+0200) heure : Swaziland
        </option>
        <option value="Africa/Lusaka" data-spec="select-option">
          (GMT+0200) heure : Zambie
        </option>
        <option value="Africa/Harare" data-spec="select-option">
          (GMT+0200) heure : Zimbabwe
        </option>
        <option value="Antarctica/Syowa" data-spec="select-option">
          (GMT+0300) heure : Antarctique (Showa)
        </option>
        <option value="Asia/Riyadh" data-spec="select-option">
          (GMT+0300) heure : Arabie saoudite
        </option>
        <option value="Asia/Bahrain" data-spec="select-option">
          (GMT+0300) heure : Bahreïn
        </option>
        <option value="Europe/Minsk" data-spec="select-option">
          (GMT+0300) heure : Biélorussie
        </option>
        <option value="Europe/Sofia" data-spec="select-option">
          (GMT+0300) heure : Bulgarie
        </option>
        <option value="Asia/Nicosia" data-spec="select-option">
          (GMT+0300) heure : Chypre
        </option>
        <option value="Indian/Comoro" data-spec="select-option">
          (GMT+0300) heure : Comores
        </option>
        <option value="Africa/Djibouti" data-spec="select-option">
          (GMT+0300) heure : Djibouti
        </option>
        <option value="Africa/Asmara" data-spec="select-option">
          (GMT+0300) heure : Érythrée
        </option>
        <option value="Europe/Tallinn" data-spec="select-option">
          (GMT+0300) heure : Estonie
        </option>
        <option value="Africa/Addis_Ababa" data-spec="select-option">
          (GMT+0300) heure : Éthiopie
        </option>
        <option value="Europe/Helsinki" data-spec="select-option">
          (GMT+0300) heure : Finlande
        </option>
        <option value="Europe/Athens" data-spec="select-option">
          (GMT+0300) heure : Grèce
        </option>
        <option value="Europe/Mariehamn" data-spec="select-option">
          (GMT+0300) heure : Îles Åland
        </option>
        <option value="Asia/Baghdad" data-spec="select-option">
          (GMT+0300) heure : Irak
        </option>
        <option value="Asia/Jerusalem" data-spec="select-option">
          (GMT+0300) heure : Israël
        </option>
        <option value="Asia/Amman" data-spec="select-option">
          (GMT+0300) heure : Jordanie
        </option>
        <option value="Africa/Nairobi" data-spec="select-option">
          (GMT+0300) heure : Kenya
        </option>
        <option value="Asia/Kuwait" data-spec="select-option">
          (GMT+0300) heure : Koweït
        </option>
        <option value="Europe/Riga" data-spec="select-option">
          (GMT+0300) heure : Lettonie
        </option>
        <option value="Asia/Beirut" data-spec="select-option">
          (GMT+0300) heure : Liban
        </option>
        <option value="Europe/Vilnius" data-spec="select-option">
          (GMT+0300) heure : Lituanie
        </option>
        <option value="Indian/Antananarivo" data-spec="select-option">
          (GMT+0300) heure : Madagascar
        </option>
        <option value="Indian/Mayotte" data-spec="select-option">
          (GMT+0300) heure : Mayotte
        </option>
        <option value="Europe/Chisinau" data-spec="select-option">
          (GMT+0300) heure : Moldavie
        </option>
        <option value="Asia/Gaza" data-spec="select-option">
          (GMT+0300) heure : Monde (Gaza)
        </option>
        <option value="Asia/Hebron" data-spec="select-option">
          (GMT+0300) heure : Monde (Hébron)
        </option>
        <option value="Africa/Kampala" data-spec="select-option">
          (GMT+0300) heure : Ouganda
        </option>
        <option value="Asia/Qatar" data-spec="select-option">
          (GMT+0300) heure : Qatar
        </option>
        <option value="Europe/Bucharest" data-spec="select-option">
          (GMT+0300) heure : Roumanie
        </option>
        <option value="Europe/Moscow" data-spec="select-option">
          (GMT+0300) heure : Russie (Moscou)
        </option>
        <option value="Europe/Simferopol" data-spec="select-option">
          (GMT+0300) heure : Russie (Simferopol)
        </option>
        <option value="Africa/Mogadishu" data-spec="select-option">
          (GMT+0300) heure : Somalie
        </option>
        <option value="Africa/Juba" data-spec="select-option">
          (GMT+0300) heure : Soudan du Sud
        </option>
        <option value="Asia/Damascus" data-spec="select-option">
          (GMT+0300) heure : Syrie
        </option>
        <option value="Africa/Dar_es_Salaam" data-spec="select-option">
          (GMT+0300) heure : Tanzanie
        </option>
        <option value="Europe/Istanbul" data-spec="select-option">
          (GMT+0300) heure : Turquie
        </option>
        <option value="Europe/Kiev" data-spec="select-option">
          (GMT+0300) heure : Ukraine (Kiev)
        </option>
        <option value="Europe/Uzhgorod" data-spec="select-option">
          (GMT+0300) heure : Ukraine (Oujgorod)
        </option>
        <option value="Europe/Zaporozhye" data-spec="select-option">
          (GMT+0300) heure : Ukraine (Zaporojie)
        </option>
        <option value="Asia/Aden" data-spec="select-option">
          (GMT+0300) heure : Yémen
        </option>
        <option value="Asia/Famagusta" data-spec="select-option">
          (GMT+0300) heure : région indéterminée (Famagusta)
        </option>
        <option value="Europe/Kirov" data-spec="select-option">
          (GMT+0300) heure : région indéterminée (Kirov)
        </option>
        <option value="Asia/Yerevan" data-spec="select-option">
          (GMT+0400) heure : Arménie
        </option>
        <option value="Asia/Baku" data-spec="select-option">
          (GMT+0400) heure : Azerbaïdjan
        </option>
        <option value="Asia/Dubai" data-spec="select-option">
          (GMT+0400) heure : Émirats arabes unis
        </option>
        <option value="Asia/Tbilisi" data-spec="select-option">
          (GMT+0400) heure : Géorgie
        </option>
        <option value="Indian/Reunion" data-spec="select-option">
          (GMT+0400) heure : La Réunion
        </option>
        <option value="Indian/Mauritius" data-spec="select-option">
          (GMT+0400) heure : Maurice
        </option>
        <option value="Asia/Muscat" data-spec="select-option">
          (GMT+0400) heure : Oman
        </option>
        <option value="Europe/Samara" data-spec="select-option">
          (GMT+0400) heure : Russie (Samara)
        </option>
        <option value="Europe/Volgograd" data-spec="select-option">
          (GMT+0400) heure : Russie (Volgograd)
        </option>
        <option value="Indian/Mahe" data-spec="select-option">
          (GMT+0400) heure : Seychelles
        </option>
        <option value="Europe/Astrakhan" data-spec="select-option">
          (GMT+0400) heure : région indéterminée (Astrakhan)
        </option>
        <option value="Europe/Saratov" data-spec="select-option">
          (GMT+0400) heure : région indéterminée (Saratov)
        </option>
        <option value="Europe/Ulyanovsk" data-spec="select-option">
          (GMT+0400) heure : région indéterminée (Ulyanovsk)
        </option>
        <option value="Asia/Kabul" data-spec="select-option">
          (GMT+0430) heure : Afghanistan
        </option>
        <option value="Asia/Tehran" data-spec="select-option">
          (GMT+0430) heure : Iran
        </option>
        <option value="Antarctica/Mawson" data-spec="select-option">
          (GMT+0500) heure : Antarctique (Mawson)
        </option>
        <option value="Asia/Aqtau" data-spec="select-option">
          (GMT+0500) heure : Kazakhstan (Aktaou)
        </option>
        <option value="Asia/Aqtobe" data-spec="select-option">
          (GMT+0500) heure : Kazakhstan (Aktioubinsk)
        </option>
        <option value="Asia/Qyzylorda" data-spec="select-option">
          (GMT+0500) heure : Kazakhstan (Kzyl Orda)
        </option>
        <option value="Asia/Oral" data-spec="select-option">
          (GMT+0500) heure : Kazakhstan (Ouralsk)
        </option>
        <option value="Indian/Maldives" data-spec="select-option">
          (GMT+0500) heure : Maldives
        </option>
        <option value="Asia/Samarkand" data-spec="select-option">
          (GMT+0500) heure : Ouzbékistan (Samarcande)
        </option>
        <option value="Asia/Tashkent" data-spec="select-option">
          (GMT+0500) heure : Ouzbékistan (Tachkent)
        </option>
        <option value="Asia/Karachi" data-spec="select-option">
          (GMT+0500) heure : Pakistan
        </option>
        <option value="Asia/Yekaterinburg" data-spec="select-option">
          (GMT+0500) heure : Russie (Ekaterinbourg)
        </option>
        <option value="Asia/Dushanbe" data-spec="select-option">
          (GMT+0500) heure : Tadjikistan
        </option>
        <option value="Indian/Kerguelen" data-spec="select-option">
          (GMT+0500) heure : Terres australes françaises
        </option>
        <option value="Asia/Ashgabat" data-spec="select-option">
          (GMT+0500) heure : Turkménistan
        </option>
        <option value="Asia/Atyrau" data-spec="select-option">
          (GMT+0500) heure : région indéterminée (Atyrau)
        </option>
        <option value="Asia/Kolkata" data-spec="select-option">
          (GMT+0530) heure : Inde
        </option>
        <option value="Asia/Colombo" data-spec="select-option">
          (GMT+0530) heure : Sri Lanka
        </option>
        <option value="Asia/Kathmandu" data-spec="select-option">
          (GMT+0545) heure : Népal
        </option>
        <option value="Antarctica/Vostok" data-spec="select-option">
          (GMT+0600) heure : Antarctique (Vostok)
        </option>
        <option value="Asia/Dhaka" data-spec="select-option">
          (GMT+0600) heure : Bangladesh
        </option>
        <option value="Asia/Thimphu" data-spec="select-option">
          (GMT+0600) heure : Bhoutan
        </option>
        <option value="Asia/Urumqi" data-spec="select-option">
          (GMT+0600) heure : Chine (Ürümqi)
        </option>
        <option value="Asia/Almaty" data-spec="select-option">
          (GMT+0600) heure : Kazakhstan (Alma Ata)
        </option>
        <option value="Asia/Bishkek" data-spec="select-option">
          (GMT+0600) heure : Kirghizistan
        </option>
        <option value="Asia/Omsk" data-spec="select-option">
          (GMT+0600) heure : Russie (Omsk)
        </option>
        <option value="Indian/Chagos" data-spec="select-option">
          (GMT+0600) heure : Territoire britannique de l’océan Indien
        </option>
        <option value="Asia/Qostanay" data-spec="select-option">
          (GMT+0600) heure : région indéterminée (Qostanay)
        </option>
        <option value="Indian/Cocos" data-spec="select-option">
          (GMT+0630) heure : Îles Cocos
        </option>
        <option value="Asia/Rangoon" data-spec="select-option">
          (GMT+0630) heure : Myanmar (Birmanie)
        </option>
        <option value="Asia/Yangon" data-spec="select-option">
          (GMT+0630) heure : région indéterminée (Yangon)
        </option>
        <option value="Antarctica/Davis" data-spec="select-option">
          (GMT+0700) heure : Antarctique (Davis)
        </option>
        <option value="Asia/Phnom_Penh" data-spec="select-option">
          (GMT+0700) heure : Cambodge
        </option>
        <option value="Indian/Christmas" data-spec="select-option">
          (GMT+0700) heure : Île Christmas
        </option>
        <option value="Asia/Jakarta" data-spec="select-option">
          (GMT+0700) heure : Indonésie (Jakarta)
        </option>
        <option value="Asia/Pontianak" data-spec="select-option">
          (GMT+0700) heure : Indonésie (Pontianak)
        </option>
        <option value="Asia/Vientiane" data-spec="select-option">
          (GMT+0700) heure : Laos
        </option>
        <option value="Asia/Hovd" data-spec="select-option">
          (GMT+0700) heure : Monde (Hovd)
        </option>
        <option value="Asia/Krasnoyarsk" data-spec="select-option">
          (GMT+0700) heure : Russie (Krasnoïarsk)
        </option>
        <option value="Asia/Novokuznetsk" data-spec="select-option">
          (GMT+0700) heure : Russie (Novokuznetsk)
        </option>
        <option value="Asia/Novosibirsk" data-spec="select-option">
          (GMT+0700) heure : Russie (Novossibirsk)
        </option>
        <option value="Asia/Bangkok" data-spec="select-option">
          (GMT+0700) heure : Thaïlande
        </option>
        <option value="Asia/Ho_Chi_Minh" data-spec="select-option">
          (GMT+0700) heure : Vietnam
        </option>
        <option value="Asia/Barnaul" data-spec="select-option">
          (GMT+0700) heure : région indéterminée (Barnaul)
        </option>
        <option value="Asia/Tomsk" data-spec="select-option">
          (GMT+0700) heure : région indéterminée (Tomsk)
        </option>
        <option value="Antarctica/Casey" data-spec="select-option">
          (GMT+0800) heure : Antarctique (Casey)
        </option>
        <option value="Australia/Perth" data-spec="select-option">
          (GMT+0800) heure : Australie (Perth)
        </option>
        <option value="Asia/Brunei" data-spec="select-option">
          (GMT+0800) heure : Brunéi Darussalam
        </option>
        <option value="Asia/Shanghai" data-spec="select-option">
          (GMT+0800) heure : Chine (Shanghai)
        </option>
        <option value="Asia/Makassar" data-spec="select-option">
          (GMT+0800) heure : Indonésie (Macassar)
        </option>
        <option value="Asia/Kuala_Lumpur" data-spec="select-option">
          (GMT+0800) heure : Malaisie (Kuala Lumpur)
        </option>
        <option value="Asia/Kuching" data-spec="select-option">
          (GMT+0800) heure : Malaisie (Kuching)
        </option>
        <option value="Asia/Ulaanbaatar" data-spec="select-option">
          (GMT+0800) heure : Mongolie (Oulan-Bator)
        </option>
        <option value="Asia/Choibalsan" data-spec="select-option">
          (GMT+0800) heure : Mongolie (Tchoïbalsan)
        </option>
        <option value="Asia/Manila" data-spec="select-option">
          (GMT+0800) heure : Philippines
        </option>
        <option value="Asia/Hong_Kong" data-spec="select-option">
          (GMT+0800) heure : R.A.S. chinoise de Hong Kong
        </option>
        <option value="Asia/Macau" data-spec="select-option">
          (GMT+0800) heure : R.A.S. chinoise de Macao
        </option>
        <option value="Asia/Irkutsk" data-spec="select-option">
          (GMT+0800) heure : Russie (Irkoutsk)
        </option>
        <option value="Asia/Singapore" data-spec="select-option">
          (GMT+0800) heure : Singapour
        </option>
        <option value="Asia/Taipei" data-spec="select-option">
          (GMT+0800) heure : Taïwan
        </option>
        <option value="Australia/Eucla" data-spec="select-option">
          (GMT+0845) heure : Monde (Eucla)
        </option>
        <option value="Asia/Pyongyang" data-spec="select-option">
          (GMT+0900) heure : Corée du Nord
        </option>
        <option value="Asia/Seoul" data-spec="select-option">
          (GMT+0900) heure : Corée du Sud
        </option>
        <option value="Asia/Jayapura" data-spec="select-option">
          (GMT+0900) heure : Indonésie (Jayapura)
        </option>
        <option value="Asia/Tokyo" data-spec="select-option">
          (GMT+0900) heure : Japon
        </option>
        <option value="Pacific/Palau" data-spec="select-option">
          (GMT+0900) heure : Palaos
        </option>
        <option value="Asia/Yakutsk" data-spec="select-option">
          (GMT+0900) heure : Russie (Iakoutsk)
        </option>
        <option value="Asia/Khandyga" data-spec="select-option">
          (GMT+0900) heure : Russie (Khandyga)
        </option>
        <option value="Asia/Chita" data-spec="select-option">
          (GMT+0900) heure : Russie (Tchita)
        </option>
        <option value="Asia/Dili" data-spec="select-option">
          (GMT+0900) heure : Timor oriental
        </option>
        <option value="Australia/Adelaide" data-spec="select-option">
          (GMT+0930) heure : Australie (Adélaïde)
        </option>
        <option value="Australia/Broken_Hill" data-spec="select-option">
          (GMT+0930) heure : Australie (Broken Hill)
        </option>
        <option value="Australia/Darwin" data-spec="select-option">
          (GMT+0930) heure : Australie (Darwin)
        </option>
        <option value="Antarctica/DumontDUrville" data-spec="select-option">
          (GMT+1000) heure : Antarctique (Dumont d’Urville)
        </option>
        <option value="Australia/Brisbane" data-spec="select-option">
          (GMT+1000) heure : Australie (Brisbane)
        </option>
        <option value="Australia/Currie" data-spec="select-option">
          (GMT+1000) heure : Australie (Currie)
        </option>
        <option value="Australia/Hobart" data-spec="select-option">
          (GMT+1000) heure : Australie (Hobart)
        </option>
        <option value="Australia/Lindeman" data-spec="select-option">
          (GMT+1000) heure : Australie (Lindeman)
        </option>
        <option value="Australia/Melbourne" data-spec="select-option">
          (GMT+1000) heure : Australie (Melbourne)
        </option>
        <option value="Australia/Sydney" data-spec="select-option">
          (GMT+1000) heure : Australie (Sydney)
        </option>
        <option value="Pacific/Chuuk" data-spec="select-option">
          (GMT+1000) heure : États fédérés de Micronésie (Chuuk)
        </option>
        <option value="Pacific/Guam" data-spec="select-option">
          (GMT+1000) heure : Guam
        </option>
        <option value="Pacific/Saipan" data-spec="select-option">
          (GMT+1000) heure : Îles Mariannes du Nord
        </option>
        <option value="Pacific/Port_Moresby" data-spec="select-option">
          (GMT+1000) heure : Papouasie-Nouvelle-Guinée (Port Moresby)
        </option>
        <option value="Asia/Ust-Nera" data-spec="select-option">
          (GMT+1000) heure : Russie (Ust-Nera)
        </option>
        <option value="Asia/Vladivostok" data-spec="select-option">
          (GMT+1000) heure : Russie (Vladivostok)
        </option>
        <option value="Australia/Lord_Howe" data-spec="select-option">
          (GMT+1030) heure : Monde (Lord Howe)
        </option>
        <option value="Antarctica/Macquarie" data-spec="select-option">
          (GMT+1100) heure : Australie (Macquarie)
        </option>
        <option value="Pacific/Kosrae" data-spec="select-option">
          (GMT+1100) heure : États fédérés de Micronésie (Kosrae)
        </option>
        <option value="Pacific/Pohnpei" data-spec="select-option">
          (GMT+1100) heure : États fédérés de Micronésie (Pohnpei)
        </option>
        <option value="Pacific/Norfolk" data-spec="select-option">
          (GMT+1100) heure : Île Norfolk
        </option>
        <option value="Pacific/Guadalcanal" data-spec="select-option">
          (GMT+1100) heure : Îles Salomon
        </option>
        <option value="Pacific/Noumea" data-spec="select-option">
          (GMT+1100) heure : Nouvelle-Calédonie
        </option>
        <option value="Pacific/Bougainville" data-spec="select-option">
          (GMT+1100) heure : Papouasie-Nouvelle-Guinée (Bougainville)
        </option>
        <option value="Asia/Magadan" data-spec="select-option">
          (GMT+1100) heure : Russie (Magadan)
        </option>
        <option value="Asia/Sakhalin" data-spec="select-option">
          (GMT+1100) heure : Russie (Sakhaline)
        </option>
        <option value="Asia/Srednekolymsk" data-spec="select-option">
          (GMT+1100) heure : Russie (Srednekolymsk)
        </option>
        <option value="Pacific/Efate" data-spec="select-option">
          (GMT+1100) heure : Vanuatu
        </option>
        <option value="Antarctica/McMurdo" data-spec="select-option">
          (GMT+1200) heure : Antarctique (McMurdo)
        </option>
        <option value="Pacific/Fiji" data-spec="select-option">
          (GMT+1200) heure : Fidji
        </option>
        <option value="Pacific/Kwajalein" data-spec="select-option">
          (GMT+1200) heure : Îles Marshall (Kwajalein)
        </option>
        <option value="Pacific/Majuro" data-spec="select-option">
          (GMT+1200) heure : Îles Marshall (Majuro)
        </option>
        <option value="Pacific/Wake" data-spec="select-option">
          (GMT+1200) heure : Îles mineures éloignées des États-Unis (Wake)
        </option>
        <option value="Pacific/Tarawa" data-spec="select-option">
          (GMT+1200) heure : Kiribati (Tarawa)
        </option>
        <option value="Pacific/Nauru" data-spec="select-option">
          (GMT+1200) heure : Nauru
        </option>
        <option value="Pacific/Auckland" data-spec="select-option">
          (GMT+1200) heure : Nouvelle-Zélande
        </option>
        <option value="Asia/Anadyr" data-spec="select-option">
          (GMT+1200) heure : Russie (Anadyr)
        </option>
        <option value="Asia/Kamchatka" data-spec="select-option">
          (GMT+1200) heure : Russie (Kamtchatka)
        </option>
        <option value="Pacific/Funafuti" data-spec="select-option">
          (GMT+1200) heure : Tuvalu
        </option>
        <option value="Pacific/Wallis" data-spec="select-option">
          (GMT+1200) heure : Wallis-et-Futuna
        </option>
        <option value="Pacific/Chatham" data-spec="select-option">
          (GMT+1245) heure : Monde (Chatham)
        </option>
        <option value="Pacific/Enderbury" data-spec="select-option">
          (GMT+1300) heure : Kiribati (Enderbury)
        </option>
        <option value="Pacific/Apia" data-spec="select-option">
          (GMT+1300) heure : Samoa
        </option>
        <option value="Pacific/Fakaofo" data-spec="select-option">
          (GMT+1300) heure : Tokélaou
        </option>
        <option value="Pacific/Tongatapu" data-spec="select-option">
          (GMT+1300) heure : Tonga
        </option>
        <option value="Pacific/Kiritimati" data-spec="select-option">
          (GMT+1400) heure : Kiribati (Kiritimati)
        </option>
      </select>
      <button onClick={handleClick}>Save</button>
      <button onClick={getLastDate}>GetLastDate</button>
    </div>
  );
}

export default App;
