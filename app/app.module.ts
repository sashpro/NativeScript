import { NgModule, APP_INITIALIZER }                  from '@angular/core';
import { DatePipe }                                   from '@angular/common';
import { FormsModule }                                from '@angular/forms';
import { ReactiveFormsModule }                        from '@angular/forms';
import { FlexLayoutModule }                           from '@angular/flex-layout';
import { HttpModule, JsonpModule }                    from '@angular/http';
import { XSRFStrategy, CookieXSRFStrategy }           from '@angular/http';
import { BrowserModule }                              from '@angular/platform-browser';
import { RouterModule }                               from '@angular/router';
import { CookieService }                              from 'angular2-cookie/core';
import { NvD3Module }                                 from 'ng2-nvd3';
import { Select2Module }                              from 'ng2-select2';
import { ModalModule }                                from 'ngx-bootstrap';
import { ClipboardModule }                            from 'ngx-clipboard';
import { OrderModule }                                from 'ngx-order-pipe';
import 'd3';
import 'nvd3';

import { AccountsComponent }                          from './accounts/accounts.component';
import { AccountsAddWalletComponent }                 from './accounts-add-wallet/accounts-add-wallet.component';
import { AccountsDeleteComponent }                    from './accounts-delete/accounts-delete.component';
import { AccountsDepositComponent }                   from './accounts-deposit/accounts-deposit.component';
import { AccountsDepositUSDComponent }                from './accounts-deposit-usd/accounts-deposit-usd.component';
import { AccountsHistoryComponent }                   from './accounts-history/accounts-history.component';
import { AccountsNavigationBarComponent }             from './accounts-navigation-bar/accounts-navigation-bar.component';
import { AccountsRenameComponent }                    from './accounts-rename/accounts-rename.component';
import { AccountsTransferComponent }                  from './accounts-transfer/accounts-transfer.component';
import { AccountsWithdrawComponent }                  from './accounts-withdraw/accounts-withdraw.component';
import { AccountsWithdrawUSDComponent }               from './accounts-withdraw-usd/accounts-withdraw-usd.component';
import { AppComponent }                               from './app.component';
import { AdminApproveComponent }                      from './admin-approve/admin-approve.component';
import { AdminLogsComponent }                         from './admin-logs/admin-logs.component';
import { AdminNavigationBarComponent }                from './admin-navigation-bar/admin-navigation-bar.component';
import { AdminRatesFeesComponent }                    from './admin-rates-fees/admin-rates-fees.component';
import { AdminFeesComponent }                         from './admin-rates-fees-fees/admin-rates-fees-fees.component';
import { AdminRatesComponent }                        from './admin-rates-fees-rates/admin-rates-fees-rates.component';
import { AdminUserInfoComponent }                     from './admin-user-information/admin-user-information.component';
import { AdminUsersComponent }                        from './admin-users/admin-users.component';
import { AdminUsersInformationComponent }             from './admin-users-information/admin-users-information.component';
import { AdminUsersNavigationBarComponent }           from './admin-users-navigation-bar/admin-users-navigation-bar.component';
import { AdminUsersTransactionsComponent }            from './admin-users-transactions/admin-users-transactions.component';
import { AdminUsersWalletsComponent }                 from './admin-users-wallets/admin-users-wallets.component';
import { AutoLogoutComponent }                        from './auto-logout/auto-logout.component';
import { BuySellComponent }                           from './buy-sell/buy-sell.component';
import { BuySellBuyComponent }                        from './buy-sell-buy/buy-sell-buy.component';
import { BuySellOperationSummaryBuyComponent }        from './buy-sell-operation-summary-buy/buy-sell-operation-summary-buy.component';
import { BuySellOperationSummarySellComponent }       from './buy-sell-operation-summary-sell/buy-sell-operation-summary-sell.component';
import { BuySellSellComponent }                       from './buy-sell-sell/buy-sell-sell.component';
import { DashboardComponent }                         from './dashboard/dashboard.component';
import { FailPageComponent }                          from './fail-page/fail-page.component';
import { FooterComponent }                            from './footer/footer.component';
import { NavigationBarComponent }                     from './navigation-bar/navigation-bar.component';
import { NotFoundComponent }                          from './not-found/not-found.component';
import { ResetPasswordComponent }                     from './reset-password/reset-password.component';
import { ResetPasswordConfirmComponent }              from './reset-password-confirm/reset-password-confirm.component';
import { SendEmailComponent }                         from './send-email/send-email.component';
import { SendRequestComponent }                       from './send-request/send-request.component';
import { SendRequestRequestComponent }                from './send-request-request/send-request-request.component';
import { SendRequestSendComponent }                   from './send-request-send/send-request-send.component';
import { SendNoUserComponent }                        from './send-request-send-no-user/send-request-send-no-user.component';
import { ServerDownPageComponent }                    from './server-down-page/server-down-page.component';
import { SettingsPageComponent }                      from './settings-page/settings-page.component';
import { SettingsProfileComponent }                   from './settings-profile/settings-profile.component';
import { SettingsProfileChangePasswordComponent }     from './settings-profile-change-password/settings-profile-change-password.component';
import { SettingsProfilePersonalDetailsComponent }    from './settings-profile-personal-details/settings-profile-personal-details.component';
import { SettingsProfileUserProfileComponent }        from './settings-profile-user-profile/settings-profile-user-profile.component';
import { SettingsSecurityComponent }                  from './settings-security/settings-security.component';
import { SettingsSecurityAuthenticatorComponent }     from './settings-security-authenticator/settings-security-authenticator.component';
import { SettingsSecurityChangePhoneNumberComponent } from './settings-security-change-phone-number/settings-security-change-phone-number.component';
import { SettingsSecurityPhoneNumberComponent }       from './settings-security-phone-number/settings-security-phone-number.component';
import { SettingsSecurityTwoFactorAuthComponent }     from './settings-security-two-factor-authentication/settings-security-two-factor-authentication.component';
import { SignInComponent }                            from './sign-in/sign-in.component';
import { SignUpComponent }                            from './sign-up/sign-up.component';
import { SignUpSecondStepComponent }                  from './sign-up-second-step/sign-up-second-step.component';
import { StartPageComponent }                         from './start-page/start-page.component';
import { StartPageGetStartedComponent }               from './start-page-get-started/start-page-get-started.component';
import { SuccessPageComponent }                       from './success-page/success-page.component';

