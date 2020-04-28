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

import { flow } from 'lodash';
import {
  addClasses,
  removeClasses,
  withDesign,
} from '@bodiless/fclasses';
import { asMobileOnly } from '../Elements.token';

const asWhiteColoredLink = flow(
  removeClasses('bl-text-primary hover:bl-underline'),
  addClasses('text-white'),
);

// Shared Menu Styling
const withMenuBackground = addClasses('bg-teal-600');
const withTopMenuTextStyles = addClasses('p-3 text-teal-500 text-3xl');

// Desktop Menu
const withMenuHoverStyles = addClasses('hover:bg-teal-500');
const withMenuStyles = addClasses('hover:bg-teal-500 text-white text-left leading-loose text-sm px-4');
const withSubmenuStyles = addClasses('-ml-4');

// Burger/Mobile Menu
const withBurgerMenuHeader = addClasses('bg-white py-4');
const withBurgerMenuTextStyles = addClasses('text-white text-base');
const withBurgerDropdownBackground = addClasses('bg-teal-600');
const withLimitedHeightStyles = addClasses('overflow-y-hidden max-h-menu-row');

const withLinkStyles = withDesign({
  ActiveLink: flow(asWhiteColoredLink, withMenuBackground),
  Link: asWhiteColoredLink,
});

const asStyleMenu = withDesign({
  Title: withLinkStyles,
  Wrapper: flow(
    withMenuStyles,
  ),
  Item: flow(
    withMenuStyles,
    withMenuBackground,
    //withMenuHoverStyles,
    withSubmenuStyles,
  ),
});

const asStyleTopMenu = withDesign({
  Wrapper: flow(
    withMenuBackground,
    withLimitedHeightStyles,
  ),
});

const asBurgerMenuDefaultStyle = withDesign({
  Wrapper: flow(
    asMobileOnly,
    withMenuBackground,
    withTopMenuTextStyles,
  ),
  Slide: addClasses('bg-burger-menu'),
  Header: flow(
    withBurgerMenuHeader,
  ),
  Body: addClasses('p-3'),
});

const asOpenBurgerMenuDefaultStyle =  withDesign({
  TitleWrapper: withBurgerMenuTextStyles,
  Body: withDesign({
    Wrapper: addClasses('pl-1'),
  }),
});

const asTopBurgerMenuLinksStyles = flow(
  withBurgerMenuTextStyles,
  withBurgerDropdownBackground,
);

/* eslint-disable import/prefer-default-export */
export {
  asStyleMenu,
  asStyleTopMenu,
  asBurgerMenuDefaultStyle,
  asOpenBurgerMenuDefaultStyle,
  asTopBurgerMenuLinksStyles,
};