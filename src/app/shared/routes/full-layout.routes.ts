import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('../../modules/categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('../../modules/produto/produto.module').then(m => m.ProdutoModule)
  }, 
  {
    path: 'produto-cadastro',
    loadChildren: () => import('../../modules/produto/produto-cadastro/produto-cadastro.component')
  },
  {
    path: 'estoque',
    loadChildren: () => import('../../modules/estoque/estoque.module').then(m => m.EstoqueModule)
  }
  // , 
  // {
  //   path: 'carrinho',
  //   loadChildren: () => import('../../modules/carrinho/carrinho.module').then(m => m.FinancaModule)
  // }
];
