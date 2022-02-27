var correctAnswer;
var wordType = Math.floor(Math.random() * 5);
var random;
var _2PP_verbs = [
    ["amare ","dare ","vocare "], 
    ["debere ","habere ","videre ","iubere ","movere ","tenere "],
    ["agere ","cadere ","credere ","dicere ","ducere ","ferere ","legere ","mittere ","petere ","vincere ","gerere ","quaerere ","relinquere ","tollere "],
    ["accipere ","capere ","facere "],
    ["audire ","scire ","venire "]
]
var ferre = _2PP_verbs[2][5].replace("ere ", "re ");
var _3PP_verbs = [
    ["amavi ","dedi ","vocavi "], 
    ["debui ","habui ","vidi ","iussi ","movi ","tenui "],
    ["egi ","cecidi ","credidi ","dixi ","duxi ","tuli ","legi ","misi ","petivi ","vici ","gessi ","quaesivi ","reliqui ","sustuli "],
    ["accepi ","cepi ","feci "],
    ["audivi ","scivi ","veni "]
]
var _4PP_verbs = [
    ["amatus ","datus ","vocatus "], 
    ["debitus ","habitus ","vissus ","iussus ","motus ","tentus "],
    ["actus ","casus ","creditus ","dictus ","ductus ","latus ","lectus ","missus ","petitus ","victus ","gestus ","quaesitus ","relictus ","sublatus "],
    ["acceptus ","captus ","factus "],
    ["auditus ","scitus ",""]
]
// ["velle","esse","posse","ire"]
//["gradi","fieri","loqui","mirari","oriri","sequi","tueri"];
var verb_endings = [
    [
        [[["o","s","t"],["mus","tis","nt"]],[["or","ris","tur"],["mur","mini","ntur"]]],
        [[["bam","bas","bat"],["bamus","batis","bant"]],[["bar","baris","batur"],["bamur","bamini","bantur"]]],
        [[["bo","bis","bit"],["bimus","bitis","bunt"]],[["bor","beris","bitur"],["bimur","bimini","buntur"]]],
    ],
    [    
        [["i","isti","it","imus","istis","ere"],["sum","es","est","sumus","estis","sunt"]],
        [["eram","eras","erat","eramus","eratis","erant"],["eram","eras","erat","eramus","eratis","erant"]],
        [["ero","eris","erit","erimus","eritis","erint"],["ero","eris","erit","erimus","eritis","erunt"]]
    ]
]
var verbAnswerType = ["Conjugation in","Meaning of"]
var verbMeanings = [
    ["love ","give ","call "], 
    ["owe ","hold ","see ","order ","move ","have "],
    ["do ","die ","trust ","say ","lead ","bear ","choose ","send ","fight ","defeat ","carry ","search for ","abandon ","raise "],
    ["welcome ","take ","make "],
    ["hear ","know ","come "]
]
var pronouns = [["I","you","he"],["we","you all","they"]]
var _1a5e = [
    [["am","es","et"],["emus","etis","ent"]],
    [["ar","eris","etur"],["emur","emini","entur"]]
]
var voice = ["active","passive"];
var system = ["Present","Perfect"];
var tenses = [["present","imperfect","future"],["perfect","pluperfect","future perfect"]];
var numberof = ["singular", "plural"];
var subject = ["first-person", "second-person", "third-person"];
var pppNumberOf = [
    ["a","ae"],
    ["us","i"],
    ["um","i"]
]
var nounAnswerType = ["Nominative","Accusative","Ablative","Genitive","Dative","Meaning"]
var nouns = [
    ["aqua, aquae ","dea, deae ","filia, filiae ","forma, formae ","ira, irae ","puella, puellae ","terra, terrae "],
    ["amicus, amici ","animus, animi ","deus, dei ","filius, filii ","puer, pueri ","vir, viri "],
    ["bellum, belli ","caelum, caeli ","ferrum, ferri ","imperium, imperii ","verbum, verbi "],
    ["frater, fratris ","hostis, hostis ","mater, matris ","miles, militis ","pater, patris ","rex, regis ","soror, sororis ","urbs, urbis "],
    ["corpus, corporis ","munus, muneris ","nomen, nominis "]
]
var nounMeanings = [
    ["water","goddess","daughter","form","anger","girl","land"],
    ["friend","mind","god","son","boy","man"],
    ["war","sky","iron","command","word"],
    ["brother","enemy","mother","soldier","father","king","sister","city"],
    ["body","gift","name"]
]
var nounEndings = [
    [["a","am","a","ae","ae"],["ae","as","is","arum","is"]],
    [["us","um","o","i","o"],["i","os","is","orum","is"]],
    [["um","um","o","i","o"],["a","a","is","orum","is"]],
    [["","em","e","is","i"],["es","es","ibus","um","ibus"]],
    [["","","e","is","i"],["a","a","ibus","um","ibus"]]
]
var adjectives = [
    ["amicus, amica, amicum","aptus, apta, aptum","magnus, magna, magnum","meus, mea, meum","miser, misera, miserum","multus, multa, multum","pulcher, pulchra, pulchrum","tuus, tua, tuum"],
    ["fortis, forte ","gravis, grave ","immortalis, immortale ","omnis, omne ","similis, simile ","turpis, turpe ","talis, tale "]
]
var adjectiveMeanings = [
    ["friendly","suited","great","my","miserable","many","beautiful","your"],
    ["strong","heavy","immortal","all","like","ugly","such"]
]
var adjEndings = [
    [
        [["a","am","a","ae","ae"],["ae","as","is","arum","is"]],
        [["us","um","o","i","o"],["i","os","is","orum","is"]],
        [["um","um","o","i","o"],["a","a","is","orum","is"]]
    ],
    [
    [["is","em","e","is","i"],["is","is","ibus","ium","ibus"]],
    [["is","em","e","is","i"],["is","is","ibus","ium","ibus"]],
    [["e","e","e","is","i"],["ia","ia","ibus","ium","ibus"]]
    ]
]
var gender = ["feminine","masculine","neuter"];
var prepositions = ["ab or ā","ad","ante","contrā","cum","dē","ex or ē","in abl","in acc","per","prō","sine","sub abl","sub acc"]
var prepositionsAnswers = ["from","to","before","against","with","down from","out of","in","into","through","in front of","without","beneath","towards"]
var a_c = ["et adv","et conj","nam","sed","nōn"];
var a_c_Answers = ["even","and","because","but","not"]


