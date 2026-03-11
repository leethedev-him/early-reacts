const allNames = {
  female: [
    // Native (≈172)
    "Adaeze","Adanna","Adaugo","Adaobi","Chiamaka","Chidinma","Chisom","Chioma","Chizoba","Chika",
    "Nkechi","Ngozi","Uchechi","Ifunanya","Ifeoma","Amarachi","Somto","Kamsiyochukwu","Chidera","Obianuju",
    "Oluchi","Ogechi","Onyinye","Chinelo","Chinyere","Chisara","Chibuzo","Chikaima","Chizaram","Uchenna",
    "Yetunde","Folake","Temitope","Tosin","Bukola","Kemi","Ronke","Funke","Bimpe","Ladun",
    "Morounkeji","Dupe","Sade","Abimbola","Adeola","Omowunmi","Tolulope","Anuoluwapo","Temiloluwa","Oluwaseun",
    "Oluwatoyin","Oluwafunmilayo","Oluwadamilola","Oluwaseyi","Oluwabunmi","Oluwatobiloba","Oluwakemi","Oluwatumininu","Oluwadarasimi","Oluwatomisin",
    "Ireti","Ayobami","Adebimpe","Adesola","Adetola","Adetoun","Aanuoluwapo","Simisola","Aramide","Damilola",
    "Efe","Efemena","Ejiro","Onome","Ejiroghene","Oghenekaro","Oghenerukevwe","Ogheneyoma","Oghenetega","Oghenebrorhie",
    "Morenike","Yetty","Titilayo","Sikiratu","Rukayat","Kudirat","Zainabu","Hauwa","Aishatu","Hadiza",
    "Fatimah","Rabi","Khadijat","Maryam","Halima","Asabe","Talatu","Bilkisu","Jamila","Safiya",
    "Amina","Nafisa","Zulaiha","Rahama","Habiba","Yewande","Oreoluwa","Tiwalade","Ifedayo","Ifedolapo",
    "Abisola","Abiola","Anike","Afolabiya","Ibijoke","Ibironke","Ifeoluwa","Ifeoluwapo","Ifeoluwatobi","Ifeoluwaseun",
    "Mojisola","Seyiloluwa","Feyisayo","Doyinsola","Kehinde","Taiwo","Idowu","Opeyemi","Oluwatosin","Oluwafisayo",
    "Chukwudumebi","Chukwudalu","Chukwuma","Chukwunonso","Chukwuebuka","Chukwumaeka","Chukwunenye","Chukwumaogo","Chukwudera","Chukwumamodum",
    "Nnenna","Nkiru","Obiageli","Obioma","Obiomaeze","Ugochi","Ugochukwu","Ucheoma","Uchechukwu","Uchenma",
    "Ihuoma","Somkene","Somadina","Somtochukwu","Somchukwu","Chimamanda","Chimaobi","Chimaraoke","Chimnazaekpere","Chimnonso",
    "Esosa","Osayemwen","Osariemen","Osarugue","Ehi","Ehis","Ehimwenma","Osaigbovo","Osato","Osasere",
    "Iniobong","Imaobong","Nsikan","Mfon","Uduak","Emem","Anietie","Idara","Itoro","Iboro",
    "Folasade","Olamide"
  ],

  male: [
    // Native (≈172)
    "Chinedu","Chukwudi","Chukwuebuka","Chukwuma","Chukwunonso","Chukwudiogo","Chukwumaeka","Chukwudalu","Chukwudera","Chukwudiemeka",
    "Obinna","Obioma","Obiora","Obiefuna","Obiajulu","Uche","Ugochukwu","Ugo","Nnamdi","Ikechukwu",
    "Kelechi","Somtochukwu","Somadina","Chima","Chimaobi","Chimaroke","Chimnonso","Chimankpa","Chimex","Chidiebere",
    "Olumide","Olamide","Oluwaseun","Oluwatosin","Oluwatobi","Oluwadamilola","Oluwafemi","Oluwaseyi","Oluwabunmi","Oluwatoyin",
    "Adeola","Adetola","Adedayo","Adetunji","Adebayo","Afolabi","Ayodele","Ayomide","Ayobami","Ayoola",
    "Temitope","Tosin","Tolulope","Tunde","Kunle","Femi","Segun","Babatunde","Opeyemi","Damilola",
    "Efe","Efemena","Ejiro","Onome","Oghenekaro","Oghenetega","Oghenerukevwe","Oghenebrorhie","Ogheneyoma","Oghenefejiro",
    "Esosa","Osayemwen","Osariemen","Osagie","Osamudiamen","Ehimwenma","Eghosa","Osaigbovo","Osatohanmwen","Osahon",
    "Sani","Musa","Ibrahim","Abdullahi","Usman","Haruna","Kabiru","Bello","Yusuf","Garba",
    "Abubakar","Nasir","Suleiman","Auwal","Mustapha","Shehu","Sadiq","Rashid","Aminu","Isah",
    "Idris","Yakubu","Aliyu","Hassan","Hussaini","Zubairu","Salihu","Hamza","Habibu","Lawal",
    "Iniobong","Nsikan","Mfon","Uduak","Emem","Anietie","Idara","Itoro","Iboro","Ime",
    "Tamuno","Barinua","Ibiso","Alabo","Tonye","Preye","Seiyefa","Ibiye","Furo","Piriye",
    "Tersoo","Iorliam","Mlumun","Aondofa","Terhemba","Orkuma","Gondo","Iorwuese","Torkuma","Tyowua",
    "Ogheneochuko","Oghenetega","Ogheneruno","Oghenero","Oghenekevwe","Oghenebrume","Oghenerume","Ogheneme","Oghenewaro","Oghenetare",
    "Chisom","Chidera","Chinonso","Chidozie","Chibuike","Chukwunenye","Chukwunweike","Chukwudiemeka","Chukwudubem","Chukwunazaekpere",
    "Ifeanyi","Ifedayo","Ifedolapo","Ifeoluwa","Ifeoluwatobi","Ifeoluwaseun","Ifeoluwadarasimi","Ifeoluwatomisin","Ifeoluwatumininu","Ifetayo",
    "Kehinde","Taiwo","Idowu","Babajide","Boluwatife","Feyisayo","Seyifunmi","Moyosore","Moyosola","Doyinsola",
    "Chukwumaobim","Chukwumah","Chukwudimma","Chukwumaemeka","Chukwunazaekpere","Chukwunweike","Chukwudaluemeka","Chukwunenyeoma","Chukwudaluogo","Chukwudaluobi"
  ],

  lastNames: [
    "Okafor","Okoro","Okeke","Eze","Ezeh","Ezeani","Ezedinma","Umeh","Ugwu","Nwankwo",
    "Nwachukwu","Nwosu","Onyema","Onwuka","Onwudiwe","Onwuegbuzie","Onyedika","Onyekachi","Onyeukwu","Onyebuchi",
    "Adebayo","Adeyemi","Adewale","Adelaja","Ademola","Adeniran","Akinyemi","Akinwale","Akinola","Akinsanya",
    "Balogun","Bamidele","Banjoko","Bello","Bakare","Babatunde","Banjide","Fashola","Fayemi","Folarin",
    "Ogunleye","Ogunlade","Ogunyemi","Ogundele","Ogundipe","Ogunsanya","Ogunsola","Ogunbiyi","Ogunrinde","Ogunjobi",
    "Salami","Soyinka","Shonibare","Sule","Suleiman","Sani","Shehu","Sadiq","Sambo","Salisu",
    "Danladi","Danjuma","Dantata","Dangote","Dikko","Dutse","Dawodu","Dauda","Dare","Danjibo",
    "Ighodaro","Igbinedion","Igbinovia","Igbinoba","Igbinosa","Idahosa","Idehen","Imasogie","Imoudu","Iyamu",
    "Okojie","Okonkwo","Okoye","Okpara","Okoli","Okwara","Okon","Okonji","Okonjo","Okpala",
    "Essien","Etim","Ekanem","Ekong","Edet","Effiong","Eno","Ufot","Udoh","Umoh",
    "Briggs","George","West","Hart","Lawson","Duke","Cole","Green","King","Young",
    "Tamunotonye","Tamunopriye","Alagoa","Iyalla","Bobmanuel","Fiberesima","Harry","Pepple","Wariboko","Abiye",
    "Tersoo","Iorliam","Aondofa","Orkuma","Gondo","Tyowua","Terhemba","Mlumun","Torkuma","Iorwuese",
    "Chukwurah","Chukwunyere","Chukwujekwu","Chukwukadibia","Chukwumerije","Chukwuneke","Chukwudebelu","Chukwudalu","Chukwudiya","Chukwunwike",
    "Mohammed","Abdullahi","Garba","Yaro","Bature","Gusau","Kano","Zaria","Sokoto","Katsina",
    "Nnaji","Nnanna","Nnadozie","Nnajiofor","Nnolim","Nnoke","Nnanyelugo","Nnadi","Nnajide","Nnabuife",
    "Udo","Udofia","Udom","Uduaghan","Uduak","Udu","Uduh","Udensi","Ude","Udeh",
    "Ola","Oladipo","Olatunji","Olatunde","Olawale","Olayinka","Olasupo","Olasunkanmi","Olaseni","Olawoyin"
  ]
};

export default allNames;



const pick = (l) => Math.floor(Math.random() * l)


export function getFemaleName(){
	const picked = pick( allNames.female.length )
	return allNames.female[picked]
}

export function getMaleName(){
	const picked = pick( allNames.male.length )
	return allNames.male[picked]
}

export function getLastName(){
	const picked = pick( allNames.lastNames.length )
	return allNames.lastNames[picked]
}

