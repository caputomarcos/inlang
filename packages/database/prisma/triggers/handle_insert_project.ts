import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Each time a new project is created, a new language 
 * for the primeary language is also created
 */
export async function handle_insert_project() {
  await prisma.$queryRawUnsafe(`
  CREATE OR REPLACE function public.handle_insert_project() 
    RETURNS TRIGGER AS $$
    BEGIN
        INSERT INTO public.language (iso_code, project_id)
        VALUES (new.default_iso_code, new.id);
        RETURN new;
    END;
    $$ LANGUAGE plpgsql SECURITY DEFINER;
  `);
  await prisma.$queryRawUnsafe(`
    DROP TRIGGER IF EXISTS on_project_created on public.project
  `);
  await prisma.$queryRawUnsafe(`
      CREATE trigger on_project_created
      AFTER INSERT ON public.project
      FOR EACH ROW EXECUTE PROCEDURE public.handle_insert_project();
    `);
  console.log("✅ applied trigger: handle_insert_project");
}
