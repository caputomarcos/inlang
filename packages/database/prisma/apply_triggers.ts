import { handle_insert_organization } from "./triggers/handle_insert_organization";
import { handle_insert_user } from "./triggers/handle_insert_user";
import { handle_insert_project } from "./triggers/handle_insert_project";

async function main() {
  await handle_insert_user();
  await handle_insert_organization();
  await handle_insert_project();
}

main().catch((e) => console.error(e));
