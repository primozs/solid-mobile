import type { JSX } from '@ionic/core/components';

import { /*@__PURE__*/ createSolidComponent } from './component-lib';

import { defineCustomElement as defineIonAccordion } from '@ionic/core/components/ion-accordion.js';
import { defineCustomElement as defineIonAccordionGroup } from '@ionic/core/components/ion-accordion-group.js';
import { defineCustomElement as defineIonAvatar } from '@ionic/core/components/ion-avatar.js';
import { defineCustomElement as defineIonBackdrop } from '@ionic/core/components/ion-backdrop.js';
import { defineCustomElement as defineIonBadge } from '@ionic/core/components/ion-badge.js';
import { defineCustomElement as defineIonBreadcrumbs } from '@ionic/core/components/ion-breadcrumbs.js';
import { defineCustomElement as defineIonButtons } from '@ionic/core/components/ion-buttons.js';
import { defineCustomElement as defineIonCardContent } from '@ionic/core/components/ion-card-content.js';
import { defineCustomElement as defineIonCardHeader } from '@ionic/core/components/ion-card-header.js';
import { defineCustomElement as defineIonCardSubtitle } from '@ionic/core/components/ion-card-subtitle.js';
import { defineCustomElement as defineIonCardTitle } from '@ionic/core/components/ion-card-title.js';
import { defineCustomElement as defineIonCheckbox } from '@ionic/core/components/ion-checkbox.js';
import { defineCustomElement as defineIonChip } from '@ionic/core/components/ion-chip.js';
import { defineCustomElement as defineIonCol } from '@ionic/core/components/ion-col.js';
import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content.js';
import { defineCustomElement as defineIonDatetime } from '@ionic/core/components/ion-datetime.js';
import { defineCustomElement as defineIonDatetimeButton } from '@ionic/core/components/ion-datetime-button.js';
import { defineCustomElement as defineIonFab } from '@ionic/core/components/ion-fab.js';
import { defineCustomElement as defineIonFabList } from '@ionic/core/components/ion-fab-list.js';
import { defineCustomElement as defineIonFooter } from '@ionic/core/components/ion-footer.js';
import { defineCustomElement as defineIonGrid } from '@ionic/core/components/ion-grid.js';
import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header.js';
import { defineCustomElement as defineIonImg } from '@ionic/core/components/ion-img.js';
import { defineCustomElement as defineIonInfiniteScroll } from '@ionic/core/components/ion-infinite-scroll.js';
import { defineCustomElement as defineIonInfiniteScrollContent } from '@ionic/core/components/ion-infinite-scroll-content.js';
import { defineCustomElement as defineIonInput } from '@ionic/core/components/ion-input.js';
import { defineCustomElement as defineIonItemDivider } from '@ionic/core/components/ion-item-divider.js';
import { defineCustomElement as defineIonItemGroup } from '@ionic/core/components/ion-item-group.js';
import { defineCustomElement as defineIonItemOptions } from '@ionic/core/components/ion-item-options.js';
import { defineCustomElement as defineIonItemSliding } from '@ionic/core/components/ion-item-sliding.js';
import { defineCustomElement as defineIonLabel } from '@ionic/core/components/ion-label.js';
import { defineCustomElement as defineIonList } from '@ionic/core/components/ion-list.js';
import { defineCustomElement as defineIonListHeader } from '@ionic/core/components/ion-list-header.js';
import { defineCustomElement as defineIonMenu } from '@ionic/core/components/ion-menu.js';
import { defineCustomElement as defineIonMenuButton } from '@ionic/core/components/ion-menu-button.js';
import { defineCustomElement as defineIonMenuToggle } from '@ionic/core/components/ion-menu-toggle.js';
import { defineCustomElement as defineIonNav } from '@ionic/core/components/ion-nav.js';
import { defineCustomElement as defineIonNavLink } from '@ionic/core/components/ion-nav-link.js';
import { defineCustomElement as defineIonNote } from '@ionic/core/components/ion-note.js';
import { defineCustomElement as defineIonProgressBar } from '@ionic/core/components/ion-progress-bar.js';
import { defineCustomElement as defineIonRadio } from '@ionic/core/components/ion-radio.js';
import { defineCustomElement as defineIonRadioGroup } from '@ionic/core/components/ion-radio-group.js';
import { defineCustomElement as defineIonRange } from '@ionic/core/components/ion-range.js';
import { defineCustomElement as defineIonRefresher } from '@ionic/core/components/ion-refresher.js';
import { defineCustomElement as defineIonRefresherContent } from '@ionic/core/components/ion-refresher-content.js';
import { defineCustomElement as defineIonReorder } from '@ionic/core/components/ion-reorder.js';
import { defineCustomElement as defineIonReorderGroup } from '@ionic/core/components/ion-reorder-group.js';
import { defineCustomElement as defineIonRippleEffect } from '@ionic/core/components/ion-ripple-effect.js';
import { defineCustomElement as defineIonRow } from '@ionic/core/components/ion-row.js';
import { defineCustomElement as defineIonSearchbar } from '@ionic/core/components/ion-searchbar.js';
import { defineCustomElement as defineIonSegment } from '@ionic/core/components/ion-segment.js';
import { defineCustomElement as defineIonSegmentButton } from '@ionic/core/components/ion-segment-button.js';
import { defineCustomElement as defineIonSelect } from '@ionic/core/components/ion-select.js';
import { defineCustomElement as defineIonSelectOption } from '@ionic/core/components/ion-select-option.js';
import { defineCustomElement as defineIonSkeletonText } from '@ionic/core/components/ion-skeleton-text.js';
import { defineCustomElement as defineIonSlide } from '@ionic/core/components/ion-slide.js';
import { defineCustomElement as defineIonSlides } from '@ionic/core/components/ion-slides.js';
import { defineCustomElement as defineIonSpinner } from '@ionic/core/components/ion-spinner.js';
import { defineCustomElement as defineIonSplitPane } from '@ionic/core/components/ion-split-pane.js';
import { defineCustomElement as defineIonTab } from '@ionic/core/components/ion-tab.js';
import { defineCustomElement as defineIonText } from '@ionic/core/components/ion-text.js';
import { defineCustomElement as defineIonTextarea } from '@ionic/core/components/ion-textarea.js';
import { defineCustomElement as defineIonThumbnail } from '@ionic/core/components/ion-thumbnail.js';
import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title.js';
import { defineCustomElement as defineIonToggle } from '@ionic/core/components/ion-toggle.js';
import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar.js';
import { defineCustomElement as defineIonVirtualScroll } from '@ionic/core/components/ion-virtual-scroll.js';

