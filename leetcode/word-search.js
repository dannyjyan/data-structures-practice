/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word){
  for (let x = 0; x < board.length; x++){
    for (let y = 0; y < board[0].length; y++){
      result = dfs(board, x,y,word);
      if (result === true)
        return true;
    }
  }
    return false;
};

var dfs = function(board, x, y, word){
  if (word.length === 0) return true;
  if (y >= board[0].length || y < 0 || x >= board.length || x < 0 || word[0] !== board[x][y]){ // out of bounds
    return false;
  }
  let temp = board[x][y];
  board[x][y] = '#';
  let next = word.slice(1);
  result = dfs(board, x+1, y, next) || dfs(board, x, y+1, next) || dfs(board, x-1, y, next) || dfs(board, x, y-1, next);
  board[x][y] = temp;
  return result;
};