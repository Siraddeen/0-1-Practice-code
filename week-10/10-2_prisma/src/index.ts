import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// async function insertUser(
//   userName: string,
//   password: string,
//   firstName: string,
//   lastName: string
// ) {
//   const res = await prisma.user.create({
//     data: {
//       email: userName,
//       password,
//       firstName,
//       lastName,
//     },
//     select: {
//       id: true,
//       firstName: true,
//     },
//   });
//   console.log(res);
// }

// insertUser("no21nod@yo.com", "pass33", "kiarn", "sam");
// // // -----------------------------------------------------------------update------------------------
// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }

// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   const res = await prisma.user.update({
//     where: { email: username },
//     data: {
//       firstName,
//       lastName,
//     },
//   });
//   console.log(res);
// }
// updateUser("no21nod@yo.com", { firstName: "homeLANDer", lastName: "okenaaa" });

// //-------------------------------------get data-------------------------

async function getUser(userName: string) {
  const res = prisma.user.findFirst({
    where: {
      email: "no21nod@yo.com",
    },
  });
  console.log(res);
}

getUser("homeLANDer");
