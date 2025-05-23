import { Category } from '../model/Category';
import { QuestionContructor, Question } from '../model/Question'


// const questionConstructors: QuestionContructor[] = [
//     {
//         text: 'What is the supreme law of the land?',
//         correctAnswers: ['the constitution'],
//         options: [
//             'the constitution',
//             'the congress',
//             'everyone must obey the law.',
//             'the first amendment',
//         ],

//         number: 1,
//     },
//     {
//         text: 'What does the Constitution do?',
//         correctAnswers: [
//             'sets up the government',
//             'defines the government',
//             'protects basic rights of americans',
//         ],
//         options: [
//             'sets up the government',
//             'sets tax rates',
//             'serves a 2-year term',
//             'protects the rights of residents',
//         ],

//         number: 2,
//     },
//     {
//         text:
//             'The idea of self-government is in the first three words of the Constitution. What are these words?',
//         correctAnswers: ['we the people'],
//         options: [
//             'we the people',
//             'freedom of speech',
//             'rule of law',
//             'the first amendment',
//         ],

//         number: 3,
//     },
//     {
//         text: 'What is an amendment?',
//         correctAnswers: [
//             'a change (to the constitution)',
//             'an addition (to the constitution)',
//         ],
//         options: [
//             'a change (to the constitution)',
//             'a federal law.',
//             'the president of the united states.',
//             'freedom of religion.',
//         ],

//         number: 4,
//     },
//     {
//         text: 'What do we call the first ten amendments to the Constitution?',
//         correctAnswers: ['the bill of rights'],
//         options: [
//             'the bill of rights',
//             'the declaration of independence',
//             'the first amendment',
//             'the legislative branch',
//         ],

//         number: 5,
//     },
//     {
//         text: 'What is one right or freedom from the First Amendment?',
//         correctAnswers: [
//             'speech',
//             'religion',
//             'assembly',
//             'press',
//             'petition the government',
//         ],
//         options: ['religion', 'taxes', 'bear armsalse', 'life'],

//         number: 6,
//     },
//     {
//         text: 'How many amendments does the Constitution have?',
//         correctAnswers: ['twenty seven (27)', '27', 'twenty seven'],
//         options: [
//             'twenty seven (27)',
//             'seventeen (17)',
//             'thirty five (35)',
//             'ten (10)',
//         ],

//         number: 7,
//     },
//     {
//         text: 'What did the Declaration of Independence do?',
//         correctAnswers: [
//             'announced our independence (from great britain)',
//             'declared our independence (from great britain)',
//             'said that the united states is free (from great britain)',
//         ],
//         options: [
//             'announced our independence (from great britain)',
//             'it set up the american government',
//             'it protects 27 rights of americans',
//             'it is the supreme law of the land',
//         ],

//         number: 8,
//     },
//     {
//         text: 'What are two rights in the Declaration of Independence?',
//         correctAnswers: [
//             'life',
//             'liberty',
//             'pursuit of happiness',
//             'life and liberty',
//         ],
//         options: [
//             'life and liberty',
//             'happiness and freedom',
//             'bear arms and education',
//             'religion and press',
//         ],

//         number: 9,
//     },
//     {
//         text: 'What is freedom of religion?',
//         correctAnswers: [
//             'you can practice any religion, or not practice a religion.',
//         ],
//         options: [
//             'you can practice any religion, or not practice a religion.',
//             'you must practice one religion of your choice.',
//             'all religions are allowed in schools and courts.',
//             'states can determine their own laws about religious rights.',
//         ],

//         number: 10,
//     },
//     {
//         text: 'What is the economic system in the United States?*',
//         correctAnswers: ['capitalist economy', 'market economy'],
//         options: [
//             'capitalist economy',
//             'communism',
//             'feudal economy.',
//             'trade and barter',
//         ],

//         number: 11,
//     },
//     {
//         text: 'What is the “rule of law”?',
//         correctAnswers: [
//             'everyone must follow the law.',
//             'leaders must obey the law.',
//             'government must obey the law.',
//             'no one is above the law. ',
//         ],
//         options: [
//             'everyone must follow the law.',
//             'the constitution and declaration.',
//             'federal laws',
//             'changes to the constitution.',
//         ],

//         number: 12,
//     },
//     {
//         text: 'Name one branch or part of the government.*',
//         correctAnswers: [
//             'congress',
//             'legislative',
//             'president',
//             'executive',
//             'the courts',
//             'judicial',
//         ],
//         options: ['congress', 'states', 'laws', 'declarations'],

//         number: 13,
//     },
//     {
//         text: 'What stops one branch of government from becoming too powerful?',
//         correctAnswers: ['checks and balances', 'separation of powers'],
//         options: [
//             'checks and balances',
//             'due process',
//             'habeus corpus',
//             'rights and freedoms',
//         ],

//         number: 14,
//     },
//     {
//         text: 'Who is in charge of the executive branch?',
//         correctAnswers: ['the president'],
//         options: [
//             'the president',
//             'the congress',
//             'the supreme court',
//             'the speaker of the house',
//         ],

//         number: 15,
//     },
//     {
//         text: 'Who makes federal laws?',
//         correctAnswers: [
//             'congress',
//             'senate and house (of representatives)',
//             '(u.s. or national) legislature',
//         ],
//         options: [
//             'congress',
//             'the president',
//             'supreme court justices',
//             'we the people',
//         ],

//         number: 16,
//     },
//     {
//         text: 'What are the two parts of the U.S. Congress?*',
//         correctAnswers: ['the senate and house of representatives'],
//         options: [
//             'the senate and house of representatives',
//             'legislative and executive branches',
//             'making and interpreting laws',
//             'the president and vice president',
//         ],

//         number: 17,
//     },
//     {
//         text: 'How many U.S. Senators are there?',
//         correctAnswers: ['one hundred (100)', '100', 'one hundred'],
//         options: [
//             'one hundred (100)',
//             'four-hundred thirty five (435)',
//             'twenty seven (27)',
//             'two hundred (200)',
//         ],

//         number: 18,
//     },
//     {
//         text: 'We elect a U.S. Senator for how many years?',
//         correctAnswers: ['six (6)', 'six', '6'],
//         options: ['six (6)', 'four (4)', 'two (2)', 'eight (8)'],

//         number: 19,
//     },
//     {
//         text: 'Who is one of your state’s U.S. Senators now?* (NJ)',
//         correctAnswers: ['robert menendez', 'cory a. booker', 'cory booker'],
//         options: ['robert menendez', 'donald trump', 'paul ryan', 'nancy pelosa'],
//         type: 'input',
//         tip:
//             'Answers will vary. Visit senate.gov to find your state’s U.S. Senators.',
//         number: 20,
//     },
//     {
//         text: 'The House of Representatives has how many voting members?',
//         correctAnswers: ['four hundred thirty-five (435)'],
//         options: [
//             'four hundred thirty-five (435)',
//             'one hundred (100)',
//             'fifty (50)',
//             'twenty seven (27)',
//         ],

//         number: 21,
//     },
//     {
//         text: 'We elect a U.S. Representative for how many years?',
//         correctAnswers: ['two (2)'],
//         options: ['two (2)', 'four (4)', 'six (6)', 'eight (8)'],

//         number: 22,
//     },
//     {
//         text: 'Name your U.S. Representative. (Garfield, NJ)',
//         correctAnswers: ['bill pascrell jr.', 'bill pascrell'],
//         options: [
//             'bill pascrell jr.',
//             'paul ryan',
//             'kamala harris.',
//             'jerry brown',
//         ],
//         type: 'input',
//         tip:
//             "Go to https://www.house.gov/ and type your zip code. For '07026' in 2021 is 'Bill Pascrell Jr. (Democrat)'",
//         number: 23,
//     },
//     {
//         text: 'Who does a U.S. Senator represent?',
//         correctAnswers: ['all people of the state'],
//         options: [
//             'all people of the state',
//             'businesses and organizations',
//             'the senate',
//             'the legislative branch.',
//         ],

//         number: 24,
//     },
//     {
//         text: 'Why do some states have more Representatives than other states?',
//         correctAnswers: [
//             '(because of) the state’s population',
//             '(because) they have more people',
//             '(because) some states have more people',
//         ],
//         options: [
//             '(because) they have more people',
//             '(because) a lottery system is used.',
//             '(because) they have more land.',
//             '(because) they are the original states.',
//         ],

//         number: 25,
//     },
//     {
//         text: 'We elect a President for how many years?',
//         correctAnswers: ['four (4)'],
//         options: ['four (4)', 'six (6)', 'two (2)', 'eight (8)'],

