function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("dog walk");
      } else {
        reject("dog not walked");
      }
    }, 500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("kitchen cleaned");
      } else {
        reject("kitchen not cleaned");
      }
    }, 700);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTaken = false;
      if (trashTaken) {
        resolve("trash takeout");
      } else {
        reject("trash not taken out");
      }
    }, 300);
  });
}

// walkDog()
//   .then((value) => {
//     console.log(value); // if this one gets rejected other functions don't get executed
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("all chores done");
//   })
//   .catch((error) => console.error(error));

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    console.log("all done");
  } catch (error) {
    console.error(error);
  }
}
doChores();
