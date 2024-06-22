import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  email: string
) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstname,
      lastname,
      email,
    },
  });
  console.log(response);
}

//insertUser("on", "pas1", "fisdr", "sedsac", "edmai.com");

async function getTodosAndDetails(userId: number) {
  /* const response1 = await prisma.todo.findMany({
    where: {
      user_id: userId,
    },
  });
  console.log(response1);
  
  this will give values of id 1
         we are trying to generate  both todo & user detail together
  */
  /*
  const resd = await prisma.todo.create({
    data: {
      user_id: 1,
      title: "keane ie",
      description: "hane feij lkeare noew",
    },
  });


  created dummy data
  */

  const response1 = await prisma.todo.findMany({
    where: {
      user_id: userId,
    },
    select: {
      id: true,
      title: true,
      user: true,
      description: true,
    },
  });
  console.log(response1);
}

getTodosAndDetails(1);