//         number: 26,
//     },
//     {
//         text: 'In what month do we vote for President?*',
//         correctAnswers: ['november'],
//         options: ['november', 'january', 'december', 'february'],

//         number: 27,
//     },
//     {
//         text: 'What is the name of the President of the United States now?*',
//         correctAnswers: ['joe biden', 'joseph r. biden, jr.', 'biden'],
//         options: ['donald trump', 'barack obama', 'joe biden', 'mike pence'],
//         type: 'input',
//         tip:
//             'Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.',
//         number: 28,
//     },
//     {
//         text: 'What is the name of the Vice President of the United States now?',
//         correctAnswers: ['kamala d. harris', 'kamala harris', 'harris'],
//         options: ['kamala harris', 'mike pence', 'donald trump', 'barack obama'],
//         type: 'input',
//         tip:
//             'Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.',
//         number: 29,
//     },
//     {
//         text: 'If the President can no longer serve, who becomes President?',
//         correctAnswers: ['the vice president'],
//         options: [
//             'the vice president',
//             'the speaker of the house',
//             'the chief justice',
//             'the secretary of state',
//         ],

//         number: 30,
//     },
//     {
//         text:
//             'If both the President and the Vice President can no longer serve, who becomes President?',
//         correctAnswers: ['the speaker of the house'],
//         options: [
//             'the speaker of the house',
//             'the cabinet',
//             'the secretary of defence.',
//             'the cheif justice',
//         ],

//         number: 31,
//     },
//     {
//         text: 'Who is the Commander in Chief of the military?',
//         correctAnswers: ['the president'],
//         options: [
//             'the president',
//             'the secretary of defence',
//             'the joint chiefs of staff',
//             'the vice president',
//         ],

//         number: 32,
//     },
//     {
//         text: 'Who signs bills to become laws?',
//         correctAnswers: ['the president'],
//         options: ['the president', 'congress', 'the senate', 'the supreme court'],

//         number: 33,
//     },
//     {
//         text: 'Who vetoes bills?',
//         correctAnswers: ['the president'],
//         options: [
//             'the president',
//             'the senate',
//             'the house of representatives',
//             'the supreme court',
//         ],

//         number: 34,
//     },
//     {
//         text: 'What does the President’s Cabinet do?',
//         correctAnswers: ['advises the president'],
//         options: [
//             'advises the president',
//             'signs laws',
//             'vetoes laws',
//             'interprets laws',
//         ],

//         number: 35,
//     },
//     {
//         text: 'What are two Cabinet-level positions?',
//         correctAnswers: [
//             'secretary of agriculture',
//             'secretary of commerce',
//             'secretary of defense',
//             'secretary of education',
//             'secretary of energy',
//             'secretary of health and human services',
//             'secretary of homeland security',
//             'secretary of housing and urban development',
//             'secretary of the interior',
//             'secretary of labor',
//             'secretary of state',
//             'secretary of transportation',
//             'secretary of the treasury',
//             'secretary of veterans affairs',
//             'attorney general',
//             'vice president',
//             'secretary of education + secretary of state',
//         ],
//         options: [
//             'secretary of education + secretary of state',
//             'secretary of war + secretary of foreign relations',
//             'cheif justice + speaker of the house',
//             'speaker of the house + vice president',
//         ],

//         number: 36,
//     },
//     {
//         text: 'What does the judicial branch do?',
//         correctAnswers: [
//             'reviews laws',
//             'explains laws',
//             'resolves disputes (disagreements)',
//             'decides if a law goes against the constitution',
//         ],
//         options: [
//             'reviews laws',
//             'builds the courthouses',
//             'writes new laws',
//             'commands the military',
//         ],

//         number: 37,
//     },
//     {
//         text: 'What is the highest court in the United States?',
//         correctAnswers: ['the supreme court'],
//         options: [
//             'the supreme court',
//             'the kangaroo court',
//             'the court of appeals',
//             'the court of representatives',
//         ],

//         number: 38,
//     },
//     {
//         text: 'How many justices are on the Supreme Court?',
//         correctAnswers: ['nine (9)'],
//         options: ['nine (9)', 'three (3)', 'thirteen (13)', 'twenty-one (21)'],
//         type: 'input',
//         tip:
//             'Visit https://www.supremecourt.gov/about/justices.aspx to find updated information.',
//         number: 39,
//     },
//     {
//         text: 'Who is the Chief Justice of the United States now?',
//         correctAnswers: ['john roberts', 'john g. roberts, jr.'],
//         options: ['john roberts', 'paul ryan', 'nancy pelosi', 'jerry brown'],
//         type: 'input',
//         tip:
//             'Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.',
//         number: 40,
//     },
//     {
//         text:
//             'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
//         correctAnswers: [
//             'to print money',
//             'to declare war',
//             'to create an army',
//             'to make treaties',
//         ],
//         options: [
//             'to print money',
//             'to register drivers licenses',
//             'to set up schools',
//             'to provide safety (fire departments)',
//         ],

//         number: 41,
//     },
//     {
//         text:
//             'Under our Constitution, some powers belong to the states. What is one power of the states?',
//         correctAnswers: [
//             'provide schooling and education',
//             'provide protection (police)',
//             'provide safety (fire departments)',
//             'give a driver’s license',
//             'approve zoning and land use',
//         ],
//         options: [
//             'provide schooling and education',
//             'creating armies',
//             'declaring war',
//             'creating treaties',
//         ],

//         number: 42,
//     },
//     {
//         text: 'Who is the Governor of your state now? (NJ)',
//         correctAnswers: ['phil murphy'],
//         options: ['phil murphy', 'jerry brown', 'paul didney', 'jerry west'],
//         type: 'input',
//         tip:
//             'Answers will vary. Visit https://www.usa.gov/states-and-territories to find the Governor of your state.',
//         number: 43,
//     },
//     {
//         text: 'What is the capital of your state?* (NJ)',
//         correctAnswers: ['trenton'],
//         options: ['trenton', 'new york', 'patterson', 'newark'],
//         type: 'input',
//         tip:
//             'Answers will vary. Visit usa.gov/states-and-territories to find information about your state.',
//         number: 44,
//     },
//     {
//         text: 'What are the two major political parties in the United States?*',
//         correctAnswers: ['democratic and republican', 'republican and democratic'],
//         options: [
//             'democratic and republican',
//             'green party and libertarians',
//             'communists and americans',
//             'right and left',
//         ],

//         number: 45,
//     },
//     {
//         text: 'What is the political party of the President now?',
//         correctAnswers: ['democratic'],
//         options: ['republican', 'democratic', 'communist', 'green party'],
//         type: 'input',
//         tip:
//             'Visit uscis.gov/citizenship/testupdates for the political party of the President.',
//         number: 46,
//     },
//     {
//         text: 'What is the name of the Speaker of the House of Representatives now?',
//         correctAnswers: ['nancy pelosi', 'pelosi'],
//         options: ['paul ryan', 'nancy pelosi', 'john roberts', 'jerry brown'],
//         type: 'input',
//         tip:
//             'Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.',
//         number: 47,
//     },
//     {
//         text:
//             'There are four amendments to the Constitution about who can vote. Describe one of them.',
//         correctAnswers: [
//             'citizens eighteen (18) and older (can vote)',
//             'you don’t have to pay (a poll tax) to vote',
//             'any citizen can vote. (women and men can vote.)',
//             'a male citizen of any race (can vote)',
//         ],
//         options: [
//             'citizens eighteen (18) and older (can vote)',
//             'citizens must pay a fee to vote',
//             'citizens twenty-one (21) and older can vote',
//             'citizens of other countries can vote',
//         ],

//         number: 48,
//     },
//     {
//         text: 'What is one responsibility that is only for United States citizens?*',
//         correctAnswers: ['serve on a jury', 'vote in a federal election'],
//         options: [
//             'vote in a federal election',
//             'keep the peace',
//             'ask what you can do for your country',
//             'run for federal office',
//         ],

//         number: 49,
//     },
//     {
//         text: 'Name one right only for United States citizens.',
//         correctAnswers: ['vote in a federal election', 'run for federal office'],
//         options: [
//             'vote in a federal election',
//             'serve on a jury.',
//             'the pursuit of happiness',
//             'a good education',
//         ],

//         number: 50,
//     },
//     {
//         text: 'What are two rights of everyone living in the United States?',
//         correctAnswers: [
//             'freedom of expression',
//             'freedom of speech',
//             'freedom of assembly',
//             'freedom to petition the government',
//             'freedom of religion',
//             'the right to bear arms',
//             'freedom of expression + freedom of speech',
//         ],
//         options: [
//             'freedom of expression + freedom of speech',
//             'freedom of voting + freedom of participation',
//             'freedom of oppression + freedom of thought',
//             'freedom of running for office + freedom of healthcare',
//         ],

