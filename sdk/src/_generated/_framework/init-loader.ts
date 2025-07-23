import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_8d378268233c9cdc636b7820fd45de7ba4d9ad92835c2391d3b24d4d2332e790 from "../de-token-v2/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_8d378268233c9cdc636b7820fd45de7ba4d9ad92835c2391d3b24d4d2332e790.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
