import { Routes, RouterModule, RouterLinkActive }     from '@angular/router';
import { ModuleWithProviders }                        from '@angular/core';

import { AccountsComponent }                          from './accounts/accounts.component';
import { AccountsDeleteComponent }                    from './accounts-delete/accounts-delete.component';
import { AccountsHistoryComponent }                   from './accounts-history/accounts-history.component';
import { AccountsNavigationBarComponent }             from './accounts-navigation-bar/accounts-navigation-bar.component';
import { AccountsRenameComponent }                    from './accounts-rename/accounts-rename.component';
import { AccountsTransferComponent }                  from './accounts-transfer/accounts-transfer.component';
import { AdminApproveComponent }                      from './admin-approve/admin-approve.component';
import { AdminLogsComponent }                         from './admin-logs/admin-logs.component';
import { AdminRatesFeesComponent }                    from './admin-rates-fees/admin-rates-fees.component';
import { AdminUsersComponent }                        from './admin-users/admin-users.component';
import { AdminUsersInformationComponent }             from './admin-users-information/admin-users-information.component';
import { AdminUsersNavigationBarComponent }           from './admin-users-navigation-bar/admin-users-navigation-bar.component';
import { AdminUsersTransactionsComponent }            from './admin-users-transactions/admin-users-transactions.component';
import { AdminUsersWalletsComponent }                 from './admin-users-wallets/admin-users-wallets.component';
import { BuySellComponent }                           from './buy-sell/buy-sell.component';
import { BuySellBuyComponent }                        from './buy-sell-buy/buy-sell-buy.component';
import { BuySellSellComponent }                       from './buy-sell-sell/buy-sell-sell.component';
import { DashboardComponent }                         from './dashboard/dashboard.component';
import { FailPageComponent }                          from './fail-page/fail-page.component';
import { NotFoundComponent }                          from './not-found/not-found.component';
import { ResetPasswordConfirmComponent }              from './reset-password-confirm/reset-password-confirm.component';
import { SendRequestComponent }                       from './send-request/send-request.component';
import { SendRequestRequestComponent }                from './send-request-request/send-request-request.component';
import { SendRequestSendComponent }                   from './send-request-send/send-request-send.component';
import { ServerDownPageComponent }                    from './server-down-page/server-down-page.component';
import { SettingsPageComponent }                      from './settings-page/settings-page.component';
import { SettingsProfileComponent }                   from './settings-profile/settings-profile.component';
import { SettingsSecurityComponent }                  from './settings-security/settings-security.component';
import { SignUpComponent }                            from './sign-up/sign-up.component';
import { StartPageComponent }                         from './start-page/start-page.component';
import { SuccessPageComponent }                       from './success-page/success-page.component';

import { AuthManagerGuard ,AuthUserGuard, FailGuard } from './_guards/index';


const accountsRoutes: Routes =[
    { path: '',             component: AccountsHistoryComponent },
    { path: 'delete/:id',   component: AccountsDeleteComponent },
    { path: 'rename/:id',   component: AccountsRenameComponent },
    { path: 'transfer/:id', component: AccountsTransferComponent }
];

const accountRoutes: Routes =[
    { path: ':id',      component: AccountsNavigationBarComponent, children: accountsRoutes },
];

const buySellRoutes: Routes =[
    { path: 'buy',  component: BuySellBuyComponent },
    { path: 'sell', component: BuySellSellComponent },
    { path: '',     redirectTo: '/buy-sell/buy', pathMatch: 'full' }
];

const sendRequestRoutes: Routes =[
    { path: 'send',    component: SendRequestSendComponent },
    { path: 'request', component: SendRequestRequestComponent },
    { path: '',        redirectTo: '/send-request/send', pathMatch: 'full' }
];

const settingsRoutes: Routes =[
    { path: 'profile',  component: SettingsProfileComponent },
    { path: 'security', component: SettingsSecurityComponent },
    { path: '',         redirectTo: '/settings/profile', pathMatch: 'full' }
];

const usersRoutes: Routes =[
    { path: 'information/:id',  component: AdminUsersInformationComponent },
    { path: 'wallets/:id',      component: AdminUsersWalletsComponent },
    { path: 'transactions/:id', component: AdminUsersTransactionsComponent }
];

const userRoutes: Routes =[
    { path: ':id',      component: AdminUsersNavigationBarComponent, children: usersRoutes },
];

export const appRoutes: Routes =[
    { path: '',                           component: StartPageComponent },
    { path: 'accounts',                   component: AccountsComponent,       children: accountRoutes,     canActivate: [AuthUserGuard] },
    { path: 'approve',                    component: AdminApproveComponent,                                canActivate: [AuthManagerGuard] },
    { path: 'users',                      component: AdminUsersComponent,     children: userRoutes,        canActivate: [AuthManagerGuard] },
    { path: 'buy-sell',                   component: BuySellComponent,        children: buySellRoutes,     canActivate: [AuthUserGuard] },
    { path: 'dashboard',                  component: DashboardComponent,                                   canActivate: [AuthUserGuard] },
    { path: 'fail',                       component: FailPageComponent,                                    canActivate: [AuthUserGuard] },
    { path: 'logs',                       component: AdminLogsComponent,                                   canActivate: [AuthManagerGuard] },
    { path: 'rates-fees',                 component: AdminRatesFeesComponent,                              canActivate: [AuthManagerGuard] },
    { path: 'reset-password/:uid/:token', component: ResetPasswordConfirmComponent },
    { path: 'send-request',               component: SendRequestComponent,    children: sendRequestRoutes, canActivate: [AuthUserGuard] },
    { path: 'server-down',                component: ServerDownPageComponent,                              canActivate: [FailGuard] },
    { path: 'settings',                   component: SettingsPageComponent,   children: settingsRoutes,    canActivate: [AuthUserGuard] },
    { path: 'sign-up',                    component: SignUpComponent },
    { path: 'success',                    component: SuccessPageComponent,                                 canActivate: [AuthUserGuard] },
    { path: '**',                         component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