export const IonAccordion = /*@__PURE__*/ createSolidComponent<
  JSX.IonAccordion,
  HTMLIonAccordionElement
>('ion-accordion', defineIonAccordion);
export const IonAccordionGroup = /*@__PURE__*/ createSolidComponent<
  JSX.IonAccordionGroup,
  HTMLIonAccordionGroupElement
>('ion-accordion-group', defineIonAccordionGroup);
export const IonAvatar = /*@__PURE__*/ createSolidComponent<
  JSX.IonAvatar,
  HTMLIonAvatarElement
>('ion-avatar', defineIonAvatar);
export const IonBackdrop = /*@__PURE__*/ createSolidComponent<
  JSX.IonBackdrop,
  HTMLIonBackdropElement
>('ion-backdrop', defineIonBackdrop);
export const IonBadge = /*@__PURE__*/ createSolidComponent<
  JSX.IonBadge,
  HTMLIonBadgeElement
>('ion-badge', defineIonBadge);
export const IonBreadcrumbs = /*@__PURE__*/ createSolidComponent<
  JSX.IonBreadcrumbs,
  HTMLIonBreadcrumbsElement
>('ion-breadcrumbs', defineIonBreadcrumbs);
export const IonButtons = /*@__PURE__*/ createSolidComponent<
  JSX.IonButtons,
  HTMLIonButtonsElement
