// Reference: https://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string

export default function getNthWord(sentence, nthIndex=0) {
    let indexOfNthWord = sentence.split(" ", nthIndex).join(" ").length;
    if(indexOfNthWord === sentence.length) {
        return sentence;
    } else {
        return sentence.substring(0, indexOfNthWord)+"...";
    }
    
}