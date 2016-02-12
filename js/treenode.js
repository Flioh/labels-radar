$(document).ready(function (){
  
        //JSON object with the data
    var treeData = {"name" : "Labels root", "type":"object", 
        "children" : [
            {"name" : "Warner Music Group","type":"object", 
            "children": [
                {"name":"Atlantic Records Group ","type":"object",
                    "children" : [
                    {"name":"1st & 15th Entertainment","type":"hiphop"},
					{"name":"Atlantic Records","type":"various"},
					{"name":"Atco Records","type":"various"},
					{"name":"Big Beat Records","type":"hiphop"},
					{"name":"CBE (Chris Brown Entertainment)","type":"various"},
					{"name":"Chop Shop Records","type":"rock"},
					{"name":"Custard Records","type":"pop"},
					{"name":"OWSLA","type":"edm"},
					{"name":"CTE World","type":"hiphop"},
					{"name":"Big Tree Records","type":"various"},
					{"name":"Canvasback Music","type":"pop"},
					{"name":"Cat Records","type":"various"},
					{"name":"Cotillion Records","type":"various"},
					{"name":"Eardrum Records","type":"various"},
					{"name":"East West Records","type":"various"},
					{"name":"LaSalle Records","type":"various"},
					{"name":"First Priority Music","type":"hiphop"},
					{"name":"Little David Records","type":"various"},
					{"name":"Luke Records","type":"hiphop"},
					{"name":"Stone Flower Records","type":"rock"},
					{"name":"TAG Recordings","type":"rock"},
					{"name":"Vortex Records","type":"various"},
					{"name":"Elektra Records","type":"various"},
					{"name":"Fueled by Ramen","type":"rock"},
					{"name":"Full Surface Records","type":"hiphop"},
					{"name":"Maybach Music Group","type":"hiphop"},
					{"name":"Rebel Rock Entertainment","type":"various"},
					{"name":"Roadrunner Records","type":"rock"},
					{"name":"Photo Finish Records","type":"various"},
					{"name":"Poe Boy Music Group","type":"hiphop"},
					{"name":"Top Stop Music","type":"various"},
					{"name":"300 Entertainment","type":"various"},
					{"name":"Avang Music","type":"various"},
					{"name":"UpFront Records","type":"hiphop"},
					{"name":"Chopper City Records","type":"hiphop"},
					{"name":"F-Stop Music","type":"rock"},
					{"name":"Fort Knocks Entertainment","type":"hiphop"}
                    ]},
                {"name":"Warner Bros. Records","type":"object",
                    "children" : [                    
                        {"name":"A&E Records","type":"rock"},
                        {"name":"Helium 3","type":"rock"},
                        {"name":"Action Theory Records","type":"various"},
                        {"name":"Asylum Records","type":"various"},
                        {"name":"Beluga Heights","type":"various"},
                        {"name":"BME Recordings","type":"hiphop"},
                        {"name":"Festival Mushroom Records","type":"various"},
                        {"name":"Ice Age Entertainment","type":"hiphop"},
                        {"name":"Jet Life Recordings","type":"hiphop"},
                        {"name":"Machine Shop Recordings","type":"hiphop"},
                        {"name":"Malpaso Records","type":"various"},
                        {"name":"Loveway Records","type":"various"},
                        {"name":"Maverick Records","type":"various"},
                        {"name":"Nonesuch Records","type":"various"},
                        {"name":"OVO Sound","type":"hiphop"},
                        {"name":"Parlophone","type":"various"},
                        {"name":"Perezcious Music","type":"various"},
                        {"name":"Playmaker Music","type":"various"},
                        {"name":"Public Broadcasting Service","type":"various"},
                        {"name":"Reprise Records","type":"various"},
                        {"name":"143 Records","type":"various"},
                        {"name":"RuffNation Records","type":"various"},
                        {"name":"Sire Records","type":"various"},
                        {"name":"Teleprompt Records","type":"rock"}
                    ]},
                {"name":"Parlophone Label Group","type":"object",
                    "children" : [                    
                        {"name":"Parlophone Records","type":"various"},
                        {"name":"Regal Recordings","type":"pop"},
                        {"name":"Chrysalis Records","type":"various"},
                        {"name":"Ensign Records","type":"various"},
                        {"name":"FFRR Records","type":"various"}
                    ]},
                {"name":"Rhino Entertainment","type":"object",
                     "children" : [            
                        {"name":"Atco Records","type":"various"},
                        {"name":"Del-Fi Records","type":"various"},
                        {"name":"Frank Sinatra Enterprises","type":"various"},
                        {"name":"Rhino Records","type":"various"},
                        {"name":"Eleven: A Music Company ","type":"various"}
                    ]},
                {"name":"Warner Music Nashville","type":"object",
                    "children" : [         
                        {"name":"Atlantic Records Nashville","type":"various"},
                        {"name":"Warner Bros. Records Nashville","type":"various"},
                        {"name":"Elektra Records Nashville","type":"various"},
                        {"name":"Word Records","type":"various"},
                        {"name":"Myrrh Records","type":"various"},
                        {"name":"Squint Entertainment","type":"various"},
                        {"name":"50/50 Global Muzik Nashville","type":"edm"},
                        {"name":"MARCUS MUSIC","type":"various"}
                    ]},
                {"name":"Warner Classics","type":"object",
                    "children" : [      
                        {"name":"Warner Classics Records (incorporating EMI Classics)","type":"various"},
                        {"name":"Erato Records (incorporating Virgin Classics)","type":"various"},
                        {"name":"Teldec Records","type":"various"},
                        {"name":"NVC Arts Records","type":"various"},
                        {"name":"Lontano Records","type":"various"},
                        {"name":"Finlandia Records","type":"various"}
                    ]},
                {"name":"Labels distributed by WMG through ADA","type":"object",
                    "children" : [  
                        {"name":"Cordless Recordings","type":"various"},
                        {"name":"East West Records","type":"various"},
                        {"name":"Rykodisc Records","type":"pop"},
                        {"name":"PHONY RECORDS","type":"various"},
                        {"name":"Blue Horizon","type":"various"},
                        {"name":"Bright Antenna","type":"pop"},
                        {"name":"Nuclear Blast","type":"rock"},
                        {"name":"Chiyun Records","type":"various"},
                        {"name":"Vice Records","type":"various"},
                        {"name":"Lightyear Entertainment","type":"various"},
                        {"name":"WaterTower Music","type":"various"},
                        {"name":"5 Minute Walk","type":"various"},
                        {"name":"VMG Recordings","type":"various"},
                        {"name":"Teleprompt Records","type":"various"},
                        {"name":"Rhymesayers Entertainment","type":"hiphop"},
                        {"name":"Tee Pee Records","type":"rock"},
                        {"name":"I Scream Records","type":"rock"},
                        {"name":"3CG Registros","type":"various"},
                        {"name":"679 Recordings","type":"various"},
                        {"name":"Músic 7-10","type":"various"},
                        {"name":"Acony Registros","type":"various"},
                        {"name":"Adrenaline Músic","type":"various"},
                        {"name":"Alligator Records","type":"various"},
                        {"name":"Alma de Registros","type":"various"},
                        {"name":"Altitude de Registros","type":"various"},
                        {"name":"Anzic Registros","type":"various"},
                        {"name":"Artist First","type":"various"},
                        {"name":"Arhoolie Registros","type":"various"},
                        {"name":"Avitone Registros","type":"various"},
                        {"name":"Bar / None Registros","type":"various"},
                        {"name":"Barsuk Registros","type":"various"},
                        {"name":"Beggars Group","type":"various"},
                        {"name":"Bieler Bros Records","type":"rock"},
                        {"name":"Cegos Man Som","type":"various"},
                        {"name":"Blind Pig Records","type":"various"},
                        {"name":"Bloodshot Records","type":"various"},
                        {"name":"Blix Street Records","type":"various"},
                        {"name":"Blisslife Records","type":"various"},
                        {"name":"Bolhas de Records","type":"various"},
                        {"name":"Blue Corn Músic","type":"various"},
                        {"name":"Blue Horizon Records","type":"various"},
                        {"name":"Bolero de Records","type":"various"},
                        {"name":"Nascido & Bred Records","type":"various"},
                        {"name":"Brash Registros","type":"various"},
                        {"name":"Breakbeat Ciência Records","type":"various"},
                        {"name":"Antena Brilhante","type":"various"},
                        {"name":"Canyon Records","type":"various"},
                        {"name":"Carpark Records","type":"various"},
                        {"name":"Cavity Search Registros","type":"various"},
                        {"name":"CDBaby (mais vendidos da loja online)","type":"various"},
                        {"name":"Chesky Registros","type":"various"},
                        {"name":"Chime Entretenimento","type":"various"},
                        {"name":"Comedy Central Records","type":"various"},
                        {"name":"Compass Registros","type":"various"},
                        {"name":"Courgette Registros","type":"various"},
                        {"name":"Crunchy Frog Registros","type":"various"},
                        {"name":"David Lynch Music Company","type":"various"},
                        {"name":"Downtown Records (alguns releases)","type":"various"},
                        {"name":"Dcide Registros","type":"various"},
                        {"name":"Decaydance Registros","type":"various"},
                        {"name":"DimeRock Registros","type":"various"},
                        {"name":"Domino Records","type":"various"},
                        {"name":"Dualtone Registros","type":"various"},
                        {"name":"Eco Registros","type":"various"},
                        {"name":"el Music Group","type":"rock"},
                        {"name":"Guarda-chuva de Registros de emergência","type":"various"},
                        {"name":"Epitaph Records","type":"rock"},
                        {"name":"Igualdade Vision Records","type":"various"},
                        {"name":"Everfine Registros","type":"various"},
                        {"name":"Eyeball Records","type":"various"},
                        {"name":"Ferret Music","type":"rock"},
                        {"name":"Fearless Records","type":"rock"},
                        {"name":"Funzalo Registros","type":"various"},
                        {"name":"Metade Note Records","type":"various"},
                        {"name":"Alta Note Records","type":"various"},
                        {"name":"Hopeless Records","type":"rock"},
                        {"name":"Hellcat Registros","type":"various"},
                        {"name":"E eu Ear Records","type":"various"},
                        {"name":"Dentro Recordings","type":"various"},
                        {"name":"InVogue Registros","type":"various"},
                        {"name":"I Scream Records","type":"various"},
                        {"name":"Jemp Registros","type":"various"},
                        {"name":"Masquerade Recordings","type":"various"},
                        {"name":"Macklemore Inc.","type":"hiphop"},
                        {"name":"Matador Records","type":"rock"},
                        {"name":"Mayhem Registros","type":"various"},
                        {"name":"Manifesto Records","type":"various"},
                        {"name":"Merge Records","type":"rock"},
                        {"name":"Milan Records","type":"various"},
                        {"name":"Misfits Registros","type":"various"},
                        {"name":"Metropolis Records","type":"various"},
                        {"name":"Registros frescos Minty","type":"various"},
                        {"name":"Nervous Records","type":"rock"},
                        {"name":"Nettwerk","type":"various"},
                        {"name":"Nuclear Blast","type":"various"},
                        {"name":"Napalm Records","type":"rock"},
                        {"name":"Nudgie Registros","type":"various"},
                        {"name":"Om Registros","type":"various"},
                        {"name":"Jogue Tyme Registros","type":"various"},
                        {"name":"Polyvinyl Record Company","type":"various"},
                        {"name":"Picolé de Registros","type":"various"},
                        {"name":"Projekt Records","type":"various"},
                        {"name":"Punahele Registros","type":"various"},
                        {"name":"Rhythmbank Entretenimento","type":"various"},
                        {"name":"Rise Records","type":"various"},
                        {"name":"Rock Ridge Músic","type":"various"},
                        {"name":"Saddle Creek Registros","type":"various"},
                        {"name":"Secretamente canadense","type":"various"},
                        {"name":"Selecione Registros","type":"various"},
                        {"name":"Suméria Registros","type":"various"},
                        {"name":"Sideonedummy Registros","type":"various"},
                        {"name":"Lado seguido de Registros","type":"various"},
                        {"name":"Skeleton Crew","type":"various"},
                        {"name":"Slugfest Registros","type":"various"},
                        {"name":"Registros Stony Plain","type":"various"},
                        {"name":"Strictly Rhythm Records","type":"edm"},
                        {"name":"Sub Pop Records","type":"rock"},
                        {"name":"Surfdog Registros","type":"various"},
                        {"name":"Tommy Boy Entertainment","type":"hiphop"},
                        {"name":"Thirsty Ear Recordings","type":"various"},
                        {"name":"TML Entretenimento","type":"various"},
                        {"name":"Troubleman Unlimited","type":"rock"},
                        {"name":"The Control Group","type":"various"},
                        {"name":"Os duel","type":"various"},
                        {"name":"Thrill Jockey Records","type":"rock"},
                        {"name":"Amanhã Registros","type":"various"},
                        {"name":"Touch & Go Registros","type":"various"},
                        {"name":"Ubiquity Registros","type":"various"},
                        {"name":"No filtre Registros","type":"various"},
                        {"name":"Upstream","type":"various"},
                        {"name":"Colocamos Out Records","type":"various"},
                        {"name":"Wichita Registros (alguns releases)","type":"various"},
                        {"name":"Williams Street Records","type":"various"},
                        {"name":"Warcon Empresas","type":"various"},
                        {"name":"You Entretenimento","type":"various"},
                        {"name":"Zappa Records","type":"various"},
                        {"name":"DimeRock Records","type":"various"},
                        {"name":"Surfdog Records","type":"rock"},
                        {"name":"Mascom Records (Mascom Group Serbia)","type":"various"}
                    ]}
                ]},
            {"name" : "Sony Music Entertainment","type":"object", 
                "children": [
                    {"name":"Columbia Records","type":"object",
                        "children" : [         
                            {"name":"Columbia Records","type":"various"},
                            {"name":"Hypnotize Minds","type":"hiphop"},
                            {"name":"Dreamville Entertainment","type":"hiphop"},
                            {"name":"Startime International","type":"rock"}
                    ]},
                    {"name":"Epic Records","type":"object",
                        "children" : [                                  
                            {"name":"Epic Records","type":"various"},
                            {"name":"DC Flag Records","type":"various"},
                            {"name":"Battery Records","type":"hiphop"},
                            {"name":"So So Def Recordings","type":"hiphop"},
                            {"name":"Volcano Entertainment","type":"rock"},
                            {"name":"Vested In Culture","type":"pop"}
                    ]},
                    {"name":"RCA Records","type":"object",
                        "children" : [                                   
                            {"name":"Nappy Boy Entertainment","type":"hiphop"},
                            {"name":"Polo Grounds Music","type":"hiphop"},
                            {"name":"Batista Records","type":"various"},
                            {"name":"A$AP Worldwide","type":"hiphop"},
                            {"name":"Tha Alumni Music Group","type":"various"}
                    ]},
                    {"name":"Kemosabe Records","type":"various"},
                    
                    {"name":"Sony Music Nashville","type":"object",
                        "children" : [         
                            {"name":"Arista Nashville","type":"various"},
                            {"name":"RCA Records Nashville","type":"various"},
                            {"name":"Columbia Nashville","type":"various"}
                    ]},
                    {"name":"Provident Music Group","type":"object",
                        "children" : [         
                            {"name":"Brentwood Records","type":"various"},
                            {"name":"Benson Records","type":"various"},
                            {"name":"Essential Records","type":"various"},
                            {"name":"Flicker Records","type":"rock"},
                            {"name":"Beach Street Records","type":"various"},
                            {"name":"Reunion Records","type":"various"},
                            {"name":"Praise Hymn Music Group","type":"various"},
                            {"name":"Provident Special Markets","type":"various"},
                            {"name":"Provident-Integrity Distribution ","type":"various"}
                    ]},
                    {"name":"RCA Inspiration","type":"various"},
                    {"name":"Sony Masterworks","type":"object",
                        "children" : [        
                            {"name":"Playbill Records","type":"various"},
                            {"name":"Bluebird Records","type":"various"},
                            {"name":"Masterworks Broadway Records","type":"various"},
                            {"name":"Okeh Records  Portrait Records","type":"various"},
                            {"name":"RCA Red Seal Records","type":"various"},
                            {"name":"Sony Classical","type":"various"},
                            {"name":"Odyssey Records","type":"various"},
                            {"name":"Arte Nova Classics","type":"various"}
                    ]},
                    {"name":"Legacy Recordings","type":"various"},
                    {"name":"RED Distribution","type":"object",
                        "children" : [        
                            {"name":"Odd Future Records","type":"hiphop"},
                            {"name":"Red Ink Records","type":"various"},
                            {"name":"Reach Records","type":"hiphop"}
                    ]},
                    {"name":"IODA and The Orchard Labels","type":"object",
                        "children" : [         
                            {"name":"187 Mafia Entertainment,LLC","type":"various"},
                            {"name":"ATO Records","type":"various"},
                            {"name":"Broken Bow Records","type":"various"},
                            {"name":"Cirque du Soleil","type":"various"},
                            {"name":"Eturnal Entertainment, LLC","type":"various"},
                            {"name":"Glassnote Records","type":"various"},
                            {"name":"Hip Hop Avenue,LLC","type":"hiphop"},
                            {"name":"IFE Music Group","type":"various"},
                            {"name":"Lamon Records","type":"various"},
                            {"name":"Metal Blade Records","type":"rock"},
                            {"name":"Relapse Records","type":"various"},
                            {"name":"Startime International","type":"various"},
                            {"name":"Suthun Music Entertainment","type":"various"},
                            {"name":"Velvet Hammer","type":"various"},
                            {"name":"Platinum City Entertainment","type":"various"},
                            {"name":"UK HUSTLE","type":"various"}
                    ]},
                    {"name":"Independent labels distributed by SME","type":"object",
                        "children" : [         
                            {"name":"American Recordings","type":"various"},
                            {"name":"ASSA Communication (South Korea)","type":"various"},
                            {"name":"Aware Records","type":"pop"},
                            {"name":"Black Butter Records (UK)","type":"edm"},
                            {"name":"BNM Records (Australia)","type":"various"},
                            {"name":"Buppu Records (Japan)","type":"pop"},
                            {"name":"Century Music Malaysia","type":"various"},
                            {"name":"Chrome Entertainment (South Korea)","type":"pop"},
                            {"name":"D-Town Records","type":"hiphop"},
                            {"name":"Danger Crue Records (Japan)","type":"rock"},
                            {"name":"Deutsche Harmonia Mundi","type":"various"},
                            {"name":"Hostess Entertainment (Japan)","type":"rock"},
                            {"name":"Independiente Records","type":"various"},
                            {"name":"In the Name Of","type":"various"},
                            {"name":"IVO504 Music","type":"various"},
                            {"name":"J Storm (Japan)","type":"various"},
                            {"name":"JTM Entertainment (South Korea)","type":"various"},
                            {"name":"JVR Music (Taiwan)","type":"various"},
                            {"name":"LOVEiS (Thailand)","type":"various"},
                            {"name":"M de Live (South Korea)","type":"various"},
                            {"name":"Megaforce Records","type":"rock"},
                            {"name":"Musik Hause Internationale Records","type":"various"},
                            {"name":"CBS/Viacom Music Group (National Amusements)","type":"object",
                            "children" : [    
                                {"name":"Nick Records","type":"various"},
                                {"name":"CBS Records","type":"various"}
                            ]},
                            
                            {"name":"NotNowMum! Records","type":"various"},
                            {"name":"Shout! Factory","type":"various"},
                            {"name":"Spazz Music Management","type":"various"},
                            {"name":"GmbH Music","type":"object", "children" : [
                                {"name":"SPV GmbH (Germany)","type":"various"}
                            ]},
                            {"name":"Robbins Entertainment","type":"various"},
                            {"name":"Drakkar Entertainment","type":"rock"},
                            {"name":"Rukus Avenue","type":"various"},
                            {"name":"Suthun Music Entertainment","type":"various"},
                            {"name":"TNC Company (South Korea)","type":"various"},
                            {"name":"Thugtertainment","type":"various"},
                            {"name":"Top Stop Music","type":"various"},
                            {"name":"Ultra Records","type":"edm"},
                            {"name":"Vibekingz","type":"various"},
                            {"name":"Wind-up Records","type":"various"},
                            {"name":"Wundertwinz Records","type":"various"},
                            {"name":"WWE Music Group","type":"various"},
                            {"name":"YMC Entertainment (South Korea)","type":"various"}
                    ]}                  
                ]},
            {"name" : "Universal Music Group","type":"object", 
                "children": [
                    {"name":"Interscope-Geffen-A&M","type":"object",
                        "children" : [         
                            {"name":"Interscope Records","type":"object",
                                "children" : [                                             
                                    {"name":"Aftermath Entertainment","type":"hiphop"},
                                    {"name":"Shady Records","type":"hiphop"},
                                    {"name":"Bad Boy Records","type":"hiphop"},
                                    {"name":"Cherrytree Records","type":"pop"},
                                    {"name":"DGC Records","type":"rock"},
                                    {"name":"Dreamville Records","type":"hiphop"},
                                    {"name":"F2 Records","type":"various"},
                                    {"name":"Maloof Music","type":"various"},
                                    {"name":"Mosley Music Group","type":"various"},
                                    {"name":"Paradise Records","type":"various"},
                                    {"name":"Star Trak Entertainment","type":"hiphop"},
                                    {"name":"Streamline Records","type":"pop"},
                                    {"name":"Suretone Records","type":"rock"},
                                    {"name":"Tennman Records","type":"various"},
                                    {"name":"Weapons of Mass Entertainment","type":"pop"},
                                    {"name":"Zone 4","type":"hiphop"},
                                    {"name":"will.i.am Music Group","type":"various"},
                                    {"name":"A&M Octone Records","type":"various"}
                                ]},
                            {"name":"Geffen Records","type":"object",
                                "children" : [                                             
                                    {"name":"Flawless Records","type":"various"},
                                    {"name":"Kon Live Distribution","type":"pop"},
                                    {"name":"Matriarch Records","type":"hiphop"},
                                    {"name":"Taylor Gang Records ","type":"hiphop"}
                                ]},
                            
                            {"name":"A&M Records","type":"object",
                                "children" : [     
                                     {"name":"A&M Records UK","type":"various"},
                                     {"name":"Tropical Records ","type":"various"}
                                ]}
                    ]},
                    {"name":"Capitol Music Group","type":"object",
                        "children" : [         
                            {"name":"Capitol Records","type":"object",
                                "children" : [                                             
                                    {"name":"Imperial Records","type":"various"},
                                    {"name":"Priority Records","type":"hiphop"},
                                    {"name":"Get Money Gang Entertainment","type":"hiphop"},
                                    {"name":"Ice H20 Records","type":"various"},
                                    {"name":"Lench Mob Records","type":"hiphop"},
                                    {"name":"Twenty-Two Recordings","type":"various"},
                                    {"name":"The RMG Music Group a unit of Twenty-Two Recordings","type":"various"},
                                    {"name":"Pinegrove Records (joint-venture)","type":"various"},
                                    {"name":"2101 Records","type":"pop"},
                                    {"name":"G-Unit Records","type":"hiphop"}
                                ]},
                            {"name":"Virgin Records","type":"object",
                                "children" : [ 
                                     {"name":"Charisma Records","type":"rock"},
                                     {"name":"Delabel (France)","type":"various"},
                                     {"name":"Relentless Records","type":"various"},
                                     {"name":"Venture Records","type":"various"},
                                     {"name":"10 Records","type":"various"}
                                ]},
                            {"name":"Motown Records","type":"object",
                                "children" : [                                     
                                    {"name":"Rowdy Records (distribution)","type":"various"},
                                    {"name":"Custard Records (distribution for select releases)","type":"various"},
                                    {"name":"Ecstatic Peace!","type":"rock"},
                                    {"name":"Derrty Entertainment","type":"hiphop"},
                                    {"name":"Motown Gospel","type":"various"}
                                ]},
                            {"name":"Capitol Christian Music Group","type":"object",
                                "children" : [                                     
                                    {"name":"Credential Recordings","type":"pop"},
                                    {"name":"Motown Gospel","type":"rock"},
                                    {"name":"Forefront Records","type":"rock"},
                                    {"name":"Sparrow Records","type":"rock"},
                                    {"name":"Re:Think","type":"pop"},
                                    {"name":"Tooth and Nail Records","type":"various"},
                                    {"name":"BEC Recordings","type":"various"},
                                    {"name":"Solid State Records","type":"rock"},
                                    {"name":"Topshelf Records","type":"various"},
                                    {"name":"VSR Music Group ","type":"various"}
                                ]},
                            {"name":"Blue Note Records","type":"object",
                                "children" : [                                     
                                    {"name":"Angel Records","type":"various"},
                                    {"name":"Manhattan Records","type":"various"},
                                    {"name":"Narada Productions","type":"various"},
                                    {"name":"Back Porch Records","type":"rock"},
                                    {"name":"Higher Octave Music","type":"various"}
                                ]},
                            {"name":"Caroline Distribution","type":"object",
                                "children" : [                                     
                                    {"name":"Astralwerks Records","type":"edm"},
                                    {"name":"Blast Music","type":"various"},
                                    {"name":"Caroline Records","type":"various"},
                                    {"name":"Definitive Jux Records","type":"hiphop"},
                                    {"name":"Fuel Records (US)","type":"rock"},
                                    {"name":"Gracie Productions","type":"various"},
                                    {"name":"Gyroscope Records","type":"various"},
                                    {"name":"I.R.S. Nashville","type":"various"},
                                    {"name":"Merovingian Music","type":"rock"},
                                    {"name":"Nature Sounds","type":"various"},
                                    {"name":"Green Streets Entertainment","type":"various"},
                                    {"name":"Stones Throw Records","type":"various"},
                                ]}
                    ]},
                    {"name":"Republic Records","type":"object",
                        "children" : [         
                            {"name":"American Recordings","type":"various"},
                            {"name":"Aware Records","type":"pop"},
                            {"name":"Brushfire Records (distribution)","type":"rock"},
                            {"name":"Casablanca Records","type":"edm"},
                            {"name":"Cash Money Records","type":"various"},
                            {"name":"Young Money Entertainment","type":"various"},
                            {"name":"We the Best Music Group","type":"hiphop"},
                            {"name":"Indie Pop Music","type":"various"},
                            {"name":"Lava Records","type":"pop"},
                            {"name":"Big Machine Label Group","type":"various"},
                            {"name":"Big Machine Records","type":"pop"},
                            {"name":"Valory Music","type":"various"},
                            {"name":"Republic Nashville","type":"various"},
                            {"name":"Dot Records","type":"various"},
                            {"name":"SRC Records","type":"hiphop"},
                            {"name":"Loud Records","type":"various"},
                            {"name":"Tuff Gong","type":"various"},
                            {"name":"ANTI- (distribution for select releases)","type":"various"},
                            {"name":"Next Plateau Entertainment (distribution)","type":"various"},
                            {"name":"Serjical Strike Records (distribution)","type":"rock"},
                            {"name":"XO Inc. (distribution)","type":"various"},
                            {"name":"Photo Finish Records (distribution)","type":"various"}
                    ]},
                    {"name":"Island Records","type":"object",
                        "children" : [         
                            {"name":"Mercury Records","type":"various"},
                            {"name":"4th & B'way Records","type":"various"},
                            {"name":"Chop Shop Records (distribution)","type":"rock"}
                    ]},
                    {"name":"Def Jam Recordings","type":"object",
                        "children" : [         
                            {"name":"Def Jam South","type":"hiphop"},
                            {"name":"GOOD Music","type":"various"},
                            {"name":"Disturbing tha Peace","type":"hiphop"},
                            {"name":"Roc-A-Fella Records","type":"various"},
                            {"name":"Desert Storm Records","type":"hiphop"},
                            {"name":"Corporate Thugz Entertainment","type":"hiphop"},
                            {"name":"Radio Killa Records ","type":"various"}
                    ]},
                    {"name":"Universal Music Group Nashville","type":"object",
                        "children" : [         
                            {"name":"MCA Nashville Records","type":"rock"},
                            {"name":"Mercury Nashville Records","type":"various"},
                            {"name":"Capitol Records Nashville","type":"various"},
                            {"name":"EMI Records Nashville","type":"various"}
                    ]},
                    {"name":"The Verve Music Group","type":"object",
                        "children" : [         
                            {"name":"Verve Records","type":"various"},
                            {"name":"GRP Records","type":"various"},
                            {"name":"Impulse! Records","type":"various"},
                            {"name":"Verve Forecast Records","type":"various"},
                            {"name":"Decca Broadway","type":"various"}
                    ]},
                    {"name":"Universal Music Classical","type":"object",
                        "children" : [         
                            {"name":"Decca Records","type":"various"},
                            {"name":"Decca Classics","type":"various"},
                            {"name":"Deutsche Grammophon","type":"various"},
                            {"name":"ECM","type":"various"},
                            {"name":"Mercury Classics","type":"various"}
                    ]},
                    {"name":"Universal Music Enterprises","type":"object",
                        "children" : [         
                            {"name":"Hip-O Records","type":"various"}
                    ]},
                    {"name":"Show Dog-Universal Music","type":"various"},
                    {"name":"Eagle Rock Entertainment","type":"rock"},
                    {"name":"Third-party major labels distributed by UMG","type":"object",
                        "children" : [         
                            {"name":"Disney Music Group (excluding Russia and Japan)","type":"object", 
                            "children" : [
                                {"name":"Hollywood Records","type":"pop"},
                                {"name":"Lyric Street Records","type":"various"},
                                {"name":"Mammoth Records","type":"various"},
                                {"name":"Walt Disney Records","type":"pop"},
                                {"name":"Buena Vista Records","type":"various"},
                                {"name":"Marvel Music","type":"rock"},
                                {"name":"DMG Nashtville","type":"various"}
                            ]}, 
                            {"name":"Ministry of Sound Australia","type":"various"},
                            {"name":"ABKCO Records","type":"various"},
                            {"name":"Bungalo Records","type":"various"},
                            {"name":"Concord Music Group","type":"various"},
                            {"name":"Viacom Music Group","type":"object",
                            "children": [
                                {"name":"Nick Records (Co-Produced with Sony Music Entertainment & Columbia Records)","type":"various"}
                            ]},
                            {"name":"Grindhouse Inc","type":"object", 
                            "children" : [
                                {"name":"Paramount Records","type":"various"},
                                {"name":"Comedy Central Records (Co-Produced with Alternative Distribution Alliance (Warner Music Group)","type":"various"}
                            ]},
                            {"name":"Earth Hertz Records","type":"various"},
                            {"name":"E1 Music (Asia as E1 Universal, Europe)","type":"various"},
                            {"name":"Hater Gang Records","type":"various"},
                            {"name":"Polyversal (previously by EMI)","type":"various"},
                            {"name":"Famous Records","type":"various"},
                            {"name":"Roc Nation","type":"object",
                            "children" : [
                                {"name":"StarRoc","type":"various"},
                                {"name":"Takeover Roc Nation","type":"various"}
                            ]},
                            {"name":"Warrior Records","type":"various"}
                    ]}
            ]}
    ]};
     // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    // variables for drag/drop
    var selectedNode = null;
    var draggingNode = null;
    // panning variables
    var panSpeed = 200;
    var panBoundary = 20; // Within 20px from edges will pan when dragging.
    // Misc. variables
    var i = 0;
    var duration = 750;
    var root;

    // size of the diagram
    var viewerWidth = $(window).width();
    var viewerHeight = $(window).height();
    $('#modal-1').css("height", $('.md-content').height() );

    $(window).resize(function(){
    	viewerWidth = $(window).width();
    	viewerHeight = $(window).height();
    	$('#modal-1').css("height", $('.md-content').height() );
    });

    var tree = d3.layout.tree()
        .size([viewerHeight, viewerWidth]);

    // define a d3 diagonal projection for use by the node paths later on.
    var diagonal = d3.svg.diagonal()
        .projection(function(d) {
            return [d.y, d.x];
        });


    // A recursive helper function for performing some setup by walking through all nodes
    function visit(parent, visitFn, childrenFn) {
        if (!parent) return;

        visitFn(parent);

        var children = childrenFn(parent);
        if (children) {
            var count = children.length;
            for (var i = 0; i < count; i++) {
                visit(children[i], visitFn, childrenFn);
            }
        }
    }

    // Call visit function to establish maxLabelLength
    visit(treeData, function(d) {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);

    }, function(d) {
        return d.children && d.children.length > 0 ? d.children : null;
        
    });
    
    function sortTree() {
        tree.sort(function(a, b) {
            return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
        });
    }
    // Sort the tree initially incase the JSON isn't in a sorted order.
    sortTree();

    function pan(domNode, direction) {
        var speed = panSpeed;
        if (panTimer) {
            clearTimeout(panTimer);
            translateCoords = d3.transform(svgGroup.attr("transform"));
            if (direction == 'left' || direction == 'right') {
                translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
                translateY = translateCoords.translate[1];
            } else if (direction == 'up' || direction == 'down') {
                translateX = translateCoords.translate[0];
                translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
            }
            scaleX = translateCoords.scale[0];
            scaleY = translateCoords.scale[1];
            scale = zoomListener.scale();
            svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
            d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
            zoomListener.scale(zoomListener.scale());
            zoomListener.translate([translateX, translateY]);
            panTimer = setTimeout(function() {
                pan(domNode, speed, direction);
            }, 50);
        }
    }

    // Define the zoom function for the zoomable tree
    function zoom() {
        svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
    var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);



    function initiateDrag(d, domNode) {
        draggingNode = d;
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', 'none');
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle show');
        d3.select(domNode).attr('class', 'node activeDrag');

        svgGroup.selectAll("g.node").sort(function(a, b) { // select the parent and sort the path's
            if (a.id != draggingNode.id) return 1; // a is not the hovered element, send "a" to the back
            else return -1; // a is the hovered element, bring "a" to the front
        });
        // if nodes has children, remove the links and nodes
        if (nodes.length > 1) {
            // remove link paths
            links = tree.links(nodes);
            nodePaths = svgGroup.selectAll("path.link")
                .data(links, function(d) {
                    return d.target.id;
                }).remove();
            // remove child nodes
            nodesExit = svgGroup.selectAll("g.node")
                .data(nodes, function(d) {
                    return d.id;
                }).filter(function(d, i) {
                    if (d.id == draggingNode.id) {
                        return false;
                    }
                    return true;
                }).remove();
        }

        // remove parent link
        parentLink = tree.links(tree.nodes(draggingNode.parent));
        svgGroup.selectAll('path.link').filter(function(d, i) {
            if (d.target.id == draggingNode.id) {
                return true;
            }
            return false;
        }).remove();

        dragStarted = null;
    }

    // define the baseSvg, attaching a class for styling and the zoomListener
    var baseSvg = d3.select("#treenode").append("svg")
        .attr("width", viewerWidth)
        .attr("height", viewerHeight)
        .attr("class", "overlay")
        .call(zoomListener);

    // Define the drag listeners for drag/drop behaviour of nodes.
    dragListener = d3.behavior.drag()
        .on("dragstart", function(d) {
            if (d == root) {
                return;
            }
            dragStarted = true;
            nodes = tree.nodes(d);
            d3.event.sourceEvent.stopPropagation();
            // it's important that we suppress the mouseover event on the node being dragged. Otherwise it will absorb the mouseover event and the underlying node will not detect it d3.select(this).attr('pointer-events', 'none');
        })
        .on("drag", function(d) {
            if (d == root) {
                return;
            }
            if (dragStarted) {
                domNode = this;
                initiateDrag(d, domNode);
            }

            // get coords of mouseEvent relative to svg container to allow for panning
            relCoords = d3.mouse($('svg').get(0));
            if (relCoords[0] < panBoundary) {
                panTimer = true;
                pan(this, 'left');
            } else if (relCoords[0] > ($('svg').width() - panBoundary)) {

                panTimer = true;
                pan(this, 'right');
            } else if (relCoords[1] < panBoundary) {
                panTimer = true;
                pan(this, 'up');
            } else if (relCoords[1] > ($('svg').height() - panBoundary)) {
                panTimer = true;
                pan(this, 'down');
            } else {
                try {
                    clearTimeout(panTimer);
                } catch (e) {

                }
            }

            d.x0 += d3.event.dy;
            d.y0 += d3.event.dx;
            var node = d3.select(this);
            node.attr("transform", "translate(" + d.y0 + "," + d.x0 + ")");
            updateTempConnector();
        }).on("dragend", function(d) {
            if (d == root) {
                return;
            }
            domNode = this;
            if (selectedNode) {
                // now remove the element from the parent, and insert it into the new elements children
                var index = draggingNode.parent.children.indexOf(draggingNode);
                if (index > -1) {
                    draggingNode.parent.children.splice(index, 1);
                }
                if (typeof selectedNode.children !== 'undefined' || typeof selectedNode._children !== 'undefined') {
                    if (typeof selectedNode.children !== 'undefined') {
                        selectedNode.children.push(draggingNode);
                    } else {
                        selectedNode._children.push(draggingNode);
                    }
                } else {
                    selectedNode.children = [];
                    selectedNode.children.push(draggingNode);
                }
                // Make sure that the node being added to is expanded so user can see added node is correctly moved
                expand(selectedNode);
                sortTree();
                endDrag();
            } else {
                endDrag();
            }
        });

    function endDrag() {
        selectedNode = null;
        d3.selectAll('.ghostCircle').attr('class', 'ghostCircle');
        d3.select(domNode).attr('class', 'node');
        // now restore the mouseover event or we won't be able to drag a 2nd time
        d3.select(domNode).select('.ghostCircle').attr('pointer-events', '');
        updateTempConnector();
        if (draggingNode !== null) {
            update(root);
            centerNode(draggingNode);
            draggingNode = null;
        }
    }

    // Helper functions for collapsing and expanding nodes.
    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function expand(d) {
        if (d._children) {
            d.children = d._children;
            d.children.forEach(expand);
            d._children = null;
        }
    }

    var overCircle = function(d) {
        selectedNode = d;
        updateTempConnector();
        
    };
    var outCircle = function(d) {
        selectedNode = null;
        updateTempConnector();
    };

    // Function to update the temporary connector indicating dragging affiliation
    var updateTempConnector = function() {
        var data = [];
        if (draggingNode !== null && selectedNode !== null) {
            // have to flip the source coordinates since we did this for the existing connectors on the original tree
            data = [{
                source: {
                    x: selectedNode.y0,
                    y: selectedNode.x0
                },
                target: {
                    x: draggingNode.y0,
                    y: draggingNode.x0
                }
            }];
        }
        var link = svgGroup.selectAll(".templink").data(data);

        link.enter().append("path")
            .attr("class", "templink")
            .attr("d", d3.svg.diagonal())
            .attr('pointer-events', 'none');

        link.attr("d", d3.svg.diagonal());

        link.exit().remove();
    };

    // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.
    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

    // Toggle children function
    function toggleChildren(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return d;
    }

    // Toggle children on click.
    function click(d) {
        if (d3.event.defaultPrevented) return; // click suppressed
        d = toggleChildren(d);
        update(d);
        centerNode(d);
    }

    function update(source) {
        // Compute the new height, function counts total children of root node and sets tree height accordingly.
        // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
        // This makes the layout more consistent.
        var levelWidth = [1];
        var childCount = function(level, n) {

            if (n.children && n.children.length > 0) {
                if (levelWidth.length <= level + 1) levelWidth.push(0);

                levelWidth[level + 1] += n.children.length;
                n.children.forEach(function(d) {
                    childCount(level + 1, d);
                });
            }
        };
        childCount(0, root);
        var newHeight = d3.max(levelWidth) * 45; // 25 pixels per line  
        tree = tree.size([newHeight, viewerWidth]);

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Set widths between levels based on maxLabelLength.
        nodes.forEach(function(d) {
            
            d.y = (d.depth * (maxLabelLength * 8)); //maxLabelLength * 10px
            // alternatively to keep a fixed scale one can set a fixed depth per level
            // Normalize for fixed-depth by commenting out below line
            // d.y = (d.depth * 500); //500px per level.
        });

        // Update the nodes…
        node = svgGroup.selectAll("g.node")
            .data(nodes, function(d) {
                    return d.id || (d.id = ++i);
            });

        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', click);

        nodeEnter.append("circle")
            .attr('class', 'nodeCircle')
            .attr('class', function(d) { return (d.type + " nodeCircle") })
            .attr("r", 10)
            .style("fill", function(d) {
                return d._children ? "lightsteelblue" : "#fff";
            })

        nodeEnter.append("text")
            .attr("x", function(d) {
                return d.children || d._children ? -10 : 10;
            })
            .attr("dy", ".35em")
            .attr('class', 'nodeText')
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            })
            .style("fill-opacity", 0)


        // Update the text to reflect whether node has children or not.
        node.select('text')
            .attr("x", function(d) {
                return d.children || d._children ? -18 : 18;
            })
            .attr("text-anchor", function(d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function(d) {
                return d.name;
            });

        // Change the circle fill depending on whether it has children and is collapsed
       node.select("circle.nodeCircle")
            .attr("r", 10)
            .style("fill", function(d) {
                return d._children ? "rgba(186,186,186,0.5)" : "#fff";
                                   
            });

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Fade the text in
        nodeUpdate.select("text")
            .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function(d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        nodeExit.select("circle")
            .attr("r", 10);

        nodeExit.select("text")
            .style("fill-opacity", 0);

        // Update the links…
        var link = svgGroup.selectAll("path.link")
            .data(links, function(d) {
                
                    return d.target.id;
                
            });

        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function(d) {
                var o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function(d) {
                var o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            })
            .remove();
      

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        
        return nodes;

    }
            
    // Start the tree with every parent collapsed (starting from the second level)
    function startCollapse(d){
           d.children.forEach(function(e){
               if (e.children){
                   startCollapse(e);
               }
                e = toggleChildren(e);
           });
    }

    // Append a group which holds all nodes and which the zoom Listener can act upon.
    var svgGroup = baseSvg.append("g");

    var _nodes;
    var arreglo;

    function initializeTree(){
        // Define the root
        var aux = $.extend(true, {}, treeData);

        root = aux;
        root.x0 = viewerHeight / 2;
        root.y0 = 0;

        _nodes = update(root);
    }

    initializeTree();
    arreglo = [];
    retrieveNames(root, arreglo);
    $("#totalLabels").text(arreglo.length);
    startCollapse(root);
    update(root);
    centerNode(root);
    

    $("#hiphop").click(function(){
        if (!$("#hiphop").hasClass("selected")){
            $("#all").removeClass("selected");
            $("#edm").removeClass("selected");
            $("#pop").removeClass("selected");
            $("#rock").removeClass("selected");
            $("#hiphop").addClass("selected");
            $("#various").removeClass("selected");

            initializeTree();
            startCollapse(root);
            filterNode("hiphop");
            update(root);
            centerNode(root);
            arreglo = [];
            retrieveNames(root, arreglo);
        }
    });

    $("#all").click(function(){
        if (!$("#all").hasClass("selected")){
            $("#all").addClass("selected");
            $("#edm").removeClass("selected");
            $("#pop").removeClass("selected");
            $("#rock").removeClass("selected");
            $("#hiphop").removeClass("selected");
            $("#various").removeClass("selected");

            initializeTree();
            arreglo = [];
            retrieveNames(root, arreglo);
            startCollapse(root);
            update(root);
            centerNode(root);
        }
    });

    $("#edm").click(function(){
        if (!$("#edm").hasClass("selected")){
            $("#all").removeClass("selected");
            $("#edm").addClass("selected");
            $("#pop").removeClass("selected");
            $("#rock").removeClass("selected");
            $("#hiphop").removeClass("selected");
            $("#various").removeClass("selected");

            initializeTree();
            startCollapse(root);
            filterNode("edm");
            update(root);
            centerNode(root);
            arreglo = [];
            retrieveNames(root, arreglo);
        }
    });

    $("#pop").click(function(){
        if (!$("#pop").hasClass("selected")){
            $("#all").removeClass("selected");
            $("#edm").removeClass("selected");
            $("#pop").addClass("selected");
            $("#rock").removeClass("selected");
            $("#hiphop").removeClass("selected");
            $("#various").removeClass("selected");

            initializeTree();
            startCollapse(root);
            filterNode("pop");
            update(root);
            centerNode(root);
            arreglo = [];
            retrieveNames(root, arreglo);
        }
    });

    $("#rock").click(function(){
        if (!$("#rock").hasClass("selected")){
            $("#all").removeClass("selected");
            $("#edm").removeClass("selected");
            $("#pop").removeClass("selected");
            $("#rock").addClass("selected");
            $("#hiphop").removeClass("selected");
            $("#various").removeClass("selected");


            initializeTree();
            startCollapse(root);
            filterNode("rock");
            update(root);
            centerNode(root);
            arreglo = [];
            retrieveNames(root, arreglo);
        }
    });

    $("#various").click(function(){
        if (!$("#various").hasClass("selected")){
            $("#all").removeClass("selected");
            $("#edm").removeClass("selected");
            $("#pop").removeClass("selected");
            $("#rock").removeClass("selected");
            $("#hiphop").removeClass("selected");
            $("#various").addClass("selected");

            initializeTree();
            startCollapse(root);
            filterNode("various");
            update(root);
            centerNode(root);
            arreglo = [];
            retrieveNames(root, arreglo);
        }
    });

    function tagFather(d){
        if (d.parent){
            tagFather(d.parent);
        }
        d.type="father";
    }

    function filterNode(genre){
        var nodesToShow = _nodes.filter(function(n) { 
            return n.type == genre;
        });
        
        nodesToShow.forEach(function(d){
            tagFather(d.parent);
        });

        nodesToShow.forEach(function(d){
            expandParentByString(d.parent, genre);
        });
    }

    var nodeToFind;
    var auxiliar;

    function findNode(label){
        nodeToFind = _nodes.filter(function(n) { 
            return n.name.toLowerCase() == label.toLowerCase();
        })[0];
        auxiliar = nodeToFind.type;
        nodeToFind.type = "highlighted"+nodeToFind.type;

        collapse(root);
        expandParent(nodeToFind);
        
        update(root);
        centerNode(nodeToFind);

        nodeToFind.type = auxiliar;
    }

    function expandParent(n) {
      if (n._children) {
        n.children = n._children;
        n._children = null;
      }
      if (n.parent){
        expandParent(n.parent);
      }
    }

    function expandParentByString(n, string){
      if (n._children) {
        var results = [];
        n._children.forEach(function(e){
            if (e.type == string){
                results.push(e);
            }
        });
        n.children = results;
        n._children = null;
      }
      if (n.parent){
         expandParentByString(n.parent, "father");
      }
      if (n.name == "Labels root"){
        var results = [];
        n.children.forEach(function(e){
            if (e.type == string){
                results.push(e);
            }
        });
        n.children = results;
        n._children = null;
      }
    }

    function retrieveNames(d, array){
        if (d.children){
           d.children.forEach(function(e){
               if (e.children){
                   array.push(e.name);
                   retrieveNames(e, array);
               }
                array.push(e.name);
            });
        }
    }   
    
    function strInArray(str, strArray) {
      for (var j=0; j<strArray.length; j++) {
        if (strArray[j].toLowerCase().match(str.toLowerCase()) && $return.length < 5) {
          var $h = strArray[j].toLowerCase().replace(str.toLowerCase(), '<strong>'+str.toLowerCase()+'</strong>');
          $return.push('<li class="prediction-item"><span class="prediction-text">' + $h + '</span></li>');
        }
      }
    }
      
    function nextItem(kp) {
      if ( $('.focus').length > 0 ) {
        var $next = $('.focus').next(),
            $prev = $('.focus').prev();
      }
      
      if ( kp == 38 ) { // Up
      
        if ( $('.focus').is(':first-child') ) {
          $prev = $('.prediction-item:last-child');
        }
        
        $('.prediction-item').removeClass('focus');
        $prev.addClass('focus');
        
      } else if ( kp == 40 ) { // Down
      
        if ( $('.focus').is(':last-child') ) {
          $next = $('.prediction-item:first-child');
        }
        
        $('.prediction-item').removeClass('focus');
        $next.addClass('focus');
      }
    }

    $(function(){  

      $('#search-bar').keydown(function(e){
        $key = e.keyCode;
        if ( $key == 38 || $key == 40 ) {
          nextItem($key);
          return;
        }
        
        setTimeout(function() {
          var $search = $('#search-bar').val();
          $return = [];
          
            var uniqueElements = [];
            $.each(arreglo, function(i, el){
                if($.inArray(el, uniqueElements) === -1) uniqueElements.push(el);
            });

          strInArray($search, uniqueElements);

          if ( $search == '' || ! $('input').val ) {
            $('.suggested-list').html('').slideUp();
          } else {
            $('.suggested-list').html($return).slideDown();
          }
      
          $('.prediction-item').on('click', function(){
            $text = $(this).find('span').text();
            $('.suggested-list').slideUp(function(){
              $(this).html('');
            });
            $('#search-bar').val($text);
              submitSearch();
              
              
          });
          
          $('.prediction-item:first-child').addClass('focus');
          
        }, 50);
      });
    });
      
      $('#search-bar').focus(function(){
        if ( $('.prediction-item').length > 0 ) {
          $('.suggested-list').slideDown();
        }
        
        $('#searchform').submit(function(e){
          e.preventDefault();
          submitSearch();
        });
      });

        $('#search-bar').focusin(function(){
        $(this).val("");
        });
    
    function submitSearch(){    
        $text = $('.focus').find('span').text();
        $('.suggested-list').slideUp();
        $('#search-bar').val($text);
        $('input').blur();

        var capitalizedText = $text.replace(/^(.)|\s(.)/g, function($1){ return $1.toUpperCase( ); });

        findNode(capitalizedText);
        update(root);

        $('#search-bar').val("");        
    }
      
      $('#search-bar').blur(function(){
       
        if ( $('.prediction-item').length > 0 ) {
          $('.suggested-list').slideUp(function(){
              $(this).html('');
          });
        }
      });
    
    $('.icon-search').click(function(e){
        e.preventDefault();
        if ( $('#search-bar').val() !== ""){
            submitSearch();
        }
        else{
            $('#search-bar').fadeToggle("slow");
        }
    });
    $('#search-bar').hide();
    
});

  