//         number: 51,
//     },
//     {
//         text: 'What do we show loyalty to when we say the Pledge of Allegiance?',
//         correctAnswers: ['the united states', 'the flag'],
//         options: [
//             'the united states',
//             'the president',
//             'the legislative branch',
//             'our politicians',
//         ],

//         number: 52,
//     },
//     {
//         text: 'What is one promise you make when you become a United States citizen?',
//         correctAnswers: [
//             'give up loyalty to other countries',
//             'defend the constitution and laws of the united states',
//             'obey the laws of the united states',
//             'serve in the u.s. military (if needed)',
//             'serve (do important work for) the nation (if needed)',
//             'be loyal to the united states',
//         ],
//         options: [
//             'obey the laws of the united states',
//             'be loyal to other countries.',
//             'work hard and be safe.',
//             'vote in all federal elections.',
//         ],

//         number: 53,
//     },
//     {
//         text: 'How old do citizens have to be to vote for President?*',
//         correctAnswers: ['eighteen (18)', 'eighteen (18) and older', '18'],
//         options: [
//             'eighteen (18)',
//             'sixteen (16)',
//             'twenty-one (21)',
//             'thirty-five (35)',
//         ],

//         number: 54,
//     },
//     {
//         text: 'What are two ways that Americans can participate in their democracy?',
//         correctAnswers: [
//             'vote',
//             'join a political party',
//             'help with a campaign',
//             'join a civic group',
//             'join a community group',
//             'give an elected official your opinion on an issue',
//             'call senators and representatives',
//             'publicly support or oppose an issue or policy',
//             'run for office',
//             'write to a newspaper',
//             'vote + join a political party',
//         ],
//         options: [
//             'vote + join a political party',
//             'vote + overthrow the government',
//             'pay taxes + obey the laws',
//             'support other countries - join groups',
//         ],

//         number: 55,
//     },
//     {
//         text: 'When is the last day you can send in federal income tax forms?*',
//         correctAnswers: ['april 15'],
//         options: ['april 15', 'january 15', 'january 1', 'april 1'],

//         number: 56,
//     },
//     {
//         text: 'When must all men register for the Selective Service?',
//         correctAnswers: [
//             'at age eighteen (18)',
//             'between eighteen (18) and twenty-six (26)',
//         ],
//         options: [
//             'between eighteen (18) and twenty-six (26)',
//             'between eighteen (18) and thirty (30)',
//             'between twenty-one (21) and thirty-five (35)',
//             'between eighteen (18) and twenty-five (25)',
//         ],

//         number: 57,
//     },
//     {
//         text: 'What is one reason colonists came to America?',
//         correctAnswers: [
//             'freedom',
//             'political liberty',
//             'religious freedom',
//             'economic opportunity',
//             'practice their religion',
//             'escape persecution',
//         ],
//         options: [
//             'religious freedom',
//             'seemed like a good idea',
//             'seeking monarchy',
//             'escape the plague',
//         ],

//         number: 58,
//     },
//     {
//         text: 'Who lived in America before the Europeans arrived?',
//         correctAnswers: ['american indians', 'native americans'],
//         options: [
//             'native americans',
//             'the colonists',
//             'american citizens',
//             'nobody',
//         ],

//         number: 59,
//     },
//     {
//         text: 'What group of people was taken to America and sold as slaves?',
//         correctAnswers: ['africans', 'people from africa'],
//         options: ['africans', 'asians', 'europeans', 'latinos'],

//         number: 60,
//     },
//     {
//         text: 'Why did the colonists fight the British?',
//         correctAnswers: [
//             'because of high taxes',
//             'because the british army stayed in their houses (boarding, quartering)',
//             'because they didn’t have self-government',
//         ],
//         options: [
//             'because of high taxes',
//             'because of the revolutionary war',
//             'because of the boston tea party',
//             'because they were allies with the french',
//         ],

//         number: 61,
//     },
//     {
//         text: 'Who wrote the Declaration of Independence?',
//         correctAnswers: ['(thomas) jefferson', 'thomas jefferson'],
//         options: [
//             'thomas jefferson',
//             'george washington',
//             'john adams',
//             'abraham lincoln',
//         ],

//         number: 62,
//     },
//     {
//         text: 'When was the Declaration of Independence adopted?',
//         correctAnswers: ['july 4, 1776'],
//         options: ['july 4, 1776', 'july 4, 1777', 'july 4, 1778', 'july 4, 1775'],

//         number: 63,
//     },
//     {
//         text: 'There were 13 original states. Name three.',
//         correctAnswers: [
//             'new hampshire',
//             'massachusetts',
//             'rhode island',
//             'connecticut',
//             'new york',
//             'new jersey',
//             'pennsylvania',
//             'delaware',
//             'maryland',
//             'virginia',
//             'north carolina',
//             'south carolina',
//             'georgia',
//             'new york, new jersey, pennsylvania',
//         ],
//         options: [
//             'new york, new jersey, pennsylvania',
//             'new york, new jersey, idaho',
//             'new york, ohio, florida',
//             'new york, california, new jersey',
//         ],

//         number: 64,
//     },
//     {
//         text: 'What happened at the Constitutional Convention?',
//         correctAnswers: [
//             'the constitution was written',
//             'the founding fathers wrote the constitution',
//         ],
//         options: [
//             'the constitution was written',
//             'our independence was declared',
//             'the federalist papers were accepted',
//             'the british were fought',
//         ],

//         number: 65,
//     },
//     {
//         text: 'When was the Constitution written?',
//         correctAnswers: ['1787'],
//         options: ['1787', '1767', '1777', '1797'],

//         number: 66,
//     },
//     {
//         text:
//             'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
//         correctAnswers: [
//             'alexander hamilton',
//             'john jay',
//             'james madison',
//             'publius',
//         ],
//         options: [
//             'james madison',
//             'thomas jefferson',
//             'john adams',
//             'george washington',
//         ],

//         number: 67,
//     },
//     {
//         text: 'What is one thing Benjamin Franklin is famous for?',
//         correctAnswers: [
//             'u.s. diplomat',
//             'oldest member of the constitutional convention',
//             'first postmaster general of the united states',
//             'writer of “poor richard’s almanac”',
//             'started the first free libraries',
//         ],
//         options: [
//             'u.s. diplomat',
//             'u.s. president',
//             'u.s. senator',
//             'first secretary of state.',
//         ],

//         number: 68,
//     },
//     {
//         text: 'Who is the “Father of Our Country”?',
//         correctAnswers: ['george washington'],
//         options: [
//             'george washington',
//             'thomas jefferson',
//             'benjamin franklin',
//             'abraham lincoln',
//         ],

//         number: 69,
//     },
//     {
//         text: 'Who was the first President?*',
//         correctAnswers: ['george washington'],
//         options: [
//             'george washington',
//             'abraham lincoln',
//             'franklin d. roosevelt',
//             'woodrow wilson',
//         ],

//         number: 70,
//     },
//     {
//         text: 'What territory did the United States buy from France in 1803?',
//         correctAnswers: ['the louisiana territory', 'louisiana'],
//         options: ['louisiana', 'texas', 'tennessee', 'alaska'],

//         number: 71,
//     },
//     {
//         text: 'Name one war fought by the United States in the 1800s.',
//         correctAnswers: [
//             'war of 1812',
//             'mexican-american war',
//             'civil war',
//             'spanish-american war',
//         ],
//         options: ['civil war', 'revolutionary war', 'world war i', 'vietnam'],

//         number: 72,
//     },
//     {
//         text: 'Name the U.S. war between the North and the South.',
//         correctAnswers: ['the civil war', 'the war between the states'],
//         options: [
//             'the civil war',
//             'the revolutionary war',
//             'world war i',
//             'american war',
//         ],

//         number: 73,
//     },
//     {
//         text: 'Name one problem that led to the Civil War.',
//         correctAnswers: ['slavery', 'economic reasons', 'states’ rights'],
//         options: ['slavery', 'taxes', 'king george iii', "women's rights"],

//         number: 74,
//     },
//     {
//         text: 'What was one important thing that Abraham Lincoln did?*',
//         correctAnswers: [
//             'freed the slaves (emancipation proclamation)',
//             'freed the slaves',
//             'saved (or preserved) the union',
//             'led the united states during the civil war',
//         ],
//         options: [
//             'freed the slaves',
//             'lost the civil war.',
//             'wrote the declaration of independence.',
//             'was a u.s. foreign diplomat.',
//         ],

