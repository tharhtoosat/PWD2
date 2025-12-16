import { prisma } from "../libs/prisma";

async function seed() {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({
    data: [
      { name: "Egg", done: false },
      { name: "Bread", done: true },
      { name: "Butter", done: false },
    ],
  });
}
seed();
