import prisma from '../database/libs/prisma';

async function main() {
  const usuarios = await prisma.usuarios.findMany();
  console.log(usuarios);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
