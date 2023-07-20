const user: string[] = ['hc']

const tupleUser: [string, number, boolean] = ["some text", 132, false];  // now the assaigned types can only go in the specified order.

const newTupleUser = "fgds";
tupleUser.push(newTupleUser); //  But can still push values into array however you want

type user = [number, string]    // this is only for arrays (tuples - typescript provided arrays)

const newUser:user = [123, "123"]

export {}