/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { flow } from 'lodash';
import {
  addProps,
  withDesign,
} from '@bodiless/fclasses';
import {
  List,
} from '@bodiless/components';
import {
  asHorizontalMenu,
  asHorizontalSubMenu,
  asEditableMainMenu,
  asEditableMainSubMenu,
  withSubmenu,
} from '@bodiless/organisms';
import { asExceptMobile } from '../Elements.token';
import {
  withEditorSimple,
} from '../Editors';
import { asStyleMenu, asStyleTopMenu } from './token'


const MenuSubList = flow(
  asEditableMainSubMenu(withEditorSimple),
  asHorizontalSubMenu,
  asStyleMenu,
)(List);

const MenuList = flow(
  asEditableMainMenu(withEditorSimple),
  asHorizontalMenu,
  withDesign({
    Wrapper: addProps({ overflowedIndicator: <span className="text-white">...</span> }),
  }),
  asStyleMenu,
  asStyleTopMenu,
  asExceptMobile,
)(List);

export default withSubmenu(MenuSubList)(MenuList);
