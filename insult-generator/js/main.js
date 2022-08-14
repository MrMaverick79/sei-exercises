//Shakesperean Insult Generator

console.log('Insults!');

const ShakespereanInsult =  {

 firstAdjectives : [
        'artless',
        'bawdy',
        'beslubbering',
        'bootless',
        'churlish',
        'cockered',
        'clouted',
        'craven',
        'currish',
        'dankish',
        'dissembling',
        'droning',
        'errant',
        'fawning',
        'fobbing',
        'froward',
        'frothy',
        'gleeking',
        'goatish',
        'gorbellied',
        'impertinent',
        'infectious',
        'jarring',
        'loggerheaded',
        'lumpish',
        'mammering',
        'mangled',
        'mewling',
        'paunchy',
        'pribbling',
        'puking',
        'puny',
        'qualling',
        'rank',
        'reeky',
        'roguish',
        'ruttish',
        'saucy',
        'spleeny',
        'spongy',
        'surly',
        'tottering',
        'unmuzzled',
        'vain',
        'venomed',
        'villainous',
        'warped',
        'wayward',
        'weedy',
        'yeasty'
      ],
      secondAdjectives : [
        'base-court',
        'bat-fowling',
        'beef-witted',
        'beetle-headed',
        'boil-brained',
        'clapper-clawed',
        'clay-brained',
        'common-kissing',
        'crook-pated',
        'dismal-dreaming',
        'dizzy-eyed',
        'doghearted',
        'dread-bolted',
        'earth-vexing',
        'elf-skinned',
        'fat-kidneyed',
        'fen-sucked',
        'flap-mouthed',
        'fly-bitten',
        'folly-fallen',
        'fool-born',
        'full-gorged',
        'guts-griping',
        'half-faced',
        'hasty-witted',
        'hedge-born',
        'hell-hated',
        'idle-headed',
        'ill-breeding',
        'ill-nurtured',
        'knotty-pated',
        'milk-livered',
        'motley-minded',
        'onion-eyed',
        'plume-plucked',
        'pottle-deep',
        'pox-marked',
        'reeling-ripe',
        'rough-hewn',
        'rude-growing',
        'rump-fed',
        'shard-borne',
        'sheep-biting',
        'spur-galled',
        'swag-bellied',
        'tardy-gaited',
        'tickle-brained',
        'toad-spotted',
        'unchin-snouted',
        'weather-bitten'
      ],
      nouns : [
        'apple-john',
        'baggage',
        'barnacle',
        'bladder',
        'boar-pig',
        'bugbear',
        'bum-bailey',
        'canker-blossom',
        'clack-dish',
        'clotpole',
        'coxcomb',
        'codpiece',
        'death-token',
        'dewberry',
        'flap-dragon',
        'flax-wench',
        'flirt-gill',
        'foot-licker',
        'fustilarian',
        'giglet',
        'gudgeon',
        'haggard',
        'harpy',
        'hedge-pig',
        'horn-beast',
        'hugger-mugger',
        'joithead',
        'lewdster',
        'lout',
        'maggot-pie',
        'malt-worm',
        'mammet',
        'measle',
        'minnow',
        'miscreant',
        'moldwarp',
        'mumble-news',
        'nut-hook',
        'pigeon-egg',
        'pignut',
        'puttock',
        'pumpion',
        'ratsbane',
        'scut',
        'skainsmate',
        'strumpet',
        'varlot',
        'vassal',
        'whey-face',
        'wagtail'
      ],

    generateRandomNum : function(maxNum) { //takes an array anmd returns a random element
        return Math.floor( Math.random() * maxNum )  //no need for -1 because of floor. 
    }, //end generateRandomNum

    getRandomElementfromArray :  function(arr) {
        return arr[this.generateRandomNum(arr.length)]
    }, //end getRandomElementfromArray

    createInsult : function() { //takes three arrays and randomly selects 
        //goal: print a randomly generated insult generator
        let finalMessage = "Thou ";
        // pick a random first adjective
        const firstWord  = this.getRandomElementfromArray(this.firstAdjectives);
        //pick a random second adjective
        const secondWord =  this.getRandomElementfromArray(this.secondAdjectives);
        // pick a random noun
        const nounWord = this.getRandomElementfromArray(this.nouns);
        //return final
        return finalMessage + `${firstWord} ${secondWord} ${nounWord}!`;
    
    }, //end generateRandomNum

}; //end ShakespeareanInsult object

//debugger; //opens debugger
console.log(ShakespereanInsult.createInsult());