>('ion-buttons', defineIonButtons);
export const IonCardContent = /*@__PURE__*/ createSolidComponent<
  JSX.IonCardContent,
  HTMLIonCardContentElement
>('ion-card-content', defineIonCardContent);
export const IonCardHeader = /*@__PURE__*/ createSolidComponent<
  JSX.IonCardHeader,
  HTMLIonCardHeaderElement
>('ion-card-header', defineIonCardHeader);
export const IonCardSubtitle = /*@__PURE__*/ createSolidComponent<
  JSX.IonCardSubtitle,
  HTMLIonCardSubtitleElement
>('ion-card-subtitle', defineIonCardSubtitle);
export const IonCardTitle = /*@__PURE__*/ createSolidComponent<
  JSX.IonCardTitle,
  HTMLIonCardTitleElement
>('ion-card-title', defineIonCardTitle);
export const IonCheckbox = /*@__PURE__*/ createSolidComponent<
  JSX.IonCheckbox,
  HTMLIonCheckboxElement
>('ion-checkbox', defineIonCheckbox);
export const IonChip = /*@__PURE__*/ createSolidComponent<
  JSX.IonChip,
  HTMLIonChipElement
>('ion-chip', defineIonChip);
export const IonCol = /*@__PURE__*/ createSolidComponent<
  JSX.IonCol,
  HTMLIonColElement
>('ion-col', defineIonCol);
export const IonContent = /*@__PURE__*/ createSolidComponent<
  JSX.IonContent,
  HTMLIonContentElement
>('ion-content', defineIonContent);
export const IonDatetime = /*@__PURE__*/ createSolidComponent<
  JSX.IonDatetime,
  HTMLIonDatetimeElement
>('ion-datetime', defineIonDatetime);
export const IonDatetimeButton = /*@__PURE__*/ createSolidComponent<
  JSX.IonDatetimeButton,
  HTMLIonDatetimeButtonElement
>('ion-datetime-button', defineIonDatetimeButton);
export const IonFab = /*@__PURE__*/ createSolidComponent<
  JSX.IonFab,
  HTMLIonFabElement
>('ion-fab', defineIonFab);
export const IonFabList = /*@__PURE__*/ createSolidComponent<
  JSX.IonFabList,
  HTMLIonFabListElement
>('ion-fab-list', defineIonFabList);
export const IonFooter = /*@__PURE__*/ createSolidComponent<
  JSX.IonFooter,
  HTMLIonFooterElement
>('ion-footer', defineIonFooter);
export const IonGrid = /*@__PURE__*/ createSolidComponent<
  JSX.IonGrid,
  HTMLIonGridElement
>('ion-grid', defineIonGrid);
export const IonHeader = /*@__PURE__*/ createSolidComponent<
  JSX.IonHeader,
  HTMLIonHeaderElement
>('ion-header', defineIonHeader);
export const IonImg = /*@__PURE__*/ createSolidComponent<
  JSX.IonImg,
  HTMLIonImgElement
>('ion-img', defineIonImg);
export const IonInfiniteScroll = /*@__PURE__*/ createSolidComponent<
  JSX.IonInfiniteScroll,
  HTMLIonInfiniteScrollElement
>('ion-infinite-scroll', defineIonInfiniteScroll);
export const IonInfiniteScrollContent = /*@__PURE__*/ createSolidComponent<
  JSX.IonInfiniteScrollContent,
  HTMLIonInfiniteScrollContentElement
>('ion-infinite-scroll-content', defineIonInfiniteScrollContent);
export const IonInput = /*@__PURE__*/ createSolidComponent<
  JSX.IonInput,
  HTMLIonInputElement
