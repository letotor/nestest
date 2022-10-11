import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: {
      email: 'john.doe@gmail.com',
    },
    update: {},
    create: {
      name: 'Victor DG',
      email: 'v.degermain@gmail.com',
      password:
        '$argon2i$v=19$m=16,t=2,p=1$OTdzQmlzTFpoQlBsQnh1Zw$HCjktuRetwY5gjiszk65KQ',
    },
  });

  console.log('Society created');

  await prisma.society.upsert({
    where: {
      email: 'test@gmail.com',
    },
    update: {},
    create: {
      name: 'Un chou dans les etoiles',
      email: 'test@gmail.com',
      siret: 1234567899,
      adressStreet: 'plaisance',
      adressNum: 1,
      adressCity: 'lavau',
      adressZip: 44000,
      adressCountry: 'France',
      phone: '0606060606',
      website: 'www.test.com',

      details: 'Un chou dans les etoiles',
    },
  });

  console.log('User created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
