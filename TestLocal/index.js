/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SyncExample from "./src/SyncExample";
import AsyncExample from "./src/AsyncExample";


AppRegistry.registerComponent(appName, () => SyncExample);