//         number: 75,
//     },
//     {
//         text: 'What did the Emancipation Proclamation do?',
//         correctAnswers: [
//             'freed the slaves',
//             'freed slaves in the confederacy',
//             'freed slaves in the confederate states',
//             'freed slaves in most southern states',
//         ],
//         options: [
//             'freed the slaves',
//             "secured state's rights",
//             'ended the civil war',
//             'started the civil war',
//         ],

//         number: 76,
//     },
//     {
//         text: 'What did Susan B. Anthony do?',
//         correctAnswers: ['fought for women’s rights', 'fought for civil rights'],
//         options: [
//             'fought for women’s rights',
//             "secured state's rights.",
//             'freed the slaves.',
//             'fought the civil war.',
//         ],

//         number: 77,
//     },
//     {
//         text: 'Name one war fought by the United States in the 1900s.*',
//         correctAnswers: [
//             'world war i',
//             'world war ii',
//             'korean war',
//             'vietnam war',
//             '(persian) gulf war',
//         ],
//         options: [
//             'vietnam war',
//             'civil war',
//             'revolutionary war',
//             'spanish american war',
//         ],

//         number: 78,
//     },
//     {
//         text: 'Who was President during World War I?',
//         correctAnswers: ['woodrow wilson'],
//         options: [
//             'woodrow wilson',
//             'franklin d. roosevelt',
//             'george washington',
//             'abraham lincoln',
//         ],

//         number: 79,
//     },
//     {
//         text: 'Who was President during the Great Depression and World War II?',
//         correctAnswers: ['franklin roosevelt', 'franklin d. roosevelt'],
//         options: [
//             'franklin d. roosevelt',
//             'woodrow wilson',
//             'george washington',
//             'abraham lincoln',
//         ],

//         number: 80,
//     },
//     {
//         text: 'Who did the United States fight in World War II?',
//         correctAnswers: ['japan, germany, and italy'],
//         options: [
//             'japan, germany, and italy',
//             'russia, spain and austria',
//             'germany, russia and china',
//             'britan, canada and australia',
//         ],

//         number: 81,
//     },
//     {
//         text: 'Before he was President, Eisenhower was a general. What war was he in?',
//         correctAnswers: ['world war ii'],
//         options: ['world war ii', 'world war i', 'civil war', 'vietnam war'],

//         number: 82,
//     },
//     {
//         text: 'During the Cold War, what was the main concern of the United States?',
//         correctAnswers: ['communism'],
//         options: [
//             'communism',
//             'freedom of speech',
//             'international trade',
//             'freeing the slaves',
//         ],

//         number: 83,
//     },
//     {
//         text: 'What movement tried to end racial discrimination?',
//         correctAnswers: ['civil rights', 'civil rights movement'],
//         options: [
//             'civil rights movement',
//             'free trade movement',
//             "people's rights movement",
//             'racial rights movement',
//         ],

//         number: 84,
//     },
//     {
//         text: 'What did Martin Luther King, Jr. do?*',
//         correctAnswers: [
//             'fought for civil rights',
//             'worked for equality for all americans',
//         ],
//         options: [
//             'fought for civil rights',
//             'fought in civil war',
//             'fought with the british',
//             'fought against civil rights',
//         ],

//         number: 85,
//     },
//     {
//         text: 'What major event happened on September 11, 2001, in the United States?',
//         correctAnswers: ['terrorists attacked the united states'],
//         options: [
//             'terrorists attacked the united states',
//             'the united states attacked iraq',
//             'the american president was elected',
//             'the united states attacked terrorists',
//         ],

//         number: 86,
//     },
//     {
//         text:
//             'Name one American Indian tribe in the United States.  [USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]',
//         correctAnswers: [
//             'cherokee',
//             'navajo',
//             'sioux',
//             'chippewa',
//             'choctaw',
//             'pueblo',
//             'apache',
//             'iroquois',
//             'creek',
//             'blackfeet',
//             'seminole',
//             'cheyenne',
//             'arawak',
//             'shawnee',
//             'mohegan',
//             'huron',
//             'oneida',
//             'lakota',
//             'crow',
//             'teton',
//             'hopi',
//             'inuit',
//         ],
//         options: ['apache', 'pocahontas', 'indianites', 'natives'],

//         number: 87,
//     },
//     {
//         text: 'Name one of the two longest rivers in the United States.',
//         correctAnswers: ['missouri (river)', 'mississippi (river)', 'mississippi'],
//         options: ['mississippi', 'colorado', 'ohio', 'nile'],

//         number: 88,
//     },
//     {
//         text: 'What ocean is on the West Coast of the United States?',
//         correctAnswers: ['pacific (ocean)', 'pacific'],
//         options: ['pacific', 'atlantic', 'indian', 'great lakes'],

//         number: 89,
//     },
//     {
//         text: 'What ocean is on the East Coast of the United States?',
//         correctAnswers: ['atlantic (ocean)', 'atlantic'],
//         options: ['atlantic', 'pacific', 'indian', 'great lakes'],

//         number: 90,
//     },
//     {
//         text: 'Name one U.S. territory.',
//         correctAnswers: [
//             'puerto rico',
//             'u.s. virgin islands',
//             'american samoa',
//             'northern mariana islands',
//             'guam',
//         ],
//         options: ['puerto rico', 'hawaii', 'alaska', 'the moon'],

//         number: 91,
//     },
//     {
//         text: 'Name one state that borders Canada.',
//         correctAnswers: [
//             'maine',
//             'new hampshire',
//             'vermont',
//             'new york',
//             'pennsylvania',
//             'ohio',
//             'michigan',
//             'minnesota',
//             'north dakota',
//             'montana',
//             'idaho',
//             'washington',
//             'alaska',
//         ],
//         options: ['alaska', 'california', 'texas', 'iowa'],

//         number: 92,
//     },
//     {
//         text: 'Name one state that borders Mexico.',
//         correctAnswers: ['california', 'arizona', 'new mexico', 'texas'],
//         options: ['california', 'pennsylvania', 'nevada.', 'florida'],

//         number: 93,
//     },
//     {
//         text: 'What is the capital of the United States?*',
//         correctAnswers: ['washington, d.c.'],
//         options: [
//             'washington, d.c.',
//             'seattle, washington',
//             'new york city',
//             'america city',
//         ],

//         number: 94,
//     },
//     {
//         text: 'Where is the Statue of Liberty?*',
//         correctAnswers: [
//             'new york (harbor)',
//             'new york harbor',
//             'liberty island',
//             '[also acceptable are new jersey, near new york city, and on the hudson (river)]',
//         ],
//         options: [
//             'new york harbor',
//             'san francisco',
//             'washington, d.c.',
//             'boston harbor',
//         ],

//         number: 95,
//     },
//     {
//         text: 'Why does the flag have 13 stripes?',
//         correctAnswers: [
//             'because there were 13 original colonies',
//             'because the stripes represent the original colonies',
//         ],
//         options: [
//             'because there were 13 original colonies',
//             'because there were 13 original presidents',
//             'because there were 13 original senators',
//             'because there were 13 original languages',
//         ],

//         number: 96,
//     },
//     {
//         text: 'Why does the flag have 50 stars?*',
//         correctAnswers: [
//             'because there is one star for each state',
//             'because each star represents a state',
//             'because there are 50 states',
//         ],
//         options: [
//             'because there is one star for each state',
//             'because there is one star for each territory',
//             'because there is one star for each representative',
//             'because there is one star for each amendment',
//         ],

//         number: 97,
//     },
//     {
//         text: 'What is the name of the national anthem?',
//         correctAnswers: ['the star-spangled banner'],
//         options: [
//             'the star-spangled banner',
//             'america the free',
//             'god bless america',
//             "america's hymn",
//         ],

//         number: 98,
//     },
//     {
//         text: 'When do we celebrate Independence Day?*',
//         correctAnswers: ['july 4th', 'july 4'],
//         options: ['july 4th', 'may 5th', 'november 26th', 'april 15th'],

//         number: 99,
//     },
//     {
//         text: 'Name two national U.S. holidays.',
//         correctAnswers: [
//             'new year’s day',
//             'martin luther king, jr. day',
//             "presidents' day",
//             'memorial day',
//             'independence day',
//             'labor day',
//             'columbus day',
//             'veterans day',
//             'thanksgiving',
//             'christmas',
//             "presidents' day + independence day",
//         ],
//         options: [
//             "presidents' day + independence day",
//             'thanksgiving + arbor day',
//             'christmas + teacher day',
//             "new year's day + april fools",
//         ],

