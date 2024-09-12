//4-a) É uma função main. Porque é a função principal, que possuin outras funções asyncs dentro dela

import axios from 'axios';
;


const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'


async function create(
    title: string,
    content: string,
    date: number
    ): Promise<void>{ await axios.put(`${baseUrl}/news`,{
    title: title,
    content: content,
    date: date,
    });
}
    console.log(create(title:"New", content:"New Now", date:10032021));