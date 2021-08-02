const POLYGON_TABLE_DATA = {
  title: 'POLYGON Network',
  heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
  rows: [
    ['Kyber DMM           ', `<a href="kyber"           >Various</a>`, 'KNC          ', 'https://dmm.exchange'],
    ['Quickswap           ', `<a href="quick"           >Various</a>`, 'QUICK        ', 'https://quickswap.exchange/#/quick'],
    ['Cometh              ', `<a href="cometh"          >Various</a>`, 'MUST         ', 'https://swap.cometh.io/#/stake'],
    ['Dark                ', `<a href="dark"            >Various</a>`, 'DB           ', 'https://www.dark.build'],
    ['Smartdex            ', `<a href="smartdex"        >Various</a>`, 'NIOX         ', 'https://swap.smartdex.app'],
    ['Elk *               ', `<a href="elk"             >Various</a>`, 'ELK          ', 'https://app.elk.finance'],
    ['Polywhale           ', `<a href="polywhale"       >Various</a>`, 'KRILL        ', 'https://polywhale.finance'],
    ['Aave                ', `<a href="aave"            >Various</a>`, 'MATIC        ', 'https://aave.com'],
    ['BullionFinance             ', `<a href="bullionfinance"         >Various</a>`, 'GOLD          ', 'https://bullionfinance.xyz'],
    ['Polyfox             ', `<a href="polyfox"         >Various</a>`, 'FOX          ', 'https://polyfox.finance'],
    ['Hawkdex             ', `<a href="hawk"            >Various</a>`, 'HAWK         ', 'https://hawkdex.com'],
    ['PolyDragon          ', `<a href="polydragon"      >Various</a>`, 'FIRE         ', 'https://polydragon.io'],
    ['Polycat             ', `<a href="polycat"         >Various</a>`, 'FISH         ', 'https://polycat.finance'],
    ['BoughtThe.top       ', `<a href="boughtthetop"    >Various</a>`, 'BTT          ', 'https://farm.BoughtThe.top'],
    ['PolyStarter         ', `<a href="polystarter"     >Various</a>`, 'STARTER      ', 'https://www.polystarter.fi'],
    ['Polyvolve           ', `<a href="polyvolve"       >Various</a>`, 'SPEAR        ', 'https://polyvolve.finance'],
    ['Polygaj             ', `<a href="polygaj"         >Various</a>`, 'GAJ          ', 'https://polygaj.finance'],
    ['Galaxy              ', `<a href="galaxy"          >Various</a>`, 'Various      ', 'https://galaxyfarm.routerprotocol.com'],
    ['GameSwap            ', `<a href="gameswap"        >Various</a>`, 'STONK        ', 'https://gameswapfinance.com'],
    ['Blackswap           ', `<a href="blackswap"       >Various</a>`, 'AURORA/SOLAR ', 'https://www.blackswap.finance'],
    ['Polycake            ', `<a href="polycake"        >Various</a>`, 'PCAKE        ', 'https://www.polycake.finance'],
    ['Polyrangers         ', `<a href="polyrangers"     >Various</a>`, 'RNG          ', 'https://polyrangers.finance'],
    ['Sushi               ', `<a href="sushi"           >Various</a>`, 'SUSHI        ', 'https://app.sushi.com'],
    ['Mai                 ', `<a href="mai"             >Various</a>`, 'Qi           ', 'https://www.mai.finance'],
    ['Polyshark           ', `<a href="polyshark"       >Various</a>`, 'SHARK        ', 'https://www.polyshark.finance'],
    ['Polyvalent          ', `<a href="polyvalent"      >Various</a>`, 'ELECTRON     ', 'https://www.polyvalent.finance'],
    ['Polyfi              ', `<a href="polyfi"          >Various</a>`, 'PolyFi       ', 'https://polyfi.io'],
    ['Polyape             ', `<a href="polyape"         >Various</a>`, 'Ape          ', 'https://www.polyape.online'],
    ['Polyzap             ', `<a href="polyzap"         >Various</a>`, 'PZAP         ', 'https://farm.polyzap.finance'],
    ['Gemstones Finance   ', `<a href="gemstonesfinance">Various</a>`, 'GMS          ', 'https://gemstones.finance'],
    ['Polypanda           ', `<a href="polypanda"       >Various</a>`, 'BAMBOO       ', 'https://polypanda.finance'],
    ['Dfyn *              ', `<a href="dfyn"            >Various</a>`, 'DFYN         ', 'https://exchange.dfyn.network'],
    ['Jurassic            ', `<a href="jurassic"        >Various</a>`, 'RAPTOR       ', 'https://www.jurassicfarm.app'],
    ['Beefy               ', `<a href="beefy"           >Various</a>`, 'Various      ', 'https://polygon.beefy.finance'],
    ['Monopoly            ', `<a href="monopoly"        >Various</a>`, 'MONO         ', 'https://monopolyfinance.xyz'],
    ['Polyce              ', `<a href="polyce"          >Various</a>`, 'CSI          ', 'https://polyce.io'],
    ['Lumberjack          ', `<a href="lumberjack"      >Various</a>`, 'ACORN        ', 'https://lumberjack.finance'],
    ['PolyPunk            ', `<a href="polypunk"        >Various</a>`, 'PPNK         ', 'https://polypunk.finance'],
    ['SteakHouse          ', `<a href="steakhouse"      >Various</a>`, 'STEAK        ', 'https://steakhouse.finance'],
    ['Monke Farm          ', `<a href="monkefarm"       >Various</a>`, 'MONKE        ', 'https://monkefarm.finance'],
    ['Polylion            ', `<a href="polylion"        >Various</a>`, 'LION         ', 'https://polylion.exchange'],
    ['PolyBull            ', `<a href="polybull"        >Various</a>`, 'BULL         ', 'https://polybull.finance'],
    ['Orcinus             ', `<a href="orcinus"         >Various</a>`, 'ORCA         ', 'https://www.orcinuslabs.ca'],
    ['Polyape Finance     ', `<a href="polyape_finance" >Various</a>`, 'APE          ', 'https://www.polyapefinance.com'],
    ['PolyWolf            ', `<a href="polywolf"        >Various</a>`, 'WOLF         ', 'https://polywolf.finance'],
    ['Stacker Ventures    ', `<a href="stacker-vc"      >Various</a>`, 'STACK        ', 'https://stacker.vc'],
    ['Polygoat            ', `<a href="polygoat"        >Various</a>`, 'GOAT         ', 'https://www.polygoat.finance'],
    ['Polysnake           ', `<a href="polysnake"       >Various</a>`, 'SNAKE        ', 'https://www.polysnake.finance'],
    ['Moonwolf            ', `<a href="moonwolf"        >Various</a>`, 'MOON         ', 'https://www.moonwolf.io'],
    ['Iron                ', `<a href="iron"            >Various</a>`, 'TITAN        ', 'https://polygon.iron.finance'],
    ['Alchemy Dao         ', `<a href="alchemydao"      >Various</a>`, 'ALCH         ', 'https://polygon.alchemydao.com'],
    ['Polycrab            ', `<a href="polycrab"        >Various</a>`, 'CRAB         ', 'https://polycrab.finance'],
    ['Polybear            ', `<a href="polybear"        >Various</a>`, 'BEAR         ', 'https://polybear.exchange'],
    ['StonkFarm           ', `<a href="stonkfarm"       >Various</a>`, 'STONKX       ', 'https://stonk.farm'],
    ['Polydex             ', `<a href="polydex"         >Various</a>`, 'PLX          ', 'https://polydex.fi'],
    ['PolyMaple           ', `<a href="polymaple"       >Various</a>`, 'MAPLE        ', 'https://www.polymaple.com'],
    ['Gravity Finance     ', `<a href="gravityfinance"  >Various</a>`, 'GFI          ', 'https://gravityfinance.io'],
    ['Smellycat           ', `<a href="smellycat"       >Various</a>`, 'PUSSY        ', 'https://www.smellycat.finance'],
    ['Polygold            ', `<a href="polygold"        >Various</a>`, 'POLYGOLD     ', 'https://polygold.finance'],
    ['Polyswan            ', `<a href="polyswan"        >Various</a>`, 'SWAN         ', 'https://www.polyswan.finance'],
    ['Polyion             ', `<a href="polyion"         >Various</a>`, 'LION         ', 'https://www.polyion.net'],
    ['Eleven              ', `<a href="eleven"          >Various</a>`, 'ELE          ', 'https://eleven.finance'],
    ['Pirate Dice         ', `<a href="piratedice"      >Various</a>`, 'BOOTY        ', 'http://piratedice.xyz'],
    ['PolyPingu           ', `<a href="polypingu"       >Various</a>`, 'PINGU        ', 'https://polypingu.finance'],
    ['Goldenbull          ', `<a href="goldenbull"      >Various</a>`, 'GBULL        ', 'https://farms.goldenbull.finance'],
    ['Polyakita           ', `<a href="polyakita"       >Various</a>`, 'HACHI        ', 'https://defi.polyakita.com'],
    ['Prism               ', `<a href="prism"           >Various</a>`, 'PRISM        ', 'https://polygon.prismfinance.net'],
    ['Polybutterfly       ', `<a href="polybutterfly"   >Various</a>`, 'POLLEN       ', 'https://polybutterfly.finance'],
    ['Southpark           ', `<a href="southpark"       >Various</a>`, 'SOUTHPARK    ', 'https://southpark.finance'],
    ['PolyCash            ', `<a href="polycash"        >Various</a>`, 'CASH         ', 'https://polycash.finance'],
    ['Dinosaur            ', `<a href="dinosaur"        >Various</a>`, 'DINO         ', 'https://dinosaurfinance.vercel.app'],
    ['Magic               ', `<a href="magic"           >Various</a>`, 'DRAX/NIGHT/DMAGIC  ', 'https://defimagic.io'],
    ['Polymouse           ', `<a href="polymouse"       >Various</a>`, 'MICE         ', 'https://polymouse.finance'],
    ['PolyTiger           ', `<a href="polytiger"       >Various</a>`, 'TIGON        ', 'https://www.polytiger.com'],
    ['Polydeer            ', `<a href="polydeer"        >Various</a>`, 'DEER         ', 'https://polydeer.finance'],
    ['Avengers            ', `<a href="avengers"        >Various</a>`, 'SHIELD       ', 'https://avengers.exchange'],
    ['PolyBunny           ', `<a href="polybunny"       >Various</a>`, 'BUNNY        ', 'https://www.polybunny.finance'],
    ['BerserkFinance      ', `<a href="berserkfinance"  >Various</a>`, 'BRSK         ', 'https://berserkfinance.com'],
    ['PolyMeme            ', `<a href="polymeme"        >Various</a>`, 'MEME         ', 'vfat.tools/polygon/polymeme'],
    ['Museum Of Crypto Art', `<a href="moca"            >Various</a>`, 'MOCA         ', 'https://museumofcryptoart.com'],
    ['PolyPup             ', `<a href="polypup"         >Various</a>`, 'PUP          ', 'https://polypup.finance'],
    ['Space               ', `<a href="space"           >Various</a>`, 'SPACE        ', 'https://polygon.space-defi.com'],
    ['Glock               ', `<a href="glock"           >Various</a>`, 'GLOCK        ', 'https://www.glockswap.com'],
    ['XDollar             ', `<a href="xdollar"         >Various</a>`, 'XDO          ', 'https://xdollar.mcn.ventures'],
    ['PolyCarrot          ', `<a href="polycarrot"      >Various</a>`, 'CARROT       ', 'https://www.polycarrot.finance'],
    ['8Ball               ', `<a href="8ball"           >Various</a>`, '8BALL        ', 'https://8ballfinance.io'],
    ['MordorSwap          ', `<a href="mordorswap"      >Various</a>`, 'MORDOR       ', 'https://mordorswap.finance'],
    ['PolyVertex          ', `<a href="polyvertex"      >Various</a>`, 'VERT         ', 'https://polyvertex.finance'],
    ['PolyZero            ', `<a href="polyzero"        >Various</a>`, 'ZERO         ', ''],
    ['PolyMax             ', `<a href="polymax"         >Various</a>`, 'MAX          ', 'https://polymax.club'],
    ['PolySnowFarm        ', `<a href="polysnowfarm"    >Various</a>`, 'SNOW         ', 'https://polysnow.farm'],
    ['Polyyeld            ', `<a href="polyyeld"        >Various</a>`, 'YELD/xYELD   ', 'https://polyyeld.finance'],
    ['Polysa              ', `<a href="polysa"          >Various</a>`, 'DUFF         ', 'https://www.polysa.finance'],
    ['Wault               ', `<a href="wault"           >Various</a>`, 'WEXpoly      ', 'https://app.wault.finance/polygon/'],
    ['PolyHarvest         ', `<a href="polyharvest"     >Various</a>`, 'WHEAT        ', 'https://www.polyharvest.finance'],
    ['PolyWoof            ', `<a href="polywoof"        >Various</a>`, 'TREAT        ', 'https://www.polywoof.finance'],
    ['SafeDollar          ', `<a href="safedollar"      >Various</a>`, 'SDS/SDO      ', 'https://app.safedollar.fi'],
    ['Cosmic              ', `<a href="cosmic"          >Various</a>`, 'COSMIC       ', 'https://polygon.cosmicswap.finance'],
    ['StonkYFarm          ', `<a href="stonky"          >Various</a>`, 'STONKY       ', 'https://stonky.farm'],
    ['Polycafe            ', `<a href="polycafe"        >Various</a>`, 'JAVA         ', 'https://polycafe.finance'],
    ['Slowpoke            ', `<a href="slowpoke"        >Various</a>`, 'SLOW         ', 'https://slowpoke.space'],
    ['PolyRocket          ', `<a href="polyrocket"      >Various</a>`, 'ROCKET       ', 'https://www.rocketfarming.finance'],
    ['PolyComet           ', `<a href="polycomet"       >Various</a>`, 'COMET        ', 'https://www.polycomet.com'],
    ['KogeFarm                ', `<a href="koge"            >Various</a>`, 'Various      ', 'https://kogefarm.io'],
    ['Fulcrum             ', `<a href="fulcrum"         >Various</a>`, 'PGOV         ', 'https://polygon.fulcrum.trade'],
    ['XBull               ', `<a href="xbull"           >Various</a>`, 'XBULL        ', 'https://xbull.finance'],
    ['Augury              ', `<a href="augury"          >Various</a>`, 'OMEN         ', 'https://augury.finance'],
    ['PolyMeme V2         ', `<a href="polymemev2"      >Various</a>`, 'MEME         ', 'https://polyme.me'],
    ['WorldSwap Bali      ', `<a href="worldswap_dps"   >Various</a>`, 'DPS          ', 'https://bali.worldswap.finance'],
    ['PolyFunky Finance   ', `<a href="polyfunky"       >Various</a>`, 'FUNK         ', 'https://www.polyfunky.com'],
    ['Polycuban           ', `<a href="polycuban"       >Various</a>`, 'CUBAN        ', 'https://polycuban.finance'],
    ['50Cent              ', `<a href="50c"             >Various</a>`, '50C/50K      ', 'https://50cent.network'],
    ['HonestWorkFarms     ', `<a href="honestwork"      >Various</a>`, '🚜          ', 'https://www.honestwork.farm'],
    ['Adamant             ', `<a href="adamant"         >Various</a>`, 'Various      ', 'https://adamant.finance'],
    ['Polygame            ', `<a href="polygame"        >Various</a>`, 'POLYGAME     ', 'https://polygame.finance'],
    ['Carousel            ', `<a href="carousel"        >Various</a>`, 'CRS          ', 'https://carouselswap.com'],
    ['PolyCrystal         ', `<a href="polycrystal"     >Various</a>`, 'CRYSTAL      ', 'https://polycrystal.finance'],
    ['Firebird            ', `<a href="firebird"        >Various</a>`, 'HOPE         ', 'https://app.firebird.finance'],
    ['Polyroll            ', `<a href="polyroll"        >Various</a>`, 'ROLL         ', 'https://polyroll.org'],
    ['FarmHero            ', `<a href="farmhero"        >Various</a>`, 'HONOR        ', 'https://farmhero.io'],
    ['PolyYield           ', `<a href="polyyield"       >Various</a>`, 'YIELD        ', 'https://polyyield.finance'],
    ['PolyPulsar          ', `<a href="polypulsar"      >Various</a>`, 'BPUL         ', 'https://www.polypulsar.farm'],
    ['Lego                ', `<a href="lego"            >Various</a>`, 'LEGO         ', 'https://legofarming-polygon.club'],
    ['FairyFarming        ', `<a href="fairy"           >Various</a>`, 'FAIRY        ', 'https://fairyfarming.world'],
    ['Rediant             ', `<a href="rediant"         >Various</a>`, 'RDT          ', 'https://rediant.finance'],
    ['StonkZFarm          ', `<a href="stonkzfarm"      >Various</a>`, 'STONKZ       ', 'https://stonkz.farm'],
    ['NinjaSwap           ', `<a href="ninjaswap"       >Various</a>`, 'NINJA        ', 'https://ninjaswapdefi.com'],
    ['Polyquity           ', `<a href="polyquity"       >Various</a>`, 'PYQ          ', 'https://app.polyquity.org'],
    ['Tako                ', `<a href="tako"            >Various</a>`, 'TAKO         ', 'https://takodefi.com'],
    ['Harvester           ', `<a href="harvester"       >Various</a>`, '🌾           ', 'https://harvester.app'],
    ['Polymer             ', `<a href="polymer"         >Various</a>`, 'OIL          ', 'https://polymeryield.finance'],
    ['Polybrew            ', `<a href="polybrew"        >Various</a>`, 'BREW         ', 'https://polybrew.finance'],
    ['PolyDiamond         ', `<a href="polydiamond"     >Various</a>`, 'DMND         ', 'https://polydiamondfinance.com'],
    ['PolyCactus          ', `<a href="polycactus"      >Various</a>`, 'CACTUS       ', 'https://polycactus.com'],
    ['PolyGrass           ', `<a href="polygrass"       >Various</a>`, 'GRASS        ', 'https://polygrass.online'],
    ['Pickle              ', `<a href="pickle"          >Various</a>`, 'PICKLE       ', 'https://app.pickle.finance'],
    ['Fox                 ', `<a href="fox"             >Various</a>`, 'FOX          ', 'https://foxfarming.us'],
    ['Hippolygon          ', `<a href="hippolygon"      >Various</a>`, 'HIPPO        ', 'https://hippolygon.com'],
    ['Pepe                ', `<a href="pepe"            >Various</a>`, 'PEPEFARM     ', 'https://pepefarm.finance'],
    ['PolyPupBone         ', `<a href="polypupbone"     >Various</a>`, 'BONE         ', 'https://bone.polypup.finance'],
    ['PolyRhino           ', `<a href="polyrhino"       >Various</a>`, 'HORN         ',  'https://polyrhino.vercel.app'],
    ['PolyRuby            ', `<a href="polyruby"        >Various</a>`, 'RUBY         ', 'https://www.polyruby.finance'],
    ['PolyZeus            ', `<a href="polyzeus"        >Various</a>`, 'PolyZeus     ', 'https://polyzeus.finance'],
    ['PolyMax - CaveMan   ', `<a href="polymax_caveman" >Various</a>`, 'CaveMan      ', 'https://caveman.polymax.club'],
    ['PolyTreasure        ', `<a href="polytreasure"    >Various</a>`, 'TRZ          ', 'https://vfat.tools/polygon/polytreasure'],
    ['PolyRacoon          ', `<a href="polyracoon"      >Various</a>`, 'RACOON       ', 'https://polyracoon.com/'],
    ['BoneSwap            ', `<a href="boneswap"        >Various</a>`, 'BONE         ', 'https://farm.boneswap.finance'],
    ['Polyyearn           ', `<a href="polyyearn"       >Various</a>`, 'YEARN        ', 'https://polyyearn.finance'],
    ['WorldSwap Hanoi     ', `<a href="worldswap_han"   >Various</a>`, 'HAN          ', 'https://hanoi.worldswap.finance'],
    ['Astrobunny          ', `<a href="astrobunny"      >Various</a>`, 'ABUNNY       ', 'https://www.astrobunny.finance'],
    ['BisonFinance        ', `<a href="bisonfinance"    >Various</a>`, 'BISON        ', 'https://bisonfinance.online'],
    ['Bullrun             ', `<a href="bullrun"         >Various</a>`, 'BULL         ', 'https://polygon.bullrun.finance'],
    ['PolyArrow           ', `<a href="polyarrow"       >Various</a>`, 'ARROW        ', 'https://polyarrow.xyz'],
    ['PantsuSwap          ', `<a href="pantsuswap"      >Various</a>`, 'PANTSU       ', 'https://pantsuswap.com'],
    ['PolyMocha           ', `<a href="polymocha"       >Various</a>`, 'MOCHA        ', 'https://polymocha.finance'],
    ['PolyOwl             ', `<a href="polyowl"         >Various</a>`, 'OWL          ', 'https://www.polyowl.finance'],
    ['Astrofarms - Cancer ', `<a href="astrofarmscancer">Various</a>`, 'CANCER       ', 'https://cancer.astrofarms.finance'],
    ['FaunaFinance        ', `<a href="faunafinance"    >Various</a>`, 'FAUNA        ', 'https://www.fauna.finance'],
    ['Vampire             ', `<a href="vampire"         >Various</a>`, 'VAMPIRE      ', 'https://vampirefarming.club'],
    ['PolyGorilla         ', `<a href="polygorilla"     >Various</a>`, 'GORILLA      ', 'https://polygorilla.finance'],
    ['PolyGarden          ', `<a href="polygarden"      >Various</a>`, 'APPLE        ', 'https://www.polygarden.finance'],
    ["Gains Farm          ", `<a href="gains-farm"      >GFARM2/DAI</a>`,"GFARM2     ", "https://gains.farm"],
    ['DojoFarmFinance     ', `<a href="dojofarm"        >Various</a>`, 'DOJO         ', 'https://dojofarm.finance'],
    ['PolyMaple-MapleSyrup', `<a href="polymaplesyrup"  >Various</a>`, 'SYRUP        ', 'https://www.polymaple.com'],
    ['PolyTopia           ', `<a href="polytopia"       >Various</a>`, 'UTOPIA       ', 'https://polytopia.farm'],
    ['BrainSwap           ', `<a href="brainswap"       >Various</a>`, 'BRAIN        ', 'https://brainswap.finance'],
    ['BatSwap             ', `<a href="batswap"         >Various</a>`, 'BATSWAP      ', 'https://batswap.finance'],
    ['ChickenFarms        ', `<a href="chickenfarms"    >Various</a>`, 'CHICKEN      ', 'https://chickenfarms.live'],
    ['Polyfrenchie        ', `<a href="Polyfrenchie"    >Various</a>`, 'pFRE         ', 'https://polyfrenchie.com/?network=polygon'],
    ['ChickenFarms        ', `<a href="chickenfarms"    >Various</a>`, 'CHICKEN      ', 'https://chickenfarms.live'],
    ['Polycuppa           ', `<a href="polycuppa"       >Various</a>`, 'CUPPA        ', 'https://polycuppa.finance'],
    ['Polymax - Berkshire ', `<a href="polymax_berkshire">Various</a>`, 'BERKSHIRE   ', 'https://berkshire.polymax.club'],
    ['Platinum Finance    ', `<a href="platinumfinance" >Various</a>`, 'PLATIN       ', 'https://platinumfinance.app'],
    ['DuckFarm            ', `<a href="duckfarm"        >Various</a>`, 'DUCK         ', 'https://duckfarm.one'],
    ['PolyCow             ', `<a href="polycow"         >Various</a>`, 'MILK / BUTTER', 'https://polycow.finance'],
    ['Euroballz           ', `<a href="euroballz"       >Various</a>`, 'BALLZ        ', 'https://euroballz.finance'],
    ['JetSwap             ', `<a href="jetswap"         >Various</a>`, 'pWINGS       ', 'https://polygon.jetswap.finance'],
    ['PolyToken           ', `<a href="polytoken"       >Various</a>`, 'POLYTOKEN    ', 'https://polytoken.finance'],
    ['CupidSwap           ', `<a href="cupidswap"       >Various</a>`, 'CUPID        ', 'https://www.cupidswap.com'],
    ['PolyTulip           ', `<a href="polytulip"       >Various</a>`, 'TULIP        ', 'https://www.polytulip.com'],
    ['PolyHeaven          ', `<a href="polyheaven"      >Various</a>`, 'BIBLE        ', 'https://polyheaven.finance'],
    ['PolyGhost           ', `<a href="polyghost"       >Various</a>`, 'GHOST        ', 'https://polyghost.finance'],
    ['SecuraFinance       ', `<a href="securafinance"   >Various</a>`, 'SCR          ', 'https://polygon.secura.finance'],
    ['LotusSwap           ', `<a href="lotusswap"       >Various</a>`, 'ROYAL        ', 'https://polygon.lotusswapdefi.com'],
    ['LoveCupidSwap       ', `<a href="cupidswaplove"   >Various</a>`, 'LOVE         ', 'https://www.lovecupidswap.live'],
    ['PharmSwap           ', `<a href="pharmswap"       >Various</a>`, 'PHARM        ', 'https://pharmswap.finance'],
    ['WorldSwap Community Edition', `<a href="worldswap_community"   >Various</a>`, 'COMMUNITY', 'https://community.worldswap.finance'],
    ['PolyQuail           ', `<a href="polyquail_kwil"  >Various</a>`, 'KWIL         ', 'https://kwil.polyquail.finance'],
    ['Coinopolis          ', `<a href="coinopolis"      >Various</a>`, 'CCASH        ', 'https://coinopolis.io'],
    ['Yearnit             ', `<a href="yearnit"         >Various</a>`, 'YEARNIT      ', 'https://yearnit.finance'],
    ['WePiggy             ', `<a href="wepiggy"         >Various</a>`, 'WPC          ', 'https://polygon.wepiggy.com/markets'],
    ['Copycat             ', `<a href="copycat"         >Various</a>`, 'FISH         ', 'https://copycat.farm'],
    ['Cakecrypt           ', `<a href="cakecrypt"       >Various</a>`, 'pCAKECRYPT   ', 'https://poly.cakecrypt.io'],
    ['TitanBull           ', `<a href="tbull"           >Various</a>`, 'TBULL        ', 'https://titanbull.finance'],
    ['Lion                ', `<a href="lion"            >Various</a>`, 'LION         ', 'https://lionfarming.cc'],
    ['PolyWantsACracker   ', `<a href="polywantsacracker">Various</a>`, 'LITHIUM     ', 'https://polywantsacracker.farm'],
    ['PolygonFarm Finance ', `<a href="polygonfarm"     >Various</a>`, 'SPADE        ', 'https://polygonfarm.finance'],
    ['Polyheat            ', `<a href="polyheat"        >Various</a>`, 'HEAT         ', 'https://polyheat.finance'],
    ['Swap Net            ', `<a href="swapnet"         >Various</a>`, 'SWP          ', 'https://swap.net'],
    ['PaprPrintr          ', `<a href="paprprintr"      >Various</a>`, 'PRNTR        ', 'https://polygon.paprprintr.finance'],
    ['PolyElysm           ', `<a href="polyelysm"       >Various</a>`, 'ELYSM        ', 'https://elysm.polytopia.farm'],
    ['Poolsar             ', `<a href="poolsar"         >Various</a>`, 'STAR         ', 'https://poolsar.finance'],
    ['Polymax - Cyborg    ', `<a href="polymax_cyborg"  >Various</a>`, 'ROBOCOP      ', 'https://cyborg.polymax.club'],
    ['PolyPonzi           ', `<a href="polyponzi"       >Various</a>`, 'PPZ          ', 'https://polyponzi.money'],
    ['MisfitSwap          ', `<a href="misfit"          >Various</a>`, 'SKULL        ', 'https://www.misfitswap.live'],
    ['DinoSwap            ', `<a href="dinoswap"        >Various</a>`, 'DINO         ', 'https://dinoswap.exchange'],
    ['Swamp               ', `<a href="swamp"           >Various</a>`, 'pSWAMP       ', 'https://swamp.finance/polygon'],
    ["SpacePortDeFi       ", `<a href="spaceport"       >Various</a>`, "STARSHIP     ", "https://polygon.spaceportdefi.com"],
    ['PolyTide            ', `<a href="polytide"        >Various</a>`, 'OYSTER       ', 'https://polytide.finance'],
    ['Copycat2            ', `<a href="copycat2"        >Various</a>`, 'FISH2        ', 'https://copycat2.farm'],
    ['Cremepie            ', `<a href="cremepie"        >Various</a>`, 'CPIE         ', 'https://cremepieswap.finance'],
    ['KUNAIFarm           ', `<a href="kunaifarm"       >Various</a>`, 'KUNAI        ', 'https://kunai.dojofarm.finance'],
    ['PolyFalcon          ', `<a href="polyfalcon"      >Various</a>`, 'FALCON       ', 'https://polyfalcon.com'],
    ['BCharity            ', `<a href="bcharity"        >Various</a>`, 'GIVE         ', 'https://bcharity.net'],
    ['BlackSwan           ', `<a href="blackswan"       >Various</a>`, 'SWAN         ', 'https://app.blackswan.network'],
    ['PolyBass            ', `<a href="polybass"        >Various</a>`, 'BASS         ', 'https://polybass.farm'],
    ['PolyBakerySwap      ', `<a href="polybakeryswap"  >Various</a>`, 'BAKE         ', 'https://www.bakery-swap.finance'],
    ['PolyBakeryCream     ', `<a href="polybakerycream" >Various</a>`, 'CREAM        ', 'https://bakerycream.finance'],
    ['PolyBakeryBiscuit   ', `<a href="polybakerybiscuit">Various</a>`, 'BISCUIT    ', 'https://bakerybiscuit.finance'],
    ['PolyTail            ', `<a href="polytail"        >Various</a>`, 'POLYTAIL     ', 'https://polytail.farm'],
    ['PearZap             ', `<a href="pearzap"         >Various</a>`, 'PEAR         ', 'https://pearzap.com'],
    ['Astrofarms - Neptune', `<a href="astrofarmsneptune">Various</a>`,'NEPTUNE      ', 'https://neptune.astrofarms.finance'],
    ['Cygnus Finance      ', `<a href="cygnusfinance"   >Various</a>`, 'CYGNUS       ', 'https://www.cygnusdefi.com'],
    ['PolyCoke            ', `<a href="polycoke"        >Various</a>`, 'COKE         ', 'https://polycoke.farm'],
    ['PolySeal            ', `<a href="polyseal"        >Various</a>`, 'SEAL         ', 'https://polyseal.farm'],
    ['Galaxy Finance One  ', `<a href="galaxy_triton"   >Various</a>`, 'TRITON       ', 'https://polygon-triton.galaxyfinance.one'],
    ['Stonk Share         ', `<a href="stonkshare"      >Various</a>`, 'STONKS       ', 'https://shares.stonk.farm'],
    ['Iridium Finance     ', `<a href="iridiumfinance"  >Various</a>`, 'IRID         ', 'https://iridiumfinance.app'],
    ['PlanetSwap          ', `<a href="planetswap"      >Various</a>`, 'VENUS        ', 'https://venus.planetswap.app'],
    ['Xenomorph Finance   ', `<a href="xenomorph"       >Various</a>`, 'XENO         ', 'https://xenomorph.finance'],
    ['PolyGoon            ', `<a href="polygoon"        >Various</a>`, 'GOON         ', 'https://polygoon.finance'],
    ['HamsterParty        ', `<a href="hamsterparty"    >Various</a>`, 'HAMSTER      ', 'https://hamsterparty.club'],
    ['SpacePortDeFi Layer1', `<a href="spaceport layer1">Various</a>`, 'SATELITE     ', "https://polygon2.spaceportdefi.com"],
    ['PolyMax - Gratitude ', `<a href="polymax_gratitude">Various</a>`,'GRATITUDE    ', 'https://gratitude.polymax.club'],
    ['Suncrypto           ', `<a href="suncrypto"       >Various</a>`, 'SUN          ', 'https://suncrypto.finance'],
    ['SushiFarm Finance   ', `<a href="sushifarm"       >Various</a>`, 'SUSHI        ', 'https://sushifarm.finance'],
    ['MeebMaster          ', `<a href="meeb"            >Various</a>`, 'MEEB         ', 'https://app.meebmaster.com'],
    ['Atma                ', `<a href="atma"            >Various</a>`, 'ATMA         ', 'https://0xatma.finance'],
    ['Avengers Defi       ', `<a href="avengers_defi"   >Various</a>`, 'AVENGERS     ', 'https://avengersdefi.club'],
    ['PolyKiwi            ', `<a href="polykiwi"        >Various</a>`, 'KIWI         ', 'https://polykiwi.farm'],
    ['PolySky             ', `<a href="polysky"         >Various</a>`, 'SIRIUS       ', 'https://polysky.finance'],
    ['PolyGlass           ', `<a href="polyglass"       >Various</a>`, 'GLASS        ', 'https://polyglass.farm'],
    ['OceanFinance        ', `<a href="oceanfinance"    >Various</a>`, 'DOLPH        ', 'https://oceanfinance.io'],
    ['PolyYork            ', `<a href="polyyork"        >Various</a>`, 'YORK         ', 'https://polyyork.finance'],
    ['Hermes              ', `<a href="hermes"          >Various</a>`, 'IRIS         ', 'https://www.hermesdefi.io'],
    ['PolyFund            ', `<a href="polyfund"        >Various</a>`, 'FUND         ', 'https://www.polyfund.finance'],
    ['Timeleap Finance    ', `<a href="timeleapfinance" >Various</a>`, 'TIME         ', 'https://timeleap.finance'],
    ['PolyDEX             ', `<a href="polyDEX"         >Various</a>`, 'CNT          ', 'https://app.polydex.org'],
    ['BerryFarmsRaspBerry ', `<a href="berryfarmsraspberry">Various</a>`, 'RASP      ', 'https://berryfarms.world'],
    ['PolyEarn            ', `<a href="polyearn"        >Various</a>`, 'PEN          ', 'https://polyearn.com'],
    ['PolyYeti            ', `<a href="polyyeti"        >Various</a>`, 'YETI         ', 'https://polyyeti.farm'],
    ['PolyBean            ', `<a href="polybean"        >Various</a>`, 'BEAN         ', 'https://polybean.farm'],
    ['PolyDyson           ', `<a href="polydyson"       >Various</a>`, 'DYSON        ', 'https://polydyson.app'],
    ['PolyTopia Wonster   ', `<a href="wonster"         >Various</a>`, 'WONSTER      ', 'https://wonster.polytopia.farm'],
    ['PolyRiver           ', `<a href="polyriver"       >Various</a>`, 'RIVER        ', 'WIP'],
    ['PolyBakeryCake      ', `<a href="polybakerycake"  >Various</a>`, 'CAKE         ', 'https://bakerycake.finance']
  ],
}

