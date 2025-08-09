import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_fe831defb8bb984e6af60bde8234201adbc555b2378f64b130d32cd9eba1ac21 from "../de-token-v2/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_fe831defb8bb984e6af60bde8234201adbc555b2378f64b130d32cd9eba1ac21.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
