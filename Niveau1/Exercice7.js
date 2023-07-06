
const array = ["chien", "chat", "éléphant", "souris", "hippopotame"];
const motLong = trouverMotLePlusLong(array);

function trouverMotLePlusLong(mots) {
    let motLong = "";
  
    for (let i = 0; i < mots.length; i++) {
      if (mots[i].length > motLong.length) {
        motLong = mots[i];
      }
    }
  
    return motLong;
  }

console.log("Le mot le plus long est :", motLong);