const MATIC_VAULT_TOKEN_ABI = [{ "inputs": [{ "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_strategy", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint256", "name": "_approvalDelay", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "NewStratCandidate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "implementation", "type": "address" }], "name": "UpgradeStrat", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "approvalDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "available", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "earn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getPricePerFullShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_implementation", "type": "address" }], "name": "proposeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stratCandidate", "outputs": [{ "internalType": "address", "name": "implementation", "type": "address" }, { "internalType": "uint256", "name": "proposedTime", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "strategy", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "upgradeStrat", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_shares", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
const MATIC_VAULT_WANT_ABI = [{"inputs":[{"internalType":"contract IStrategy","name":"_strategy","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_approvalDelay","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"implementation","type":"address"}],"name":"NewStratCandidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"implementation","type":"address"}],"name":"UpgradeStrat","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approvalDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"available","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_implementation","type":"address"}],"name":"proposeStrat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stratCandidate","outputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"uint256","name":"proposedTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"contract IStrategy","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upgradeStrat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"want","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const MATIC_CURVE_ABI = [{"name":"Transfer","inputs":[{"name":"_from","type":"address","indexed":true},{"name":"_to","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"name":"_owner","type":"address","indexed":true},{"name":"_spender","type":"address","indexed":true},{"name":"_value","type":"uint256","indexed":false}],"anonymous":false,"type":"event"},{"stateMutability":"nonpayable","type":"constructor","inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"}],"outputs":[]},{"stateMutability":"view","type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":288},{"stateMutability":"nonpayable","type":"function","name":"transfer","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":77340},{"stateMutability":"nonpayable","type":"function","name":"transferFrom","inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":115282},{"stateMutability":"nonpayable","type":"function","name":"approve","inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":37821},{"stateMutability":"nonpayable","type":"function","name":"increaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_added_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40365},{"stateMutability":"nonpayable","type":"function","name":"decreaseAllowance","inputs":[{"name":"_spender","type":"address"},{"name":"_subtracted_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":40389},{"stateMutability":"nonpayable","type":"function","name":"mint","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":79579},{"stateMutability":"nonpayable","type":"function","name":"burnFrom","inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"outputs":[{"name":"","type":"bool"}],"gas":79597},{"stateMutability":"nonpayable","type":"function","name":"set_minter","inputs":[{"name":"_minter","type":"address"}],"outputs":[],"gas":37785},{"stateMutability":"nonpayable","type":"function","name":"set_name","inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"}],"outputs":[],"gas":181606},{"stateMutability":"view","type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":12990},{"stateMutability":"view","type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string"}],"gas":10743},{"stateMutability":"view","type":"function","name":"balanceOf","inputs":[{"name":"arg0","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":2963},{"stateMutability":"view","type":"function","name":"allowance","inputs":[{"name":"arg0","type":"address"},{"name":"arg1","type":"address"}],"outputs":[{"name":"","type":"uint256"}],"gas":3208},{"stateMutability":"view","type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256"}],"gas":2808},{"stateMutability":"view","type":"function","name":"minter","inputs":[],"outputs":[{"name":"","type":"address"}],"gas":2838}]
const MATIC_ADAMANT_VAULT_TOKEN_ABI = [{"inputs":[{"internalType":"contract IStrategy","name":"_strategy","type":"address"},{"internalType":"address","name":"_minter","type":"address"},{"internalType":"address","name":"_ercFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reward","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalAllocation","type":"uint256"}],"name":"RewardAllocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"accRewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ercFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLastDepositTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getPendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRewardMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newReward","type":"uint256"}],"name":"increaseRewardAllocation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"keepMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_reward","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"notifyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardAllocation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IMinter","name":"newMinter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setPoolDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardMultiplier","type":"uint256"}],"name":"setRewardMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawPenalty","type":"uint256"}],"name":"setWithdrawPenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawPenaltyTime","type":"uint256"}],"name":"setWithdrawPenaltyTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"strategy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalShares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"lastDepositTime","type":"uint256"},{"internalType":"uint256","name":"tokensStaked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawPenalty","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawPenaltyTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

async function getMaticUniPool(App, pool, poolAddress, stakingAddress) {    
    let q0, q1;
    const reserves = await pool.getReserves();
    q0 = reserves._reserve0;
    q1 = reserves._reserve1;
    const decimals = await pool.decimals();
    const token0 = await pool.token0();
    const token1 = await pool.token1();
    return { 
        symbol : await pool.symbol(),
        name : await pool.name(),
        address: poolAddress,
        token0,
        q0,
        token1,
        q1,
        totalSupply: await pool.totalSupply() / 10 ** decimals,
        stakingAddress: stakingAddress,
        staked: await pool.balanceOf(stakingAddress) / 10 ** decimals,
        decimals: decimals,
        unstaked: await pool.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
        contract: pool,
        tokens : [token0, token1],
        is1inch : false
    };
}

async function getMatic20(App, token, address, stakingAddress) {
    if (address == "0x0000000000000000000000000000000000000000") {
      return {
        address,
        name : "Matic",
        symbol : "MATIC",
        totalSupply: 1e8,
        decimals: 18,
        staked: 0,
        unstaked: 0,
        contract: null,
        tokens:[address]
      }
    }
    const decimals = await token.decimals();
    if (address === "0x4c28f48448720e9000907BC2611F73022fdcE1fA") {
      return {
        address,
        name : "Wrapped Matic",
        symbol : "WMATIC",
        totalSupply : await token.totalSupply(),
        decimals : decimals,
        staked:  await token.balanceOf(stakingAddress) / 10 ** decimals,
        unstaked: await token.balanceOf(App.YOUR_ADDRESS)  / 10 ** decimals,
        contract: token,
        tokens : [address]
      }
    }
    return {
        address,
        name : await token.name(),
        symbol : await token.symbol(),
        totalSupply : await token.totalSupply(),
        decimals : decimals,
        staked:  await token.balanceOf(stakingAddress) / 10 ** decimals,
        unstaked: await token.balanceOf(App.YOUR_ADDRESS)  / 10 ** decimals,
        contract: token,
        tokens : [address]
    };
}

async function getMaticVault(App, vault, address, stakingAddress) {
  const decimals = await vault.decimals();
  const token_ = await vault.token();
  const token = await getMaticToken(App, token_, address);
  return {
    address,
    name : await vault.name(),
    symbol : await vault.symbol(),
    totalSupply : await vault.totalSupply(),
    decimals : decimals,
    staked: await vault.balanceOf(stakingAddress) / 10 ** decimals,
    unstaked: await vault.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
    token: token,
    balance : await vault.balance(),
    contract: vault,
    tokens : [address].concat(token.tokens),
  }
}

async function getMaticAdamantVault(App, vault, address, stakingAddress) {
  const token_ = await vault.token();
  const token = await getMaticToken(App, token_, address);
  return {
    address,
    name : "Vault",
    symbol : "VAULT",
    totalSupply : await vault.totalShares(),
    decimals : 18,
    staked: await vault.balanceOf(stakingAddress) / 10 ** 18,
    unstaked: await vault.balanceOf(App.YOUR_ADDRESS) / 10 ** 18,
    token: token,
    balance : await vault.balance(),
    contract: vault,
    tokens : [address].concat(token.tokens),
  }
}

async function getMaticWantVault(App, vault, address, stakingAddress) {
  const decimals = await vault.decimals();
  const token_ = await vault.want();
  const token = await getMaticToken(App, token_, address);
  return {
    address,
    name : await vault.name(),
    symbol : await vault.symbol(),
    totalSupply : await vault.totalSupply(),
    decimals : decimals,
    staked: await vault.balanceOf(stakingAddress) / 10 ** decimals,
    unstaked: await vault.balanceOf(App.YOUR_ADDRESS) / 10 ** decimals,
    token: token,
    balance : await vault.balance(),
    contract: vault,
    tokens : [address].concat(token.tokens),
  }
}

async function getMaticStoredToken(App, tokenAddress, stakingAddress, type) {
  switch (type) {
    case "uniswap": 
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      return await getMaticUniPool(App, pool, tokenAddress, stakingAddress);
    case "maticVault":
      const vault = new ethers.Contract(tokenAddress, MATIC_VAULT_TOKEN_ABI, App.provider);
      return await getMaticVault(App, vault, tokenAddress, stakingAddress);
    case "maticAdamantVault":
      const adamantVault = new ethers.Contract(tokenAddress, MATIC_ADAMANT_VAULT_TOKEN_ABI, App.provider);
      return await getMaticAdamantVault(App, adamantVault, tokenAddress, stakingAddress);
    case "maticWantVault":
      const wantVault = new ethers.Contract(tokenAddress, MATIC_VAULT_WANT_ABI, App.provider);
      return await getMaticWantVault(App, wantVault, tokenAddress, stakingAddress);
    case "curve":
      const crv = new ethers.Contract(tokenAddress, MATIC_CURVE_ABI, App.provider);
      if (tokenAddress.toLowerCase() == "0x88E11412BB21d137C217fd8b73982Dc0ED3665d7".toLowerCase()) {
        const minter = "0x3333333ACdEdBbC9Ad7bda0876e60714195681c5";
        return await getCurveToken(App, crv, tokenAddress, stakingAddress, minter);
      }
      const minter = await crv.minter();
      return await getCurveToken(App, crv, tokenAddress, stakingAddress, minter);
    case "erc20":
      const erc20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      return await getMatic20(App, erc20, tokenAddress, stakingAddress);
  }
}

async function getMaticToken(App, tokenAddress, stakingAddress) {
    if (tokenAddress == "0x0000000000000000000000000000000000000000") {
      return getMatic20(App, null, tokenAddress, "")
    }
    const type = window.localStorage.getItem(tokenAddress);
    if (type) return getMaticStoredToken(App, tokenAddress, stakingAddress, type);
    try {
      const pool = new ethers.Contract(tokenAddress, UNI_ABI, App.provider);
      const _token0 = await pool.token0();
      const uniPool = await getMaticUniPool(App, pool, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "uniswap");
      return uniPool;
    }
    catch(err) {
    }
    try {
      const crv = new ethers.Contract(tokenAddress, MATIC_CURVE_ABI, App.provider);
      if (tokenAddress.toLowerCase() == "0x0a2ad1e60bcf5f812a2c74ec519822da36f86617".toLowerCase()) {
        const minter = "0x445FE580eF8d70FF569aB36e80c647af338db351";
        const res = await getCurveMaticToken(App, crv, tokenAddress, stakingAddress, minter);
        window.localStorage.setItem(tokenAddress, "curve");
        return res;
      }
      const minter = await crv.minter();
      const res = await getCurveMaticToken(App, crv, tokenAddress, stakingAddress, minter);
      window.localStorage.setItem(tokenAddress, "curve");
      return res;
    }
    catch(err) {
    }
    try {
      const VAULT = new ethers.Contract(tokenAddress, MATIC_VAULT_TOKEN_ABI, App.provider);
      const _token = await VAULT.token();
      const vault = await getMaticVault(App, VAULT, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "maticVault");
      return vault;
    }
    catch(err) {
    }
    try {
      const ADAMANT_VAULT = new ethers.Contract(tokenAddress, MATIC_ADAMANT_VAULT_TOKEN_ABI, App.provider);
      const _totalShares = await ADAMANT_VAULT.totalShares();
      const vault = await getMaticAdamantVault(App, ADAMANT_VAULT, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "maticAdamantVault");
      return vault;
    }
    catch(err) {
    }
    try {
      const WANT_VAULT = new ethers.Contract(tokenAddress, MATIC_VAULT_WANT_ABI, App.provider);
      const _want = await await WANT_VAULT.want();
      const wantVault = await getMaticWantVault(App, WANT_VAULT, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "maticWantVault");
      return wantVault;
    }
    catch(err) {
    }
    try {
      const erc20 = new ethers.Contract(tokenAddress, ERC20_ABI, App.provider);
      const _name = await erc20.name();
      const erc20tok = await getMatic20(App, erc20, tokenAddress, stakingAddress);
      window.localStorage.setItem(tokenAddress, "erc20");
      return erc20tok;
    }
    catch(err) {
      console.log(err);
      console.log(`Couldn't match ${tokenAddress} to any known token type.`);
    }
  }

async function getCurveMaticToken(app, curve, address, stakingAddress, minterAddress) {
  const minter = new ethers.Contract(minterAddress, MINTER_ABI, app.provider)
  const virtualPrice = await minter.get_virtual_price();
  let coin0 = ""
  if (minterAddress.toLowerCase() == "0x445FE580eF8d70FF569aB36e80c647af338db351".toLowerCase()) {
    coin0 = "0x27F8D03b3a2196956ED754baDc28D73be8830A6e";
  }else{
    coin0 = await minter.coins(0);
  }
  const decimals = await curve.decimals();
  const token = await getMaticToken(app, coin0, address);
  const staked = await curve.balanceOf(stakingAddress);
  const unstaked = await curve.balanceOf(app.YOUR_ADDRESS);
  const name = await curve.name();
  const symbol = await curve.symbol();
  const totalSupply = await curve.totalSupply();
  return {
      address,
      name,
      symbol,
      totalSupply,
      decimals : decimals,
      staked:  staked / 10 ** decimals,
      unstaked: unstaked  / 10 ** decimals,
      contract: curve,
      tokens : [address, coin0],
      token,
      virtualPrice : virtualPrice / 1e18
  };
}

async function loadMaticSynthetixPoolInfo(App, tokens, prices, stakingAbi, stakingAddress,
    rewardTokenFunction, stakeTokenFunction) {
      const STAKING_POOL = new ethers.Contract(stakingAddress, stakingAbi, App.provider);
  
      if (!STAKING_POOL.callStatic[stakeTokenFunction]) {
        console.log("Couldn't find stake function ", stakeTokenFunction);
      }
      const stakeTokenAddress = await STAKING_POOL.callStatic[stakeTokenFunction]();
  
      const rewardTokenAddress = await STAKING_POOL.callStatic[rewardTokenFunction]();
  
      var stakeToken = await getMaticToken(App, stakeTokenAddress, stakingAddress);
  
      if (stakeTokenAddress.toLowerCase() === rewardTokenAddress.toLowerCase()) {
        stakeToken.staked = await STAKING_POOL.totalSupply() / 10 ** stakeToken.decimals;
      }
  
      var newTokenAddresses = stakeToken.tokens.filter(x =>
        !getParameterCaseInsensitive(tokens,x));
      for (const address of newTokenAddresses) {
          tokens[address] = await getMaticToken(App, address, stakingAddress);
      }
      if (!getParameterCaseInsensitive(tokens, rewardTokenAddress)) {
          tokens[rewardTokenAddress] = await getMaticToken(App, rewardTokenAddress, stakingAddress);
      }
      const rewardToken = getParameterCaseInsensitive(tokens, rewardTokenAddress);
  
      const rewardTokenTicker = rewardToken.symbol;
  
      const poolPrices = getPoolPrices(tokens, prices, stakeToken, "matic");

      if (!poolPrices) 
      {
        console.log(`Couldn't calculate prices for pool ${stakeTokenAddress}`);
        return null;
      }
  
      const stakeTokenTicker = poolPrices.stakeTokenTicker;
  
      const stakeTokenPrice =
          prices[stakeTokenAddress]?.usd ?? getParameterCaseInsensitive(prices, stakeTokenAddress)?.usd;
      const rewardTokenPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  
      const periodFinish = await STAKING_POOL.periodFinish();
      const rewardRate = await STAKING_POOL.rewardRate();
      const weeklyRewards = (Date.now() / 1000 > periodFinish) ? 0 : rewardRate / 1e18 * 604800;
  
      const usdPerWeek = weeklyRewards * rewardTokenPrice;
  
      const staked_tvl = poolPrices.staked_tvl;
  
      const userStaked = await STAKING_POOL.balanceOf(App.YOUR_ADDRESS) / 10 ** stakeToken.decimals;
  
      const userUnstaked = stakeToken.unstaked;
  
      const earned = await STAKING_POOL.earned(App.YOUR_ADDRESS) / 10 ** rewardToken.decimals;
  
      return  {
        stakingAddress,
        poolPrices,
        stakeTokenAddress,
        rewardTokenAddress,
        stakeTokenTicker,
        rewardTokenTicker,
        stakeTokenPrice,
        rewardTokenPrice,
        weeklyRewards,
        usdPerWeek,
        staked_tvl,
        userStaked,
        userUnstaked,
        earned
      }
}

async function loadMaticSynthetixPool(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction) {
    const info = await loadMaticSynthetixPoolInfo(App, tokens, prices, abi, address, rewardTokenFunction, stakeTokenFunction);
    if (!info) return null;
    return await printSynthetixPool(App, info, "matic");
}

async function loadMaticBasisFork(data) {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}`);
    _print("Reading smart contracts...\n");

    var tokens = {};
    var prices = {};
    var totalStaked = 0;
    
    let p1 = await loadMaticSynthetixPool(App, tokens, prices, data.PoolABI, 
        data.SharePool.address, data.SharePool.rewardToken, data.SharePool.stakeToken);
    totalStaked += p1.staked_tvl;
    
    if (data.SharePool2) {
      let p3 = await loadMaticSynthetixPool(App, tokens, prices, data.PoolABI, 
          data.SharePool2.address, data.SharePool2.rewardToken, data.SharePool2.stakeToken);
      totalStaked += p3.staked_tvl;
    }

    let p2 = await loadMaticSynthetixPool(App, tokens, prices, data.PoolABI, 
        data.CashPool.address, data.CashPool.rewardToken, data.CashPool.stakeToken);
    totalStaked += p2.staked_tvl;

    if (data.SeedBanks) {
      let p = await loadMultipleMaticSynthetixPools(App, tokens, prices, data.SeedBanks)
      totalStaked += p.staked_tvl;
      if (p.totalUserStaked > 0) {
        _print(`You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalAPR * 100).toFixed(2)}%\n`);
      }
    }

    if (!data.SeedBanks)
    {
      if (data.Boardrooms) {
        for (const boardroom of data.Boardrooms) {
          let br = await loadBoardroom(App, prices, boardroom.address, data.Oracle, data.UniswapLP, data.Cash,
              data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion, 
              data.Decimals, boardroom.ratio, data.TargetMantissa);
          totalStaked += br.staked_tvl;
        }
      }
      else {
        let br = await loadBoardroom(App, prices, data.Boardroom, data.Oracle, data.UniswapLP, data.Cash,
            data.ShareTicker, data.CashTicker, data.ExpansionsPerDay, data.MaximumExpansion, 
            data.Decimals, 1, data.TargetMantissa);
        totalStaked += br.staked_tvl;
      }
    } 

    _print_bold(`Total staked: $${formatMoney(totalStaked)}`)

    hideLoading();
}


async function getMaticPoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction) {  
  const poolInfo = await chefContract.poolInfo(poolIndex);
  if (poolInfo.allocPoint == 0) {
    return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: null,
      userStaked : 0,
      pendingRewardTokens : 0,
    };
  }
  const poolToken = await getMaticToken(app, poolInfo.lpToken, chefAddress);
  const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
  const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
  const staked = userInfo.amount / 10 ** poolToken.decimals;
  return {
      address: poolInfo.lpToken,
      allocPoints: poolInfo.allocPoint ?? 1,
      poolToken: poolToken,
      userStaked : staked,
      pendingRewardTokens : pendingRewardTokens / 10 ** 18,
      depositFee : (poolInfo.depositFeeBP ?? 0) / 100,
      withdrawFee : (poolInfo.withdrawFeeBP ?? 0) / 100
  };
}

async function loadMaticChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getMaticToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ?? 
    await chefContract.callStatic[rewardsPerBlockFunction]() 
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getMaticPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getMaticToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo => 
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "matic") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "matic") : undefined);


  _print("Finished reading smart contracts.\n");
  
  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "matic", poolInfos[i].depositFee, poolInfos[i].withdrawFee)
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
    _print(`Estimated earnings:`
        + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
        + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
        + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
  }
  return { prices, totalUserStaked, totalStaked, averageApr }
}

const maticTokens = [ 
  { "id": "wmatic","symbol": "WMATIC","contract": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270" },
  { "id": "matic","symbol": "MATIC","contract": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270" },
  { "id": "tether","symbol": "USDT", "contract": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F" },
  { "id": "bitcoin","symbol": "WBTC", "contract": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6" },
  { "id": "ethereum", "symbol": "WETH", "contract": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619" },
  { "id": "usd-coin","symbol": "USDC", "contract": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" },
  { "id": "dai","symbol": "DAI", "contract": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063" },
  { "id": "quick","symbol": "QUICK", "contract": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13" },
  { "id": "stake-dao", "symbol": "SDT", "contract": "0x361A5a4993493cE00f61C32d4EcCA5512b82CE90" },
  { "id": "yield-app", "symbol": "YLD", "contract": "0x4CEBdBCB286101A17D3eA1f7fe7bbDeD2B2053dd" },
  { "id": "aave", "symbol": "AAVE", "contract": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B" },
  { "id": "polywhale", "symbol": "KRILL", "contract": "0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b" },
  { "id": "chainlink", "symbol": "LINK", "contract": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39" },
  { "id": "sushi", "symbol": "SUSHI", "contract": "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a" },
  { "id": "dfyn-network", "symbol": "DFYN", "contract": "0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97" },
  { "id": "polydoge", "symbol": "POLYDOGE", "contract": "0x8a953cfe442c5e8855cc6c61b1293fa648bae472" },
  { "id": "drax", "symbol": "DRAX", "contract": "0x1Ba3510A9ceEb72E5CdBa8bcdDe9647E1f20fB4b" },
  { "id": "dark-magic", "symbol": "DMAGIC", "contract": "0x61daecab65ee2a1d5b6032df030f3faa3d116aa7" },
  { "id": "nightbane", "symbol": "NIGHT", "contract": "0xEEf10C9Bf17c9d2C9619fd29447B231EA0Fde548" },
  { "id": "xdollar", "symbol": "XDO", "contract": "0x3dc7b06dd0b1f08ef9acbbd2564f8605b4868eea" },
  { "id": "iron-titanium-token", "symbol": "TITAN", "contract": "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a" },
  { "id": "bzx-protocol", "symbol": "BZRX", "contract": "0x97dfbEF4eD5a7f63781472Dbc69Ab8e5d7357cB9" },
  { "id": "havven", "symbol": "SNX", "contract": "0x50B728D8D964fd00C2d0AAD81718b71311feF68a" },
  { "id": "curve-dao-token", "symbol": "CRV", "contract": "0x172370d5Cd63279eFa6d502DAB29171933a610AF" },
  { "id": "the-graph", "symbol": "GRT", "contract": "0x5fe2B58c013d7601147DcdD68C143A77499f5531" },
  { "id": "pickle-finance", "symbol": "PICKLE", "contract": "0x2b88aD57897A8b496595925F43048301C37615Da" },
  { "id": "must", "symbol": "MUST", "contract": "0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f" },
  { "id": "blackswan", "symbol": "SWAN", "contract": "0xab7589de4c581db0fb265e25a8e7809d84ccd7e8" },
  { "id": "galaxy-triton", "symbol": "TRITON", "contract": "0x9cf4009e62429Db3F57Aa9e7e8E898427cF6865f" }
]

async function getMaticPrices() {
  const idPrices = await lookUpPrices(maticTokens.map(x => x.id));
  const prices = {}
  for (const bt of maticTokens)
      if (idPrices[bt.id])
          prices[bt.contract] = idPrices[bt.id];
  return prices;
}

async function loadMultipleMaticSynthetixPools(App, tokens, prices, pools, customURLs) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  const infos = await Promise.all(pools.map(p => 
      loadMaticSynthetixPoolInfo(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction)));
  for (const i of infos.filter(i => i?.poolPrices)) {
    let p = await printSynthetixPool(App, i, "matic", customURLs);
    totalStaked += p.staked_tvl || 0;
    totalUserStaked += p.userStaked || 0;
    if (p.userStaked > 0) {
      individualAPRs.push(p.userStaked * p.apr / 100);
    }
  }
  let totalAPR = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalAPR };
}

async function loadMultipleMaticSynthetixPoolsSequential(App, tokens, prices, pools) {
  let totalStaked  = 0, totalUserStaked = 0, individualAPRs = [];
  for (const p of pools) {
    let res = await loadMaticSynthetixPool(App, tokens, prices, p.abi, p.address, p.rewardTokenFunction, p.stakeTokenFunction);
    if (!res) continue;
    totalStaked += res.staked_tvl || 0;
    totalUserStaked += res.userStaked || 0;
    if (res.userStaked > 0) {
      individualAPRs.push(res.userStaked * res.apr / 100);
    }
  }
  let totalAPR = totalUserStaked == 0 ? 0 : individualAPRs.reduce((x,y)=>x+y, 0) / totalUserStaked;
  return { staked_tvl : totalStaked, totalUserStaked, totalAPR };
}