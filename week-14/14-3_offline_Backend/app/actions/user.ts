"use server";

import prisma from "@/db";
export async function signup(username: string, password: string) {
  try {
    await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}

// this is a server action one it can used from frontend via http request & can be used directly in backend multiple times
