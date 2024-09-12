//3-a) Não vai apresentar nenhum erro, mas também não irá converter a tipagem
//b)Para garantir que estamos retornando o que a função quer.

import axios from 'axios';

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

type User ={
    id: string,
    name: string,
    email: string;
}

const getSubscribers = async (): Promise<User[]>=>{
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res:any)=>{
      return{
          id: res.id,
          name: res.name,
          email: res.email
      };
      
  });
};

getSubscribers().then((res)=>{
  console.log(res);
})