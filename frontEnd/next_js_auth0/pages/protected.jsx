import React from 'react'
import { Heading } from "@chakra-ui/react";
// import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { useUser } from '@auth0/nextjs-auth0/client';
import axios from 'axios';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';


const Protected = () => {
 
  const { user } = useUser();

  
  console.log(user)
if(user.user_roles.includes('admin')){
  return <Heading>This is a proteced page </Heading>  
}else{
  return <Heading>Unauthorized</Heading>
}
}

// export const getServerSideProps = withPageAuthRequired({     // server side auth protection
//   // returnTo: '/hello',
//   getServerSideProps: async ctx=>{
//     const session = await getSession(ctx.req, ctx.res)
//     console.log(session);
    
//       return {
//         props: {},
//       };  
//   }
// });

// export const getServerSideProps = ({ req, res }) => {
//   const session = getSession(req, res);
//   console.log(session.user);
//   return {props: {}}
// };
// export default Protected;
export default withPageAuthRequired(Protected); // client side auth protection, need to use different import, from client folder