//         number: 100,
//     },
// ]

const questionConstructors_Updated2025: QuestionContructor[] = [
    {
        text: 'What is the supreme law of the land?',
        correctAnswers: ['the constitution'],
        options: [
            'the constitution',
            'the congress',
            'everyone must obey the law.',
            'the first amendment',
        ],

        number: 1,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What does the Constitution do?',
        correctAnswers: [
            'sets up the government',
            'defines the government',
            'protects basic rights of americans',
        ],
        options: [
            'sets up the government',
            'sets tax rates',
            'serves a 2-year term',
            'protects the rights of residents',
        ],
        number: 2,
        category: 'Principles of American Democracy'
    },
    {
        text:
            'The idea of self-government is in the first three words of the Constitution. What are these words?',
        correctAnswers: ['we the people'],
        options: [
            'we the people',
            'freedom of speech',
            'rule of law',
            'the first amendment',
        ],

        number: 3,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What is an amendment?',
        correctAnswers: [
            'a change (to the constitution)',
            'an addition (to the constitution)',
        ],
        options: [
            'a change (to the constitution)',
            'a federal law.',
            'the president of the united states.',
            'freedom of religion.',
        ],

        number: 4,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What do we call the first ten amendments to the Constitution?',
        correctAnswers: ['the bill of rights'],
        options: [
            'the bill of rights',
            'the declaration of independence',
            'the first amendment',
            'the legislative branch',
        ],

        number: 5,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What is one right or freedom from the First Amendment?',
        correctAnswers: [
            'speech',
            'religion',
            'assembly',
            'press',
            'petition the government',
        ],
        options: ['religion', 'taxes', 'bear armsalse', 'life'],

        number: 6,
        category: 'Principles of American Democracy'
    },
    {
        text: 'How many amendments does the Constitution have?',
        correctAnswers: ['twenty seven (27)', '27', 'twenty seven'],
        options: [
            'twenty seven (27)',
            'seventeen (17)',
            'thirty five (35)',
            'ten (10)',
        ],

        number: 7,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What did the Declaration of Independence do?',
        correctAnswers: [
            'announced our independence (from great britain)',
            'declared our independence (from great britain)',
            'said that the united states is free (from great britain)',
        ],
        options: [
            'declared our independence (from great britain)',
            'it set up the american government',
            'it protects 27 rights of americans',
            'it is the supreme law of the land',
        ],

        number: 8,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What are two rights in the Declaration of Independence?',
        correctAnswers: [
            'life',
            'liberty',
            'pursuit of happiness',
            'life and liberty',
        ],
        options: [
            'life and liberty',
            'happiness and freedom',
            'bear arms and education',
            'religion and press',
        ],

        number: 9,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What is freedom of religion?',
        correctAnswers: [
            'you can practice any religion, or not practice a religion.',
        ],
        options: [
            'you can practice any religion, or not practice a religion.',
            'you must practice one religion of your choice.',
            'all religions are allowed in schools and courts.',
            'states can determine their own laws about religious rights.',
        ],

        number: 10,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What is the economic system in the United States?*',
        correctAnswers: ['capitalist economy', 'market economy'],
        options: [
            'capitalist economy',
            'communism',
            'feudal economy.',
            'trade and barter',
        ],

        number: 11,
        category: 'Principles of American Democracy'
    },
    {
        text: 'What is the “rule of law”?',
        correctAnswers: [
            'everyone must follow the law.',
            'leaders must obey the law.',
            'government must obey the law.',
            'no one is above the law.',
        ],
        options: [
            'no one is above the law.',
            'the constitution and declaration.',
            'federal laws',
            'changes to the constitution.',
        ],

        number: 12,
        category: 'Principles of American Democracy'
    },
    {
        text: 'Name one branch or part of the government.*',
        correctAnswers: [
            'congress',
            'legislative',
            'president',
            'executive',
            'the courts',
            'judicial',
        ],
        options: ['congress', 'states', 'laws', 'declarations'],

        number: 13,
        category:'System of Government'
    },
    {
        text: 'What stops one branch of government from becoming too powerful?',
        correctAnswers: ['checks and balances', 'separation of powers'],
        options: [
            'checks and balances',
            'due process',
            'habeus corpus',
            'rights and freedoms',
        ],

        number: 14,
        category:'System of Government'
    },
    {
        text: 'Who is in charge of the executive branch?',
        correctAnswers: ['the president'],
        options: [
            'the president',
            'the congress',
            'the supreme court',
            'the speaker of the house',
        ],

        number: 15,
        category:'System of Government'
    },
    {
        text: 'Who makes federal laws?',
        correctAnswers: [
            'congress',
            'senate and house (of representatives)',
            '(u.s. or national) legislature',
        ],
        options: [
            'congress',
            'the president',
            'supreme court justices',
            'we the people',
        ],

        number: 16,
        category:'System of Government'
    },
    {
        text: 'What are the two parts of the U.S. Congress?*',
        correctAnswers: ['the senate and house of representatives'],
        options: [
            'the senate and house of representatives',
            'legislative and executive branches',
            'making and interpreting laws',
            'the president and vice president',
        ],

        number: 17,
        category:'System of Government'
    },
    {
        text: 'How many U.S. Senators are there?',
        correctAnswers: ['one hundred (100)', '100', 'one hundred'],
        options: [
            'one hundred (100)',
            'four-hundred thirty five (435)',
            'twenty seven (27)',
            'two hundred (200)',
        ],

        number: 18,
        category:'System of Government'
    },
    {
        text: 'We elect a U.S. Senator for how many years?',
        correctAnswers: ['six (6)', 'six', '6'],
        options: ['six (6)', 'four (4)', 'two (2)', 'eight (8)'],

        number: 19,
        category:'System of Government'
    },
    {
        text: 'Who is one of your state’s U.S. Senators now?* (NJ)',
        correctAnswers: ['Andy Kim', 'cory a. booker', 'cory booker'],
        options: ['cory booker', 'donald trump', 'paul ryan', 'nancy pelosa'],
        type: 'input',
        tip:
            'Answers will vary. Visit senate.gov to find your state’s U.S. Senators. This answers are valid for NJ state only.',
        number: 20,
        category:'System of Government'
    },
    {
        text: 'The House of Representatives has how many voting members?',
        correctAnswers: ['four hundred thirty-five (435)','435'],
        options: [
            'four hundred thirty-five (435)',
            'one hundred (100)',
            'fifty (50)',
            'twenty seven (27)',
        ],

        number: 21,
        category:'System of Government'
    },
    {
        text: 'We elect a U.S. Representative for how many years?',
        correctAnswers: ['two (2)'],
        options: ['two (2)', 'four (4)', 'six (6)', 'eight (8)'],

        number: 22,
        category:'System of Government'
    },
    {
        text: 'Name your U.S. Representative. (Garfield, NJ)',
        correctAnswers: ['Nellie Pou'],
        options: [
            'Nellie Pou',
            'paul ryan',
            'kamala harris.',
            'jerry brown',
        ],
        type: 'input',
        tip:
            "Go to https://www.house.gov/ and type your zip code to find yours. For '07026' in 2025 is 'Bill Pascrell Jr. (Democrat)'",
        number: 23,
        category:'System of Government'
    },
    {
        text: 'Who does a U.S. Senator represent?',
        correctAnswers: ['all people of the state'],
        options: [
            'all people of the state',
            'businesses and organizations',
            'the senate',
            'the legislative branch.',
        ],

        number: 24,
        category:'System of Government'
    },
    {
        text: 'Why do some states have more Representatives than other states?',
        correctAnswers: [
            '(because of) the state’s population',
            '(because) they have more people',
            '(because) some states have more people',
        ],
        options: [
            '(because) they have more people',
            '(because) a lottery system is used.',
            '(because) they have more land.',
            '(because) they are the original states.',
        ],

        number: 25,
        category:'System of Government'
    },
    {
        text: 'We elect a President for how many years?',
        correctAnswers: ['four (4)','4'],
        options: ['four (4)', 'six (6)', 'two (2)', 'eight (8)'],

        number: 26,
        category:'System of Government'
    },
    {
        text: 'In what month do we vote for President?*',
        correctAnswers: ['november'],
        options: ['november', 'january', 'december', 'february'],

        number: 27,
        category:'System of Government'
    },
    {
        text: 'What is the name of the President of the United States now?*',
        correctAnswers: ['donald trump'],
        options: ['donald trump', 'barack obama', 'joe biden', 'mike pence'],
        type: 'input',
        tip:
            'Visit uscis.gov/citizenship/testupdates for the name of the President of the United States.',
        number: 28,
        category:'System of Government'
    },
    {
        text: 'What is the name of the Vice President of the United States now?',
        correctAnswers: ['JD Vance'],
        options: ['kamala harris', 'mike pence', 'donald trump', 'JD Vance'],
        type: 'input',
        tip:
            'Visit uscis.gov/citizenship/testupdates for the name of the Vice President of the United States.',
        number: 29,
        category:'System of Government'
    },
    {
        text: 'If the President can no longer serve, who becomes President?',
        correctAnswers: ['the vice president'],
        options: [
            'the vice president',
            'the speaker of the house',
            'the chief justice',
            'the secretary of state',
        ],
        number: 30,
        category:'System of Government',
    },
    {
        text:
            'If both the President and the Vice President can no longer serve, who becomes President?',
        correctAnswers: ['the speaker of the house'],
        options: [
            'the speaker of the house',
            'the cabinet',
            'the secretary of defence.',
            'the cheif justice',
        ],

        number: 31,
        category:'System of Government'
    },
    {
        text: 'Who is the Commander in Chief of the military?',
        correctAnswers: ['the president'],
        options: [
            'the president',
            'the secretary of defence',
            'the joint chiefs of staff',
            'the vice president',
        ],

        number: 32,
        category:'System of Government'
    },
    {
        text: 'Who signs bills to become laws?',
        correctAnswers: ['the president'],
        options: ['the president', 'congress', 'the senate', 'the supreme court'],

        number: 33,
        category:'System of Government'
    },
    {
        text: 'Who vetoes bills?',
        correctAnswers: ['the president'],
        options: [
            'the president',
            'the senate',
            'the house of representatives',
            'the supreme court',
        ],

        number: 34,
        category:'System of Government'
    },
    {
        text: 'What does the President’s Cabinet do?',
        correctAnswers: ['advises the president'],
        options: [
            'advises the president',
            'signs laws',
            'vetoes laws',
            'interprets laws',
        ],

        number: 35,
        category:'System of Government'
    },
    {
        text: 'What are two Cabinet-level positions?',
        correctAnswers: [
            'secretary of agriculture',
            'secretary of commerce',
            'secretary of defense',
            'secretary of education',
            'secretary of energy',
            'secretary of health and human services',
            'secretary of homeland security',
            'secretary of housing and urban development',
            'secretary of the interior',
            'secretary of labor',
            'secretary of state',
            'secretary of transportation',
            'secretary of the treasury',
            'secretary of veterans affairs',
            'attorney general',
            'vice president',
            'secretary of education + secretary of state',
        ],
        options: [
            'secretary of education + secretary of state',
            'secretary of war + secretary of foreign relations',
            'cheif justice + speaker of the house',
            'speaker of the house + vice president',
        ],

        number: 36,
        category:'System of Government'
    },
    {
        text: 'What does the judicial branch do?',
        correctAnswers: [
            'reviews laws',
            'explains laws',
            'resolves disputes (disagreements)',
            'decides if a law goes against the constitution',
        ],
        options: [
            'reviews laws',
            'builds the courthouses',
            'writes new laws',
            'commands the military',
        ],

        number: 37,
        category:'System of Government'
    },
    {
        text: 'What is the highest court in the United States?',
        correctAnswers: ['the supreme court'],
        options: [
            'the supreme court',
            'the kangaroo court',
            'the court of appeals',
            'the court of representatives',
        ],

        number: 38,
        category:'System of Government'
    },
    {
        text: 'How many justices are on the Supreme Court?',
        correctAnswers: ['nine (9)','9','nine'],
        options: ['nine (9)', 'three (3)', 'thirteen (13)', 'twenty-one (21)'],
        type: 'input',
        tip:
            'Visit https://www.supremecourt.gov/about/justices.aspx to find updated information.',
        number: 39,
        category:'System of Government'
    },
    {
        text: 'Who is the Chief Justice of the United States now?',
        correctAnswers: ['john roberts', 'john g. roberts, jr.'],
        options: ['john roberts', 'paul ryan', 'nancy pelosi', 'jerry brown'],
        type: 'input',
        tip:
            'Visit uscis.gov/citizenship/testupdates for the name of the Chief Justice of the United States.',
        number: 40,
        category:'System of Government'
    },
    {
        text:
            'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
        correctAnswers: [
            'to print money',
            'to declare war',
            'to create an army',
            'to make treaties',
        ],
        options: [
            'to print money',
            'to register drivers licenses',
            'to set up schools',
            'to provide safety (fire departments)',
        ],

        number: 41,
        category:'System of Government'
    },
    {
        text:
            'Under our Constitution, some powers belong to the states. What is one power of the states?',
        correctAnswers: [
            'provide schooling and education',
            'provide protection (police)',
            'provide safety (fire departments)',
            'give a driver’s license',
            'approve zoning and land use',
        ],
        options: [
            'provide schooling and education',
            'creating armies',
            'declaring war',
            'creating treaties',
        ],

        number: 42,
        category:'System of Government'
    },
    {
        text: 'Who is the Governor of your state now? (NJ)',
        correctAnswers: ['phil murphy'],
        options: ['phil murphy', 'jerry brown', 'paul didney', 'jerry west'],
        type: 'input',
        tip:
            'Answers will vary. Visit https://www.usa.gov/states-and-territories to find the Governor of your state.',
        number: 43,
        category:'System of Government'
    },
    {
        text: 'What is the capital of your state?* (NJ)',
        correctAnswers: ['trenton'],
        options: ['trenton', 'new york', 'patterson', 'newark'],
        type: 'input',
        tip:
            'Answers will vary. Visit usa.gov/states-and-territories to find information about your state.',
        number: 44,
        category:'System of Government'
    },
    {
        text: 'What are the two major political parties in the United States?*',
        correctAnswers: ['democratic and republican', 'republican and democratic'],
        options: [
            'democratic and republican',
            'green party and libertarians',
            'communists and americans',
            'right and left',
        ],

        number: 45,
        category:'System of Government'
    },
    {
        text: 'What is the political party of the President now?',
        correctAnswers: ['republican'],
        options: ['republican', 'democratic', 'communist', 'green party'],
        type: 'input',
        tip:
            'Visit uscis.gov/citizenship/testupdates for the political party of the President.',
        number: 46,
        category:'System of Government'
    },
    {
        text: 'What is the name of the Speaker of the House of Representatives now?',
        correctAnswers: ['Mike Johnson', 'Johnson','James Michael Johnson'],
        options: ['Mike Johnson', 'nancy pelosi', 'john roberts', 'jerry brown'],
        type: 'input',
        tip:
            'Visit uscis.gov/citizenship/testupdates for the name of the Speaker of the House of Representatives.',
        number: 47,
        category:'System of Government'
    },
    {
        text:
            'There are four amendments to the Constitution about who can vote. Describe one of them.',
        correctAnswers: [
            'citizens eighteen (18) and older (can vote)',
            'you don’t have to pay (a poll tax) to vote',
            'any citizen can vote. (women and men can vote.)',
            'a male citizen of any race (can vote)',
        ],
        options: [
            'citizens eighteen (18) and older (can vote)',
            'citizens must pay a fee to vote',
            'citizens twenty-one (21) and older can vote',
            'citizens of other countries can vote',
        ],
        number: 48,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What is one responsibility that is only for United States citizens?*',
        correctAnswers: ['serve on a jury', 'vote in a federal election'],
        options: [
            'vote in a federal election',
            'keep the peace',
            'ask what you can do for your country',
            'run for federal office',
        ],
        number: 49,
        category:'Rights and Responsibilities',
    },
    {
        text: 'Name one right only for United States citizens.',
        correctAnswers: ['vote in a federal election', 'run for federal office'],
        options: [
            'vote in a federal election',
            'serve on a jury.',
            'the pursuit of happiness',
            'a good education',
        ],
        number: 50,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What are two rights of everyone living in the United States?',
        correctAnswers: [
            'freedom of expression',
            'freedom of speech',
            'freedom of assembly',
            'freedom to petition the government',
            'freedom of religion',
            'the right to bear arms',
            'freedom religion + freedom of speech',
        ],
        options: [
            'freedom religion + freedom of speech',
            'freedom of voting + freedom of participation',
            'freedom of oppression + freedom of thought',
            'freedom of running for office + freedom of healthcare',
        ],
        number: 51,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What do we show loyalty to when we say the Pledge of Allegiance?',
        correctAnswers: ['the united states', 'the flag'],
        options: [
            'the united states',
            'the president',
            'the legislative branch',
            'our politicians',
        ],
        number: 52,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What is one promise you make when you become a United States citizen?',
        correctAnswers: [
            'give up loyalty to other countries',
            'defend the constitution and laws of the united states',
            'obey the laws of the united states',
            'serve in the u.s. military (if needed)',
            'serve (do important work for) the nation (if needed)',
            'be loyal to the united states',
        ],
        options: [
            'defend the constitution and laws of the united states',
            'be loyal to other countries.',
            'work hard and be safe.',
            'vote in all federal elections.',
        ],
        number: 53,
        category:'Rights and Responsibilities',
    },
    {
        text: 'How old do citizens have to be to vote for President?*',
        correctAnswers: ['eighteen (18)', 'eighteen (18) and older', '18'],
        options: [
            'eighteen (18)',
            'sixteen (16)',
            'twenty-one (21)',
            'thirty-five (35)',
        ],
        number: 54,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What are two ways that Americans can participate in their democracy?',
        correctAnswers: [
            'vote',
            'join a political party',
            'help with a campaign',
            'join a civic group',
            'join a community group',
            'give an elected official your opinion on an issue',
            'call senators and representatives',
            'publicly support or oppose an issue or policy',
            'run for office',
            'write to a newspaper',
            'vote + join a political party',
        ],
        options: [
            'vote + join a political party',
            'vote + overthrow the government',
            'pay taxes + obey the laws',
            'support other countries - join groups',
        ],
        number: 55,
        category:'Rights and Responsibilities',
    },
    {
        text: 'When is the last day you can send in federal income tax forms?*',
        correctAnswers: ['april 15'],
        options: ['april 15', 'january 15', 'january 1', 'april 1'],
        number: 56,
        category:'Rights and Responsibilities',
    },
    {
        text: 'When must all men register for the Selective Service?',
        correctAnswers: [
            'at age eighteen (18)',
            'between eighteen (18) and twenty-six (26)',
        ],
        options: [
            'between eighteen (18) and twenty-six (26)',
            'between eighteen (18) and thirty (30)',
            'between twenty-one (21) and thirty-five (35)',
            'between eighteen (18) and twenty-five (25)',
        ],
        number: 57,
        category:'Rights and Responsibilities',
    },
    {
        text: 'What is one reason colonists came to America?',
        correctAnswers: [
            'freedom',
            'political liberty',
            'religious freedom',
            'economic opportunity',
            'practice their religion',
            'escape persecution',
        ],
        options: [
            'freedom',
            'seemed like a good idea',
            'seeking monarchy',
            'escape the plague',
        ],
        number: 58,
        category:"Colonial Period and Independence",
    },
    {
        text: 'Who lived in America before the Europeans arrived?',
        correctAnswers: ['american indians', 'native americans'],
        options: [
            'native americans',
            'the colonists',
            'american citizens',
            'nobody',
        ],
        number: 59,
        category:"Colonial Period and Independence",
    },
    {
        text: 'What group of people was taken to America and sold as slaves?',
        correctAnswers: ['africans', 'people from africa'],
        options: ['africans', 'asians', 'europeans', 'latinos'],
        number: 60,
        category:"Colonial Period and Independence",
    },
    {
        text: 'Why did the colonists fight the British?',
        correctAnswers: [
            'because of high taxes',
            'because the british army stayed in their houses (boarding, quartering)',
            'because they didn’t have self-government',
        ],
        options: [
            'because of high taxes',
            'because of the revolutionary war',
            'because of the boston tea party',
            'because they were allies with the french',
        ],
        number: 61,
        category:"Colonial Period and Independence",
    },
    {
        text: 'Who wrote the Declaration of Independence?',
        correctAnswers: ['(thomas) jefferson', 'thomas jefferson'],
        options: [
            'thomas jefferson',
            'george washington',
            'john adams',
            'abraham lincoln',
        ],
        number: 62,
        category:"Colonial Period and Independence",
    },
    {
        text: 'When was the Declaration of Independence adopted?',
        correctAnswers: ['july 4, 1776'],
        options: ['july 4, 1776', 'july 4, 1777', 'july 4, 1778', 'july 4, 1775'],

        number: 63,
        category:"Colonial Period and Independence",
    },
    {
        text: 'There were 13 original states. Name three.',
        correctAnswers: [
            'new hampshire',
            'massachusetts',
            'rhode island',
            'connecticut',
            'new york',
            'new jersey',
            'pennsylvania',
            'delaware',
            'maryland',
            'virginia',
            'north carolina',
            'south carolina',
            'georgia',
            'new york, new jersey, pennsylvania',
        ],
        findCorrectAnswers:function(a){
            for (let j =0; j<this.options.length;j++){
                let current = this.options[j]
                if(a === current){
                    return true
                }
            }
            //['new york', 'new jersey', 'pennsylvania']
            const userAnswers = a.trim().split(',').map(str => str.trim())
            let totalCorrect = 0;
            if(this.options.length === 0){
                return false
            }
            for(let i=0; i<this.options.length;i++){
                const opt = this.options[i]
                if(userAnswers.includes(opt)){
                    totalCorrect++
                }
            }
            return totalCorrect >= 3
        },
        options: [
            'new york, new jersey, pennsylvania',
            'new york, new jersey, idaho',
            'new york, ohio, florida',
            'new york, california, new jersey',
        ],
        number: 64,
        category:"Colonial Period and Independence",
    },
    {
        text: 'What happened at the Constitutional Convention?',
        correctAnswers: [
            'the constitution was written',
            'the founding fathers wrote the constitution',
        ],
        options: [
            'the constitution was written',
            'our independence was declared',
            'the federalist papers were accepted',
            'the british were fought',
        ],
        category:"Colonial Period and Independence",
        number: 65,
    },
    {
        text: 'When was the Constitution written?',
        correctAnswers: ['1787'],
        options: ['1787', '1767', '1777', '1797'],
        category:"Colonial Period and Independence",
        number: 66,
    },
    {
        text:
            'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
        correctAnswers: [
            'alexander hamilton',
            'john jay',
            'james madison',
            'publius',
        ],
        options: [
            'james madison',
            'thomas jefferson',
            'john adams',
            'george washington',
        ],
        category:"Colonial Period and Independence",
        number: 67,
    },
    {
        text: 'What is one thing Benjamin Franklin is famous for?',
        correctAnswers: [
            'u.s. diplomat',
            'oldest member of the constitutional convention',
            'first postmaster general of the united states',
            'writer of “poor richard’s almanac”',
            'started the first free libraries',
        ],
        options: [
            'u.s. diplomat',
            'u.s. president',
            'u.s. senator',
            'first secretary of state.',
        ],
        category:"Colonial Period and Independence",
        number: 68,
    },
    {
        text: 'Who is the “Father of Our Country”?',
        correctAnswers: ['george washington'],
        options: [
            'george washington',
            'thomas jefferson',
            'benjamin franklin',
            'abraham lincoln',
        ],
        category:"Colonial Period and Independence",
        number: 69,
    },
    {
        text: 'Who was the first President?*',
        correctAnswers: ['george washington'],
        options: [
            'george washington',
            'abraham lincoln',
            'franklin d. roosevelt',
            'woodrow wilson',
        ],
        category:"Colonial Period and Independence",
        number: 70,
    },
    {
        text: 'What territory did the United States buy from France in 1803?',
        correctAnswers: ['the louisiana territory', 'louisiana'],
        options: ['louisiana', 'texas', 'tennessee', 'alaska'],
        number: 71,
        category:'1800s',
    },
    {
        text: 'Name one war fought by the United States in the 1800s.',
        correctAnswers: [
            'war of 1812',
            'mexican-american war',
            'civil war',
            'spanish-american war',
        ],
        options: ['mexican-american war', 'revolutionary war', 'world war i', 'vietnam'],
        category:'1800s',
        number: 72,
    },
    {
        text: 'Name the U.S. war between the North and the South.',
        correctAnswers: ['the civil war', 'the war between the states'],
        options: [
            'the civil war',
            'the revolutionary war',
            'world war i',
            'american war',
        ],
        category:'1800s',
        number: 73,
    },
    {
        text: 'Name one problem that led to the Civil War.',
        correctAnswers: ['slavery', 'economic reasons', 'states’ rights'],
        options: ['slavery', 'taxes', 'king george iii', "women's rights"],
        category:'1800s',
        number: 74,
    },
    {
        text: 'What was one important thing that Abraham Lincoln did?*',
        correctAnswers: [
            'freed the slaves (emancipation proclamation)',
            'freed the slaves',
            'saved (or preserved) the union',
            'led the united states during the civil war',
        ],
        options: [
            'freed the slaves',
            'lost the civil war.',
            'wrote the declaration of independence.',
            'was a u.s. foreign diplomat.',
        ],
        category:'1800s',
        number: 75,
    },
    {
        text: 'What did the Emancipation Proclamation do?',
        correctAnswers: [
            'freed the slaves',
            'freed slaves in the confederacy',
            'freed slaves in the confederate states',
            'freed slaves in most southern states',
        ],
        options: [
            'freed the slaves',
            "secured state's rights",
            'ended the civil war',
            'started the civil war',
        ],
        category:'1800s',
        number: 76,
    },
    {
        text: 'What did Susan B. Anthony do?',
        correctAnswers: ['fought for women’s rights', 'fought for civil rights'],
        options: [
            'fought for women’s rights',
            "secured state's rights.",
            'freed the slaves.',
            'fought the civil war.',
        ],
        category:'1800s',
        number: 77,
    },
    {
        text: 'Name one war fought by the United States in the 1900s.*',
        correctAnswers: [
            'world war i',
            'world war ii',
            'korean war',
            'vietnam war',
            '(persian) gulf war',
        ],
        options: [
            'world war i',
            'civil war',
            'revolutionary war',
            'spanish american war',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 78,
    },
    {
        text: 'Who was President during World War I?',
        correctAnswers: ['woodrow wilson'],
        options: [
            'woodrow wilson',
            'franklin d. roosevelt',
            'george washington',
            'abraham lincoln',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 79,
    },
    {
        text: 'Who was President during the Great Depression and World War II?',
        correctAnswers: ['franklin roosevelt', 'franklin d. roosevelt'],
        options: [
            'franklin d. roosevelt',
            'woodrow wilson',
            'george washington',
            'abraham lincoln',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 80,
    },
    {
        text: 'Who did the United States fight in World War II?',
        correctAnswers: ['japan, germany, and italy'],
        options: [
            'japan, germany, and italy',
            'russia, spain and austria',
            'germany, russia and china',
            'britan, canada and australia',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 81,
    },
    {
        text: 'Before he was President, Eisenhower was a general. What war was he in?',
        correctAnswers: ['world war ii'],
        options: ['world war ii', 'world war i', 'civil war', 'vietnam war'],
        category:"Recent American History and Other Important Historical Information",
        number: 82,
    },
    {
        text: 'During the Cold War, what was the main concern of the United States?',
        correctAnswers: ['communism'],
        options: [
            'communism',
            'freedom of speech',
            'international trade',
            'freeing the slaves',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 83,
    },
    {
        text: 'What movement tried to end racial discrimination?',
        correctAnswers: ['civil rights', 'civil rights movement'],
        options: [
            'civil rights movement',
            'free trade movement',
            "people's rights movement",
            'racial rights movement',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 84,
    },
    {
        text: 'What did Martin Luther King, Jr. do?*',
        correctAnswers: [
            'fought for civil rights',
            'worked for equality for all americans',
        ],
        options: [
            'fought for civil rights',
            'fought in civil war',
            'fought with the british',
            'fought against civil rights',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 85,
    },
    {
        text: 'What major event happened on September 11, 2001, in the United States?',
        correctAnswers: ['terrorists attacked the united states'],
        options: [
            'terrorists attacked the united states',
            'the united states attacked iraq',
            'the american president was elected',
            'the united states attacked terrorists',
        ],
        category:"Recent American History and Other Important Historical Information",
        number: 86,
    },
    {
        text:
            'Name one American Indian tribe in the United States.  [USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]',
        correctAnswers: [
            'cherokee',
            'navajo',
            'sioux',
            'chippewa',
            'choctaw',
            'pueblo',
            'apache',
            'iroquois',
            'creek',
            'blackfeet',
            'seminole',
            'cheyenne',
            'arawak',
            'shawnee',
            'mohegan',
            'huron',
            'oneida',
            'lakota',
            'crow',
            'teton',
            'hopi',
            'inuit',
        ],
        options: ['cherokee', 'pocahontas', 'indianites', 'natives'],
        category:"Recent American History and Other Important Historical Information",
        number: 87,
    },
    {
        text: 'Name one of the two longest rivers in the United States.',
        correctAnswers: ['missouri (river)', 'mississippi (river)', 'mississippi'],
        options: ['mississippi', 'colorado', 'ohio', 'nile'],
        category:"Geography",
        number: 88,
    },
    {
        text: 'What ocean is on the West Coast of the United States?',
        correctAnswers: ['pacific (ocean)', 'pacific'],
        options: ['pacific', 'atlantic', 'indian', 'great lakes'],
        category:"Geography",
        number: 89,
    },
    {
        text: 'What ocean is on the East Coast of the United States?',
        correctAnswers: ['atlantic (ocean)', 'atlantic'],
        options: ['atlantic', 'pacific', 'indian', 'great lakes'],
        category:"Geography",
        number: 90,
    },
    {
        text: 'Name one U.S. territory.',
        correctAnswers: [
            'puerto rico',
            'u.s. virgin islands',
            'american samoa',
            'northern mariana islands',
            'guam',
        ],
        options: ['puerto rico', 'hawaii', 'alaska', 'the moon'],
        category:"Geography",
        number: 91,
    },
    {
        text: 'Name one state that borders Canada.',
        correctAnswers: [
            'maine',
            'new hampshire',
            'vermont',
            'new york',
            'pennsylvania',
            'ohio',
            'michigan',
            'minnesota',
            'north dakota',
            'montana',
            'idaho',
            'washington',
            'alaska',
        ],
        options: ['alaska', 'california', 'texas', 'iowa'],
        category:"Geography",
        number: 92,
    },
    {
        text: 'Name one state that borders Mexico.',
        correctAnswers: ['california', 'arizona', 'new mexico', 'texas'],
        options: ['california', 'pennsylvania', 'nevada.', 'florida'],
        category:"Geography",
        number: 93,
    },
    {
        text: 'What is the capital of the United States?*',
        correctAnswers: ['washington, d.c.'],
        options: [
            'washington, d.c.',
            'seattle, washington',
            'new york city',
            'america city',
        ],
        category:"Geography",
        number: 94,
    },
    {
        text: 'Where is the Statue of Liberty?*',
        correctAnswers: [
            'new york (harbor)',
            'new york harbor',
            'liberty island',
            '[also acceptable are new jersey, near new york city, and on the hudson (river)]',
        ],
        options: [
            'new york harbor',
            'san francisco',
            'washington, d.c.',
            'boston harbor',
        ],
        category:"Geography",
        number: 95,
    },
    {
        text: 'Why does the flag have 13 stripes?',
        correctAnswers: [
            'because there were 13 original colonies',
            'because the stripes represent the original colonies',
        ],
        options: [
            'because there were 13 original colonies',
            'because there were 13 original presidents',
            'because there were 13 original senators',
            'because there were 13 original languages',
        ],
        category:'Symbols',
        number: 96,
    },
    {
        text: 'Why does the flag have 50 stars?*',
        correctAnswers: [
            'because there is one star for each state',
            'because each star represents a state',
            'because there are 50 states',
        ],
        options: [
            'because there is one star for each state',
            'because there is one star for each territory',
            'because there is one star for each representative',
            'because there is one star for each amendment',
        ],
        category:'Symbols',
        number: 97,
    },
    {
        text: 'What is the name of the national anthem?',
        correctAnswers: ['the star-spangled banner'],
        options: [
            'the star-spangled banner',
            'america the free',
            'god bless america',
            "america's hymn",
        ],
        category:'Symbols',
        number: 98,
    },
    {
        text: 'When do we celebrate Independence Day?*',
        correctAnswers: ['july 4th', 'july 4'],
        options: ['july 4th', 'may 5th', 'november 26th', 'april 15th'],
        category:"Holidays",
        number: 99,
    },
    {
        text: 'Name two national U.S. holidays.',
        correctAnswers: [
            'new year’s day',
            'martin luther king, jr. day',
            "presidents' day",
            'memorial day',
            'independence day',
            'labor day',
            'columbus day',
            'veterans day',
            'thanksgiving',
            'christmas',
            "christmas and thanksgiving",
        ],
        options: [
            "christmas and thanksgiving",
            'thanksgiving + arbor day',
            'christmas + teacher day',
            "new year's day + april fools",
        ],
        category:"Holidays",
        number: 100,
    },
]



export const allQuestions = questionConstructors_Updated2025.map(obj => new Question(obj))

const categorySet = new Set(questionConstructors_Updated2025.filter(q => q.category !== undefined).map(q => q.category!))
export const CATEGORIES = [...categorySet]

export const CategoryModels = CATEGORIES.map(category => new Category(category))