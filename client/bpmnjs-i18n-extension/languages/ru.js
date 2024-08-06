/**
 * Copyright 2024 Miragon GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import bpmnJs from './ru/bpmn-js';
import dmnJs from './ru/dmn-js';
import propertiesPanel from './ru/properties-panel';
import other from './ru/other';

/**
 * Joins and exports the translated strings.
 */
export default {
    ...bpmnJs,
    ...dmnJs,
    ...propertiesPanel,
    ...other
};
