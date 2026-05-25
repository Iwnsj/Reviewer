// =========================================================================
//  RIZAL NOVELS QUIZ DATABASE — QUESTIONS (NOLI & FILI)
// =========================================================================

const RIZAL_QUESTIONS = {
    noli: [
        {
            category: 'General',
            question: 'What is the English translation of the Latin phrase "Noli Me Tangere"?',
            options: [
                'Touch Me Not',
                'Forget Me Not',
                'Believe Me Not',
                'Do Not Fear Me'
            ],
            answer: 0,
            explanation: 'The title "Noli Me Tangere" is a Latin phrase meaning "Touch Me Not". It is taken from the Bible, specifically John 20:17, where Jesus speaks to Mary Magdalene after His resurrection.'
        },
        {
            category: 'General',
            question: 'To whom did Jose Rizal dedicate his first novel, Noli Me Tangere?',
            options: [
                'To the GOMBURZA Martyrs',
                'To His Mother, Teodora Alonzo',
                'To the Fatherland (The Philippines)',
                'To the Spanish Governor-General'
            ],
            answer: 2,
            explanation: 'Rizal dedicated Noli Me Tangere to his country, the Fatherland ("To My Fatherland" or "A Mi Patria"), highlighting the social cancer that plagued the country and appealing for a cure.'
        },
        {
            category: 'General',
            question: 'In which European city was Noli Me Tangere first published in 1887?',
            options: [
                'Madrid, Spain',
                'Berlin, Germany',
                'Ghent, Belgium',
                'Paris, France'
            ],
            answer: 1,
            explanation: 'Noli Me Tangere was printed and published in Berlin, Germany, in March 1887. Rizal finished the novel there under extreme financial hardship.'
        },
        {
            category: 'History',
            question: 'Who was the wealthy friend of Jose Rizal who loaned him the money to publish Noli Me Tangere?',
            options: [
                'Valentin Ventura',
                'Ferdinand Blumentritt',
                'Maximo Viola',
                'Marcelo H. del Pilar'
            ],
            answer: 2,
            explanation: 'Dr. Maximo Viola, a wealthy friend and fellow reformist, visited Rizal in Berlin and generously loaned him the funds (Php 300) needed to print the first 2,000 copies of the novel.'
        },
        {
            category: 'Characters',
            question: 'Who is the main protagonist of Noli Me Tangere, a wealthy and idealistic young Filipino who studied in Europe?',
            options: [
                'Basilio',
                'Isagani',
                'Crisostomo Ibarra',
                'Elias'
            ],
            answer: 2,
            explanation: 'Juan Crisostomo Ibarra y Magsalin is the main protagonist. He returns to the Philippines after seven years of studying in Europe, full of hope and reformist plans for his country.'
        },
        {
            category: 'Characters',
            question: 'Who was the biological father of Maria Clara, revealed as a major secret in the novel?',
            options: [
                'Capitan Tiago',
                'Padre Damaso',
                'Padre Salvi',
                'Don Rafael Ibarra'
            ],
            answer: 1,
            explanation: 'Padre Damaso, the Franciscan friar, is revealed to be the biological father of Maria Clara, resulting from his scandalous affair with Pia Alba, Capitan Tiago\'s wife.'
        },
        {
            category: 'Characters',
            question: 'Who raised Maria Clara and was publicly known as her wealthy, compliant father?',
            options: [
                'Capitan Tiago',
                'Don Tiburcio',
                'Capitan Tinong',
                'Don Anastasio'
            ],
            answer: 0,
            explanation: 'Don Santiago de los Santos, commonly known as Capitan Tiago, raised Maria Clara as his own daughter, unaware (or in denial) of her true parentage until the secrets began unraveling.'
        },
        {
            category: 'Characters',
            question: 'What was the name of Crisostomo Ibarra\'s father, whose tragic death in prison drives much of the early plot?',
            options: [
                'Don Pedro Eibarramendia',
                'Don Saturnino Ibarra',
                'Don Rafael Ibarra',
                'Don Jose Magsalin'
            ],
            answer: 2,
            explanation: 'Don Rafael Ibarra, a wealthy and highly respected landowner, was imprisoned after defending a young boy from a Spanish tax collector. He died in prison and was labeled a heretic and subversivo.'
        },
        {
            category: 'Plot',
            question: 'What desecration did Padre Damaso order concerning the remains of Don Rafael Ibarra?',
            options: [
                'Burning his skeleton',
                'Exhuming his body from the Catholic cemetery to be thrown into the lake',
                'Refusing to allow any burial ceremony at all',
                'Chaining his tomb in public view'
            ],
            answer: 1,
            explanation: 'Due to Don Rafael being accused of heresy and filibusterism, Padre Damaso ordered the parish gravedigger to exhume Don Rafael\'s corpse and transfer it to the Chinese cemetery. When it proved too heavy in the rain, the gravedigger threw it into the lake.'
        },
        {
            category: 'Characters',
            question: 'Who is the mysterious, noble outlaw and boatman who repeatedly saves Ibarra\'s life and represents the oppressed masses?',
            options: [
                'Tarsilo',
                'Basilio',
                'Lucas',
                'Elias'
            ],
            answer: 3,
            explanation: 'Elias is the mysterious, highly intelligent pilot/boatman who lives as a fugitive. He serves as Ibarra\'s guide and protector, sacrificing himself in the end.'
        },
        {
            category: 'Characters',
            question: 'Which character in San Diego is considered "mad" by the uneducated townspeople but is actually a brilliant, forward-thinking scholar?',
            options: [
                'Tasio (Philosopher Tasio)',
                'Don Filipo Lino',
                'Lucas',
                'Tandang Selo'
            ],
            answer: 0,
            explanation: 'Don Anastasio, popularly known as Pilosopong Tasyo (Tasio the Sage/Philosopher), is a wise, retired scholar whose progressive and rational ideas make the townspeople think he is insane.'
        },
        {
            category: 'Plot',
            question: 'What progressive project does Crisostomo Ibarra attempt to establish in San Diego to honor his father\'s memory?',
            options: [
                'A modern hospital',
                'A primary school',
                'A agricultural cooperative',
                'A local parish church'
            ],
            answer: 1,
            explanation: 'In honor of his late father who believed in education, Ibarra finances the construction of a modern primary school in San Diego, free from the direct control of the superstitious parish friars.'
        },
        {
            category: 'Characters',
            question: 'Who is the young Franciscan friar who replaced Padre Damaso as parish priest of San Diego and harbors a secret, obsessive lust for Maria Clara?',
            options: [
                'Padre Sibyla',
                'Padre Fernandez',
                'Padre Salvi',
                'Padre Florentino'
            ],
            answer: 2,
            explanation: 'Padre Bernardo Salvi is the silent, sickly, and intensely rigid Franciscan friar who secretly covets Maria Clara, using his religious authority to manipulate events.'
        },
        {
            category: 'Characters',
            question: 'Which tragic mother goes completely insane after losing her two sons, who are young sacristans in the church?',
            options: [
                'Pia Alba',
                'Sisa',
                'Doña Consolacion',
                'Doña Victorina'
            ],
            answer: 1,
            explanation: 'Sisa, a poor mother married to an abusive gambler, loses her mind after her two beloved sons, Crispin and Basilio, are falsely accused of theft and disappear.'
        },
        {
            category: 'Characters',
            question: 'Which of Sisa\'s sons is beaten to death by the sacristan mayor inside the convent after being accused of stealing money?',
            options: [
                'Basilio',
                'Crispin',
                'Julio',
                'Tales'
            ],
            answer: 1,
            explanation: 'Crispin, the younger brother, is falsely accused of stealing two ounces of gold, locked in the convent, and brutally beaten to death by the sacristan mayor.'
        },
        {
            category: 'Characters',
            question: 'How did Basilio escape from the church convent where his brother was killed?',
            options: [
                'He fought his way out with a knife',
                'Capitan Tiago smuggled him out in a carriage',
                'He slid down a vine or rope under the cover of a storm',
                'Elias broke the doors down to rescue him'
            ],
            answer: 2,
            explanation: 'Basilio managed to escape the abusive convent by climbing out of a window and sliding down a vine/rope during a dark storm, surviving a bullet graze from the Civil Guard.'
        },
        {
            category: 'Characters',
            question: 'Who is Doña Victorina de de Espadaña?',
            options: [
                'The abusive wife of the military Alferez',
                'A wealthy Spanish duchess visiting the province',
                'An ambitious Filipina who cakes herself in heavy makeup and pretends to be pure Spanish',
                'The mother of Maria Clara'
            ],
            answer: 2,
            explanation: 'Doña Victorina is a pretentious, heavily powdered Filipina who despises her own heritage. She marries the quack Spanish doctor Don Tiburcio and acts with extreme snobbery and pride.'
        },
        {
            category: 'Characters',
            question: 'What is the true profession of Don Tiburcio de Espadaña, the husband of Doña Victorina?',
            options: [
                'A licensed doctor of medicine',
                'A high-ranking military colonel',
                'A former customs officer and medical quack who never went to medical school',
                'A legal counselor for the friars'
            ],
            answer: 2,
            explanation: 'Don Tiburcio is a lame, henpecked, and stuttering Spanish traveler who is actually a former customs officer. Encouraged by Doña Victorina, he poses as a licensed medical specialist to charge high fees.'
        },
        {
            category: 'Characters',
            question: 'Who is the vulgar, abusive wife of the Alferez (military commander) of San Diego, known as the "Muse of the Civil Guard"?',
            options: [
                'Doña Consolacion',
                'Doña Victorina',
                'Tia Isabel',
                'Hermana Penchang'
            ],
            answer: 0,
            explanation: 'Doña Consolacion is the crude, abusive, and violently bitter wife of the Alferez. She represents the degradation of local women who align themselves with abusive foreign soldiers.'
        },
        {
            category: 'Plot',
            question: 'How did Elias save Crisostomo Ibarra during the public ceremony for the school\'s cornerstone?',
            options: [
                'He intercepted a poison dart',
                'He pulled Ibarra away just as the rigged derrick and heavy stone collapsed',
                'He shot the assailant from a distance',
                'He convinced the Alferez to cancel the ceremony'
            ],
            answer: 1,
            explanation: 'During the laying of the cornerstone, the yellowish man rigged the derrick to collapse on Ibarra. Elias, warning Ibarra, pulled him to safety, and the yellowish man was crushed by the collapsing stone instead.'
        },
        {
            category: 'Plot',
            question: 'Who designed and rigged the cornerstone derrick to collapse on Ibarra, dying in his own trap?',
            options: [
                'Lucas',
                'The Yellowish Man (Taong Madilaw)',
                'Tandang Selo',
                'Don Tiburcio'
            ],
            answer: 1,
            explanation: 'The Yellowish Man (Taong Madilaw), hired by Ibarra\'s enemies, designed the stone crane so it would crash down on Ibarra. Thanks to Elias\'s quick action, the yellowish man died when the machinery collapsed.'
        },
        {
            category: 'Plot',
            question: 'What tragic discovery does Elias make regarding Ibarra\'s ancestry and his own family\'s ruin?',
            options: [
                'Ibarra\'s father stole Elias\'s lands',
                'Ibarra\'s great-grandfather was the Spanish clerk who falsely accused Elias\'s grandfather of arson',
                'Ibarra\'s uncle killed Elias\'s mother',
                'Ibarra was not actually a native Filipino'
            ],
            answer: 1,
            explanation: 'Elias discovers that Ibarra\'s great-grandfather, Don Pedro Eibarramendia, was the malicious Spanish accountant who accused Elias\'s grandfather of setting a warehouse on fire, triggering their family\'s total ruin, disgrace, and suicide.'
        },
        {
            category: 'Plot',
            question: 'How did Elias react when he discovered that Ibarra was the descendant of his family\'s cruel oppressor?',
            options: [
                'He immediately stabbed Ibarra',
                'He fled to the mountains and swore to kill him',
                'He raised his sword to strike Ibarra but stopped, realizing Ibarra was innocent of his ancestor\'s sins',
                'He reported Ibarra to the Civil Guard'
            ],
            answer: 2,
            explanation: 'Elias initially wanted to kill Ibarra in a fit of rage, but after running away and reflecting, he returned and realized that Crisostomo Ibarra was an innocent, noble man who should not be blamed for the sins of his great-grandfather.'
        },
        {
            category: 'Plot',
            question: 'Who masterminded the fake rebellion designed to frame Crisostomo Ibarra as a treasonous subversivo?',
            options: [
                'Padre Salvi',
                'Padre Damaso',
                'The Alferez',
                'Doña Victorina'
            ],
            answer: 0,
            explanation: 'Padre Salvi masterminded the fake uprising, using the sacristan mayor and Lucas to recruit poor men in Ibarra\'s name. He then "warned" the Alferez to catch them and frame Ibarra.'
        },
        {
            category: 'Plot',
            question: 'Why did Maria Clara reluctantly hand over Ibarra\'s old love letters to Padre Salvi?',
            options: [
                'She had fallen in love with another man, Linares',
                'Padre Salvi blackmailed her with the secret of her biological father (Padre Damaso) to protect her mother\'s memory',
                'She believed Ibarra had betrayed her in Europe',
                'She wanted to use the letters to clear Ibarra\'s name'
            ],
            answer: 1,
            explanation: 'Padre Salvi discovered the letters of Pia Alba revealing that Padre Damaso was Maria Clara\'s true father. He blackmailed her, forcing her to trade Ibarra\'s love letters for her mother\'s letters to prevent a public scandal.'
        },
        {
            category: 'Plot',
            question: 'What did Maria Clara receive from Padre Salvi in exchange for Crisostomo Ibarra\'s love letters?',
            options: [
                'A bag of pure gold',
                'Two letters written by her deceased mother, Pia Alba, detailing her sorrow and her biological father\'s identity',
                'A document securing Ibarra\'s freedom',
                'A rosary blessed by the Pope'
            ],
            answer: 1,
            explanation: 'She traded Ibarra\'s love letters for two letters written by her mother Pia Alba before she died. These letters detailed Pia\'s shame, her rape/affair with Padre Damaso, and her wish to die.'
        },
        {
            category: 'Plot',
            question: 'How did Elias rescue Crisostomo Ibarra from the prison in Manila?',
            options: [
                'He bribed the jail guards with Ibarra\'s gold',
                'He disguised Ibarra as a woodcarver and smuggled him out',
                'He set the prison on fire and broke Ibarra out during the chaos',
                'He disguised himself as a guard and walked him out'
            ],
            answer: 2,
            explanation: 'Elias set fire to Ibarra\'s own mansion as a diversion, then used the confusion to break Ibarra out of jail. They escaped on a small boat (banka) hidden under bundles of grass (zacate).'
        },
        {
            category: 'Plot',
            question: 'How did Ibarra and Elias escape down the Pasig River and into the lake while being pursued by the Civil Guard?',
            options: [
                'They used a steamship',
                'They swam the entire length of the river',
                'They hid under mounds of grass (zacate) in a small boat',
                'They rode horses along the riverbanks'
            ],
            answer: 2,
            explanation: 'Elias hid Ibarra in a small, low-profile banka covered in tall grass (zacate or fodder) to pass the guards and outposts along the river and escape into the open lake.'
        },
        {
            category: 'Plot',
            question: 'How did Elias save Ibarra when they were surrounded by Civil Guards in a boat on the lake?',
            options: [
                'He jumped into the lake to draw the guards\' gunfire away from Ibarra',
                'He fired a cannon at the Spanish boat',
                'He negotiated with the commander, offering them gold',
                'He rowed faster than the steamship'
            ],
            answer: 0,
            explanation: 'To save the non-swimmer Ibarra, Elias jumped into the lake and swam away, drawing the pursuing guards\' attention and gunfire. The guards shot at him, believing he was Ibarra, allowing Ibarra to escape.'
        },
        {
            category: 'Plot',
            question: 'Whom did the young Basilio find dying in the middle of the Ibarra forest on Christmas Eve?',
            options: [
                'Crispin',
                'His mother, Sisa',
                'Padre Damaso',
                'Elias'
            ],
            answer: 1,
            explanation: 'Basilio returned to the forest and found his mentally ill mother, Sisa. She recognized him briefly before dying of exhaustion and grief in his arms.'
        },
        {
            category: 'Plot',
            question: 'Who helped Basilio bury his mother Sisa and build a funeral pyre for cremation in the forest?',
            options: [
                'Crisostomo Ibarra',
                'Capitan Tiago',
                'Elias, who was mortally wounded',
                'Pilosopong Tasyo'
            ],
            answer: 2,
            explanation: 'Elias, bleeding and mortally wounded from the gunfire on the lake, dragged himself to the forest. He instructed Basilio to build a funeral pyre to cremate Sisa and him, and dig up a treasure buried nearby.'
        },
        {
            category: 'Symbolism',
            question: 'What are the famous, inspiring last words spoken by Elias before he succumbed to his wounds in the forest?',
            options: [
                '"I die without seeing the dawn beam upon my homeland... You who shall see it, welcome it..."',
                '"Revenge is the only path to our freedom!"',
                '"Let my blood wash away the sins of San Diego."',
                '"Tell Ibarra that the fight has only just begun."'
            ],
            answer: 0,
            explanation: 'Elias\'s famous final words are: "I die without seeing the dawn beam upon my homeland... You who shall see it, welcome it! Forget not those who fell during the night." This remains one of the most powerful patriotic quotes in Philippine literature.'
        },
        {
            category: 'Plot',
            question: 'What became of Maria Clara at the end of Noli Me Tangere?',
            options: [
                'She married Linares and moved to Spain',
                'She was poisoned by Padre Salvi',
                'She entered the Santa Clara nunnery/convent',
                'She fled to the mountains to join the rebels'
            ],
            answer: 2,
            explanation: 'Believing Ibarra was killed in the lake shootout, Maria Clara refused to marry Linares. She stood up to Padre Damaso and declared she would take her own life unless she was allowed to enter the cloistered Santa Clara convent.'
        },
        {
            category: 'Characters',
            question: 'Who was Linares, the young man chosen to marry Maria Clara at the end of Noli Me Tangere?',
            options: [
                'A Spanish law graduate and relative of Don Tiburcio, favored by Padre Damaso',
                'A wealthy businessman from Binondo',
                'A childhood friend of Crisostomo Ibarra',
                'The son of the town Alferez'
            ],
            answer: 0,
            explanation: 'Alfonso Linares was a young, soft-spoken Spanish relative of Don Tiburcio who came to the Philippines. Padre Damaso promoted him as a husband for Maria Clara to break her tie with Ibarra.'
        },
        {
            category: 'Characters',
            question: 'What was the tragic fate of Padre Damaso after Maria Clara entered the nunnery?',
            options: [
                'He was promoted to Archbishop of Manila',
                'He was reassigned to a remote province and died of heartbreak and depression',
                'He was executed by the Civil Guard',
                'He joined the revolutionary underground'
            ],
            answer: 1,
            explanation: 'Heartbroken over Maria Clara entering the convent and losing all control, Padre Damaso was transferred to a remote parish. He was found dead in his bed the next day, officially due to sorrow and apoplexy.'
        },
        {
            category: 'Characters',
            question: 'Who is Lucas, a minor antagonist who clashes with Ibarra?',
            options: [
                'The sacristan mayor who beat Crispin',
                'The brother of the yellowish man, who tried to extract money from Ibarra and helped organize the fake revolt',
                'The biological father of Elias',
                'The personal bodyguard of Capitan Tiago'
            ],
            answer: 1,
            explanation: 'Lucas was the brother of the yellowish man who died in the cornerstone collapse. He blamed Ibarra, tried to extort money, and was recruited by Padre Salvi\'s agents to set up the fake attack in Ibarra\'s name.'
        },
        {
            category: 'Plot',
            question: 'What happens to Capitan Tiago after Maria Clara enters the Santa Clara convent?',
            options: [
                'He becomes a town mayor again',
                'He becomes severely depressed, loses his wealth, and becomes addicted to opium',
                'He marries Doña Victorina',
                'He moves to Madrid to start a new business'
            ],
            answer: 1,
            explanation: 'Ruined by the scandals, stripped of his social standing, and losing his beloved daughter Maria Clara to the convent, Capitan Tiago spiraled into a deep depression and became heavily addicted to opium, dying neglected.'
        },
        {
            category: 'History',
            question: 'Which of Rizal\'s real-life loves is widely believed to be the inspiration for the character of Maria Clara?',
            options: [
                'Leonor Rivera',
                'Josephine Bracken',
                'O-Sei San',
                'Nellie Boustead'
            ],
            answer: 0,
            explanation: 'Leonor Rivera, Rizal\'s childhood sweetheart and cousin, is widely regarded as the primary inspiration for the tragic, faithful, and beautiful Maria Clara.'
        },
        {
            category: 'Symbolism',
            question: 'What does the character Sisa symbolize in Noli Me Tangere?',
            options: [
                'The strong and defiant spirit of the Philippine youth',
                'The tragic suffering and insanity of the motherland under oppressive rule',
                'The wealth and superficiality of the local elites',
                'The corrupt nature of the native police force'
            ],
            answer: 1,
            explanation: 'Sisa represents the suffering Motherland (Inang Bayan), driven to distraction, loss of identity, and tragedy by the systematic cruelty and neglect of colonial authorities.'
        },
        {
            category: 'Symbolism',
            question: 'What does the characters of Doña Victorina and Doña Consolacion\'s violent physical fight represent?',
            options: [
                'The class conflict between rural and urban natives',
                'The ugly rivalries and moral decay among those who suck up to colonial masters',
                'The struggle for women\'s voting rights',
                'The dispute over land boundaries in San Diego'
            ],
            answer: 1,
            explanation: 'Their physical brawl represents the ridiculous and toxic competition between native/mestiza women who try to out-do each other in kissing up to Spanish rulers, showing the deep moral decay in high society.'
        },
        {
            category: 'General',
            question: 'Who is the vice-rector of the University of Santo Tomas in the novel, representing the Dominican order?',
            options: [
                'Padre Sibyla',
                'Padre Martin',
                'Padre Salvi',
                'Padre Damaso'
            ],
            answer: 0,
            explanation: 'Padre Hernando de la Sibyla is the Dominican priest who serves as the vice-rector of the university, representing the highly defensive and intellectual Dominican order in Manila.'
        },
        {
            category: 'General',
            question: 'What physical object does Maria Clara leave on the convent roof, which is spotted by onlookers in a storm in the final chapter epilogue?',
            options: [
                'A gold crucifix',
                'A white silk handkerchief',
                'A silhouette of her weeping and praying in the storm',
                'Her old love letters from Ibarra'
            ],
            answer: 2,
            explanation: 'In the epilogue, during a violent storm, a guard spots a silhouette of a beautiful nun weeping, kneeling on the roof of the convent with arms outstretched, implying Maria Clara\'s miserable, trapped life.'
        },
        {
            category: 'History',
            question: 'Which Spanish Governor-General read and protected Rizal\'s Noli Me Tangere, advising him to leave the country for his own safety?',
            options: [
                'Emilio Terrero',
                'Valeriano Weyler',
                'Eulogio Despujol',
                'Rafael de Izquierdo'
            ],
            answer: 0,
            explanation: 'Governor-General Emilio Terrero summoned Rizal to Malacañang, read the book, saw no treasonable matter, and assigned a bodyguard (Jose Taviel de Andrade) to protect him from the angry friars.'
        },
        {
            category: 'General',
            question: 'How many chapters does Noli Me Tangere have in its standard published form?',
            options: [
                '39 Chapters',
                '64 Chapters (including the Epilogue)',
                '50 Chapters',
                '44 Chapters'
            ],
            answer: 1,
            explanation: 'Noli Me Tangere has 63 chapters plus an Epilogue, making a total of 64 chapters.'
        },
        {
            category: 'General',
            question: 'What is the title of the "missing chapter" of Noli Me Tangere that Rizal deleted to save printing costs?',
            options: [
                'Elias and Salome',
                'In the Woods',
                'The Confession of Damaso',
                'Sisa\'s Dream'
            ],
            answer: 0,
            explanation: '"Elias and Salome" is the famous deleted chapter. It focused on the romance between Elias and his lover, Salome. Rizal cut it to save paper and printing expenses.'
        },
        {
            category: 'History',
            question: 'What was the immediate reaction of the Permanent Commission of Censorship in Manila toward Noli Me Tangere?',
            options: [
                'They praised it and recommended it to schools',
                'They recommended its absolute ban, declaring it heretical and anti-Spanish',
                'They ignored it completely',
                'They translated it into Tagalog'
            ],
            answer: 1,
            explanation: 'The Commission, led by Fr. Salvador Font, declared the novel highly heretical, anti-Catholic, and subversive. They recommended its absolute ban and confiscated any copies they found.'
        },
        {
            category: 'Symbolism',
            question: 'What does the school project symbolise in Noli Me Tangere?',
            options: [
                'The futile and slow nature of peaceful education under Spanish rule',
                'The desire of the friars to colonize minds',
                'A cover-up for smuggling weapons',
                'The native elite\'s love for Spanish culture'
            ],
            answer: 0,
            explanation: 'The school project represents peaceful, constructive reform through education. Its failure and hijacking by corrupt forces symbolize how peaceful reform was impossible in that colonial environment.'
        },
        {
            category: 'Characters',
            question: 'Who is Tia Isabel in Noli Me Tangere?',
            options: [
                'Maria Clara\'s aunt and Capitan Tiago\'s cousin who helped raise her',
                'The mother of Sisa',
                'A nun in the Santa Clara convent',
                'The wealthy owner of a jewelry shop'
            ],
            answer: 0,
            explanation: 'Tia Isabel is a devout, traditional cousin of Capitan Tiago. She acted as a mother figure to Maria Clara, raising her and accompanying her in social outings.'
        },
        {
            category: 'Characters',
            question: 'Who is the lieutenant of the Guardia Civil who is sympathetic to the natives and tells Ibarra the truth about Don Rafael\'s death?',
            options: [
                'Lieutenant Guevara',
                'Jose Taviel',
                'The Alferez',
                'Linares'
            ],
            answer: 0,
            explanation: 'Lieutenant Guevara is an elderly, honorable Spanish officer of the Civil Guard. He respected Don Rafael Ibarra and privately recounted the painful details of Don Rafael\'s arrest and death to Ibarra.'
        },
        {
            category: 'General',
            question: 'Which character represents the absolute peak of native religious fanaticism and hypocrisy, employing Sisa\'s son and criticizing poor mothers?',
            options: [
                'Hermana Rufa',
                'Hermana Penchang',
                'Tia Isabel',
                'Doña Consolacion'
            ],
            answer: 0,
            explanation: 'Hermana Rufa is a highly hypocritical laywoman obsessed with earning papal indulgences and counting prayers, showing no genuine Christian compassion for the suffering Sisa or her children.'
        }
    ],
    fili: [
        {
            category: 'General',
            question: 'What is the English translation of the title "El Filibusterismo"?',
            options: [
                'The Reign of Greed',
                'The Social Cancer',
                'The Reign of Fire',
                'The Subversive Quill'
            ],
            answer: 0,
            explanation: 'The title "El Filibusterismo" is commonly translated into English as "The Reign of Greed" (popularized by Charles Derbyshire) or "The Subversive".'
        },
        {
            category: 'General',
            question: 'To whom did Jose Rizal dedicate his second novel, El Filibusterismo?',
            options: [
                'To the Filipino Youth',
                'To the GOMBURZA Martyrs (Gomez, Burgos, and Zamora)',
                'To His Brother, Paciano Rizal',
                'To Valentin Ventura'
            ],
            answer: 1,
            explanation: 'Rizal dedicated El Filibusterismo to the GOMBURZA martyrs, three Filipino priests who were unjustly executed by garrote in 1872 following the Cavite Mutiny.'
        },
        {
            category: 'General',
            question: 'In which European city was El Filibusterismo published in 1891?',
            options: [
                'Berlin, Germany',
                'Madrid, Spain',
                'Ghent, Belgium',
                'Paris, France'
            ],
            answer: 2,
            explanation: 'El Filibusterismo was printed and published in Ghent, Belgium, in September 1891, at the printing press of F. Meyer-Van Loo.'
        },
        {
            category: 'History',
            question: 'Who was the wealthy friend of Jose Rizal who sent him the money to complete the publication of El Filibusterismo?',
            options: [
                'Maximo Viola',
                'Valentin Ventura',
                'Ferdinand Blumentritt',
                'Juan Luna'
            ],
            answer: 1,
            explanation: 'Valentin Ventura, a wealthy friend living in Paris, sent Rizal the necessary funds to complete the printing of El Filibusterismo when Rizal was on the verge of burning the manuscript due to lack of money.'
        },
        {
            category: 'Characters',
            question: 'Who is the main protagonist of El Filibusterismo, a mysterious and wealthy jeweler who manipulates the government?',
            options: [
                'Isagani',
                'Simoun',
                'Basilio',
                'Kabesang Tales'
            ],
            answer: 1,
            explanation: 'Simoun is the main protagonist. He is a rich and sinister jeweler who has close ties with the Governor-General, pulling strings behind the scenes.'
        },
        {
            category: 'Characters',
            question: 'Who is Simoun in reality?',
            options: [
                'The long-lost son of Elias',
                'Crisostomo Ibarra, who escaped the lake shootout 13 years ago',
                'The biological son of Padre Salvi',
                'A Spanish spy sent to watch the reformist students'
            ],
            answer: 1,
            explanation: 'Simoun is actually Crisostomo Ibarra in disguise. Having survived the shootout in Noli, he fled to Cuba, became rich, secured Spanish connections, and returned to the Philippines seeking revenge.'
        },
        {
            category: 'Characters',
            question: 'What is Simoun\'s main motive for orchestrating a violent revolution?',
            options: [
                'To become the new Governor-General',
                'To destroy the town of San Diego and build a new city',
                'To rescue Maria Clara from the Santa Clara nunnery and take revenge on the corrupt friars',
                'To enforce the teaching of the Spanish language'
            ],
            answer: 2,
            explanation: 'Simoun\'s deep driving force is personal revenge and love. He wants to overthrow the Spanish colonial state, smash the convent walls to rescue Maria Clara, and destroy those who ruined his life.'
        },
        {
            category: 'Symbolism',
            question: 'What is the name of the slow, circular, double-decked steamship in Chapter 1 that symbolizes the class divisions and stagnation of Philippine society?',
            options: [
                'Bapor Tabo',
                'Bapor Filipinas',
                'Bapor Pasig',
                'Bapor Reina Regente'
            ],
            answer: 0,
            explanation: 'The "Bapor Tabo" is the steamship traveling down the Pasig River. Rizal uses it as a brilliant metaphor for the Philippines: slow, dirty, divided between the rich elites on the upper deck and the poor masses on the lower deck.'
        },
        {
            category: 'Plot',
            question: 'How did Basilio discover the true identity of Simoun?',
            options: [
                'He saw Simoun\'s passport in a drawer',
                'He recognized Simoun digging up the Ibarra family treasure at Sisa\'s grave in the forest on Christmas Eve',
                'Simoun revealed himself to him in a letter',
                'Padre Florentino told him the secret'
            ],
            answer: 1,
            explanation: 'Basilio returned to the forest of the Ibarras on Christmas Eve to visit his mother\'s grave and saw Simoun digging up the treasure. Basilio recognized Simoun\'s eyes and voice, realizing he was the same man who helped him bury Sisa 13 years ago.'
        },
        {
            category: 'Characters',
            question: 'Who is the idealistic student, poet, and reformer who fights for the establishment of a Spanish Language Academy?',
            options: [
                'Sandoval',
                'Isagani',
                'Placido Penitente',
                'Basilio'
            ],
            answer: 1,
            explanation: 'Isagani is a passionate, idealistic student and poet. He is the nephew of Padre Florentino and leads the student reform movement.'
        },
        {
            category: 'Characters',
            question: 'Who is Paulita Gomez in El Filibusterismo?',
            options: [
                'The sweetheart of Isagani who ultimately abandons him to marry the wealthy Juanito Pelaez',
                'A revolutionary fighter in the forest',
                'The long-lost daughter of Sisa',
                'A nun in the Santa Clara convent'
            ],
            answer: 0,
            explanation: 'Paulita Gomez is the beautiful, wealthy niece of Doña Victorina. Although she loves Isagani, she chooses security and marries the rich, opportunistic Juanito Pelaez.'
        },
        {
            category: 'Characters',
            question: 'Who is the hard-working tenant farmer who becomes a notorious bandit leader after losing his land to greedy friars?',
            options: [
                'Tarsilo',
                'Kabesang Tales',
                'Placido Penitente',
                'Tandang Selo'
            ],
            answer: 1,
            explanation: 'Telesforo Juan de Dios, known as Kabesang Tales, is a hardworking farmer. When the friars continuously raise his land rent until he cannot pay, he loses his land, suffers kidnapping, and turns to banditry.'
        },
        {
            category: 'Characters',
            question: 'What terrifying alias does Kabesang Tales adopt once he becomes the ruthless leader of the bandits in Luzon?',
            options: [
                'Matanglawin (Hawkeye)',
                'El Filibustero',
                'Kapitan Kidlat',
                'Bagwis'
            ],
            answer: 0,
            explanation: 'After his family is destroyed, Kabesang Tales joins the bandits and becomes their fearsome leader, adopting the alias "Matanglawin" (Hawkeye).'
        },
        {
            category: 'Characters',
            question: 'Who is Juli (Juliana), the tragic sweetheart of Basilio?',
            options: [
                'The sister of Isagani',
                'The daughter of Kabesang Tales, who works as a maid and sacrifices her life to save Basilio',
                'The daughter of Doña Victorina',
                'A wealthy student at the academy'
            ],
            answer: 1,
            explanation: 'Juli is the loyal and pure daughter of Kabesang Tales. To raise ransom money for her kidnapped father and later free Basilio from prison, she endures servitude and eventual death.'
        },
        {
            category: 'Plot',
            question: 'What is the tragic cause of Juli\'s death in the convent of Tiani?',
            options: [
                'She died of cholera',
                'She was poisoned by Hermana Penchang',
                'She jumped out of a window to escape the lustful advances of Padre Camorra',
                'She was shot by the Civil Guard'
            ],
            answer: 2,
            explanation: 'Desperate to free Basilio from prison, Juli went to the convent to beg Padre Camorra for help. To escape his sexual assault, she threw herself out of a window of the convent, dying instantly.'
        },
        {
            category: 'Characters',
            question: 'Who is Tandang Selo in El Filibusterismo?',
            options: [
                'The father of Kabesang Tales and grandfather of Juli, who loses his voice from grief',
                'The wealthy Chinese merchant who aids Simoun',
                'An old schoolteacher in San Diego',
                'The personal advisor to the Governor-General'
            ],
            answer: 0,
            explanation: 'Tandang Selo is the aging father of Kabesang Tales. Overwhelmed by his son\'s land loss, his granddaughter Juli\'s enslavement, and the loss of their home, he is struck mute by stroke/grief.'
        },
        {
            category: 'Characters',
            question: 'Which student is highly intelligent but becomes bitter and rebellious after being humiliated by a Dominican professor in a Physics class?',
            options: [
                'Macaraig',
                'Isagani',
                'Placido Penitente',
                'Juanito Pelaez'
            ],
            answer: 2,
            explanation: 'Placido Penitente is a bright student from Batangas. Frustrated by the boring and insulting Dominican teaching methods, he walks out of his Physics class after being publicly humiliated.'
        },
        {
            category: 'Plot',
            question: 'Which Dominican professor in the novel humiliates Placido Penitente, showcasing Rizal\'s critique of the colonial university system?',
            options: [
                'Padre Millon',
                'Padre Sibyla',
                'Padre Camorra',
                'Padre Salvi'
            ],
            answer: 0,
            explanation: 'Padre Millon is the Dominican Physics professor who teaches without experiments, quizzes his students on absurd semantics, and insults Placido, causing him to rebel.'
        },
        {
            category: 'Characters',
            question: 'Who is the wealthy student leader who hosts the reformist students\' meetings in his spacious house?',
            options: [
                'Basilio',
                'Macaraig',
                'Pecson',
                'Sandoval'
            ],
            answer: 1,
            explanation: 'Macaraig is the rich, generous student leader who leads the movement for the Spanish language school and uses his house as their headquarters.'
        },
        {
            category: 'Characters',
            question: 'Who is Don Custodio in El Filibusterismo?',
            options: [
                'A high-ranking military officer',
                'An influential Spanish official nicknamed "Buena Tinta" who makes bureaucratic, sluggish decisions',
                'A wealthy sugar merchant',
                'A reformist lawyer'
            ],
            answer: 1,
            explanation: 'Don Custodio de Salazar y Sanchez de Monteleon y Terruel is a famous official in Manila. He is given the task of deciding the student language academy proposal and spends months delaying it.'
        },
        {
            category: 'Characters',
            question: 'Who is Ben-Zayb in El Filibusterismo?',
            options: [
                'A Chinese merchant who smuggles weapons',
                'A pretentious Spanish journalist who writes biased articles praising the colonial rulers',
                'The lawyer representing the students',
                'The alias of Basilio'
            ],
            answer: 1,
            explanation: 'Ben-Zayb (an anagram of Ibañez) is a superficial Spanish journalist who twists facts in his articles to make Spanish officials look heroic and native Filipinos look foolish.'
        },
        {
            category: 'Characters',
            question: 'Who is Quiroga in the novel?',
            options: [
                'A wealthy Chinese merchant who aspires to be a consul and helps Simoun hide firearms',
                'The head of the local student union',
                'The parish priest of Binondo',
                'A native rebel leader'
            ],
            answer: 0,
            explanation: 'Quiroga is a rich Chinese businessman who hosts a massive dinner. He owes Simoun money and agrees to hide Simoun\'s smuggled rifles in his warehouse in exchange for a debt reduction.'
        },
        {
            category: 'Characters',
            question: 'Who is the rich, opportunistic, and physically deformed student who is favored by the friars and marries Paulita Gomez?',
            options: [
                'Juanito Pelaez',
                'Basilio',
                'Placido Penitente',
                'Sandoval'
            ],
            answer: 0,
            explanation: 'Juanito Pelaez is a wealthy, humpbacked, and opportunistic student who excels at brown-nosing the friars. He represents the unpatriotic, self-serving native elite.'
        },
        {
            category: 'Plot',
            question: 'What is the devastating weapon that Simoun designs to trigger the revolution at the wedding feast of Juanito and Paulita?',
            options: [
                'A hidden dynamite crate in the basement',
                'A beautiful pomegranate-shaped lamp filled with nitroglycerin',
                'A poisoned wedding cake',
                'A smuggled shipment of Gatling guns'
            ],
            answer: 1,
            explanation: 'Simoun creates a bomb disguised as a highly artistic pomegranate lamp. The lamp contains nitroglycerin, designed to explode and destroy the entire dining hall when the lamp\'s wick is turned down.'
        },
        {
            category: 'Plot',
            question: 'Who foils Simoun\'s grand bomb plot at the wedding reception, saving Paulita Gomez\'s life?',
            options: [
                'Basilio',
                'Isagani',
                'Padre Florentino',
                'The High Official'
            ],
            answer: 1,
            explanation: 'Basilio, knowing of the bomb, warned Isagani. Realizing Paulita was inside, Isagani rushed in, grabbed the glowing lamp, and threw it into the Pasig River, preventing the explosion but ruining the revolution.'
        },
        {
            category: 'Plot',
            question: 'Where did the high-society wedding reception of Juanito Pelaez and Paulita Gomez take place?',
            options: [
                'At the Malacañang Palace',
                'At the grand country estate of Don Custodio',
                'At the former house of the deceased Capitan Tiago',
                'At the Manila Cathedral'
            ],
            answer: 2,
            explanation: 'The reception took place at the former home of Capitan Tiago, which had been purchased and renovated by Juanito Pelaez\'s father for the occasion.'
        },
        {
            category: 'Plot',
            question: 'What happens to Capitan Tiago in El Filibusterismo?',
            options: [
                'He is exiled to Guam',
                'He recovers and becomes a monk',
                'He dies in misery from an opium overdose and total neglect by Padre Salvi\'s houseguest',
                'He joins Simoun\'s bandit gang'
            ],
            answer: 2,
            explanation: 'Under the supervision of the greedy Padre Salvi, Capitan Tiago is encouraged to smoke opium. He eventually dies of an overdose, and his wealth is split among the church and the friars.'
        },
        {
            category: 'Characters',
            question: 'Who is the noble and patriotic native Filipino priest who takes in the dying Simoun at his remote retreat by the sea?',
            options: [
                'Padre Florentino',
                'Padre Fernandez',
                'Padre Salvi',
                'Padre Millon'
            ],
            answer: 0,
            explanation: 'Padre Florentino is a retired, highly intellectual, and morally upright native secular priest who lives in a quiet house by the Pacific Ocean. He serves as Rizal\'s moral voice.'
        },
        {
            category: 'Plot',
            question: 'How does Simoun die at the end of El Filibusterismo?',
            options: [
                'He is shot by the Guardia Civil',
                'He commits suicide by drinking poison to avoid being taken alive',
                'He dies in a shipwreck',
                'He is stabbed by Kabesang Tales'
            ],
            answer: 1,
            explanation: 'To avoid being arrested by the Spanish authorities who traced the failed revolution to him, Simoun drinks poison and flees to Padre Florentino\'s home, dying after a long confession.'
        },
        {
            category: 'Plot',
            question: 'What does Padre Florentino do with Simoun\'s chest of immense treasure and jewels after Simoun dies?',
            options: [
                'He distributes them to the poor peasants',
                'He uses them to build the Spanish Language Academy',
                'He throws them into the deep Pacific Ocean',
                'He surrenders them to the Governor-General'
            ],
            answer: 2,
            explanation: 'Padre Florentino throws the heavy treasure chest into the ocean, praying that the jewels remain hidden until they are needed for a noble, clean cause rather than bloody greed.'
        },
        {
            category: 'Symbolism',
            question: 'What is the symbolic meaning of throwing Simoun\'s treasures into the sea?',
            options: [
                'That wealth is inherently evil and must be destroyed',
                'That freedom must be won through moral excellence and education, not bought with corrupt wealth and blood',
                'That the Philippines is too poor to manage gold',
                'That the Catholic church is the rightful owner of the jewels'
            ],
            answer: 1,
            explanation: 'The throwing of the treasure symbolizes that true independence and freedom cannot be purchased with blood and greed. The country must first educate its youth and achieve moral worthiness.'
        },
        {
            category: 'Characters',
            question: 'Who is the Dominican friar in the novel who is relatively fair and engages in an intellectual debate with Isagani about student rights?',
            options: [
                'Padre Fernandez',
                'Padre Sibyla',
                'Padre Camorra',
                'Padre Salvi'
            ],
            answer: 0,
            explanation: 'Padre Fernandez is a Dominican professor who respects Isagani\'s intellect. He meets with him to discuss why the students are rebelling, presenting a rare rational side of the clergy.'
        },
        {
            category: 'Characters',
            question: 'Who is the Spanish "High Official" (Alto Empleado) who defends Basilio and clashes with the Governor-General, eventually resigning in protest?',
            options: [
                'The High Official',
                'Señor Pasta',
                'Ben-Zayb',
                'Don Custodio'
            ],
            answer: 0,
            explanation: 'The anonymous Spanish High Official stands up for justice, defending the imprisoned Basilio. When the Governor-General ignores him, he resigns his post and returns to Spain, asserting his honor.'
        },
        {
            category: 'Characters',
            question: 'Who is the conservative and highly elite native lawyer who refuses to help the students with their petition because he fears losing his wealthy clients?',
            options: [
                'Señor Pasta',
                'Don Custodio',
                'Juanito Pelaez',
                'Padre Florentino'
            ],
            answer: 0,
            explanation: 'Señor Pasta is a brilliant, wealthy native lawyer. He advises the students to submit to the authorities and study instead of making waves, prioritizing his personal safety and wealth.'
        },
        {
            category: 'Plot',
            question: 'What did the students do that led to their sudden mass arrest and the shutdown of their academy project?',
            options: [
                'They shot a local friar',
                'They were accused of posting anti-government, subversive posters (pasquines) on the university walls',
                'They set the university library on fire',
                'They declared a physical war against the Guardia Civil'
            ],
            answer: 1,
            explanation: 'Seditious, anti-government posters (pasquines) were found pasted on the doors of the university. The government blamed the student association, leading to the immediate arrest of the leaders, including Basilio.'
        },
        {
            category: 'Plot',
            question: 'Why was Basilio kept in prison even after the other wealthy students were bailed out by their families?',
            options: [
                'He refused to leave the prison cell',
                'He had no rich protectors or family to pay his bail, and his association with Simoun was highly suspicious',
                'He was caught with a pistol',
                'He confessed to the rebellion'
            ],
            answer: 1,
            explanation: 'Unlike the wealthy students who had parents to bail them out, Basilio was a poor orphan with no family. He was kept in jail as a convenient scapegoat, which drove him to join Simoun upon release.'
        },
        {
            category: 'Characters',
            question: 'Who is the American illusionist who stages a show at the Quiapo Fair featuring a talking Egyptian sphinx that exposes the friars\' corruption?',
            options: [
                'Mr. Leeds',
                'Mr. Thomas',
                'Señor Leeds',
                'Mr. Cooper'
            ],
            answer: 0,
            explanation: 'Mr. Leeds is an enigmatic American showman who presents a talking head called Imuthis. The show is secretly arranged by Simoun to terrify Padre Salvi.'
        },
        {
            category: 'Plot',
            question: 'What was the name of the Egyptian sphinx (talking head) in Mr. Leeds\' show, which recount a tragic tale of priestly conspiracy?',
            options: [
                'Imuthis',
                'Ramses',
                'Osiris',
                'Anubis'
            ],
            answer: 0,
            explanation: 'The talking head was named Imuthis. Its tragic story of love, exile, and death at the hands of greedy priests perfectly matched the real life of Crisostomo Ibarra, causing Padre Salvi to faint in terror.'
        },
        {
            category: 'Characters',
            question: 'Who is Cabesang Andang in El Filibusterismo?',
            options: [
                'The mother of Placido Penitente, who urges him to remain patient and study',
                'The sister of Kabesang Tales',
                'The cook of Capitan Tiago',
                'A wealthy donor to the church'
            ],
            answer: 0,
            explanation: 'Cabesang Andang is the mother of Placido Penitente. A simple provincial woman, she travels to Manila to beg her son to tolerate the friars\' insults so he can graduate.'
        },
        {
            category: 'Characters',
            question: 'Who is Hermana Penchang in El Filibusterismo?',
            options: [
                'A kind-hearted nun who rescues Juli',
                'A hypocritical laywoman who forces the indentured Juli to recite catechisms and labels her father a heretic',
                'Isagani\'s wealthy mother',
                'A female rebel leader'
            ],
            answer: 1,
            explanation: 'Hermana Penchang is a rich, hypocritical laywoman who lends Juli money. She forces Juli to work as a maid, constantly lecturing her and calling her family sinners because they don\'t buy indulgences.'
        },
        {
            category: 'Characters',
            question: 'Who is Padre Camorra in El Filibusterismo?',
            options: [
                'The fair Dominican professor',
                'A lustful, hot-tempered Spanish friar in Tiani whose abusive actions lead to Juli\'s suicide',
                'The spiritual advisor of Simoun',
                'The parish priest of San Diego'
            ],
            answer: 1,
            explanation: 'Padre Camorra is the greedy, hot-headed Franciscan friar in Tiani. His lustful advances and attempted rape of Juli drive her to jump out of the convent window to her death.'
        },
        {
            category: 'Characters',
            question: 'Who is Sandoval, a unique student character among the reformers?',
            options: [
                'A pure Spanish student (Peninsular) who fully supports the Filipino students\' educational fight',
                'A spy for the Guardia Civil',
                'A Chinese-mestizo businessman',
                'A cousin of Basilio'
            ],
            answer: 0,
            explanation: 'Sandoval is a peninsular Spaniard studying in Manila. Unlike other Spaniards, he is highly idealistic, eloquent, and champions the Filipino students\' struggle for academic reforms.'
        },
        {
            category: 'Symbolism',
            question: 'What is the main thematic difference between Noli Me Tangere and El Filibusterismo?',
            options: [
                'Noli is in Tagalog while Fili is in Spanish',
                'Noli exposes the colonial cancer with romanticism and hope; Fili is a dark, revolutionary warning about greed, failure of reform, and impending rebellion',
                'Noli focuses on Spain while Fili focuses on America',
                'Noli promotes peaceful surrender while Fili encourages subservience'
            ],
            answer: 1,
            explanation: 'Noli Me Tangere is romantic, satirical, and retains a hopeful plea for Spanish reform. El Filibusterismo is much darker, cynical, and revolutionary, showing that peaceful reform is dead and warning of explosive violence if abuses continue.'
        },
        {
            category: 'Plot',
            question: 'What tragic news aborts Simoun\'s first planned uprising in Manila?',
            options: [
                'The arrival of a new Spanish fleet',
                'The death of Maria Clara in the nunnery',
                'Basilio\'s sudden betrayal',
                'Quiroga stealing his gunpowder'
            ],
            answer: 1,
            explanation: 'Simoun\'s first revolt was set to launch when a bell rang, and his primary goal was to breach the convent to rescue Maria Clara. However, Basilio informed him that Maria Clara had died that afternoon, shattering Simoun\'s spirit and aborting the revolt.'
        },
        {
            category: 'General',
            question: 'How did Simoun react when Basilio broke the news of Maria Clara\'s death to him?',
            options: [
                'He laughed hysterically and swore to kill Basilio',
                'He fell into deep grief, locked himself up, and cried in agony, halting all revolutionary plans',
                'He immediately married Paulita Gomez',
                'He sailed back to Spain'
            ],
            answer: 1,
            explanation: 'Simoun was crushed by the news of her death. He cried in absolute agony and fell into a state of shock, causing the cancellation of the uprising as his life\'s romantic purpose was gone.'
        },
        {
            category: 'General',
            question: 'What is the famous, patriotic question that Padre Florentino asks about the youth of the country in the final chapter?',
            options: [
                '"Where are the youth who will dedicate their golden hours, their illusions, and their enthusiasm to the welfare of their homeland?"',
                '"Why must we fight if we are doomed to fail?"',
                '"Are there no men left in this country to take up arms?"',
                '"Why does God allow such suffering?"'
            ],
            answer: 0,
            explanation: 'In the final lines, Padre Florentino calls upon the youth: "Where are the youth who will dedicate their golden hours, their illusions, and their enthusiasm to the welfare of their homeland? ... We await you, O youth! Come, for we await you!"'
        },
        {
            category: 'History',
            question: 'Which historical event in 1872 had a profound impact on Rizal, inspiring him to write El Filibusterismo and dedicate it to the victims?',
            options: [
                'The execution of the three secular priests Gomez, Burgos, and Zamora (GOMBURZA)',
                'The opening of the Suez Canal',
                'The arrival of the first American soldiers',
                'The Cavite Mutiny battle'
            ],
            answer: 0,
            explanation: 'The GOMBURZA executions in 1872 deeply affected Rizal, who was 11 at the time. He dedicated El Filibusterismo to them, stating that their unjust death was the catalyst for his patriotic mission.'
        },
        {
            category: 'General',
            question: 'How many chapters does El Filibusterismo contain in its published form?',
            options: [
                '39 Chapters',
                '64 Chapters',
                '45 Chapters',
                '30 Chapters'
            ],
            answer: 0,
            explanation: 'El Filibusterismo contains 39 chapters.'
        },
        {
            category: 'History',
            question: 'What did Jose Rizal do with the original manuscript of El Filibusterismo in Ghent when he was struggling to pay the printer?',
            options: [
                'He burned several chapters to reduce printing costs',
                'He threw the entire manuscript in the river',
                'He sent it to his family in Hong Kong',
                'He sold it to a Spanish publisher'
            ],
            answer: 0,
            explanation: 'Due to severe poverty and lack of funds, Rizal had to cut several sections of the manuscript, including some descriptive paragraphs, to save on typesetting and printing costs.'
        },
        {
            category: 'Characters',
            question: 'Who is Pecson, one of the student reformers in El Filibusterismo?',
            options: [
                'The cynical, chubby student who always predicts that the friars will reject their proposals',
                'The student who gets arrested first',
                'A relative of Padre Florentino',
                'A Spanish soldier who helps Basilio'
            ],
            answer: 0,
            explanation: 'Pecson is a highly cynical, humorous student who always doubts the friars\' intentions and predicts that their Spanish language school petition will meet a bad end, which unfortunately comes true.'
        }
    ]
};
