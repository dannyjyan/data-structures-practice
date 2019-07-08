class Node {
  constructor(){
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor(){
   this.root = new Node();
  }
  insertRecur(word, root=this.root){
    if (word.length !== 0){
      if (!(word[0] in root.children)){
        root.children[word[0]] = new Node();
      } 
      this.insertRecur(word.slice(1), root.children[word[0]]);
    } else {
      root.isTerminal = true;
    }
  }
  insertIter(word){
    let cur = this.root;
    for (let i = 0; i < word.length; i++){
      if (!(word[i] in cur.children)){
        cur.children[word[i]] = new Node();
      }
      cur = cur.children[word[i]];
    }
    cur.isTerminal = true;
  }
  searchRecur(word, root=this.root){
    if(word.length !== 0){
      if(!(word[0] in root.children)) {
        return false;
      }
      return this.searchRecur(word.slice(1), root.children[word[0]])
    } else {
      debugger;
      return root.isTerminal;
    }
  }
  searchIter(word){
    let cur = this.root;
    for (let i = 0; i < word.length; i++){
      if (!(word[i] in cur.children)){
        return false;
      }
      cur = cur.children[word[i]];
    }
    return cur.isTerminal;
  }
  wordsWithPrefix(prefix, root=this.root){
    if (prefix.length === 0){
      let allWords = [];
      if (root.isTerminal) allWords.push('');
      for(let letter in root.children){
        let child = root.children[letter];
        let suffixes = this.wordsWithPrefix(prefix, child);
        let words = suffixes.map(suffix => letter + suffix)
        allWords.push(...words); 
      }
      return allWords
    } else {
        let letter = prefix[0];
        let child = root.children[letter];
        if (child === undefined){
          return [] // no prefix in the tree
        }
        let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
        let words = suffixes.map(suffix => letter + suffix); // still need the beginning part of the word
        return words;
    }
  }
}



module.exports = {
    Node,
    Trie
};