function start() {
    if(wordType == 0){
        document.getElementById("type").innerHTML = "Type of Vocab Word: Verb";
        rando = Math.floor(Math.random() * 5); //conjugation
        random = Math.floor(Math.random() * _2PP_verbs[rando].length); // word
        rando1 = Math.floor(Math.random() * system.length);
        random1 = Math.floor(Math.random() * tenses[rando1].length); //tense
        random2 = Math.floor(Math.random() * subject.length); //subject
        random3 = Math.floor(Math.random() * voice.length);
        random4 = Math.floor(Math.random() * gender.length);
        random5 = Math.floor(Math.random() * numberof.length);
        random6 = Math.floor(Math.random() * verbAnswerType.length);
        if(rando == 2&&random == 5){document.getElementById("word").innerHTML = "Vocab Word: " + ferre}
        else {document.getElementById("word").innerHTML = "Vocab Word: "+_2PP_verbs[rando][random]}; //choose random word 
        if(random3 == 0){document.getElementById("form").innerHTML = "Answer Type: " + verbAnswerType[random6] +' '+ voice[random3] +' '+ tenses[rando1][random1] +' '+ subject[random2] +' '+ numberof[random5];}
        else if(random3 == 1&&rando1 == 1){document.getElementById("form").innerHTML = "Answer Type: " + verbAnswerType[random6] +' ' + voice[random3] +' '+ tenses[rando1][random1] +' '+ subject[random2] +' '+ numberof[random5] +' '+ gender[random4]} else
        {document.getElementById("form").innerHTML = "Answer Type: " + verbAnswerType[random6] +' ' + voice[random3] +' '+ tenses[rando1][random1] +' '+ subject[random2] +' '+ numberof[random5];}
       }
    if(wordType == 1){
        document.getElementById("type").innerHTML = "Type of Vocab Word: Nouns";
        rando = Math.floor(Math.random() * 5);
        random = Math.floor(Math.random() * nouns[rando].length);
        random1 = Math.floor(Math.random() * nounAnswerType.length);
        random2 = Math.floor(Math.random() * numberof.length);
        document.getElementById("word").innerHTML = "Vocab Word: "+nouns[rando][random];
        if(random1 == 5){document.getElementById("form").innerHTML = "Answer Type: "+nounAnswerType[random1]} else
        {document.getElementById("form").innerHTML = "Answer Type: "+nounAnswerType[random1]+' '+numberof[random2];}
        }
    if(wordType == 2){
        document.getElementById("type").innerHTML = "Type of Vocab Word: Adjective";
        rando = Math.floor(Math.random() * 2);
        random = Math.floor(Math.random() * adjectives[rando].length);
        random1 = Math.floor(Math.random() * gender.length);
        random2 = Math.floor(Math.random() * nounAnswerType.length);
        random3 = Math.floor(Math.random() * numberof.length);
        document.getElementById("word").innerHTML = "Vocab Word: "+adjectives[rando][random];
        if(random2 == 5){document.getElementById("form").innerHTML = "Answer Type: "+nounAnswerType[random2]} else
        {document.getElementById("form").innerHTML = "Answer Type: "+nounAnswerType[random2]+' '+gender[random1]+' '+numberof[random3];}
       }
    if(wordType == 3){
        document.getElementById("type").innerHTML = "Type of Vocab Word: Prepositions";
        random = Math.floor(Math.random() * prepositions.length);
        document.getElementById("word").innerHTML = "Vocab Word: "+prepositions[random];
        document.getElementById("form").innerHTML = "Answer Type: Meaning";
    }
    if(wordType == 4){
        document.getElementById("type").innerHTML = "Type of Vocab Word: Adverbs and Conjunctions";
        random = Math.floor(Math.random() * a_c.length);
        document.getElementById("word").innerHTML = "Vocab Word: "+a_c[random];
        document.getElementById("form").innerHTML = "Answer Type: Meaning";
    }
}

