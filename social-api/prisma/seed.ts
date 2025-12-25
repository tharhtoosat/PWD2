import { prisma } from "../libs/prisma";
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      username: "alice",
      bio: faker.person.bio(),
      password: await bcrypt.hash("password", 10),
    },
  });
  await prisma.user.create({
    data: {
      name: "Bob",
      username: "bob",
      bio: faker.person.bio(),
      password: await bcrypt.hash("password", 10),
    },
  });
  for (let i = 0; i < 20; i++) {
    await prisma.post.create({
      data: {
        content: faker.lorem.paragraph(),
        userId: faker.number.int({ min: 1, max: 2 }),
      },
    });
  }
  for (let i = 0; i < 40; i++) {
    await prisma.comment.create({
      data: {
        content: faker.lorem.sentence(),
        postId: faker.number.int({ min: 1, max: 20 }),
        userId: faker.number.int({ min: 1, max: 2 }),
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
