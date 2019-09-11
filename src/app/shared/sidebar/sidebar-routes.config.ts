import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Produto',  icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/produto/', title: 'Lista', icon: 'list', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/produto/cadastro', title: 'Cadastro', icon: 'plus-square', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]},
    {
        path: '', title: 'Estoque',  icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/estoque/', title: 'Lista', icon: 'list', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/estoque/cadastro', title: 'Cadastro', icon: 'plus-square', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]},
    
    
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
