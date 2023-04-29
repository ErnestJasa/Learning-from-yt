import React, {FC, useState, ChangeEvent} from 'react';

export enum HairColor{
    Blonde = "hair blonde, good for ya",
    Brown = "cool, cool",
    Pink = 'Okay okay',
}
interface Props{
    name: string;
    age: number;
    email: string;
    // getName: (name: string)=> string;
    hairColor: HairColor;
}



const Person: FC<Props> = (props) => {
    const [country, setCountry] = useState<string | null>('')

    const handleChange = (e:  ChangeEvent<HTMLInputElement>)=>{
        setCountry(e.target.value)
    }

    type NameType = "Pedro" | "Jack"        // apsibrezia variable tipas, kaip string, skaicius ar pns
    const nameForType: NameType = 'Jack';   // ir cia leidzia naudoti tik tas reiksmes paduotas tipui, auksciau

    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
            <input onChange={handleChange} placeholder='Write down contry...' type="text"/>
            <div>
                {country}
            </div>
            <div>
                {props.hairColor}
            </div>
        </div>
    );
};

export default Person;