>('ion-input', defineIonInput);
export const IonItemDivider = /*@__PURE__*/ createSolidComponent<
  JSX.IonItemDivider,
  HTMLIonItemDividerElement
>('ion-item-divider', defineIonItemDivider);
export const IonItemGroup = /*@__PURE__*/ createSolidComponent<
  JSX.IonItemGroup,
  HTMLIonItemGroupElement
>('ion-item-group', defineIonItemGroup);
export const IonItemOptions = /*@__PURE__*/ createSolidComponent<
  JSX.IonItemOptions,
  HTMLIonItemOptionsElement
>('ion-item-options', defineIonItemOptions);
export const IonItemSliding = /*@__PURE__*/ createSolidComponent<
  JSX.IonItemSliding,
  HTMLIonItemSlidingElement
>('ion-item-sliding', defineIonItemSliding);
export const IonLabel = /*@__PURE__*/ createSolidComponent<
  JSX.IonLabel,
  HTMLIonLabelElement
>('ion-label', defineIonLabel);
export const IonList = /*@__PURE__*/ createSolidComponent<
  JSX.IonList,
  HTMLIonListElement
>('ion-list', defineIonList);
export const IonListHeader = /*@__PURE__*/ createSolidComponent<
  JSX.IonListHeader,
  HTMLIonListHeaderElement
>('ion-list-header', defineIonListHeader);
export const IonMenu = /*@__PURE__*/ createSolidComponent<
  JSX.IonMenu,
  HTMLIonMenuElement
>('ion-menu', defineIonMenu);
export const IonMenuButton = /*@__PURE__*/ createSolidComponent<
  JSX.IonMenuButton,
  HTMLIonMenuButtonElement
>('ion-menu-button', defineIonMenuButton);
export const IonMenuToggle = /*@__PURE__*/ createSolidComponent<
  JSX.IonMenuToggle,
  HTMLIonMenuToggleElement
>('ion-menu-toggle', defineIonMenuToggle);
export const IonNav = /*@__PURE__*/ createSolidComponent<
  JSX.IonNav,
  HTMLIonNavElement
>('ion-nav', defineIonNav);
export const IonNavLink = /*@__PURE__*/ createSolidComponent<
  JSX.IonNavLink,
  HTMLIonNavLinkElement
>('ion-nav-link', defineIonNavLink);
export const IonNote = /*@__PURE__*/ createSolidComponent<
  JSX.IonNote,
  HTMLIonNoteElement
>('ion-note', defineIonNote);
export const IonProgressBar = /*@__PURE__*/ createSolidComponent<
  JSX.IonProgressBar,
  HTMLIonProgressBarElement
>('ion-progress-bar', defineIonProgressBar);
export const IonRadio = /*@__PURE__*/ createSolidComponent<
  JSX.IonRadio,
  HTMLIonRadioElement
>('ion-radio', defineIonRadio);
export const IonRadioGroup = /*@__PURE__*/ createSolidComponent<
  JSX.IonRadioGroup,
  HTMLIonRadioGroupElement
>('ion-radio-group', defineIonRadioGroup);
export const IonRange = /*@__PURE__*/ createSolidComponent<
  JSX.IonRange,
  HTMLIonRangeElement
>('ion-range', defineIonRange);
export const IonRefresher = /*@__PURE__*/ createSolidComponent<
  JSX.IonRefresher,
  HTMLIonRefresherElement
>('ion-refresher', defineIonRefresher);
export const IonRefresherContent = /*@__PURE__*/ createSolidComponent<
  JSX.IonRefresherContent,
  HTMLIonRefresherContentElement
>('ion-refresher-content', defineIonRefresherContent);
export const IonReorder = /*@__PURE__*/ createSolidComponent<
  JSX.IonReorder,
  HTMLIonReorderElement
>('ion-reorder', defineIonReorder);
export const IonReorderGroup = /*@__PURE__*/ createSolidComponent<
  JSX.IonReorderGroup,
  HTMLIonReorderGroupElement
