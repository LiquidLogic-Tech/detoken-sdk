import * as package_source_1 from "../_dependencies/source/0x1/init";
import * as package_source_2 from "../_dependencies/source/0x2/init";
import * as package_source_2ff3ee6dd570f1d795d8eaac0d4c774e33d142b250e33f46b3063145c541a529 from "../de-token-v2/init";
import {StructClassLoader} from "./loader";

function registerClassesSource(loader: StructClassLoader) { package_source_1.registerClasses(loader);
package_source_2.registerClasses(loader);
package_source_2ff3ee6dd570f1d795d8eaac0d4c774e33d142b250e33f46b3063145c541a529.registerClasses(loader);
 }

export function registerClasses(loader: StructClassLoader) { registerClassesSource(loader); }
