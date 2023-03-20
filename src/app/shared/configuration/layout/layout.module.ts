import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        header: {
          // lg: {
          //   slots: [
          //     'SiteContext',
          //     'SiteLinks'
          //   ],
          //   hidden : true,
          // },
          slots: [
            'PreHeader',
            'SiteLogo',
            'SearchBox',
            'MiniCart'],
        },
        navigation: {
          // lg: {
          //   slots: [
          //     'SiteContext',
          //     'SiteLinks'
          //   ],
          //   hidden : true,
          // },
          slots: [
            'SiteLogin',
            'NavigationBar',
          ],
        },
        footer: {
          slots: ['Footer'],
        },
        LandingPage2Template: {
          pageFold: 'Section2B',
          slots: [
            'Section1',
            'Section2A',
            'Section2B',
            'Section2C',
            'Section3',
            'Section4',
            'Section5',
          ],
        },
        ContentPage1Template: {
          slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
          pageFold: 'Section2',
          slots: ['Section1', 'Section2', 'Section3'],
        },
        ProductListPageTemplate: {
          slots: ['ProductLeftRefinements', 'ProductListSlot'],
        },
        ProductGridPageTemplate: {
          slots: ['ProductLeftRefinements', 'ProductGridSlot'],
        },
        SearchResultsListPageTemplate: {
          slots: [
            'Section2',
            'ProductLeftRefinements',
            'SearchResultsListSlot',
            'Section4',
          ],
        },
        SearchResultsGridPageTemplate: {
          slots: [
            'Section2',
            'ProductLeftRefinements',
            'SearchResultsGridSlot',
            'Section4',
          ],
        },
        ProductDetailsPageTemplate: {
          lg: {
            pageFold: 'UpSelling',
          },
          pageFold: 'Summary',
          slots: [
            'Summary',
            'UpSelling',
            'CrossSelling',
            'Tabs',
            'PlaceholderContentSlot',
          ],
        },
        CartPageTemplate: {
          slots: [
            'TopContent',
            'CenterRightContentSlot',
            'EmptyCartMiddleContent',
          ],
        },
        AccountPageTemplate: {
          slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
          slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
          slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
          slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
          slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
        CheckoutLoginPageTemplate: {
          slots: ['RightContentSlot'],
        },
      },
    } as LayoutConfig),
  ],
})
export class LayoutModule {}