function findCorrectAnswer() {
    var word = document.getElementById("word").innerHTML;
    if(wordType == 0)
    {
        if(random6 == 0){
        if(random3 == 0){
            if(rando1 == 1){
                correctAnswer = _3PP_verbs[rando][random].replace("i ", verb_endings[rando1][random1][random3][random2]);} else
              {
            if(rando == 0){
                if(random1 == 0&&random2 == 0&&random5 == 0){correctAnswer = _2PP_verbs[rando][random].replace("are ", verb_endings[rando1][random1][random3][random5][random2])} else
                {correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}}      
            if(rando == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}
            if(rando == 2){
                if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])} else
                if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("ere ", _1a5e[random3][random5][random2])} else 
                if(random2 == 0&&random5 == 0){correctAnswer = _2PP_verbs[rando][random].replace("ere ", verb_endings[rando1][random1][random3][random5][random2])} else
                if(random2 == 2&&random5 == 1){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "u" + verb_endings[rando1][random1][random3][random5][random2])} else
                {correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + verb_endings[rando1][random1][random3][random5][random2])}
            }

            if(rando == 3){
                if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "ie" + verb_endings[rando1][random1][random3][random5][random2])} else
                if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + _1a5e[random3][random5][random2])} else 
                if(random2 == 0){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + verb_endings[rando1][random1][random3][random5][random2])} else
                if(random2 == 2){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "iu" + verb_endings[rando1][random1][random3][random5][random2])} else
                {correctAnswer = _2PP_verbs[rando][random].replace("ere ", verb_endings[rando1][random1][random3][random5][random2])}
            }
             if(rando == 4){
                 if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", "e" + verb_endings[rando1][random1][random3][random5][random2])} else
                 if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("re ", _1a5e[random3][random5][random2])} else 
                 if(random2 == 2){correctAnswer = _2PP_verbs[rando][random].replace("re ", "u" + verb_endings[rando1][random1][random3][random5][random2])} else 
                 {correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}}}
    } else
        if(random3 == 1){
            if(rando1 == 1){
                var ppp = _4PP_verbs[rando][random].replace("us ", pppNumberOf[random4][random5]);
                correctAnswer = ppp + ' ' + verb_endings[rando1][random1][random3][random2];
                if(rando == 4&&random == 2){{document.getElementById("message").innerHTML = "Venire has no 4PP form. Skip question"}}
            } else
              {
                if(rando == 0){
                    if(random1 == 0&&random2 == 0&&random5 == 0){correctAnswer = _2PP_verbs[rando][random].replace("are ", verb_endings[rando1][random1][random3][random5][random2])} else
                {correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}
            }
                if(rando == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}
                if(rando == 2){
                    if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])} else
                    if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + _1a5e[random3][random5][random2])} else
                    if(random2 == 1&&random5 == 0){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])} else 
                    if(random2 == 2&&random5 == 1){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "iu" + verb_endings[rando1][random1][random3][random5][random2])} else 
                    {correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + verb_endings[rando1][random1][random3][random5][random2])}  
                }
                if(rando == 3){
                    if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "ie" + verb_endings[rando1][random1][random3][random5][random2])} else
                    if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + _1a5e[random3][random5][random2])} else
                    if(random2 == 1&&random5 == 0){correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])} else 
                    if(random2 == 2&&random5 == 1){correctAnswer = _2PP_verbs[rando][random].replace("ere ", "iu" + verb_endings[rando1][random1][random3][random5][random2])} else 
                    {correctAnswer = _2PP_verbs[rando][random].replace("ere ", "i" + verb_endings[rando1][random1][random3][random5][random2])}
                }
                if(rando == 4){
                    if(random1 == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", "e" + verb_endings[rando1][random1][random3][random5][random2])} else
                    if(random1 == 2){correctAnswer = _2PP_verbs[rando][random].replace("re ", _1a5e[random3][random5][random2])} else
                    if(random2 == 2&&random5 == 1){correctAnswer = _2PP_verbs[rando][random].replace("re ", "u" + verb_endings[rando1][random1][random3][random5][random2])} else 
                    {correctAnswer = _2PP_verbs[rando][random].replace("re ", verb_endings[rando1][random1][random3][random5][random2])}
                }  
              }
}
    } else if(random6 == 1){
        correctAnswer = pronouns[random5][random2] + ' ' + verbMeanings[rando][random];
        document.getElementById("message").innerHTML = "Unfinished. Skip question."

    }


}
    if(wordType == 1){
        var nounStem = nouns[rando][random].split(", ").pop();
        var lol = nouns[rando][random].split(", ").shift();
        if(rando == 0)
        {correctAnswer = nounStem.replace("ae ", nounEndings[rando][random2][random1]);
        if(random1 == 5){correctAnswer = nounMeanings[rando][random];}}
        if(rando == 1||rando == 2)
        {
            if(rando == 1&&random1 == 0&&random2 == 0&&random == 4){correctAnswer = lol;} else 
            if(rando == 1&&random1 == 0&&random2 == 0&&random == 5){correctAnswer = lol;} else {
            correctAnswer = nounStem.replace("i ", nounEndings[rando][random2][random1]);}
        if(random1 == 5){correctAnswer = nounMeanings[rando][random];}}
        if(rando == 3||rando == 4)
        {
            if(rando == 3&&random1 == 0&&random2 == 0){correctAnswer = lol} else 
            if(rando == 4&&random1 == 1||random1 == 0&&random2 == 0){correctAnswer = lol} else
            {correctAnswer = nounStem.replace("is ", nounEndings[rando][random2][random1]);}
            if(random1 == 5){correctAnswer = nounMeanings[rando][random];}}
    }
    if(wordType == 2){
        var adjStem = adjectives[rando][random].split(", ").pop();
        if(rando == 0){correctAnswer = adjStem.replace("um", adjEndings[0][random1][random3][random2])} else
        if(rando == 1){correctAnswer = adjStem.replace("e ", adjEndings[1][random1][random3][random2])}
        
        if(random2 == 5){correctAnswer = adjectiveMeanings[rando][random]}


    }
    if(wordType == 3){if(word == "Vocab Word: "+prepositions[random]){correctAnswer = prepositionsAnswers[random]}} 
    if(wordType == 4){if(word == "Vocab Word: "+a_c[random]){correctAnswer = a_c_Answers[random]}}
}

document.onkeydown = enterAnswer;
function enterAnswer(e) {
    e = e || window.event;

    if (e.keyCode == '13'){
    if(answer.value == correctAnswer){
        alert("Correct!");
        location.reload();
    } else {alert("No. Try again.")}}
}

function submitAnswer() {
    if(answer.value == correctAnswer){
        alert("Correct!")
        location.reload();
    } else {alert("No. Try again.")}
}

function giveAnswer() {
    alert(correctAnswer);
    location.reload()
}