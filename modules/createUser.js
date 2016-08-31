const createUser = function(item) {
  const user = {
    id  : item.Id || undefined,
    name: item.Name || undefined,
    pass: item.Pass || undefined,
    mail: item.Email || undefined
  }
  user.gameData = {}
  if ('GameData' in item) {
    if ('Villages' in item.GameData) {
      user.gameData.villages = item.GameData.Villages
    } else {
      user.gameData.villages = []
    }
    if ('Friends' in item.GameData) {
      user.gameData.friends = item.GameData.Friends
    } else {
      user.gameData.friends = []
    }
  } else {
    user.gameData.villages = []
    user.gameData.friends = []
  }
  return user;
}

module.exports = createUser;
