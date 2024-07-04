import prisma from "@/db";

const ok = async () => {
  const body = await prisma.user.findFirst();
  if (!body) {
    throw new Error("No user found");
  }
  return {
    username: body.username,
    password: 2148,
  };
};

export default async function home() {
  const q1 = await ok();
  return (
    <div>
      {q1.username} <br />
      {q1.password}
    </div>
  );
}

// https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details