import { appRoutes }                                  from './app.routes';

import { AuthManagerGuard }                           from './_guards/index';
import { AuthUserGuard }                              from './_guards/index';
import { FailGuard }                                  from './_guards/index';

import { AdminService }                               from './_services/index';
import { ApiService }                                 from './_services/index';
import { ApproveService }                             from './_services/index';
import { AuthenticationService }                      from './_services/index';
import { BuySellService }                             from './_services/index';
import { GlobalStorageService }                       from './_services/index';
import { RateFeeService }                             from './_services/index';
import { SendRequestService }                         from './_services/index';
import { TwoFactorAuthenticationService }             from './_services/index';
import { UserService }                                from './_services/index';
import { WalletService }                              from './_services/index';

import { CurrencyFormat }                             from './_pipes/index';
import { PhoneFormat }                                from './_pipes/index';

export function xsrfFactory() {
    return new CookieXSRFStrategy('RESPONSE_TOKEN', 'RESPONSE_TOKEN');
}

export function strtupServiceFactory(startupService: GlobalStorageService): Function {
    return () => startupService.loadInitialData();
}

@NgModule({
    imports:         [ BrowserModule,
                       ClipboardModule,
                       FormsModule,
                       FlexLayoutModule,
                       HttpModule,
                       JsonpModule,
                       ModalModule.forRoot(),
                       NvD3Module,
                       OrderModule,
                       Select2Module,
                       ReactiveFormsModule,
                       RouterModule.forRoot(appRoutes) ],

    declarations:    [ AccountsComponent,
                       AccountsAddWalletComponent,
                       AccountsDeleteComponent,
                       AccountsDepositComponent,
                       AccountsDepositUSDComponent,
                       AccountsHistoryComponent,
                       AccountsNavigationBarComponent,
                       AccountsRenameComponent,
                       AccountsTransferComponent,
                       AccountsWithdrawComponent,
                       AccountsWithdrawUSDComponent,
                       AdminApproveComponent,
                       AdminLogsComponent,
                       AdminNavigationBarComponent,
                       AdminRatesFeesComponent,
                       AdminFeesComponent,
                       AdminRatesComponent,
                       AdminUserInfoComponent,
                       AdminUsersComponent,
                       AdminUsersInformationComponent,
                       AdminUsersNavigationBarComponent,
                       AdminUsersTransactionsComponent,
                       AdminUsersWalletsComponent,
                       AppComponent,
                       AutoLogoutComponent,
                       BuySellComponent,
                       BuySellBuyComponent,
                       BuySellOperationSummaryBuyComponent,
                       BuySellOperationSummarySellComponent,
                       BuySellSellComponent,
                       DashboardComponent,
                       FailPageComponent,
                       FooterComponent,
                       NavigationBarComponent,
                       NotFoundComponent,
                       ResetPasswordComponent,
                       ResetPasswordConfirmComponent,
                       SendEmailComponent,
                       SendRequestComponent,
                       SendRequestRequestComponent,
                       SendRequestSendComponent,
                       SendNoUserComponent,
                       ServerDownPageComponent,
                       SettingsPageComponent,
                       SettingsProfileComponent,
                       SettingsProfileChangePasswordComponent,
                       SettingsProfilePersonalDetailsComponent,
                       SettingsProfileUserProfileComponent,
                       SettingsSecurityComponent,
                       SettingsSecurityAuthenticatorComponent,
                       SettingsSecurityChangePhoneNumberComponent,
                       SettingsSecurityPhoneNumberComponent,
                       SettingsSecurityTwoFactorAuthComponent,
                       SignInComponent,
                       SignUpComponent,
                       SignUpSecondStepComponent,
                       StartPageComponent,
                       StartPageGetStartedComponent,
                       SuccessPageComponent,
                       CurrencyFormat,
                       PhoneFormat ],

    entryComponents: [ AccountsAddWalletComponent,
                       AccountsDepositComponent,
                       AccountsDepositUSDComponent,
                       AccountsWithdrawComponent,
                       AccountsWithdrawUSDComponent,
                       AdminUserInfoComponent,
                       AutoLogoutComponent,
                       ResetPasswordComponent,
                       SendEmailComponent,
                       SendNoUserComponent,
                       SettingsProfileChangePasswordComponent,
                       SettingsSecurityChangePhoneNumberComponent,
                       SettingsSecurityAuthenticatorComponent,
                       SignInComponent,
                       SignUpSecondStepComponent ],

    providers:       [ { provide: XSRFStrategy,
                         useFactory: xsrfFactory },
                       { provide: APP_INITIALIZER,
                         useFactory: strtupServiceFactory,
                         deps: [GlobalStorageService],
                         multi: true },
                       AdminService,
                       ApiService,
                       ApproveService,
                       AuthenticationService,
                       AuthManagerGuard,
                       AuthUserGuard,
                       BuySellService,
                       CookieService,
                       DatePipe,
                       FailGuard,
                       GlobalStorageService,
                       RateFeeService,
                       TwoFactorAuthenticationService,
                       SendRequestService,
                       UserService,
                       WalletService ],

    bootstrap:       [ AppComponent ],
})
export class AppModule {}
