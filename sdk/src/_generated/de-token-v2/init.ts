import * as deCenter from "./de-center/structs";
import * as deToken from "./de-token/structs";
import * as events from "./events/structs";
import * as float_ from "./float/structs";
import {StructClassLoader} from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(deCenter.AdminCap);
loader.register(deCenter.LockedConfig);
loader.register(deCenter.DeCenter);
loader.register(deToken.DE_TOKEN);
loader.register(deToken.UnlockRequest);
loader.register(deToken.DeToken);
loader.register(events.NewCenterEvent);
loader.register(events.LockEvent);
loader.register(events.RequestUnlocKEvent);
loader.register(events.CancelUnlocKEvent);
loader.register(events.ClaimEvent);
loader.register(events.BurnEvent);
loader.register(float_.Float);
 }
