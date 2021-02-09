/**
 * Copyright © 2020 Johnson & Johnson
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

import {
  withMenuOptions,
  useNode,
  TMenuOption,
} from '@bodiless/core';

import type { LinkData } from './types';

const useMenuOptions = () => {
  const { node } = useNode<LinkData>();
  let empty = true;
  if (node.data && node.data.href) {
    empty = node.data.href === '#';
  }
  const menuOptions: TMenuOption[] = [
    {
      icon: 'open_in_new',
      label: 'Go',
      group: 'Link-group',
      groupMerge: 'merge',
      name: 'go',
      isDisabled: empty,
      handler: () => {
        if (!empty) {
          // @ts-ignore
          window.location = node.data.href;
        }
      },
      global: false,
      local: true,
    },
  ];
  return menuOptions;
};

const withGoToLinkButton = () => withMenuOptions({ useMenuOptions, name: 'go', peer: true });

export default withGoToLinkButton;