>('ion-reorder-group', defineIonReorderGroup);
export const IonRippleEffect = /*@__PURE__*/ createSolidComponent<
  JSX.IonRippleEffect,
  HTMLIonRippleEffectElement
>('ion-ripple-effect', defineIonRippleEffect);
export const IonRow = /*@__PURE__*/ createSolidComponent<
  JSX.IonRow,
  HTMLIonRowElement
>('ion-row', defineIonRow);
export const IonSearchbar = /*@__PURE__*/ createSolidComponent<
  JSX.IonSearchbar,
  HTMLIonSearchbarElement
>('ion-searchbar', defineIonSearchbar);
export const IonSegment = /*@__PURE__*/ createSolidComponent<
  JSX.IonSegment,
  HTMLIonSegmentElement
>('ion-segment', defineIonSegment);
export const IonSegmentButton = /*@__PURE__*/ createSolidComponent<
  JSX.IonSegmentButton,
  HTMLIonSegmentButtonElement
>('ion-segment-button', defineIonSegmentButton);
export const IonSelect = /*@__PURE__*/ createSolidComponent<
  JSX.IonSelect,
  HTMLIonSelectElement
>('ion-select', defineIonSelect);
export const IonSelectOption = /*@__PURE__*/ createSolidComponent<
  JSX.IonSelectOption,
  HTMLIonSelectOptionElement
>('ion-select-option', defineIonSelectOption);
export const IonSkeletonText = /*@__PURE__*/ createSolidComponent<
  JSX.IonSkeletonText,
  HTMLIonSkeletonTextElement
>('ion-skeleton-text', defineIonSkeletonText);
export const IonSlide = /*@__PURE__*/ createSolidComponent<
  JSX.IonSlide,
  HTMLIonSlideElement
>('ion-slide', defineIonSlide);
export const IonSlides = /*@__PURE__*/ createSolidComponent<
  JSX.IonSlides,
  HTMLIonSlidesElement
>('ion-slides', defineIonSlides);
export const IonSpinner = /*@__PURE__*/ createSolidComponent<
  JSX.IonSpinner,
  HTMLIonSpinnerElement
>('ion-spinner', defineIonSpinner);
export const IonSplitPane = /*@__PURE__*/ createSolidComponent<
  JSX.IonSplitPane,
  HTMLIonSplitPaneElement
>('ion-split-pane', defineIonSplitPane);
export const IonTab = /*@__PURE__*/ createSolidComponent<
  JSX.IonTab,
  HTMLIonTabElement
>('ion-tab', defineIonTab);
export const IonText = /*@__PURE__*/ createSolidComponent<
  JSX.IonText,
  HTMLIonTextElement
>('ion-text', defineIonText);
export const IonTextarea = /*@__PURE__*/ createSolidComponent<
  JSX.IonTextarea,
  HTMLIonTextareaElement
>('ion-textarea', defineIonTextarea);
export const IonThumbnail = /*@__PURE__*/ createSolidComponent<
  JSX.IonThumbnail,
  HTMLIonThumbnailElement
>('ion-thumbnail', defineIonThumbnail);
export const IonTitle = /*@__PURE__*/ createSolidComponent<
  JSX.IonTitle,
  HTMLIonTitleElement
>('ion-title', defineIonTitle);
export const IonToggle = /*@__PURE__*/ createSolidComponent<
  JSX.IonToggle,
  HTMLIonToggleElement
>('ion-toggle', defineIonToggle);
export const IonToolbar = /*@__PURE__*/ createSolidComponent<
  JSX.IonToolbar,
  HTMLIonToolbarElement
>('ion-toolbar', defineIonToolbar);
export const IonVirtualScroll = /*@__PURE__*/ createSolidComponent<
  JSX.IonVirtualScroll,
  HTMLIonVirtualScrollElement
>('ion-virtual-scroll', defineIonVirtualScroll);
